"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlog } from "@/hooks/use-blog";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { Calendar, AlertCircle } from "lucide-react";
import CTASection from "@/components/home/CTASection";

interface BlogDetailProps {
  slug: string;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  const { data: blog, isLoading, error } = useBlog(slug);

  const defaultImage =
    "https://images.unsplash.com/photo-1492538368677-f6e0ac4024a1?w=800&h=600&fit=crop";

  /* ------------------ Loading State ------------------ */
  if (isLoading) {
    return (
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Skeleton className="h-6 w-32 mb-8" />
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-6" />
          </div>
          <Skeleton className="w-full h-64 md:h-96 rounded-lg mb-12" />
          <div className="max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  /* ------------------ Error State ------------------ */
  if (error || !blog) {
    return (
      <div className="bg-background min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Alert variant="destructive" className="max-w-xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error?.message ||
                "Could not load blog post details. Please try again."}
            </AlertDescription>
            <div className="mt-4">
              <Link href="/blog" className="text-primary underline">
                Go Back to Blog
              </Link>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  /* ------------------ Main UI (Clean Blog Detail) ------------------ */
  return (
    <>
    <div className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4 md:px-8 mb-12">

        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 font-medium">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 font-medium">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium text-center line-clamp-1">
              {blog.title}
            </li>
          </ol>
        </nav>

        {/* Title + Date */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold text-gray-900 leading-[1.15] mb-4">
            {blog.title}
          </h1>

          <div className="text-sm text-gray-500 flex justify-center items-center gap-2">
            <Calendar className="w-4 h-4" />
            {format(new Date(blog.created_at), "MMM d, yyyy")}
          </div>
        </div>

        {/* Main Thumbnail */}
        {blog.thumbnail_image && (
          <div className="rounded-3xl overflow-hidden h-[300px] md:h-[450px] w-full shadow-lg mb-10">
            <Image
              src={blog.thumbnail_image || defaultImage}
              alt={blog.thumbnail_image_alt_description || blog.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        {/* Markdown Content */}
        <div className="max-w-4xl mx-auto space-y-6 prose prose-lg prose-gray">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-6 space-y-2 text-gray-700 mb-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">
                  {children}
                </strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <span className="block my-8 w-full">
                  <Image
                    src={(src as string) || ""}
                    alt={alt || ""}
                    width={1200}
                    height={600}
                    className="rounded-md object-contain mx-auto"
                  />
                </span>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
    <CTASection/>
    </>
  );
};
