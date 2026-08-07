const GRAPHQL_ENDPOINT = "https://post.maogeo.top/graphql";

export interface WPCategory {
  name: string;
  slug: string;
  count?: number;
}

export interface WPTag {
  name: string;
  slug: string;
  count?: number;
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;
  isSticky?: boolean;
  categories?: {
    nodes: WPCategory[];
  };
  tags?: {
    nodes: WPTag[];
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface PaginatedPosts {
  posts: WPPost[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string | null;
    startCursor: string | null;
  };
}

/**
 * 通用 GraphQL 请求函数
 */
export async function fetchAPI(query: string, variables: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

/**
 * 获取最新的所有分类
 */
export async function getAllCategories(): Promise<WPCategory[]> {
  try {
    const data = await fetchAPI(`
      query GetAllCategories {
        categories(first: 20, where: { hideEmpty: true }) {
          nodes {
            name
            slug
            count
          }
        }
      }
    `);
    return data.categories.nodes;
  } catch (e) {
    console.error("Error fetching categories:", e);
    return [];
  }
}

/**
 * 获取最新的所有标签
 */
export async function getAllTags(): Promise<WPTag[]> {
  try {
    const data = await fetchAPI(`
      query GetAllTags {
        tags(first: 20, where: { hideEmpty: true }) {
          nodes {
            name
            slug
            count
          }
        }
      }
    `);
    return data.tags.nodes;
  } catch (e) {
    console.error("Error fetching tags:", e);
    return [];
  }
}

/**
 * 分页获取文章列表，全面支持分类过滤、标签过滤、搜索和翻游标
 */
export async function getPaginatedPosts({
  first = 10,
  after = null,
  last = null,
  before = null,
  query = "",
  categorySlug = "",
  tagSlug = "",
}: {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  query?: string;
  categorySlug?: string;
  tagSlug?: string;
}): Promise<PaginatedPosts> {
  try {
    const filters: string[] = [];
    if (query && query.trim().length > 0) {
      filters.push(`search: "${query}"`);
    }
    if (categorySlug && categorySlug.trim().length > 0) {
      filters.push(`categoryName: "${categorySlug}"`);
    }
    if (tagSlug && tagSlug.trim().length > 0) {
      filters.push(`tag: "${tagSlug}"`);
    }
    
    const whereClause = filters.length > 0 ? `, where: { ${filters.join(', ')} }` : '';
    
    let args = '';
    if (before) {
      // 🌟 向上翻页：必须只使用 last 和 before，切勿混入 first
      args = `last: ${last || 10}, before: "${before}"`;
    } else if (after) {
      // 🌟 向下翻页：必须只使用 first 和 after
      args = `first: ${first || 10}, after: "${after}"`;
    } else {
      // 🌟 默认第一页：使用 first
      args = `first: ${first || 10}`;
    }
    
    const data = await fetchAPI(`
      query GetPaginatedPosts {
        posts(${args} ${whereClause}) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
          nodes {
            id
            title
            slug
            date
            excerpt
            content
            isSticky
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
              nodes {
                name
                slug
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);

    // 🌟 无特色图片降级解析：若未设置特色图片，自动提取正文 content 第一张真正内容插图（支持代理API图片，严厉排除头像名片）
    const processedNodes = data.posts.nodes.map((post: WPPost) => {
      if (!post.featuredImage?.node?.sourceUrl && post.content) {
        // 全局匹配所有 img src
        const imgMatches = Array.from(post.content.matchAll(/<img\s+[^>]*?src=["']([^"']+)["']/gi));
        for (const match of imgMatches) {
          let rawUrl = match[1];
          // 如果是 /api/img-proxy 代理格式，还原出原始 target URL
          if (rawUrl.includes("/api/img-proxy") && rawUrl.includes("url=")) {
            try {
              const urlObj = new URL(rawUrl, "https://maogeo.top");
              const paramUrl = urlObj.searchParams.get("url");
              if (paramUrl) rawUrl = paramUrl;
            } catch {
              // ignore URL parse error
            }
          }

          // 严格避开猫哥头像、微信名片头像、组件 Icon 等干扰图
          const lowerUrl = rawUrl.toLowerCase();
          if (
            !lowerUrl.includes("20260721002037295") &&
            !lowerUrl.includes("avatar") &&
            !lowerUrl.includes("author") &&
            !lowerUrl.includes("head") &&
            !lowerUrl.includes("profile") &&
            !lowerUrl.includes("qrcode") &&
            !lowerUrl.includes("51.la") &&
            !lowerUrl.includes("logo")
          ) {
            return {
              ...post,
              featuredImage: {
                node: {
                  sourceUrl: rawUrl
                }
              }
            };
          }
        }
      }
      return post;
    });
    
    return {
      posts: processedNodes,
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error("Error fetching paginated posts:", error);
    return {
      posts: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        endCursor: null,
        startCursor: null,
      },
    };
  }
}

/**
 * 根据 Slug 获取指定文章的详情
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const data = await fetchAPI(`
      query GetPostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          id
          title
          slug
          date
          content
          isSticky
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `, { id: slug });
    return data.post;
  } catch (error) {
    console.error(`Error fetching post by slug "${slug}":`, error);
    return null;
  }
}

/**
 * 获取相关文章推荐
 */
export async function getRelatedPosts(categorySlug: string, excludeId: string, limit = 3): Promise<WPPost[]> {
  try {
    const data = await getPaginatedPosts({ first: limit + 1, categorySlug });
    return data.posts.filter(p => p.id !== excludeId).slice(0, limit);
  } catch (e) {
    console.error("Error fetching related posts:", e);
    return [];
  }
}
