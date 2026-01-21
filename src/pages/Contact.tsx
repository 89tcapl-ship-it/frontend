import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { usePageContent } from "@/hooks/usePageContent";
import { SEO } from "@/hooks/useSEO";

const serviceOptions = [
  "Company Registration",
  "MCA Compliance",
  "GST Services",
  "Income Tax Filing",
  "Accounting & Bookkeeping",
  "Business Advisory",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        fullName: formData.get('full_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        serviceInterest: formData.get('service_interest') as string,
        message: formData.get('message') as string,
      };

      // Import api at the top of the file
      const api = (await import('@/lib/api')).default;
      await api.post('/contact', data);

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Request submitted!",
        description: "Our team will contact you shortly.",
      });
    } catch (error: any) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us | Get in Touch with 89T Corporate Advisors"
        description="Contact 89T Corporate Advisors for expert business advisory services. Located in Bangalore, we're here to help with company registration, compliance, and taxation needs."
        keywords="contact corporate advisors, business advisory contact, Bangalore corporate services, get in touch, consultation"
      />
      <PageHero
        pageName="contact"
        title="Contact Us"
        subtitle="Let's align on your business compliance needs and execution roadmap."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                </div>
                <a
                  href="mailto:89tcapl@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  89tcapl@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                </div>
                <a
                  href="tel:+919398857595"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 93988 57595
                </a>
              </div>

              {/* Address */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Registered Office</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  No.226/400, Sapthagiri Arc, Block No.206, 2nd Floor, Hoodi, Bangalore, Bangalore North, Karnataka, India - 560048
                </p>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6997968775507!2d77.71470481482233!3d12.991339090847447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b0acd9e823%3A0x9e2b9c12d6f8e2a0!2sHoodi%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-6 md:p-8 rounded-xl border border-border bg-card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-muted-foreground">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                      Send us a message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="full_name">Full Name *</Label>
                          <Input
                            id="full_name"
                            name="full_name"
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service_interest">Service Interested In *</Label>
                          <Select name="service_interest" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your requirements..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
