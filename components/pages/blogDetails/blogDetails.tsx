"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlog, useBlogs } from "@/hooks/use-blog";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  AlertCircle,
  User,
} from "lucide-react";
import { motion, Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface BlogDetailProps {
  slug: string;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  const { data: blog, isLoading, error } = useBlog(slug);

  // Fetch recent blogs for the "Related Articles" section
  // improved logic: filter out the current blog client-side or use a specific API if available
  const { data: recentBlogsData } = useBlogs({
    page_size: 3, // Fetch a few to filter
    ordering: "-created_at",
    is_published: true,
  });

  const relatedPosts =
    recentBlogsData?.results
      .filter((p) => p.slug !== slug)
      .slice(0, 2) || [];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = blog?.title || "";

  // Loading State
  if (isLoading) {
    return (
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-12 md:py-16">
           <Skeleton className="h-6 w-32 mb-8" /> {/* Back link */}
           <div className="max-w-3xl mx-auto">
             <Skeleton className="h-4 w-24 mb-4" /> {/* Category */}
             <Skeleton className="h-12 w-3/4 mb-6" /> {/* Title */}
             <div className="flex gap-4 mb-12">
               <Skeleton className="h-4 w-24" />
               <Skeleton className="h-4 w-24" />
             </div>
           </div>
           <Skeleton className="w-full h-64 md:h-96 rounded-lg mb-12" /> {/* Image */}
           <div className="max-w-3xl mx-auto space-y-4">
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-5/6" />
           </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !blog) {
    return (
      <div className="bg-background min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Alert variant="destructive" className="max-w-xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error?.message || "Could not load blog post details. Please try again."}
            </AlertDescription>
            <div className="mt-4">
                <Link href="/blog">
                    <Button variant="outline" size="sm">Back to Blog</Button>
                </Link>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  const defaultImage = "https://images.unsplash.com/photo-1492538368677-f6e0ac4024a1?w=800&h=600&fit=crop";

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <article className="bg-background">
        <header className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-3">
                {blog.tags && blog.tags.length > 0 ? (
                    blog.tags.map(tag => (
                        <span key={tag.id} className="text-primary text-sm font-medium">
                            {tag.name}
                        </span>
                    ))
                ) : (
                    <span className="text-primary text-sm font-medium">Article</span>
                )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 tracking-tight text-foreground">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {blog.author?.username || "Admin"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {format(new Date(blog.created_at), "MMM d, yyyy")}
              </span>
              {blog.time_to_read && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {blog.time_to_read}
                    </span>
                  </>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mb-8 relative z-10">
          <div className="relative -mt-8 md:-mt-12 aspect-video w-full">
            <Image
              src={blog.thumbnail_image || defaultImage}
              alt={blog.thumbnail_image_alt_description || blog.title}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="py-12 md:py-16 pt-16 md:pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                     <h1 className="text-3xl font-bold mt-10 mb-4 text-foreground">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-muted-foreground">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border border-border">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border px-4 py-2 text-muted-foreground">{children}</td>
                  ),
                  blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">{children}</blockquote>
                  ),
                  a: ({ children, href }) => (
                      <a href={href} className="text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">{children}</a>
                  ),
                  img: ({src, alt}) => (
                      <span className="block my-8 relative w-full h-[400px]">
                          <Image src={(src as string) || ""} alt={alt || ""} fill className="object-contain rounded-md" />
                      </span>
                  )
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="w-4 h-4" /> Share this article
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <motion.section 
          className="py-12 md:py-16 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <article className="flex gap-4 p-4">
                    <div className="w-32 h-24 shrink-0 overflow-hidden rounded-md relative">
                      <Image
                        src={relatedPost.thumbnail_image || defaultImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-1">
                          {relatedPost.tags?.slice(0, 1).map(tag => (
                             <span key={tag.id} className="text-primary text-xs font-medium">
                                {tag.name}
                             </span>
                          ))}
                      </div>
                      <h3 className="font-semibold text-base mt-1 line-clamp-2 group-hover:text-primary transition-colors text-foreground">
                        {relatedPost.title}
                      </h3>
                      <span className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                         {format(new Date(relatedPost.created_at), "MMM d, yyyy")}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-24 bg-background overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 md:p-12 lg:p-16 text-primary-foreground">
                <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Free Consultation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Ready to Start Your<br />Study Abroad Journey?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                  Get personalized guidance from our expert counselors. We&apos;ve helped 2,000+ students achieve their dreams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" size="lg"  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8">
                    <a href="tel:+9771234567890">
                      <Phone className="mr-2 w-4 h-4" /> Call Now
                    </a>
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
                  <div>
                    <div className="text-2xl font-bold">2,000+</div>
                    <div className="text-sm text-primary-foreground/70">Students Placed</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-primary-foreground/70">Visa Success</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm text-primary-foreground/70">Countries</div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="hidden lg:block relative h-full min-h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                  alt="Students celebrating graduation"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
