import { Link } from "react-router-dom";
import { Bed, Utensils, Waves, TreePine, Dumbbell, Palette, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const facilities = [
  {
    icon: Bed,
    title: "Private Suites",
    description: "Spacious ocean-view suites with king beds, en-suite bathrooms with rain showers, private balconies, and curated interiors designed for rest and restoration.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    icon: Waves,
    title: "Hydrotherapy Center",
    description: "State-of-the-art hydrotherapy facilities including infinity pools, cold plunge pools, flotation tanks, and mineral soaking tubs overlooking the Pacific.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  },
  {
    icon: Utensils,
    title: "Farm-to-Table Dining",
    description: "Our on-site organic garden and world-class chefs create nutritionally optimized meals that nourish body and soul. Special dietary needs accommodated.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    icon: TreePine,
    title: "Nature & Gardens",
    description: "50 acres of manicured gardens, meditation groves, coastal walking trails, and a private beach for contemplation and grounding exercises.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Movement",
    description: "Personal training studio, yoga pavilion, pilates reformer room, and outdoor movement spaces designed for gentle rehabilitation and strength building.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    icon: Palette,
    title: "Creative Arts Studio",
    description: "Dedicated spaces for art therapy, music therapy, and creative expression — powerful modalities for processing emotions beyond words.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  },
];

const Facilities = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Luxury retreat estate"
        className="absolute inset-0"
        speed={0.2}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/80 mb-4">Our Facilities</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
            A Sanctuary of <em>Serenity</em>
          </h1>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading">Where Healing Meets Luxury</h2>
        <p className="section-subheading">
          Every space has been thoughtfully designed to promote tranquility, privacy, and the
          optimal conditions for deep healing work. This is not a hospital — it's your home during transformation.
        </p>
        <div className="section-divider" />
      </AnimatedSection>
    </section>

    {/* Facilities Grid */}
    <section className="section-padding bg-sage-light pt-0">
      <div className="max-w-6xl mx-auto space-y-24">
        {facilities.map(({ icon: Icon, title, description, image }, i) => (
          <AnimatedSection key={title} className={`grid md:grid-cols-2 gap-12 items-center`}>
            <div className={i % 2 !== 0 ? "md:order-2" : ""}>
              <Icon size={32} className="text-primary mb-6" strokeWidth={1.2} />
              <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className={`aspect-[4/3] rounded-lg overflow-hidden hover-lift ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Full-width Image */}
    <section className="parallax-container h-[50vh]">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Coastal view"
        className="absolute inset-0"
        speed={0.15}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <AnimatedSection className="text-center px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            Where the Ocean Meets the Forest
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4">
            Our private coastline offers the perfect backdrop for reflection and renewal
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <AnimatedSection className="max-w-2xl mx-auto">
        <h2 className="section-heading">Experience It Yourself</h2>
        <p className="section-subheading mb-10">
          Schedule a private, virtual tour of our facilities or visit in person by appointment.
        </p>
        <Link
          to="/admissions"
          className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase hover:bg-sage-dark transition-all duration-700 rounded-sm"
        >
          Schedule a Tour <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </section>

    <Footer />
  </div>
);

export default Facilities;
