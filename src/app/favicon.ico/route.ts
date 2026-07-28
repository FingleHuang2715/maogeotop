import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // 优先从 public 目录读取本地原生 favicon.ico
    const icoPath = path.join(process.cwd(), "public", "favicon.ico");
    
    if (fs.existsSync(icoPath)) {
      const buffer = fs.readFileSync(icoPath);
      return new Response(buffer, {
        headers: {
          "Content-Type": "image/x-icon",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    }
  } catch (error) {
    console.error("Error reading favicon.ico:", error);
  }

  // 兜底返回 204 No Content，避免报错 404 影响 GSC 抓取
  return new Response(null, { status: 204 });
}
