const fs = require('fs');
const path = require('path');

const GRAPHQL_ENDPOINT = "https://post.maogeo.top/graphql";

async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  return json.data;
}

async function generate() {
  console.log("Generating public/sitemap-index.xml and public/sitemap.xml for ALL posts...");
  const baseUrl = "https://maogeo.top";
  const now = new Date().toISOString();

  const staticPages = [
    { loc: `${baseUrl}`, priority: "1.0", changefreq: "daily", lastmod: now },
    { loc: `${baseUrl}/waimaojianzhan`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/geo-tools`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/geo-seo-youhua`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/server-recommendation`, priority: "0.8", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/blog`, priority: "0.9", changefreq: "daily", lastmod: now },
    { loc: `${baseUrl}/privacy-policy`, priority: "0.3", changefreq: "monthly", lastmod: now },
    { loc: `${baseUrl}/terms-of-service`, priority: "0.3", changefreq: "monthly", lastmod: now },
    { loc: `${baseUrl}/sitemap`, priority: "0.5", changefreq: "weekly", lastmod: now },
  ];

  let postPages = [];
  try {
    let hasNextPage = true;
    let afterCursor = null;

    while (hasNextPage) {
      const query = `
        query GetSitemapPosts($after: String) {
          posts(first: 100, after: $after, where: { status: PUBLISH }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              slug
              date
            }
          }
        }
      `;

      const data = await fetchGraphQL(query, { after: afterCursor });
      if (data && data.posts && data.posts.nodes) {
        const batch = data.posts.nodes.map(p => ({
          loc: `${baseUrl}/blog/${p.slug}`,
          priority: "0.8",
          changefreq: "weekly",
          lastmod: p.date ? new Date(p.date).toISOString() : now,
        }));
        postPages.push(...batch);
        console.log(`Fetched batch: +${batch.length}, total blog posts so far: ${postPages.length}`);
        hasNextPage = Boolean(data.posts.pageInfo?.hasNextPage);
        afterCursor = data.posts.pageInfo?.endCursor || null;
      } else {
        break;
      }
    }
  } catch (err) {
    console.warn("Failed to fetch posts from GraphQL, using static pages only:", err.message);
  }

  const allPages = [...staticPages, ...postPages];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  const publicDir = path.join(__dirname, "..", "public");
  fs.writeFileSync(path.join(publicDir, "sitemap-index.xml"), xmlContent, "utf8");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xmlContent, "utf8");
  console.log(`\n🎉 Successfully generated public/sitemap-index.xml & public/sitemap.xml with ${allPages.length} TOTAL URLs (including ${postPages.length} blog posts)!`);
}

generate();
