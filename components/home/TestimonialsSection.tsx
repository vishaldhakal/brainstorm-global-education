"use client";

import React from "react";
import { Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/use-testimonial";
import { Testimonial } from "@/types/testimonial";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const TestimonialsSection = () => {
    const { data: testimonials, isLoading } = useTestimonials();
    
    // Fallback/Loading UI
    if (isLoading) {
        return (
            <section className="py-16 md:py-24 bg-background">
                 <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
                    <Skeleton className="h-6 w-32 mx-auto mb-4" />
                    <Skeleton className="h-10 w-64 mx-auto mb-4" />
                    <Skeleton className="h-4 w-96 mx-auto" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 rounded-xl border border-border p-6 space-y-4">
                            <Skeleton className="h-8 w-8" />
                            <Skeleton className="h-20 w-full" />
                            <div className="flex gap-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-3 w-32" />
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </section>
        )
    }

  const validTestimonials = testimonials || [];
  
  // Duplicate testimonials for seamless loop if we have enough
  // If we don't have enough, we might want to duplicate them more times or handle it differently
  const duplicatedTestimonials = validTestimonials.length > 0 
    ? [...validTestimonials, ...validTestimonials, ...validTestimonials, ...validTestimonials] 
    : [];

  // Split logic needs to be safe if no testimonials
  if (validTestimonials.length === 0) {
      return null; // Or return a "No testimonials yet" state
  }


  // If we have 8 items, 2x = 16.
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Students Who Made It
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have successfully achieved their study abroad dreams with our guidance.
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent z-10" />
        
        <div className="flex gap-6 px-4 justify-center">
          {/* Column 1 */}
          <div className="flex-1 space-y-6 scroll-up min-w-[300px] max-w-md">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="hidden md:block flex-1 space-y-6 scroll-up min-w-[300px] max-w-md" style={{ animationDelay: "-10s" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="hidden lg:block flex-1 space-y-6 scroll-up min-w-[300px] max-w-md" style={{ animationDelay: "-20s" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-card border border-border p-6 rounded-xl transition-all duration-300 hover:shadow-md h-auto break-inside-avoid">
    <Quote className="w-8 h-8 text-primary mb-4" />
    <p className="text-foreground mb-4 leading-relaxed italic">&quot;{testimonial.comment}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary">
          {testimonial.image ? (
               <Image
                 src={testimonial.image}
                 alt={testimonial.name}
                 fill
                 className="object-cover"
               />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-secondary-foreground font-bold">
                 {testimonial.name.charAt(0)}
             </div>
          )}
      </div>
      <div>
        <p className="font-bold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {testimonial.designation}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
