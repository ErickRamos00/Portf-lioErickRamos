/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Monitor, 
  Terminal,
  ChevronRight,
  Menu,
  MessageSquare,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-center pointer-events-none">
      <nav className={`
        pointer-events-auto
        flex items-center justify-between
        px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "glass-island w-full max-w-2xl shadow-xl shadow-blue-500/10" 
          : "bg-slate-900/30 backdrop-blur-md border border-slate-800 w-full max-w-5xl"
        }
      `}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl glow-blue text-white">E</div>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-sm font-bold tracking-tight leading-none uppercase text-white">Erick Ramos</span>
            <span className="text-[7px] sm:text-[10px] text-blue-400 font-medium tracking-[0.2em] uppercase">Full Stack Dev</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-100 p-2 hover:bg-white/5 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-full left-0 right-0 mt-3 p-6 md:hidden bg-slate-950/95 backdrop-blur-2xl shadow-2xl border border-white/10 rounded-2xl overflow-hidden pointer-events-auto z-50 ring-1 ring-blue-500/20"
            >
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-blue-500 p-2 transition-colors flex items-center justify-between group"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={14} className="text-blue-500/0 group-hover:text-blue-500 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = () => (
  <section id="inicio" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase mb-6">
          // Disponível para projetos
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] md:leading-[0.9] mb-8">
          Erick Ramos <br />
          <span className="text-blue-500 text-glow-blue">de Azevedo</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
          Desenvolvedor Full Stack apaixonado por tecnologia. Foco em aprendizado contínuo e construção de soluções digitais robustas.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contato" className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest text-center transition-all glow-blue">
            Vamos Conversar
          </a>
          <a href="#projetos" className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest text-center transition-all">
            Ver Portfólio
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden md:flex justify-center"
      >
        <div className="relative z-10 w-full max-w-md aspect-square rounded-[3rem] overflow-hidden glass-card p-4">
           <div className="w-full h-full bg-slate-900/60 rounded-[2.5rem] flex items-center justify-center border border-white/5">
              <Terminal size={140} className="text-blue-500/20" />
           </div>
        </div>
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-16 sm:py-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="md:col-span-7"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Sobre Mim
          </motion.h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold mb-8 italic text-slate-200">
            Focado em aprendizado contínuo e construção de soluções digitais.
          </h3>
          <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              Estudante de Desenvolvimento de Sistemas focado em tecnologias modernas. 
              Busco constantemente me atualizar com as melhores práticas da indústria, criando arquiteturas sólidas e interfaces intuitivas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl"
              >
                <p className="text-[10px] text-blue-400 font-mono mb-1 uppercase tracking-wider">// Status Atual</p>
                <p className="text-sm font-medium text-slate-200">Desenvolvimento de Sistemas</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl"
              >
                <p className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-wider">// Foco</p>
                <p className="text-sm font-medium text-slate-200">Eficiência e Escalabilidade</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
              <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                 {[
                   { label: "Projetos", value: "10+" },
                   { label: "Tecnologias", value: "8+" },
                   { label: "Experiência", value: "2 anos" },
                   { label: "Stack", value: "JS/JAVA" }
                 ].map((stat, i) => (
                   <motion.div
                     key={stat.label}
                     initial={{ opacity: 0, y: 30, scale: 0.9 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.5 }}
                     className="p-5 sm:p-6 rounded-3xl glass-card text-center group hover:bg-blue-600/5 transition-colors"
                   >
                     <motion.div 
                       initial={{ scale: 0.5 }}
                       whileInView={{ scale: 1 }}
                       transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 0.3 }}
                       className="text-xl sm:text-2xl font-display font-bold text-blue-500 mb-1"
                     >
                       {stat.value}
                     </motion.div>
                     <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                   </motion.div>
                 ))}
              </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const experiences = [
    {
      title: "Prefeitura de Pelotas",
      type: "Experiência Profissional",
      role: "Desenvolvedor Full Stack (Projeto)",
      period: "2024 (Projeto Finalizado)",
      description: "Desenvolvi um sistema full stack para a Prefeitura de Pelotas, com foco em organização e gerenciamento de dados internos. A aplicação permite cadastro, edição e consulta de informações, utilizando arquitetura estruturada e boas práticas de desenvolvimento.",
      tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <Monitor size={24} />
    },
    {
      title: "IF Sul-rio-grandense (IFSUL)",
      type: "Formação Acadêmica",
      role: "Tecnólogo em Sistemas para Internet",
      period: "2024 — 2028 (Cursando)",
      description: "Foco em desenvolvimento web avançado, infraestrutura de rede e arquitetura de sistemas para internet.",
      tech: ["Desenvolvimento Web", "Redes", "Arquitetura"],
      icon: <Code2 size={24} />
    },
    {
      title: "UniSenac",
      type: "Formação Acadêmica",
      role: "Técnico em Desenvolvimento de Sistemas",
      period: "2024 — 2025",
      description: "Base sólida em lógica de programação, banco de dados e metodologias de desenvolvimento.",
      tech: ["Lógica de Programação", "Banco de Dados", "Metodologias"],
      icon: <Terminal size={24} />
    }
  ];

  return (
    <section id="experiencia" className="py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-label inline-block">Trajetória</h2>
          <h3 className="text-3xl sm:text-5xl font-display font-bold italic text-slate-100 mt-4">Carreira e Educação</h3>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.title + i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] glass-card flex flex-col md:flex-row gap-6 sm:gap-8 items-start group hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-all duration-500">
                <div className="text-white">
                  {exp.icon}
                </div>
              </div>
              <div className="flex-1 w-full flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-1 block">
                      {exp.type}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold text-slate-100 leading-tight">{exp.title}</h4>
                    <p className="text-slate-300 font-medium text-xs sm:text-sm mt-1">{exp.role}</p>
                  </div>
                  <span className="shrink-0 w-fit text-[8px] sm:text-[10px] font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700 h-fit whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
                  {exp.tech.map(t => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Sistema Web – Prefeitura de Pelotas",
      description: "Desenvolvi um sistema full stack para a Prefeitura de Pelotas, com foco em organização e gerenciamento de dados internos. A aplicação permite cadastro, edição e consulta de informações, utilizando arquitetura estruturada e boas práticas de desenvolvimento.",
      tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
      highlights: ["CRUD completo", "Organização em camadas", "Foco em usabilidade"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      title: "Sistema Desktop de Gestão de Notas",
      description: "Desenvolvimento de um aplicativo desktop utilizando Electron para gerenciamento de notas. O sistema conta com autenticação de usuários, operações completas de CRUD e integração com banco de dados MySQL, seguindo o padrão de arquitetura MVC.",
      tech: ["Electron", "JavaScript", "MySQL"],
      highlights: ["Login seguro", "Persistência de dados", "Separaração (MVC)"],
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Sistema de Cálculo de Frete (POO + MVC)",
      description: "Projeto desenvolvido em Java com foco em Programação Orientada a Objetos e arquitetura MVC. O sistema calcula custos de frete com base em diferentes tipos de transporte, aplicando conceitos como herança, polimorfismo e classes abstratas.",
      tech: ["Java"],
      highlights: ["Uso de abstração", "Reutilização de código", "Conceitos de POO"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projetos" className="py-16 sm:py-24 px-6 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="section-label">Projetos</h2>
          <h3 className="text-3xl sm:text-5xl font-display font-bold italic text-slate-100 mt-4">Soluções Desenvolvidas</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col h-full overflow-hidden hover:translate-y-[-8px] transition-transform duration-300"
            >
              <div className="h-32 sm:h-40 bg-slate-800 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              </div>

              <h4 className="text-lg font-bold mb-3 text-slate-100 leading-tight">{project.title}</h4>
              <p className="text-slate-400 text-[13px] mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md text-blue-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/50">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-3">Destaques:</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <ChevronRight size={12} className="text-blue-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Java", level: 85, icon: "☕" },
    { name: "JavaScript", level: 90, icon: "JS" },
    { name: "MySQL", level: 80, icon: "DB" },
    { name: "Electron", level: 80, icon: "⚛️" },
    { name: "HTML/CSS", level: 95, icon: "</>" },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 overflow-hidden bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-label">Habilidades</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold mb-6 sm:mb-8 text-slate-100">Tecnologias e Ferramentas</h3>
            <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 leading-relaxed italic">
              "A tecnologia é o meio pelo qual construímos o futuro, um código por vez."
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
               <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Full Stack</span>
               <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Aplicações Desktop</span>
               <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Padrão MVC</span>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-600/20 rounded-lg sm:rounded-xl text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform text-xs sm:text-base">{skill.icon}</span>
                  <span className="font-bold text-slate-100 text-sm sm:text-base">{skill.name}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[120px] sm:max-w-none sm:w-1/2">
                   <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 1, delay: 0.5 }}
                       className="h-full bg-blue-500 glow-blue"
                     />
                   </div>
                   <span className="text-[10px] font-mono text-slate-500 font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-16 sm:py-24 px-6 relative">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-label">Contato</h2>
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-12 sm:mb-16 tracking-tighter transition-all">Vamos construir algo <span className="text-blue-500">incrível?</span></h3>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Email", value: "erickramosdeazevedo@gmail.com", icon: <Mail />, href: "mailto:erickramosdeazevedo@gmail.com" },
          { label: "WhatsApp", value: "(53) 98439-7497", icon: <MessageSquare />, href: "https://wa.me/5553984397497" },
          { label: "LinkedIn", value: "Erick Ramos", icon: <Linkedin />, href: "https://www.linkedin.com/in/erick-azevedo-ramos/" },
          { label: "GitHub", value: "ErickRamos00", icon: <Github />, href: "https://github.com/ErickRamos00" }
        ].map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 sm:p-8 glass-card rounded-[1.5rem] sm:rounded-[2rem] flex flex-col items-center gap-4 sm:gap-5 group"
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 transition-all duration-300 group-hover:text-white group-hover:scale-110 glow-blue">
              {contact.icon}
            </div>
            <div className="flex flex-col gap-1 truncate w-full text-center">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{contact.label}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 truncate">{contact.value}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-800/50 text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-sm font-bold tracking-tight leading-none uppercase">
        ERICK RAMOS<span className="text-blue-500">.</span>
      </div>
      <p className="text-[11px] text-slate-500 uppercase tracking-widest">
        © 2026 Erick Ramos de Azevedo - Todos os direitos reservados
      </p>
      <div className="flex items-center gap-8 uppercase tracking-[0.2em] text-[10px] font-bold text-slate-500">
         <a href="https://wa.me/5553984397497" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> WhatsApp</a>
         <a href="https://www.linkedin.com/in/erick-azevedo-ramos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> LinkedIn</a>
         <a href="https://github.com/ErickRamos00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> GitHub</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="overflow-x-hidden selection:bg-brand-blue/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
