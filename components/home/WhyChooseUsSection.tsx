import { Shield, Users, Clock, Award, HeartHandshake, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Genuine Guidance",
    description: "No fake promises. We provide honest counseling based on your profile and realistic chances.",
  },
  {
    icon: Users,
    title: "Experienced Counselors",
    description: "Our team has helped 10,000+ students achieve their study abroad dreams successfully.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick application processing with dedicated support throughout your journey.",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "98% visa success rate and excellent track record with top universities worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From first consultation to airport pickup abroad — we're with you every step.",
  },
  {
    icon: Globe,
    title: "500+ University Partners",
    description: "Direct partnerships with leading universities across USA, UK, Australia, Canada & NZ.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nepal&apos;s Most Trusted Education Consultancy
            </h2>
            <p className="text-muted-foreground">
              For over 15 years, Brainstorm Global Education has been transforming 
              dreams into reality. We combine expertise with personalized attention 
              to ensure your success.
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <div className=" border-2 border-border px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">2009</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Established</div>
            </div>
            <div className=" border-2 border-border px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">A+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Rating</div>
            </div>
            <div className="border-2 border-border px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">Licensed</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">By Govt.</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 border-2 border-border bg-card hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
