import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    slug: "complete-guide-studying-australia-2024",
    title: "Complete Guide to Studying in Australia 2024",
    excerpt: "Everything you need to know about studying in Australia - from visa requirements to cost of living and top universities.",
    category: "Study Guide",
    author: "Brainstorm Team",
    date: "December 5, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    slug: "ielts-vs-pte-which-test-right-for-you",
    title: "IELTS vs PTE: Which English Test is Right for You?",
    excerpt: "A comprehensive comparison of IELTS and PTE to help you decide which English proficiency test suits your needs.",
    category: "Test Prep",
    author: "Brainstorm Team",
    date: "December 3, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "top-scholarships-nepali-students-2024",
    title: "Top Scholarships for Nepali Students in 2024",
    excerpt: "Discover the best scholarship opportunities available for Nepali students planning to study abroad.",
    category: "Scholarships",
    author: "Brainstorm Team",
    date: "November 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    slug: "student-visa-interview-tips",
    title: "How to Ace Your Student Visa Interview",
    excerpt: "Expert tips and common questions to help you prepare for your student visa interview.",
    category: "Visa Guide",
    author: "Brainstorm Team",
    date: "November 25, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    slug: "cost-of-living-uk-students",
    title: "Cost of Living in the UK for International Students",
    excerpt: "A detailed breakdown of living expenses in the UK to help you budget for your studies.",
    category: "Study Guide",
    author: "Brainstorm Team",
    date: "November 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    slug: "canada-post-study-work-permit",
    title: "Canada Post-Study Work Permit: Complete Guide",
    excerpt: "Learn about Canada's PGWP program and how to extend your stay after graduation.",
    category: "Immigration",
    author: "Brainstorm Team",
    date: "November 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Study Guide", "Test Prep", "Scholarships", "Visa Guide", "Immigration"];

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-1 text-sm font-medium rounded mb-4">
              Resources & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Study Abroad Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you navigate your 
              international education journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded">
                Featured
              </span>
            </div>
            <div>
              <span className="inline-block text-secondary-foreground px-3 py-1 text-xs font-medium rounded mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {blogPosts[0].readTime}
                </span>
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-md transition-all"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 text-xs font-medium rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Study Abroad Tips
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest guides, 
            scholarship updates, and visa tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      </>
    );
};

export default Blog;
