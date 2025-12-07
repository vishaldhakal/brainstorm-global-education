import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    country: "USA",
    university: "University of Texas, Austin",
    quote: "Brainstorm made my American dream possible! From selecting the right program to visa approval, their support was incredible.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Rajan Adhikari",
    country: "Australia",
    university: "University of Melbourne",
    quote: "I was confused about course selection, but the counselors here understood my goals and helped me get into my dream university.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajan",
  },
  {
    name: "Sneha KC",
    country: "UK",
    university: "University of Manchester",
    quote: "The scholarship guidance was exceptional. I received a 50% scholarship thanks to their expert assistance!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    name: "Bikash Thapa",
    country: "Canada",
    university: "University of Toronto",
    quote: "Professional team, transparent process, and genuine care for students. Highly recommend Brainstorm!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bikash",
  },
  {
    name: "Anita Gurung",
    country: "New Zealand",
    university: "University of Auckland",
    quote: "From IELTS preparation to visa success, Brainstorm was with me at every step. Now living my dream in NZ!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita",
  },
  {
    name: "Suman Maharjan",
    country: "Australia",
    university: "Monash University",
    quote: "The pre-departure briefing was incredibly helpful. I felt fully prepared for my new life abroad.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suman",
  },
  {
    name: "Pooja Shrestha",
    country: "UK",
    university: "University of Edinburgh",
    quote: "Best consultancy in Nepal! Their knowledge about UK universities is unmatched.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
  },
  {
    name: "Arun Karki",
    country: "USA",
    university: "Boston University",
    quote: "Got my F1 visa approved on the first attempt. The interview prep sessions were game-changers!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arun",
  },
];

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4">
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
        
        <div className="flex gap-6 px-4">
          {/* Column 1 */}
          <div className="flex-1 space-y-6 scroll-up">
            {duplicatedTestimonials.slice(0, 8).map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="hidden md:block flex-1 space-y-6 scroll-up" style={{ animationDelay: "-5s" }}>
            {duplicatedTestimonials.slice(4, 12).map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="hidden lg:block flex-1 space-y-6 scroll-up" style={{ animationDelay: "-10s" }}>
            {duplicatedTestimonials.slice(2, 10).map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-card border-2 border-border p-6 transition-all duration-300 hover:shadow-sm">
    <Quote className="w-8 h-8 text-primary mb-4" />
    <p className="text-foreground mb-4">{testimonial.quote}</p>
    <div className="flex items-center gap-3">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={100}
        height={100}
        className="w-12 h-12 border-2 border-border bg-secondary"
      />
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.university}, {testimonial.country}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
