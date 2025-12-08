import { BlogDetail } from "@/components/pages/blogDetails/blogDetails";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
