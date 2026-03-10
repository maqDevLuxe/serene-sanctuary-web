import { Link } from "react-router-dom";
import { Heart, Brain, Sparkles, Sun, Shield, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    icon: Heart,
    title: "Addiction Recovery",
    duration: "30–90 Days",
    description: "Our comprehensive addiction recovery program combines medical detoxification, individual psychotherapy, group counseling, and holistic therapies. Each treatment plan is uniquely crafted by our multidisciplinary team.",
    features: ["Medical Detoxification", "Cognitive Behavioral Therapy", "Relapse Prevention", "Family Therapy", "12-Step Integration", "Aftercare Planning"],
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    duration: "28–60 Days",
    description: "Evidence-based treatment for depression, anxiety, PTSD, and co-occurring disorders. Our psychiatrists and therapists work together to create a personalized path toward lasting mental wellness.",
    features: ["Psychiatric Assessment", "EMDR Therapy", "Dialectical Behavior Therapy", "Neurofeedback", "Stress Management", "Mindfulness Training"],
  },
  {
    icon: Sparkles,
    title: "Trauma Healing",
    duration: "45–90 Days",
    description: "Specialized trauma-informed care using somatic experiencing, EMDR, and attachment-based therapies. We create a safe container for processing and integrating difficult experiences.",
    features: ["Somatic Experiencing", "EMDR", "Art Therapy", "Equine-Assisted Therapy", "Breathwork", "Body-Based Therapies"],
  },
  {
    icon: Sun,
    title: "Executive Burnout",
    duration: "14–30 Days",
    description: "Designed for high-performing individuals experiencing burnout, compassion fatigue, or work-life imbalance. Complete confidentiality with private suites and flexible scheduling.",
    features: ["Executive Assessment", "Stress Recovery Protocol", "Leadership Coaching", "Sleep Optimization", "Nutritional Reset", "Performance Psychology"],
  },
];

const Programs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1920&q=80"
        alt="Peaceful morning mist over mountains"
        className="absolute inset-0"
        speed={0.2}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/80 mb-4">Our Programs</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
            Pathways to <em>Healing</em>
          </h1>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading">Personalized Treatment</h2>
        <p className="section-subheading">
          No two journeys are alike. Our clinical team designs each program around your unique needs,
          goals, and circumstances — ensuring the most effective path to lasting recovery.
        </p>
        <div className="section-divider" />
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { icon: Shield, label: "Evidence-Based" },
            { icon: Users, label: "1:1 Staff Ratio" },
            { icon: Clock, label: "24/7 Support" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon size={28} className="text-primary" strokeWidth={1.2} />
              <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>

    {/* Programs Detail */}
    <section className="section-padding bg-sage-light">
      <div className="max-w-6xl mx-auto space-y-20">
        {programs.map(({ icon: Icon, title, duration, description, features }, i) => (
          <AnimatedSection key={title} delay={0.1} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}>
            <div className={i % 2 !== 0 ? "md:order-2" : ""}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">{duration}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{description}</p>
              <ul className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`aspect-[4/3] rounded-lg overflow-hidden ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <img
                src={[
                  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
                  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
                ][i]}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <AnimatedSection className="max-w-2xl mx-auto">
        <h2 className="section-heading">Begin Your Journey</h2>
        <p className="section-subheading mb-10">
          Our admissions team is ready for a confidential conversation about which program is right for you.
        </p>
        <Link
          to="/admissions"
          className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-sage-dark transition-all duration-700 rounded-sm"
        >
          Confidential Inquiry <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </section>

    <Footer />
  </div>
);

export default Programs;
