import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { use, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "stewart.m1999@gmail.com",
    href: "mailto:stewart.m1999@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(301) 404-9979",
    href: "tel:+13014049979"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Oakland, CA",
    href: "https://www.google.com/maps/place/Oakland,+CA"
  }
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div 
      className = "absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
    />
    <div className="container mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
          Let's connect and <span className="font-serif italic font-normal text-white">create something amazing.</span>
        </h2>

        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Feel free to reach out if you have any questions or want to collaborate.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" 
              className="block text-sm font-medium mb-2"> 
                Name 
              </label>
              <input 
              id="name" 
              type="text" 
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
              required
              placeholder="Your name..."
              value={formData.name}
              onChange= { (e) => setFormData({...formData, name: e.target.value}) }
              />
            </div>

            <div>
              <label 
              htmlFor="email" 
              className="block text-sm font-medium mb-2"
              > 
                Email 
              </label>
              <input 
              id="email" 
              type="email" 
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
              required
              placeholder="your@email.com" 
              value={formData.email}
              onChange= { (e) => setFormData({...formData, email: e.target.value}) }
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium mb-2"
              > 
                Message 
              </label>
              <textarea 
                id="message" 
                type="text" 
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none" 
                required
                placeholder="Your message..." 
                rows={5}
                value={formData.message}
                onChange= { (e) => setFormData({...formData, message: e.target.value}) }
              />
            </div>
            <Button type="submit" className="w-full" size="lg">Send Message <Send/></Button>
          </form>
        </div>
      </div>
    </div>
  </section>);
};