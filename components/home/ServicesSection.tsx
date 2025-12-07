import { GraduationCap, FileCheck, Plane, Award, MessageSquare, Users } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University & Course Selection",
    description: "Expert guidance to find the perfect university and program matching your academic profile and career goals.",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Identify and apply for scholarships to make your international education more affordable.",
  },
  {
    icon: FileCheck,
    title: "Application Support",
    description: "Complete assistance with university applications, documentation, and SOP/LOR preparation.",
  },
  {
    icon: Plane,
    title: "Visa Processing",
    description: "End-to-end visa support including document preparation, interview coaching, and submission.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Mock interviews and coaching to help you confidently face visa and university interviews.",
  },
  {
    icon: Users,
    title: "Pre-Departure Briefing",
    description: "Comprehensive guidance on accommodation, banking, culture, and settling in your new country.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Support at Every Step
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first consultation to landing in your dream destination, 
            we provide comprehensive guidance throughout your study abroad journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
