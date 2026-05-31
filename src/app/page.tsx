import Image from "next/image";

type ImageInfo = {
  src: string;
  alt: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;

const images = {
  hero: img("photo-1466692476868-aef1dfb1e735"),
  values: img("photo-1416879595882-3373a0480b5b"),
  services: [
    img("photo-1500530855697-b586d89ba3ee"),
    img("photo-1518531933037-91b2f5f229cc"),
    img("photo-1441974231531-c6227db76b6e"),
    img("photo-1523413651479-597eb2da0ad6"),
  ],
  about: img("photo-1501004318641-b39e6451bec6"),
  video: img("photo-1526397751294-331021109fbd"),
  wide: img("photo-1494526585095-c41746248156"),
  gallery: [
    img("photo-1497250681960-ef046c08a56e"),
    img("photo-1492496913980-501348b61469"),
    img("photo-1506744038136-46273834b3fb"),
    img("photo-1502082553048-f009c37129b9"),
    img("photo-1483794344563-d27a8d18014e"),
  ],
  faq: img("photo-1504198453319-5ce911bafcde"),
};

const nav = ["About", "Services", "Projects", "Contact"];

const values = [
  ["Passion in every work", "Deeply considered green landscapes, tailored to how each client lives."],
  ["Collaboration on top", "A calm process that combines your vision with our studio expertise."],
  ["Sustainability in check", "Planting strategies that age beautifully and protect natural resources."],
  ["Creativity unleashed", "Every plan is composed from the site, not repeated from a template."],
];

const services = [
  ["Home Garden", "Crafting personal sanctuaries for everyday rituals.", ["Home", "Garden"]],
  ["Plant Selection", "Hand-picked species for climate, texture, and longevity.", ["Plants", "Expert"]],
  ["Landscape Design", "Architectural outdoor rooms shaped by season and light.", ["Design", "Planning"]],
  ["Expert Consultation", "Clear direction for renovations, care plans, and estates.", ["Consult", "Care"]],
];

const process = [
  ["01", "Design Consultation", "We listen closely, survey the site, and define the garden vision."],
  ["02", "Design & Planning", "Our studio develops a planting, material, and movement strategy."],
  ["03", "Implementation", "Specialist teams build, plant, and refine every detail on site."],
  ["04", "Garden Decorating", "Final styling brings structure, comfort, and seasonal character."],
];

const team = [
  ["Sarah Turner", "Founder & Lead Designer", images.gallery[0]],
  ["John Mason", "Landscape Architect", images.gallery[1]],
  ["Emily Parker", "Horticulture Expert", images.gallery[4]],
  ["David Anderson", "Project Manager", images.services[2]],
];

const projects = [
  ["Aster Courtyard", "2024", "Brooklyn, NY", "Indoor Garden", images.services[1]],
  ["Hachioji Garden", "2023", "Charleston, SC", "Public Garden", images.hero],
  ["Moss House", "2022", "Portland, OR", "Landscape Design", images.wide],
];

const faqs = [
  ["What is the process for getting a garden design?", "We begin with a consultation, site review, concept direction, and a clear proposal before moving into design development and installation."],
  ["How long does it take to complete a garden design project?", "Small projects may take a few weeks. Larger residential landscapes often take several months depending on scope, permitting, materials, and planting seasons."],
  ["Do you offer maintenance after the garden is installed?", "Yes. We create seasonal care plans and can coordinate ongoing horticultural support."],
  ["Can I incorporate sustainability values into my garden design?", "Absolutely. Native planting, water-wise irrigation, composting, and habitat support are part of our core approach."],
];

function Label({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${light ? "text-white/70" : "text-[var(--muted)]"}`}>
      [ {children} ]
    </p>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className={`text-base font-medium ${light ? "text-white" : "text-[var(--forest)]"}`}>
      Prime Landscaping
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-4 text-white md:mix-blend-difference md:px-10">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full bg-transparent px-1 py-2 md:backdrop-blur-[2px]">
        <Logo light />
        <div className="hidden items-center gap-9 text-[11px] font-semibold uppercase md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="opacity-80 underline-offset-8 transition hover:opacity-100 hover:underline">
              {item}
            </a>
          ))}
        </div>
        <a className="hidden rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase text-black mix-blend-normal md:inline-flex" href="#contact">
          Contact Us
        </a>
        <details className="group md:hidden">
          <summary className="relative z-[70] flex h-9 w-16 cursor-pointer list-none items-center justify-center rounded-full bg-white text-[10px] font-semibold text-[var(--forest)]" aria-label="Open menu">MENU</summary>
          <div className="fixed inset-0 z-[60] bg-white px-7 pb-10 pt-28 text-[var(--forest)] mix-blend-normal">
            <div className="grid gap-6 text-4xl font-semibold uppercase leading-none">
              {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
            </div>
            <a className="mt-10 inline-flex rounded-full bg-[var(--forest)] px-6 py-3 text-xs font-semibold uppercase text-white" href="#contact">
              Contact Us
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function BgImage({ src, alt, priority = false }: ImageInfo & { priority?: boolean }) {
  return <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />;
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-[var(--forest)] text-white">
      <video
        aria-label="Cinematic garden landscape background"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={images.hero}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto grid min-h-svh max-w-[1320px] content-end gap-7 px-5 pb-11 pt-32 md:grid-cols-12 md:px-10 lg:pb-14">
        <div className="md:col-span-8">
          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.94] md:text-6xl lg:text-7xl">
            Create your dream garden
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/76">
            Crafting dream gardens with passion, creativity, and sustainability for homes, estates, and quiet public spaces.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a className="btn bg-[var(--cream)] text-[var(--forest)]" href="#contact">Get Started</a>
            <a className="text-sm font-semibold underline underline-offset-8" href="#projects">Explore Projects</a>
          </div>
          <div className="mt-8 flex max-w-xs items-center gap-5 text-xs">
            <span>01</span><span className="h-px flex-1 bg-white"></span><span>03</span>
          </div>
        </div>
        <div className="grid gap-4 md:col-span-4 md:content-end">
          <div className="glass ml-auto max-w-72 p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.12em]">Located</span>
            <h2 className="mt-7 text-lg font-semibold">Hachioji Garden</h2>
            <p className="mt-2 text-xs leading-5 text-white/75">A secluded green composition designed around water, shade, and stillness.</p>
          </div>
          <div className="glass ml-auto w-40 p-4">
            <p className="text-2xl font-semibold">500+</p>
            <p className="text-xs text-white/75">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="about" className="section bg-[var(--cream)]">
      <div className="container-grid">
        <div className="md:col-span-7">
          <Label>Values</Label>
          <h2 className="reveal-up mt-28 text-5xl font-semibold uppercase leading-none text-[var(--forest)] md:text-7xl">
            We are different in every ways
          </h2>
        </div>
        <div className="reveal-soft mt-16 md:col-span-4 md:col-start-9">
          {["Landscape Design", "Indoor Garden"].map((item, i) => (
            <div key={item} className="flex justify-between border-b border-[var(--line)] py-4 text-sm text-[var(--forest)]">
              <span>{item}</span><strong>0{i + 1}</strong>
            </div>
          ))}
          <a className="btn mt-28 w-full bg-[var(--forest)] text-white" href="#contact">Get Started</a>
        </div>
        <div className="reveal-image relative mt-16 aspect-[3/4] overflow-hidden rounded-3xl md:col-span-4">
          <BgImage src={images.values} alt="Layered garden foliage" />
        </div>
        <div className="stagger mt-16 grid gap-8 sm:grid-cols-2 md:col-span-7 md:col-start-6">
          {values.map(([title, body]) => (
            <article key={title} className="border-t border-[var(--line)] pt-7">
              <span className="grid size-9 place-items-center rounded-sm bg-[var(--sage)] text-[var(--forest)]">+</span>
              <h3 className="mt-7 text-lg font-semibold text-[var(--forest)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-[var(--off)]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="reveal-soft"><Label>Services</Label></div>
        <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, body, tags], i) => (
            <article key={title as string} className="group relative min-h-[480px] overflow-hidden rounded-3xl bg-[var(--forest)] p-6 text-white">
              <BgImage src={images.services[i]} alt={`${title} landscape service`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/15" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex flex-wrap gap-2 pr-12">
                  {(tags as string[]).map((tag) => <span key={tag} className="rounded-full border border-white/40 px-3 py-1 text-[11px]">{tag}</span>)}
                </div>
                <button className="absolute right-0 top-0 grid size-12 place-items-center rounded-full bg-white text-[var(--forest)] transition group-hover:rotate-45" aria-label={`${title} details`}>
                  <ArrowUpRightIcon />
                </button>
                <div>
                  <h3 className="text-4xl font-semibold uppercase leading-none">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/78">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section bg-[var(--moss)] text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="reveal-soft"><Label light>Process</Label></div>
        <div className="stagger mt-16 grid gap-10 md:grid-cols-4">
          {process.map(([num, title, body]) => (
            <article key={num} className="relative border-t border-white/35 pt-8">
              <span className="absolute -top-2 left-0 size-4 rounded-full bg-[var(--cream)]" />
              <p className="text-sm font-semibold">{num} | {title}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section bg-[var(--cream)]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="reveal-image relative flex min-h-80 items-end overflow-hidden rounded-3xl p-8 text-white">
          <BgImage src={images.about} alt="Indoor botanical studio" />
          <div className="absolute inset-0 bg-black/45" />
          <h2 className="relative text-5xl font-semibold uppercase md:text-7xl">About Us</h2>
        </div>
        <div className="stagger mt-16 grid gap-10 md:grid-cols-12">
          <h3 className="text-2xl font-semibold uppercase leading-tight text-[var(--forest)] md:col-span-3">Crafting dream gardens into reality</h3>
          <p className="text-sm leading-7 text-[var(--muted)] md:col-span-4">At Prime Landscaping, we transform outdoor spaces into breathing gardens that tell quiet, personal stories. Our work begins with listening and ends with landscapes that mature gracefully.</p>
          <p className="text-sm leading-7 text-[var(--muted)] md:col-span-4">Since our founding, sustainability, innovation, and collaboration have shaped every residential courtyard, public garden, and interior planting plan we create.</p>
        </div>
        <div className="stagger mt-10 grid gap-5 md:grid-cols-12">
          <div className="relative aspect-video overflow-hidden rounded-2xl md:col-span-4">
            <BgImage src={images.video} alt="Garden showroom video thumbnail" />
            <button className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--cream)] text-xs font-semibold text-[var(--forest)]" aria-label="Play video">PLAY</button>
          </div>
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl md:col-span-8">
            <BgImage src={images.wide} alt="Wide garden project view" />
            <a href="#projects" className="absolute bottom-5 right-5 text-sm font-semibold text-white underline underline-offset-8">Explore Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamGallery() {
  return (
    <>
      <section className="section bg-[var(--off)]">
        <div className="stagger mx-auto grid max-w-[1320px] gap-5 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {team.map(([name, role, src]) => (
            <article key={name} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <BgImage src={src} alt={`${name} portrait`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs text-white/75">{role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="reveal-soft mt-20 border-y border-[var(--line)] bg-[var(--sage)] py-8">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-8 px-5 text-sm font-semibold text-[var(--muted)] md:px-10">
            {["Logipsum", "Lush Studio", "Botanica", "Greenline", "Mossworks", "Root Lab"].map((logo) => <span key={logo}>{logo}</span>)}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--cream)]">
        <div className="container-grid">
          <div className="md:col-span-3">
            <Label>Gallery</Label>
            <h2 className="reveal-up mt-10 text-5xl font-semibold uppercase leading-none text-[var(--forest)] md:text-7xl">Our Work</h2>
          </div>
          <div className="stagger grid gap-4 sm:grid-cols-2 md:col-span-9 lg:grid-cols-4">
            {images.gallery.map((src, i) => (
              <div key={src} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "aspect-[3/5] sm:row-span-2" : i === 3 ? "aspect-[4/5] lg:row-span-2" : "aspect-square"}`}>
                <BgImage src={src} alt={`Garden portfolio image ${i + 1}`} />
                {i === 3 && <div className="absolute inset-0 grid place-items-center bg-[var(--forest)]/65 text-center text-sm text-white">Project A<br />2023</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonials() {
  return (
    <section className="section bg-[var(--mint)] text-center">
      <div className="reveal-soft"><Label>Testimonial</Label></div>
      <blockquote className="reveal-up mx-auto mt-10 max-w-3xl text-2xl font-semibold leading-snug text-[var(--forest)] md:text-4xl">
        Prime Landscaping turned our backyard into a haven of tranquility, beauty, and sustainable practice.
      </blockquote>
      <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Steve Evans - CEO of Maple Craft</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section bg-[var(--off)]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="reveal-image relative min-h-72 overflow-hidden rounded-3xl p-8 text-white">
          <BgImage src={images.hero} alt="Secret garden project" />
          <div className="absolute inset-0 bg-black/45" />
          <h2 className="relative mt-24 text-5xl font-semibold uppercase md:text-7xl">Our Projects</h2>
        </div>
        <button className="my-12 text-sm font-semibold text-[var(--forest)]">Sort by A - Z ^</button>
        <div className="stagger grid gap-7 md:grid-cols-3">
          {projects.sort().map(([title, year, location, service, src]) => (
            <article key={title} className="border-t border-[var(--line)] pt-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <BgImage src={src} alt={`${title} garden project`} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--forest)]">{title}</h3>
              <dl className="mt-5 grid grid-cols-3 gap-4 text-[11px] uppercase text-[var(--muted)]">
                <div><dt>Year</dt><dd className="mt-1 font-semibold text-[var(--forest)]">{year}</dd></div>
                <div><dt>Location</dt><dd className="mt-1 font-semibold text-[var(--forest)]">{location}</dd></div>
                <div><dt>Service</dt><dd className="mt-1 font-semibold text-[var(--forest)]">{service}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section bg-[var(--mint)]">
      <div className="container-grid">
        <div className="md:col-span-6">
          <Label>F.A.Q</Label>
          <h2 className="reveal-up mt-10 text-5xl font-semibold uppercase leading-none text-[var(--forest)] md:text-7xl">
            Frequently asked questions
          </h2>
          <div className="reveal-image relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl">
            <BgImage src={images.faq} alt="Chair in a quiet garden corner" />
          </div>
        </div>
        <div className="stagger md:col-span-6 md:pt-28">
          {faqs.map(([question, answer], i) => (
            <details key={question} className="group border-b border-[var(--line)] py-6" open={i === 1}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[var(--forest)]">
                {question}<span className="transition group-open:rotate-180">v</span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = {
    Support: ["FAQ", "User Guide", "Testimonial", "Customer"],
    Links: ["About Us", "Stories", "Projects", "Blog"],
    Services: ["Home Garden", "Plant Selection", "Hardscaping", "Public Garden"],
  };

  return (
    <footer id="contact" className="rounded-t-[2rem] bg-[var(--forest)] px-5 py-16 text-white md:px-10">
      <div className="reveal-soft mx-auto grid max-w-[1320px] gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Stay updated with our latest projects and gardening tips.</p>
          <form className="mt-8 flex max-w-2xl items-center bg-[var(--cream)] p-2">
            <input className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-[var(--forest)] outline-none" placeholder="Enter your email address ..." aria-label="Email address" />
            <button className="grid size-11 place-items-center rounded-full bg-[var(--sage)] text-sm font-semibold text-[var(--forest)]" aria-label="Subscribe">-&gt;</button>
          </form>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-6">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase">{title}</h3>
              <ul className="mt-5 grid gap-3 text-xs uppercase text-white/70">
                {links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1320px] flex-wrap justify-between gap-4 border-t border-white/25 pt-6 text-[11px] uppercase text-white/60">
        <p>Courtesy (c) 2026. All rights reserved.</p>
        <p>Privacy Policy  |  Terms & Condition</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Values />
      <Services />
      <Process />
      <About />
      <TeamGallery />
      <Testimonials />
      <Projects />
      <FAQ />
      <Footer />
    </main>
  );
}
