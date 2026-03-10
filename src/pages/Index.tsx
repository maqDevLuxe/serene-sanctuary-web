import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield, Award, Heart, TreePine, Leaf, Droplets,
  Brain, Sun, Moon, Users, BookOpen, Lock, Star, ArrowRight,
  CheckCircle, Sparkles
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  environment: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80",
  accommodation: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
  accommodation2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  accommodation3: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  journal1: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  journal2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  journal3: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1200&q=80",
};

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={UNSPLASH.hero}
            alt="Serene mountain retreat"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/80 mb-6"
          >
            Exclusive Private Rehabilitation & Wellness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight max-w-5xl"
          >
            Your Journey to
            <br />
            <em className="font-light">Inner Peace</em> Begins
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/admissions"
              className="px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-sage-dark transition-all duration-700 rounded-sm"
            >
              Begin Your Healing
            </Link>
            <Link
              to="/programs"
              className="px-10 py-4 border border-primary-foreground/40 text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-700 rounded-sm"
            >
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ACCREDITATIONS */}
      <section className="section-padding bg-secondary/50">
        <AnimatedSection className="max-w-6xl mx-auto">
          <p className="text-center font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Globally Recognized & Accredited
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { icon: Award, label: "JCAHO Accredited" },
              { icon: Shield, label: "HIPAA Compliant" },
              { icon: CheckCircle, label: "LegitScript Certified" },
              { icon: Star, label: "CARF International" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-muted-foreground">
                <Icon size={28} strokeWidth={1} />
                <span className="font-body text-xs tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. HEALING & RECOVERY PROGRAMS */}
      <section className="section-padding">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Healing & Recovery Programs</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Personalized pathways designed around your unique journey toward wholeness
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Heart, title: "Addiction Recovery", desc: "Comprehensive detox and rehabilitation with 24/7 medical supervision in a luxury setting." },
            { icon: Brain, title: "Mental Wellness", desc: "Treatment for depression, anxiety, and mood disorders through evidence-based therapies." },
            { icon: Sparkles, title: "Trauma Healing", desc: "EMDR, somatic experiencing, and trauma-informed care for lasting transformation." },
            { icon: Sun, title: "Executive Burnout", desc: "Confidential programs for high-profile individuals seeking restoration and renewal." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.15} className="glass-card p-8 hover-lift text-center">
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                <Icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 4. THE ENVIRONMENT */}
      <section className="parallax-container h-[70vh]">
        <ParallaxImage src={UNSPLASH.environment} alt="Lush retreat surroundings" className="absolute inset-0" speed={0.2} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <AnimatedSection className="text-center max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-6">
              Nestled in Nature's Embrace
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
              Our 50-acre estate sits between pristine coastline and ancient forests,
              creating the perfect environment for deep healing and profound transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. CLINICAL SUCCESS METRICS */}
      <section className="section-padding bg-sage-light">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Clinical Excellence</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Our outcomes speak to a legacy of transformative care
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: 94, suffix: "%", label: "Completion Rate" },
            { value: 87, suffix: "%", label: "Sustained Recovery" },
            { value: 1, suffix: ":1", label: "Staff to Client" },
            { value: 98, suffix: "%", label: "Client Satisfaction" },
          ].map((item) => (
            <Counter key={item.label} end={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </section>

      {/* 6. HOLISTIC THERAPIES GRID */}
      <section className="section-padding">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Holistic Therapies</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Ancient wisdom meets modern science in our integrative approach
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Leaf, title: "Mindfulness & Meditation", desc: "Guided mindfulness practices to cultivate inner stillness and self-awareness." },
            { icon: Droplets, title: "Hydrotherapy", desc: "Therapeutic water treatments including flotation therapy and mineral baths." },
            { icon: TreePine, title: "Nature Therapy", desc: "Forest bathing, equine therapy, and ocean-side meditation sessions." },
            { icon: Moon, title: "Yoga & Movement", desc: "Daily yoga, tai chi, and somatic movement classes for mind-body integration." },
            { icon: Heart, title: "Art & Music Therapy", desc: "Creative expression as a pathway to emotional processing and healing." },
            { icon: Sun, title: "Nutritional Healing", desc: "Farm-to-table organic cuisine designed by our integrative nutrition team." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1} className="group p-8 border border-border rounded-lg hover:bg-sage-light transition-all duration-700">
              <Icon size={28} className="text-primary mb-5" strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 7. LUXURY ACCOMMODATION */}
      <section className="section-padding bg-secondary/30">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Luxury Accommodations</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every detail curated for comfort, privacy, and serenity
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
          {[
            { src: UNSPLASH.accommodation, title: "Private Suites", desc: "Ocean-view suites with premium amenities" },
            { src: UNSPLASH.accommodation2, title: "Estate Villas", desc: "Secluded villas with private gardens" },
            { src: UNSPLASH.accommodation3, title: "Wellness Spa", desc: "World-class spa and wellness facilities" },
          ].map(({ src, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.15} className="group overflow-hidden rounded-lg hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 8. FULL-WIDTH NATURE IMAGE */}
      <section className="parallax-container h-[50vh] md:h-[60vh]">
        <ParallaxImage src={UNSPLASH.nature} alt="Healing forest path" className="absolute inset-0" speed={0.15} />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimatedSection className="text-center">
            <p className="font-display text-3xl md:text-5xl font-light text-primary-foreground italic">
              "Nature itself is the best physician"
            </p>
            <p className="font-body text-sm text-primary-foreground/70 mt-4 tracking-widest uppercase">— Hippocrates</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. COUNTERS */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <Counter end={25} suffix="+" label="Years of Healing" />
          <Counter end={5000} suffix="+" label="Lives Transformed" />
          <Counter end={150} suffix="+" label="Expert Clinicians" />
          <Counter end={12} label="Acre Coastal Estate" />
        </div>
      </section>

      {/* 10. WELLNESS JOURNAL */}
      <section className="section-padding bg-sage-light">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Wellness Journal</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Insights and guidance from our clinical and wellness experts
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
          {[
            { src: UNSPLASH.journal1, title: "The Science of Mindful Recovery", date: "March 2026", category: "Mindfulness" },
            { src: UNSPLASH.journal2, title: "Nutrition's Role in Mental Health", date: "February 2026", category: "Nutrition" },
            { src: UNSPLASH.journal3, title: "Understanding Trauma-Informed Care", date: "January 2026", category: "Clinical" },
          ].map(({ src, title, date, category }, i) => (
            <AnimatedSection key={title} delay={i * 0.15} className="group cursor-pointer hover-lift">
              <div className="aspect-[3/2] overflow-hidden rounded-lg mb-5">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <span className="font-body text-xs tracking-widest uppercase text-primary">{category}</span>
              <h3 className="font-display text-xl mt-2 mb-2 group-hover:text-primary transition-colors duration-500">{title}</h3>
              <p className="font-body text-xs text-muted-foreground">{date}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 11. PRIVACY GUARANTEE */}
      <section className="section-padding">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-8">
            <Lock size={32} className="text-primary" strokeWidth={1.2} />
          </div>
          <h2 className="section-heading">Absolute Privacy Guaranteed</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            We understand discretion is paramount. Our estate features private entrances,
            anonymous registration, encrypted communications, and a staff bound by the
            strictest confidentiality agreements. Your healing journey remains entirely your own.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {["NDA Protected", "Encrypted Records", "Private Entrances", "Anonymous Check-in"].map((item) => (
              <span key={item} className="px-5 py-2 border border-border rounded-full font-body text-xs tracking-widest uppercase text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 12. ALUMNI SUCCESS STORIES */}
      <section className="section-padding bg-secondary/30">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading">Stories of Transformation</h2>
          <p className="section-subheading max-w-xl mx-auto">
            In their own words — the journey from struggle to strength
          </p>
          <div className="section-divider" />
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
          {[
            {
              quote: "Serenity Haven didn't just help me recover — it helped me discover who I truly am. The clinical team's compassion changed my life forever.",
              name: "Former Executive",
              detail: "3 Years in Recovery",
            },
            {
              quote: "The privacy, the care, the setting — everything was beyond what I imagined. I found my peace here and carry it with me every day.",
              name: "Professional Athlete",
              detail: "5 Years in Recovery",
            },
          ].map(({ quote, name, detail }, i) => (
            <AnimatedSection key={name} delay={i * 0.2} className="glass-card p-10">
              <Users size={28} className="text-primary mb-6" strokeWidth={1.2} />
              <p className="font-display text-lg italic text-foreground leading-relaxed mb-8">
                "{quote}"
              </p>
              <p className="font-body text-sm font-semibold text-foreground">{name}</p>
              <p className="font-body text-xs text-muted-foreground">{detail}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 13. CTA */}
      <section className="parallax-container py-32">
        <ParallaxImage src={UNSPLASH.spa} alt="Spa and wellness" className="absolute inset-0" speed={0.15} />
        <div className="absolute inset-0 bg-sage-dark/80" />
        <div className="relative z-10 px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-6">
              Take the First Step
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Every journey begins with a single, courageous step. Our admissions team is available
              24/7 for a confidential, obligation-free conversation about your path to healing.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-primary/90 transition-all duration-700 rounded-sm"
            >
              Confidential Inquiry <ArrowRight size={16} />
            </Link>
            <p className="font-body text-xs text-primary-foreground/50 mt-6">
              Available 24/7 · All calls are confidential · Insurance verification available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 14. FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
