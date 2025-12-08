"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Send } from "lucide-react";
import { useSubmitContactForm } from "@/hooks/use-contact";
import { ContactFormData } from "@/types/contact";
import { motion, Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
        className="bg-background py-4 md:px-4 md:py-10 space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="from-primary to-secondary pointer-events-none absolute top-80 -left-20 z-50 h-40 w-40 rounded-full bg-linear-to-tr opacity-90 blur-3xl"></div>

        {/* Top Right */}
        <div className="from-primary to-secondary pointer-events-none absolute top-80 -right-20 z-50 h-40 w-40 rounded-full bg-linear-to-tr opacity-90 blur-3xl"></div>


        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
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

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="rounded-lg w-full"
            >
              {isPending ? (
                "Sending..."
              ) : (
                <>
                  Submit Inquiry <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.section>

      {/* CONTACT INFO CARDS */}
      <motion.section
        className="py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We&apos;re here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Visit Us Card */}
            <div className="group relative bg-linear-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Visit Our Office</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Putalisadak, Kathmandu
                  <br />
                  Nepal
                </p>
                <p className="text-sm text-muted-foreground/80 mt-4 pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">
                    Office Hours:
                  </span>
                  <br />
                  Sun - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: Closed
                </p>
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="group relative bg-linear-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Contact Us</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Phone
                    </p>
                    <p className="text-muted-foreground">
                      +977 1234567890
                      <br />
                      +977 9876543210
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Email
                    </p>
                    <p className="text-muted-foreground">
                      info@brainstorm.edu.np
                      <br />
                      apply@brainstorm.edu.np
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
