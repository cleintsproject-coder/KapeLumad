import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - would connect to Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-coffee relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-bold mb-6">
              Let's Start a <span className="text-gradient-gold">Conversation</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about our coffee, interested in partnerships, or want to learn 
              more about our social enterprise? We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cream/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cream font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan dela Cruz"
                    required
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-cream font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    required
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-cream font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-cream/60 text-sm">
                  We typically respond within 24 hours
                </p>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="text-center mt-10">
            <p className="text-cream/70 mb-4">Or reach us directly on</p>
            <a
              href="https://facebook.com/kapelumad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream px-6 py-3 rounded-full transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Facebook Messenger</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
