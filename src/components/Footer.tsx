import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-sage-dark text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-light mb-4">
            Serenity <span className="text-accent">Haven</span>
          </h3>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
            A sanctuary of healing, privacy, and transformation nestled in nature's embrace.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 tracking-wide">Navigation</h4>
          <ul className="space-y-3">
            {["Home", "Programs", "Facilities", "Admissions"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 tracking-wide">Programs</h4>
          <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
            <li>Addiction Recovery</li>
            <li>Mental Wellness</li>
            <li>Trauma Healing</li>
            <li>Executive Burnout</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 tracking-wide">Contact</h4>
          <ul className="space-y-4 font-body text-sm text-primary-foreground/60">
            <li className="flex items-center gap-3">
              <Phone size={14} /> <span>+1 (800) SERENITY</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} /> <span>inquiries@serenityhaven.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>Malibu Coast, California</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Serenity Haven. All rights reserved. HIPAA Compliant.
        </p>
        <div className="flex gap-6 font-body text-xs text-primary-foreground/40">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Confidentiality Agreement</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
