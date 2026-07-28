export async function GET() {
  // 重定向至 CDN 上的标准 512x512 图标资源
  return Response.redirect("https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp", 301);
}
