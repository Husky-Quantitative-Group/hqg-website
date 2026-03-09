import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

// Leadership team
const leadership = [
  {
    name: "Brendan Barnett",
    role: "Founder, Advisor",
    image: "/icons/headshots/brendan-barnett.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Shium Mashud",
    role: "Portfolio Manager",
    image: "/icons/headshots/shium-mashud.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Josef Karpinski",
    role: "Engineering Lead",
    image: "/icons/headshots/josef-karpinski.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Ethan Carty",
    role: "Head of Research",
    image: "/icons/headshots/ethan-carty.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
];

// Team members
const teamMembers = [
  {
    name: "Albert Mundadan",
    role: "Member",
    image: "/icons/headshots/albert-mundadan.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Emmet Spaeth",
    role: "Member",
    image: "/icons/headshots/emmet-spaeth.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Ethan Thomas",
    role: "Member",
    image: "/icons/headshots/ethan-thomas.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Grace McPadden",
    role: "Member",
    image: "/icons/headshots/grace-mcpadden.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Katrina Melnik",
    role: "Member",
    image: "/icons/headshots/katrina-melnik.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Micah Banschick",
    role: "Member",
    image: "/icons/headshots/micah-banschick.png",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Parth Danve",
    role: "Member",
    image: "/icons/headshots/parth-danve.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Shawn Spitzel",
    role: "Member",
    image: "/icons/headshots/shawn-spitzel.jpg",
    linkedin: "",
    github: "",
    website: "",
  },
  {
    name: "Soonwoo Kwon",
    role: "Member",
    image: "/icons/headshots/soonwoo-kwon.png",
    linkedin: "",
    github: "",
    website: "",
  },
];

// Companies where members have landed
const outcomeCompanies = [
  { name: "Microsoft", logo: "/icons/logos/companies/microsoft.svg" },
  { name: "SpaceX", logo: "/icons/logos/companies/spacex.svg" },
  { name: "JP Morgan Chase", logo: "/icons/logos/companies/jpmorgan-chase.svg" },
  { name: "Capital One", logo: "/icons/logos/companies/capital-one.svg" },
  { name: "IBM", logo: "/icons/logos/companies/ibm.svg" },
  { name: "Epic", logo: "/icons/logos/companies/epic-systems.svg" },
  { name: "Pure Storage", logo: "/icons/logos/companies/pure-storage.svg" },
  { name: "Palantir", logo: null },
  { name: "Pratt & Whitney", logo: null },
  { name: "Wells Fargo", logo: null },
  { name: "Synchrony", logo: null },
  { name: "The Hartford", logo: null },
  { name: "Travelers", logo: null },
  { name: "Medtronic", logo: null },
  { name: "Coherent", logo: null },
  { name: "Bank of America", logo: null },
];

// Gallery images
const galleryImages = [
  { src: "/icons/groupshots/presentation1.jpg", alt: "Team presentation 1" },
  { src: "/icons/groupshots/presentation2.jpg", alt: "Team presentation 2" },
  { src: "/icons/groupshots/presentation3.jpg", alt: "Team presentation 3" },
  { src: "/icons/groupshots/presentation4.png", alt: "Team presentation 4" },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Group Shot */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6"
          >
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.1] text-foreground mb-8"
          >
            Meet the Collective
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl leading-[1.7] text-secondary-foreground max-w-3xl mb-12"
          >
            A diverse group of engineers, researchers, and strategists united by
            a passion for quantitative finance and systematic trading.
          </motion.p> */}

          {/* Main Group Shot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src="/icons/groupshots/quant-group-s26.png"
              alt="HQG Team Spring 2026"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Gallery Section */}
      {/* <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6"
          >
            In Action
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-foreground mb-12"
          >
            Presentations & Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Outcomes Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6"
          >
            Where Our Members Go
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-foreground mb-6"
          >
            Career Outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-[1.7] text-secondary-foreground max-w-2xl mb-12"
          >
            HQG alumni have gone on to top firms in technology, finance, and
            engineering.
          </motion.p>

          {/* Company logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {outcomeCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-sm hover:bg-secondary/50 transition-colors duration-300"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-8 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert dark:opacity-60 dark:hover:opacity-90"
                  />
                ) : (
                  <span className="font-ui text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground text-center">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-foreground mb-12"
          >
            Executive Team
          </motion.h2>

          {/* Leadership Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-base text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="font-ui text-[11px] uppercase tracking-[0.08em] text-primary mb-3">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s Website`}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {!member.github && !member.linkedin && !member.website && (
                      <span className="text-muted-foreground/50">
                        <Linkedin size={18} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6"
          >
            The Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-foreground mb-12"
          >
            Members
          </motion.h2>

          {/* Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-3">
                  <h4 className="font-semibold text-sm text-foreground mb-0.5 truncate">
                    {member.name}
                  </h4>
                  <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-primary mb-2">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name}'s Website`}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {!member.github && !member.linkedin && !member.website && (
                      <span className="text-muted-foreground/50">
                        <Linkedin size={18} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
