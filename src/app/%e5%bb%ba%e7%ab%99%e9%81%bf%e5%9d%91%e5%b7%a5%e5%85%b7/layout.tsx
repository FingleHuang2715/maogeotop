import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "建站避坑工具正在开发中 | 猫哥建站",
  description: "外贸建站避坑自测与服务商防踩雷系统正在全力升级开发中，敬请期待！",
  robots: {
    index: false, // 暂未开发完成：防止谷歌与搜索引擎收录
    follow: true,
  },
};

export default function AuditToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
