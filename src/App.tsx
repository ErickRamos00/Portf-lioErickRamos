/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Truck,
  MapPin,
  Wallet,
  Route,
  Lock,
  Code2,
  Server,
  Database,
  MonitorSmartphone,
  GraduationCap,
  Briefcase,
  Check,
} from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";

// --- Dados ---

const CONTACT = {
  email: "erickramosdeazevedo@gmail.com",
  whatsapp: "https://wa.me/5553984397497",
  whatsappLabel: "(53) 98439-7497",
  linkedin: "https://www.linkedin.com/in/erickazevedoo/",
  github: "https://github.com/ErickRamos00",
};

type Featured = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  live?: string;
  liveLabel?: string;
  note?: string;
  logo?: string;
  cover: ReactNode;
};

const ImageCover = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
  />
);

// Rota Sul é um sistema privado de cliente: em vez de print, uma capa ilustrada.
const RotaSulCover = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#0c1220]">
    <div className="absolute inset-0 bg-grid opacity-40" />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <path d="M40 300 C 160 260, 180 140, 300 150 S 470 80, 600 60" fill="none" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="3" strokeDasharray="8 8" />
      <circle cx="40" cy="300" r="7" fill="#38bdf8" />
      <circle cx="300" cy="150" r="5" fill="#38bdf8" fillOpacity="0.7" />
      <circle cx="600" cy="60" r="9" fill="#f59e0b" />
      <circle cx="600" cy="60" r="20" fill="#f59e0b" fillOpacity="0.15" />
    </svg>
    <div className="absolute left-5 top-5 right-5 flex flex-wrap gap-2 sm:left-8 sm:top-8">
      {[
        { icon: <Route size={14} />, label: "Viagens" },
        { icon: <MapPin size={14} />, label: "Rastreamento" },
        { icon: <Wallet size={14} />, label: "Financeiro" },
      ].map((c) => (
        <span key={c.label} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 backdrop-blur">
          {c.icon} {c.label}
        </span>
      ))}
    </div>
    <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 sm:bottom-8 sm:left-8 sm:right-8 sm:gap-3">
      {[
        { k: "Entregas hoje", v: "48" },
        { k: "Frota ativa", v: "12" },
        { k: "A receber", v: "R$ 86k" },
      ].map((s) => (
        <div key={s.k} className="rounded-lg border border-white/10 bg-slate-950/70 p-2.5 backdrop-blur sm:p-3">
          <p className="text-[10px] text-slate-500 sm:text-xs">{s.k}</p>
          <p className="font-display text-base font-semibold text-white sm:text-lg">{s.v}</p>
        </div>
      ))}
    </div>
    <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-sky-500/10 p-4 text-sky-300 sm:block">
      <Truck size={40} strokeWidth={1.5} />
    </div>
  </div>
);

const featured: Featured[] = [
  {
    slug: "furico",
    name: "Furico",
    tagline: "Voz, tela e chat para comunidades",
    category: "App desktop · Tempo real",
    role: "Co-criador e desenvolvedor full stack",
    year: "2026",
    description:
      "Plataforma de comunicação para comunidades e grupos de amigos, com app nativo para Windows. Chamadas de voz, transmissão de tela e chat em tempo real conectados direto entre os participantes por WebRTC, sem abrir portas no roteador. A central gerencia contas, licenças, convites e sinalização com custo de infraestrutura baixo.",
    highlights: [
      "Voz e transmissão de tela P2P via WebRTC, com fallback por TURN",
      "Chat em tempo real com menções, reações, mídia e presença",
      "Jogos multiplayer dentro da call com servidor autoritativo",
      "App Windows com Tauri e atualização automática assinada",
    ],
    tech: ["React", "TypeScript", "Tauri (Rust)", "Node.js", "Fastify", "PostgreSQL", "WebRTC", "WebSocket"],
    live: "https://furico.app",
    liveLabel: "furico.app",
    note: "Código proprietário",
    logo: "/projects/furico-logo.png",
    cover: <ImageCover src="/projects/furico.webp" alt="Tela de chamada de voz do Furico" />,
  },
  {
    slug: "clipsai",
    name: "ClipsAi",
    tagline: "Cortes verticais com inteligência artificial",
    category: "SaaS · IA e vídeo",
    role: "Desenvolvedor full stack (colaborador)",
    year: "2026",
    description:
      "SaaS que transforma vídeos longos em cortes verticais prontos para Reels, TikTok e Shorts. A IA identifica os melhores trechos, enquadra e legenda automaticamente; o usuário ajusta tudo em um editor de vídeo no navegador. O processamento pesado roda em um worker com GPU que se atualiza sozinho a partir do site.",
    highlights: [
      "Pipeline de IA: corte, enquadramento 9:16 e legendas animadas",
      "Editor de vídeo completo no navegador, com timeline e templates",
      "Worker Python com GPU orquestrado por fila e deploy automático",
      "Assinaturas, créditos e pagamentos integrados",
    ],
    tech: ["TypeScript", "Bun", "PostgreSQL", "Python", "Storage S3", "Docker", "Railway"],
    live: "https://clipsai.com.br",
    liveLabel: "clipsai.com.br",
    note: "Código proprietário",
    logo: "/projects/clipsai-logo.png",
    cover: <ImageCover src="/projects/clipsai.webp" alt="Editor de vídeo do ClipsAi" />,
  },
  {
    slug: "rota-sul",
    name: "Rota Sul",
    tagline: "Gestão completa para transportadoras",
    category: "Sistema web · Logística",
    role: "Desenvolvedor full stack",
    year: "2026",
    description:
      "Sistema de gestão para transportadoras de cargas e empresas de turismo e fretamento. Cobre a operação de ponta a ponta: planejamento de viagens, entregas com comprovante, CRM comercial, contas a pagar e a receber, manutenção de frota, abastecimentos e relatórios gerenciais, com dados isolados por empresa.",
    highlights: [
      "Multiempresa com permissões e dados isolados por tenant",
      "Rastreamento ao vivo pelo celular do motorista e link público",
      "Financeiro com baixas, estornos e conciliação bancária",
      "Testes automatizados e deploy contínuo no edge",
    ],
    tech: ["Next.js", "React 19", "TypeScript", "Cloudflare Workers", "D1 / SQLite", "Drizzle ORM", "Better Auth", "Tailwind"],
    note: "Sistema privado de cliente",
    cover: <RotaSulCover />,
  },
];

const otherProjects = [
  {
    title: "BarberOS",
    description: "Gestão e agendamento para barbearias: equipe, serviços, clientes, agenda e indicadores financeiros.",
    tech: ["Node.js", "Express", "PostgreSQL", "Supabase"],
    repo: "https://github.com/ErickRamos00/BarberOS",
    live: "https://barber-os-three.vercel.app",
  },
  {
    title: "Nexus GTA VI Store",
    description: "Loja virtual temática com catálogo imersivo, navegação moderna e identidade inspirada em Vice City.",
    tech: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/ErickRamos00/nexus-gta-vi-store",
    live: "https://nexus-gta-vi-store.vercel.app",
  },
  {
    title: "Sistema Web — Prefeitura de Pelotas",
    description: "Sistema full stack para organização e gerenciamento de dados internos, com CRUD completo e arquitetura em camadas.",
    tech: ["Java", "MySQL", "JavaScript"],
    repo: "https://github.com/ErickRamos00/ProjetoRSTI",
    live: null as string | null,
  },
];

// --- Componentes base ---

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <Reveal className="mb-12 max-w-2xl sm:mb-16">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>}
  </Reveal>
);

const Tag = ({ children }: { children: ReactNode; key?: string }) => (
  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300">{children}</span>
);

// --- Seções ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Stack", href: "#stack" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-[#08090c]/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-display text-sm font-bold text-white">ER</span>
          <span className="font-display text-sm font-semibold text-white">Erick Ramos</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
              {l.name}
            </a>
          ))}
          <a href="#contato" className="btn-primary !py-2 !px-4">
            Contato
          </a>
        </div>

        <button className="rounded-lg p-2 text-slate-200 hover:bg-white/5 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-white/[0.06] bg-[#08090c]/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {[...links, { name: "Contato", href: "#contato" }].map((l) => (
                <a key={l.name} href={l.href} onClick={() => setIsOpen(false)} className="border-b border-white/[0.04] py-3 text-sm text-slate-300 hover:text-white">
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

    <div className="relative mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Disponível para novos projetos
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Erick Ramos de Azevedo
        </h1>
        <p className="mt-4 font-display text-xl text-slate-300 sm:text-2xl">
          Desenvolvedor Full Stack
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Construo produtos web e desktop de ponta a ponta: de sistemas de gestão para empresas a apps de comunicação em tempo real e SaaS com inteligência artificial em produção.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#projetos" className="btn-primary">
            Ver projetos <ArrowRight size={16} />
          </a>
          <a href="#contato" className="btn-secondary">
            Entrar em contato
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-slate-500">
          {[
            { href: CONTACT.github, icon: <Github size={20} />, label: "GitHub" },
            { href: CONTACT.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn" },
            { href: `mailto:${CONTACT.email}`, icon: <Mail size={20} />, label: "E-mail" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="transition-colors hover:text-white">
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:mt-20 md:grid-cols-4"
      >
        {[
          { v: "3", k: "Produtos em produção" },
          { v: "15+", k: "Projetos desenvolvidos" },
          { v: "2+ anos", k: "Desenvolvendo software" },
          { v: "Web · Desktop", k: "Plataformas" },
        ].map((s) => (
          <div key={s.k} className="bg-[#0b0d12] p-5 sm:p-6">
            <dt className="text-xs text-slate-500 sm:text-sm">{s.k}</dt>
            <dd className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">{s.v}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

const FeaturedProject = ({ project, index }: { project: Featured; index: number; key?: string }) => {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0d12] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-3 truncate text-xs text-slate-500">{project.liveLabel ?? project.name.toLowerCase().replace(" ", "")}</span>
            </div>
            <div className="aspect-[16/9]">{project.cover}</div>
          </div>
        </div>

        <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3">
            {project.logo ? (
              <img src={project.logo} alt="" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 object-contain p-1" />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                <Truck size={20} />
              </span>
            )}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-blue-400">{project.category}</p>
              <p className="text-xs text-slate-500">{project.year} · {project.role}</p>
            </div>
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-1 text-slate-300">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-blue-400" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Acessar {project.liveLabel} <ArrowUpRight size={16} />
              </a>
            )}
            {project.note && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <Lock size={13} /> {project.note}
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => (
  <section id="projetos" className="px-4 py-20 sm:px-6 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Trabalhos recentes"
        title="Projetos em destaque"
        description="Produtos reais, em uso, com usuários, pagamentos e infraestrutura de produção."
      />

      <div className="space-y-24 sm:space-y-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-28 sm:mt-36">
        <Reveal>
          <h3 className="text-xl font-semibold text-white">Outros projetos</h3>
          <p className="mt-2 text-sm text-slate-400">Projetos anteriores e de estudo, com código aberto no GitHub.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {otherProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-semibold text-white">{p.title}</h4>
                  <div className="flex shrink-0 gap-3 text-slate-500">
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${p.title}`} className="hover:text-white">
                      <Github size={18} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${p.title}`} className="hover:text-white">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">{p.description}</p>
                <p className="mt-5 text-xs text-slate-500">{p.tech.join(" · ")}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            Ver todos no GitHub <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="border-y border-white/[0.06] bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Do banco de dados à interface, com foco em produto.</h2>
        </Reveal>
      </div>
      <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-slate-400 lg:col-span-7">
        <p>
          Sou desenvolvedor full stack em Pelotas (RS) e estudante de Tecnologia em Sistemas para Internet no IFSul. Gosto de pegar um problema real e levar a solução até produção: modelagem de dados, API, interface, deploy e o que vem depois.
        </p>
        <p>
          Hoje trabalho em produtos que estão no ar com usuários de verdade: um app de comunicação em tempo real para Windows, uma plataforma de cortes de vídeo com IA e um sistema de gestão para transportadoras. Nesses projetos lido com WebRTC, processamento com GPU, pagamentos, sistemas multiempresa e entrega contínua.
        </p>
        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {[
            { icon: <Code2 size={18} />, t: "Código limpo", d: "Testes, tipagem e revisão." },
            { icon: <Server size={18} />, t: "Produção", d: "Deploy contínuo e monitoramento." },
            { icon: <MonitorSmartphone size={18} />, t: "Produto", d: "Interfaces claras e responsivas." },
          ].map((v) => (
            <div key={v.t} className="card p-4">
              <span className="text-blue-400">{v.icon}</span>
              <p className="mt-3 text-sm font-medium text-white">{v.t}</p>
              <p className="mt-1 text-xs text-slate-500">{v.d}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const Experience = () => {
  const items = [
    {
      icon: <Briefcase size={16} />,
      org: "Furico",
      role: "Co-criador e desenvolvedor full stack",
      period: "2026 — atual",
      text: "App de voz, tela e chat para comunidades. Arquitetura da central (Fastify + PostgreSQL), interface React, motor de voz WebRTC e app desktop com Tauri.",
    },
    {
      icon: <Briefcase size={16} />,
      org: "ClipsAi",
      role: "Desenvolvedor full stack",
      period: "2026 — atual",
      text: "SaaS de cortes de vídeo com IA. Desenvolvimento de funcionalidades do site, editor de vídeo e integração com o worker de processamento.",
    },
    {
      icon: <Briefcase size={16} />,
      org: "Rota Sul",
      role: "Desenvolvedor full stack",
      period: "2026",
      text: "Sistema de gestão para transportadoras: operação de viagens e entregas, CRM, financeiro, frota e rastreamento, publicado em Cloudflare Workers.",
    },
    {
      icon: <Briefcase size={16} />,
      org: "Prefeitura de Pelotas",
      role: "Desenvolvedor full stack (projeto)",
      period: "2024",
      text: "Sistema web para organização e gerenciamento de dados internos, com cadastro, edição e consulta de informações.",
    },
    {
      icon: <GraduationCap size={16} />,
      org: "IFSul — Instituto Federal Sul-rio-grandense",
      role: "Tecnólogo em Sistemas para Internet",
      period: "2024 — 2028",
      text: "Desenvolvimento web, redes e arquitetura de sistemas para internet.",
    },
    {
      icon: <GraduationCap size={16} />,
      org: "UniSenac",
      role: "Técnico em Desenvolvimento de Sistemas",
      period: "2024 — 2025",
      text: "Lógica de programação, banco de dados e metodologias de desenvolvimento.",
    },
  ];

  return (
    <section id="experiencia" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Trajetória" title="Experiência e formação" />
        <ol className="relative ml-3 border-l border-white/[0.08]">
          {items.map((it, i) => (
            <li key={it.org} className="relative pb-10 pl-8 last:pb-0">
              <Reveal delay={i * 0.05}>
                <span className="absolute -left-[13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0b0d12] text-blue-400">
                  {it.icon}
                </span>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-white">
                    {it.org} <span className="font-normal text-slate-400">· {it.role}</span>
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-slate-500">{it.period}</span>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Stack = () => {
  const groups = [
    { icon: <MonitorSmartphone size={18} />, title: "Front-end", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML / CSS"] },
    { icon: <Server size={18} />, title: "Back-end", items: ["Node.js", "Fastify", "Express", "Bun", "Java", "Python", "WebSocket"] },
    { icon: <Database size={18} />, title: "Dados", items: ["PostgreSQL", "MySQL", "SQLite / D1", "Drizzle ORM", "Supabase", "Storage S3 / R2"] },
    { icon: <Code2 size={18} />, title: "Infra e desktop", items: ["Cloudflare Workers", "Railway", "Vercel", "Docker", "GitHub Actions", "Tauri", "Electron", "WebRTC"] },
  ];

  return (
    <section id="stack" className="border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Stack" title="Tecnologias que uso no dia a dia" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-2.5 text-white">
                  <span className="text-blue-400">{g.icon}</span>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="px-4 pb-20 sm:px-6 sm:pb-28">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-600/15 via-[#0b0d12] to-[#0b0d12] p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Vamos conversar sobre o seu projeto?</h2>
              <p className="mt-4 max-w-md text-slate-400">
                Estou aberto a projetos freelance, parcerias e oportunidades. Respondo rápido pelo WhatsApp ou por e-mail.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageSquare size={16} /> Chamar no WhatsApp
                </a>
                <a href={`mailto:${CONTACT.email}`} className="btn-secondary">
                  <Mail size={16} /> Enviar e-mail
                </a>
              </div>
            </div>

            <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-black/20">
              {[
                { icon: <Mail size={18} />, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: <MessageSquare size={18} />, label: "WhatsApp", value: CONTACT.whatsappLabel, href: CONTACT.whatsapp },
                { icon: <Linkedin size={18} />, label: "LinkedIn", value: "erickazevedoo", href: CONTACT.linkedin },
                { icon: <Github size={18} />, label: "GitHub", value: "ErickRamos00", href: CONTACT.github },
              ].map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]">
                    <span className="text-slate-500 group-hover:text-blue-400">{c.icon}</span>
                    <span className="w-20 shrink-0 text-xs text-slate-500">{c.label}</span>
                    <span className="min-w-0 flex-1 truncate text-sm text-slate-200">{c.value}</span>
                    <ArrowUpRight size={16} className="shrink-0 text-slate-600 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/[0.06] px-4 py-8 sm:px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
      <p>© {new Date().getFullYear()} Erick Ramos de Azevedo</p>
      <div className="flex items-center gap-5">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
        <a href={`mailto:${CONTACT.email}`} aria-label="E-mail" className="hover:text-white"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
