import { useState } from "react";
import { Phone, Mail, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "", program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our admissions team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "", program: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80"
          alt="Sunrise over peaceful landscape"
          className="absolute inset-0"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/80 mb-4">Admissions</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
              Your First <em>Courageous</em> Step
            </h1>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">The Admissions Process</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We've made the process as gentle and confidential as possible
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mt-16">
          {[
            { step: "01", title: "Confidential Call", desc: "A compassionate conversation about your needs and goals" },
            { step: "02", title: "Clinical Assessment", desc: "Our team designs a personalized treatment recommendation" },
            { step: "03", title: "Insurance & Logistics", desc: "We handle verification, travel arrangements, and planning" },
            { step: "04", title: "Welcome to Serenity", desc: "Begin your transformative journey in complete comfort" },
          ].map(({ step, title, desc }, i) => (
            <AnimatedSection key={step} delay={i * 0.15} className="text-center">
              <span className="font-display text-4xl font-light text-primary">{step}</span>
              <h3 className="font-display text-xl mt-4 mb-2">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Form + Contact */}
      <section className="section-padding bg-sage-light">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <AnimatedSection>
            <h2 className="font-display text-3xl font-light mb-2">Confidential Inquiry</h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              All information is protected under HIPAA regulations
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name" as const, label: "Full Name", type: "text" },
                { name: "email" as const, label: "Email Address", type: "email" },
                { name: "phone" as const, label: "Phone Number", type: "tel" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{label}</label>
                  <input
                    type={type}
                    value={formData[name]}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select a program...</option>
                  <option>Addiction Recovery</option>
                  <option>Mental Wellness</option>
                  <option>Trauma Healing</option>
                  <option>Executive Burnout</option>
                  <option>Not Sure — Need Guidance</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Message (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-sage-dark transition-all duration-700 rounded-sm"
              >
                Submit Inquiry <ArrowRight size={16} />
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-10 mb-8">
              <h3 className="font-display text-2xl mb-6">Speak With Us Directly</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body text-sm font-semibold">24/7 Confidential Helpline</p>
                    <p className="font-body text-lg text-primary">+1 (800) SERENITY</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body text-sm font-semibold">Encrypted Email</p>
                    <p className="font-body text-muted-foreground">inquiries@serenityhaven.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body text-sm font-semibold">Response Time</p>
                    <p className="font-body text-muted-foreground">Within 2 hours, guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10">
              <Shield size={28} className="text-primary mb-4" strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-4">Our Privacy Promise</h3>
              <ul className="space-y-3">
                {[
                  "All inquiries are 100% confidential",
                  "HIPAA-compliant communications",
                  "No information shared without consent",
                  "Anonymous inquiry option available",
                  "Encrypted data transmission",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
