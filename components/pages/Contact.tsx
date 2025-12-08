'use client';

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useSubmitContactForm } from "@/hooks/use-contact";
import { ContactFormData } from "@/types/contact";
import { motion, Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Contact = () => {
  const { mutate: submitContact, isPending } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const submissionData: ContactFormData = {
      name: `${firstName} ${lastName}`.trim(),
      email: email,
      phone_number: phone,
      message: message,
    };

    submitContact(submissionData, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <>
      {/* HERO */}
      <motion.section 
        className="bg-background py-4 md:px-4 md:py-10 space-y-[5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-xl mx-auto">
          
          <h1 className="text-3xl md:text-4xl font-bold px-8">
            Let&apos;s Start Your Journey
          </h1>
         
        </div>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME FIELDS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border-2 border-border rounded-lg bg-background focus:border-primary outline-none transition"
                />
                <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  First Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border-2 border-border rounded-lg bg-background focus:border-primary outline-none transition"
                />
                <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  Last Name *
                </label>
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-2 border-border rounded-lg bg-background focus:border-primary outline-none transition"
              />
              <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                Email Address *
              </label>
            </div>

            {/* PHONE */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-2 border-border rounded-lg bg-background focus:border-primary outline-none transition"
              />
              <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                Phone Number *
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-2 border-border rounded-lg bg-background resize-none focus:border-primary outline-none transition"
              />
              <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                Tell us about your goals
              </label>
            </div>

            <Button type="submit" size="lg" disabled={isPending} className="rounded-lg w-full">
              {isPending ? "Sending..." : <>Submit Inquiry <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </form>
        </div>
      </motion.section>

      {/* CONTACT INFO CARDS */}
      <motion.section 
        className="py-16 md:py-20 bg-muted/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
    
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Visit Us Card */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Putalisadak, Kathmandu<br />Nepal
              </p>
            </div>

            {/* Call Us Card */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                +977 1234567890<br />+977 9876543210
              </p>
            </div>

            {/* Email Us Card */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                info@brainstorm.edu.np<br />apply@brainstorm.edu.np
              </p>
            </div>

            {/* Office Hours Card */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sun - Fri: 9AM - 6PM<br />Saturday: Closed
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      
    </>
  );
};

export default Contact;
