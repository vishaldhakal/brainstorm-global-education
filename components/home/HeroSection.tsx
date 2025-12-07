import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/components/assets/hero-students.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 text-sm font-medium mb-6">
              🇳🇵 Nepal&apos;s Trusted Education Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Gateway to{" "}
              <span className="text-primary">World-Class</span>{" "}
              Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Expert guidance for studying in USA, UK, Australia, Canada & New Zealand. 
              From course selection to visa processing — we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="transition-all text-base">
                <Link href="/contact">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-2">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                10+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                5000+ Students Placed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                100+ Partner Universities
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in hidden lg:block">
            <Image
              src={heroImage}
              width={1000}
              height={600}
              alt="International students celebrating graduation with global landmarks"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
