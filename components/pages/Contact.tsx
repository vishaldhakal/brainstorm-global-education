'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll contact you within 24 hours.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className=" py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-block text-accent-foreground px-4 py-1 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Start Your Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about studying abroad? Book a free consultation with our expert counselors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Book Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="Your first name" className="border-2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Your last name" className="border-2" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="your@email.com" className="border-2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required placeholder="+977 98XXXXXXXX" className="border-2" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select>
                        <SelectTrigger className="border-2">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">USA</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="new-zealand">New Zealand</SelectItem>
                          <SelectItem value="undecided">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="education">Current Education Level</Label>
                      <Select>
                        <SelectTrigger className="border-2">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="highschool">High School (+2)</SelectItem>
                          <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                          <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your study abroad goals..."
                      rows={4}
                      className="border-2"
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto shadow-sm">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Inquiry <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-border p-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        Putalisadak, Kathmandu, Nepal<br />
                        Near Shanker Dev Campus
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +977 1234567890<br />
                        +977 9876543210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@brainstormglobal.edu.np<br />
                        apply@brainstormglobal.edu.np
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Sunday - Friday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-sm opacity-90 mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <Button asChild  size="sm">
                  <a href="tel:+9771234567890">
                    <Phone className="mr-2 w-4 h-4" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className=" border-t-2 border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-card border-2 border-border h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="font-medium">Map Location</p>
              <p className="text-sm">Putalisadak, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
