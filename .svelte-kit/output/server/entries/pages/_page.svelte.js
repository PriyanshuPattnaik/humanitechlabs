import "clsx";
import { i as ensure_array_like, d as attr_class, j as attr_style, h as escape_html, e as attr, c as pop, p as push, k as stringify } from "../../chunks/index.js";
function CallToAction($$payload, $$props) {
  push();
  const ctaButtons = [
    { text: "Start a Project", primary: true },
    { text: "Join Our Research", primary: false },
    { text: "Partner with Us", primary: true },
    { text: "Explore Open Source", primary: false }
  ];
  let visible = false;
  let formData = { name: "", email: "", message: "" };
  const each_array = ensure_array_like(ctaButtons);
  $$payload.out += `<section${attr_class("cta-section svelte-1kg5an3", void 0, { "visible": visible })}><div class="container svelte-1kg5an3"><h2 class="section-title svelte-1kg5an3">Ready to Create Impact?</h2> <p class="section-description svelte-1kg5an3">Join us in building technology that matters. Whether you're a researcher, developer, 
      or organization seeking solutions, let's collaborate to create a better tomorrow.</p> <div class="cta-grid svelte-1kg5an3"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let button = each_array[i];
    $$payload.out += `<button${attr_class("cta-button svelte-1kg5an3", void 0, { "primary": button.primary })}${attr_style(`animation-delay: ${stringify(i * 0.1)}s`)}>${escape_html(button.text)} <div class="button-shine svelte-1kg5an3"></div></button>`;
  }
  $$payload.out += `<!--]--></div> <div class="contact-form svelte-1kg5an3"><form><div class="form-group svelte-1kg5an3"><input type="text" placeholder="Your Name"${attr("value", formData.name)} required class="svelte-1kg5an3"/></div> <div class="form-group svelte-1kg5an3"><input type="email" placeholder="Your Email"${attr("value", formData.email)} required class="svelte-1kg5an3"/></div> <div class="form-group svelte-1kg5an3"><textarea placeholder="Your Message" required class="svelte-1kg5an3">`;
  const $$body = escape_html(formData.message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <button type="submit" class="submit-button primary svelte-1kg5an3">Send Message <div class="button-shine svelte-1kg5an3"></div></button></form></div></div></section>`;
  pop();
}
function Hero($$payload, $$props) {
  push();
  let visible = false;
  let currentWordIndex = 0;
  let isAnimating = false;
  const rotatingWords = [
    "HUMANITY",
    "IMPACT",
    "CHANGE",
    "PROGRESS",
    "TOMORROW"
  ];
  let typedText = "";
  let particles = [];
  const each_array = ensure_array_like(particles);
  $$payload.out += `<section${attr_class("hero svelte-hnkptx", void 0, { "visible": visible })}><div class="particles svelte-hnkptx"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let particle = each_array[$$index];
    $$payload.out += `<div class="particle svelte-hnkptx"${attr_style(`left: ${stringify(particle.x)}%; top: ${stringify(particle.y)}%; animation-delay: ${stringify(particle.delay)}s;`)}></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="hero-background svelte-hnkptx"><div class="gradient-overlay svelte-hnkptx"></div></div> <div class="container svelte-hnkptx"><div class="hero-content svelte-hnkptx"><div class="title-wrapper svelte-hnkptx"><h1 class="hero-title svelte-hnkptx"><span class="word primary svelte-hnkptx">TECH</span> <span class="word secondary svelte-hnkptx">FOR</span> <span${attr_class("word rotating svelte-hnkptx", void 0, { "animating": isAnimating })}>${escape_html(rotatingWords[currentWordIndex])}</span> <span class="word accent svelte-hnkptx">UPLIFTING.</span></h1> <div class="title-underline svelte-hnkptx"></div></div> <div class="subtitle-container svelte-hnkptx"><p class="hero-subtitle typing svelte-hnkptx">${escape_html(typedText)}<span class="cursor svelte-hnkptx">|</span></p> <p class="hero-description svelte-hnkptx">Transforming global challenges through breakthrough research, 
          open-source innovation, and technology that serves humanity first.</p> <div class="tags svelte-hnkptx"><span class="tag svelte-hnkptx"><span class="tag-icon svelte-hnkptx">🔬</span> Breakthrough Research</span> <span class="tag svelte-hnkptx"><span class="tag-icon svelte-hnkptx">⚡</span> Ethical AI Systems</span> <span class="tag svelte-hnkptx"><span class="tag-icon svelte-hnkptx">🌍</span> Global Impact Focus</span></div></div> <div class="cta-container svelte-hnkptx"><div class="primary-cta svelte-hnkptx"><a href="#contact" class="cta-button primary svelte-hnkptx"><span class="svelte-hnkptx">Start Building</span> <span class="button-arrow svelte-hnkptx">→</span></a> <a href="#research" class="cta-button secondary svelte-hnkptx"><span class="svelte-hnkptx">Explore Research</span></a></div> <div class="profile-card svelte-hnkptx"><div class="profile-icon-wrapper svelte-hnkptx"><img src="/images/4.png" alt="Hume AI" class="profile-icon svelte-hnkptx"/> <div class="status-indicator svelte-hnkptx"></div></div> <div class="profile-text svelte-hnkptx"><strong class="svelte-hnkptx">Meet Hume</strong> <span class="svelte-hnkptx">Your AI research companion ready to solve tomorrow's challenges</span></div></div></div> <div class="metrics svelte-hnkptx"><div class="metric svelte-hnkptx"><span class="metric-number svelte-hnkptx">20+</span> <span class="metric-label svelte-hnkptx">Impact Domains</span></div> <div class="metric svelte-hnkptx"><span class="metric-number svelte-hnkptx">100%</span> <span class="metric-label svelte-hnkptx">Open Source</span></div> <div class="metric svelte-hnkptx"><span class="metric-number svelte-hnkptx">∞</span> <span class="metric-label svelte-hnkptx">Potential Impact</span></div></div></div></div> <div class="scroll-indicator svelte-hnkptx"><div class="scroll-text svelte-hnkptx">Scroll to explore</div> <div class="scroll-arrow svelte-hnkptx">↓</div></div></section>`;
  pop();
}
function About($$payload, $$props) {
  push();
  let mounted = false;
  let impactCounter = 0;
  let domainsCounter = 0;
  let collaborationsCounter = 0;
  $$payload.out += `<section class="about svelte-wz6oel"><div class="about-background svelte-wz6oel"><video class="background-video svelte-wz6oel" autoplay loop muted playsinline><source src="/images/aboutanimation.mp4" type="video/mp4" class="svelte-wz6oel"/></video> <div class="gradient-overlay svelte-wz6oel"></div></div> <div class="container svelte-wz6oel"><div${attr_class("hero-section svelte-wz6oel", void 0, { "visible": mounted })}><div class="title-container svelte-wz6oel"><h1 class="main-title svelte-wz6oel"><span class="code-bracket svelte-wz6oel">//</span> BRIDGING <span class="highlight svelte-wz6oel">HUMANITY</span> <br class="svelte-wz6oel"/> <span class="ampersand svelte-wz6oel">&amp;</span> <span class="tech-text svelte-wz6oel">TECHNOLOGY</span></h1> <div class="subtitle-container svelte-wz6oel"><p class="subtitle svelte-wz6oel">INNOVATION WITH IMPACT</p> <div class="typing-indicator svelte-wz6oel"><span class="cursor svelte-wz6oel">|</span></div></div></div></div> <div${attr_class("stats-section svelte-wz6oel", void 0, { "visible": mounted })}><div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">${escape_html(impactCounter.toLocaleString())}+</div> <div class="stat-label svelte-wz6oel">Lives Impacted</div></div> <div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">${escape_html(domainsCounter)}+</div> <div class="stat-label svelte-wz6oel">Impact Domains</div></div> <div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">${escape_html(collaborationsCounter)}+</div> <div class="stat-label svelte-wz6oel">Global Partners</div></div></div> <div class="content-grid svelte-wz6oel"><div class="main-content svelte-wz6oel"><div class="intro-section svelte-wz6oel"><h2 class="section-title svelte-wz6oel">Our Mission</h2> <p class="lead-text svelte-wz6oel">We architect <strong class="svelte-wz6oel">ethical AI</strong>, <strong class="svelte-wz6oel">scalable technology</strong>, and <strong class="svelte-wz6oel">inclusive digital ecosystems</strong> to empower the next billion people. At Humanitech Labs, we transform breakthrough research into real-world solutions that address humanity's most pressing challenges.</p></div> <div class="philosophy-section svelte-wz6oel"><h3 class="philosophy-title svelte-wz6oel"><span class="code-comment svelte-wz6oel">/* Our Approach */</span></h3> <p class="philosophy-text svelte-wz6oel">Every algorithm we develop, every system we build, and every innovation we create is designed with one principle: <em class="svelte-wz6oel">technology should amplify human potential, not replace it</em>. We operate at the intersection of cutting-edge research and social impact, ensuring our work creates lasting positive change.</p> <div class="approach-grid svelte-wz6oel"><div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">🧬</div> <h4 class="svelte-wz6oel">Research-Driven</h4> <p class="svelte-wz6oel">Groundbreaking research in AI, IoT, blockchain, and emerging technologies</p></div> <div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">🌍</div> <h4 class="svelte-wz6oel">Impact-Focused</h4> <p class="svelte-wz6oel">Solutions addressing healthcare, education, climate, and social equity</p></div> <div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">🤝</div> <h4 class="svelte-wz6oel">Collaborative</h4> <p class="svelte-wz6oel">Open-source development with global research institutions and NGOs</p></div></div></div> <div class="domains-preview svelte-wz6oel"><h3 class="domains-title svelte-wz6oel">Impact Domains</h3> <div class="domain-tags svelte-wz6oel"><span class="domain-tag svelte-wz6oel">Healthcare AI</span> <span class="domain-tag svelte-wz6oel">AgriTech</span> <span class="domain-tag svelte-wz6oel">Climate Solutions</span> <span class="domain-tag svelte-wz6oel">Education Tech</span> <span class="domain-tag svelte-wz6oel">Accessibility</span> <span class="domain-tag svelte-wz6oel">Financial Inclusion</span> <span class="domain-tag svelte-wz6oel">Disaster Management</span> <span class="domain-tag svelte-wz6oel">Space Tech</span></div></div></div> <div class="mission-sidebar svelte-wz6oel"><div class="mission-points svelte-wz6oel"><div class="point-group svelte-wz6oel"><div class="point svelte-wz6oel" data-number="01"><h4 class="svelte-wz6oel">RESEARCH</h4> <p class="svelte-wz6oel">Pushing boundaries in ethical AI and emerging technologies</p></div> <div class="point svelte-wz6oel" data-number="02"><h4 class="svelte-wz6oel">INNOVATE</h4> <p class="svelte-wz6oel">Building scalable solutions for real-world challenges</p></div> <div class="point svelte-wz6oel" data-number="03"><h4 class="svelte-wz6oel">IMPACT</h4> <p class="svelte-wz6oel">Empowering communities through technology for good</p></div></div></div> <div class="cta-sidebar svelte-wz6oel"><div class="cta-content svelte-wz6oel"><h4 class="svelte-wz6oel">Ready to Build Impact?</h4> <p class="svelte-wz6oel">Join us in creating technology that matters</p> <a href="/contact" class="cta-button svelte-wz6oel"><span class="svelte-wz6oel">Collaborate with Us</span> <span class="arrow svelte-wz6oel">→</span></a></div></div></div></div></div></section>`;
  pop();
}
function Research($$payload, $$props) {
  push();
  let activeCard = null;
  let scrollY = 0;
  const researchAreas = [
    {
      id: "ethical-ai",
      title: "Ethical AI & ML",
      subtitle: "Building Human-Centered Intelligence",
      description: "Developing bias-free AI systems for disease prediction, drug discovery, and agricultural optimization. Our models prioritize fairness, transparency, and global accessibility.",
      impact: "50+ Lives Impacted",
      domains: ["Healthcare", "Agriculture", "Climate"],
      icon: "🧠"
    },
    {
      id: "assistive-tech",
      title: "Assistive Technology",
      subtitle: "Technology Without Barriers",
      description: "Creating IoT prosthetics, AI-powered sign language recognition, and voice-enabled systems that ensure technology serves everyone, regardless of ability.",
      impact: "Working on 5+ Accessibility Solutions",
      domains: ["Accessibility", "IoT", "Inclusion"],
      icon: "🤝"
    },
    {
      id: "climate-tech",
      title: "Climate Intelligence",
      subtitle: "Data-Driven Environmental Action",
      description: "Leveraging satellite imagery, IoT sensors, and predictive analytics to combat climate change through renewable energy optimization and carbon tracking.",
      impact: "1 Climate Project",
      domains: ["Environment", "Sustainability", "Energy"],
      icon: "🌍"
    },
    {
      id: "social-systems",
      title: "Social Impact Systems",
      subtitle: "Technology for Social Justice",
      description: "Building blockchain governance platforms, digital identity systems, and civic engagement tools that promote transparency and democratic participation.",
      impact: "Aiming to Empower 1M+ Citizens",
      domains: ["Governance", "Transparency", "Democracy"],
      icon: "⚖️"
    },
    {
      id: "education-ai",
      title: "Educational AI",
      subtitle: "Democratizing Quality Learning",
      description: "Developing personalized learning platforms, multilingual AI tutors, and AR/VR educational experiences for underserved communities worldwide.",
      impact: "100+ Students Reached",
      domains: ["Education", "AI", "Global Access"],
      icon: "📚"
    },
    {
      id: "open-innovation",
      title: "Open Source Innovation",
      subtitle: "Collaborative Global Research",
      description: "Leading open-source initiatives that accelerate breakthrough discoveries and ensure technological advances benefit humanity as a whole.",
      impact: "A Growing Developer Community",
      domains: ["Open Source", "Collaboration", "Global"],
      icon: "🔓"
    }
  ];
  const each_array = ensure_array_like(researchAreas);
  $$payload.out += `<section class="research svelte-1qi257a"><div class="research-background svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * 0.3)}px)`)}></div> <div class="geometric-elements svelte-1qi257a"><div class="floating-element svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * -0.2)}px) rotate(${stringify(scrollY * 0.1)}deg)`)}></div> <div class="floating-element-2 svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * 0.15)}px) rotate(${stringify(scrollY * -0.08)}deg)`)}></div></div> <div class="container svelte-1qi257a"><div class="research-hero svelte-1qi257a"><div class="hero-badge svelte-1qi257a"><span class="badge-text svelte-1qi257a">BREAKTHROUGH RESEARCH</span></div> <h2 class="section-title svelte-1qi257a">BUILDING THE FUTURE OF <span class="highlight-text svelte-1qi257a">HUMAN-CENTERED TECH</span></h2> <p class="hero-subtitle svelte-1qi257a">Where cutting-edge research meets real-world impact. We architect solutions that don't just push technological boundaries—they uplift humanity.</p></div> <div class="research-grid svelte-1qi257a"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let area = each_array[index];
    const each_array_1 = ensure_array_like(area.domains);
    $$payload.out += `<div${attr_class("research-card svelte-1qi257a", void 0, { "active": activeCard === area.id })}${attr_style(`animation-delay: ${stringify(index * 0.1)}s`)} role="button" tabindex="0"><div class="card-content svelte-1qi257a"><div class="card-header svelte-1qi257a"><div class="card-icon svelte-1qi257a" role="img"${attr("aria-label", area.title)}>${escape_html(area.icon)}</div> <div class="card-impact svelte-1qi257a">${escape_html(area.impact)}</div></div> <h3 class="card-title svelte-1qi257a">${escape_html(area.title)}</h3> <p class="card-subtitle svelte-1qi257a">${escape_html(area.subtitle)}</p> <p class="card-description svelte-1qi257a">${escape_html(area.description)}</p> <div class="card-domains svelte-1qi257a"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let domain = each_array_1[$$index];
      $$payload.out += `<span class="domain-tag svelte-1qi257a">${escape_html(domain)}</span>`;
    }
    $$payload.out += `<!--]--></div> <div class="card-arrow svelte-1qi257a"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="svelte-1qi257a"><path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1qi257a"></path></svg></div></div> <div class="card-glow svelte-1qi257a"></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="research-cta svelte-1qi257a"><div class="cta-content svelte-1qi257a"><h3 class="cta-title svelte-1qi257a">Ready to Shape Tomorrow?</h3> <p class="cta-description svelte-1qi257a">Join our global research community and help build technology that matters.</p> <div class="cta-buttons svelte-1qi257a"><button class="cta-primary svelte-1qi257a">Explore Open Research</button> <button class="cta-secondary svelte-1qi257a">Collaborate with Us</button></div></div></div></div></section>`;
  pop();
}
function ImpactDomains($$payload, $$props) {
  push();
  let domains = [
    {
      title: "Healthcare & Medicine",
      icon: "🧬",
      tagline: "Healing Through Intelligence",
      description: "AI-powered diagnostics revolutionizing patient care",
      details: "From predictive disease modeling to personalized treatment plans, we're building the future of medicine where AI saves lives before symptoms appear.",
      metrics: {
        progress: 87,
        projects: 2,
        impact: "10+ lives touched"
      },
      technologies: ["Deep Learning", "Computer Vision", "NLP"],
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Agriculture & Food Security",
      icon: "🌾",
      tagline: "Feeding Tomorrow, Today",
      description: "Smart farming for a hunger-free world",
      details: "Precision agriculture powered by IoT sensors, satellite imagery, and AI algorithms that optimize crop yields while minimizing environmental impact.",
      metrics: {
        progress: 10,
        projects: 1,
        impact: "To Empower 50k+ Farmers"
      },
      technologies: ["IoT Sensors", "Satellite AI", "Blockchain"],
      gradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Education & Accessibility",
      icon: "🧠",
      tagline: "Knowledge Without Barriers",
      description: "Democratizing learning through adaptive AI",
      details: "Personalized learning experiences that adapt to individual needs, breaking down barriers of language, disability, and geography.",
      metrics: {
        progress: 75,
        projects: 2,
        impact: "100+ students reached"
      },
      technologies: ["Adaptive AI", "AR/VR", "Voice Tech"],
      gradient: "from-purple-50 to-violet-50"
    },
    {
      title: "Climate & Sustainability",
      icon: "🌍",
      tagline: "Planet-Scale Solutions",
      description: "Tech-driven climate action and regeneration",
      details: "Advanced climate modeling, carbon footprint optimization, and renewable energy management systems that make sustainability scalable.",
      metrics: {
        progress: 79,
        projects: 1,
        impact: "To Reduce 50M tons CO₂"
      },
      technologies: [
        "Climate ML",
        "Smart Grids",
        "Carbon Analytics"
      ],
      gradient: "from-teal-50 to-green-50"
    },
    {
      title: "Social Equity & Governance",
      icon: "⚖️",
      tagline: "Democracy Amplified",
      description: "Transparent governance through blockchain",
      details: "Building trust in institutions through immutable records, participatory decision-making platforms, and bias-free AI systems.",
      metrics: {
        progress: 71,
        projects: 1,
        impact: "To Serve 100+ Communities"
      },
      technologies: ["Blockchain", "Civic AI", "Privacy Tech"],
      gradient: "from-orange-50 to-red-50"
    },
    {
      title: "Financial Inclusion",
      icon: "💡",
      tagline: "Banking the Unbanked",
      description: "AI-driven financial accessibility",
      details: "Revolutionary fintech solutions bringing banking, credit, and investment opportunities to underserved communities worldwide.",
      metrics: {
        progress: 68,
        projects: 1,
        impact: "To Impact 1M+ People"
      },
      technologies: [
        "AI Credit",
        "Mobile Banking",
        "Micro-lending"
      ],
      gradient: "from-yellow-50 to-orange-50"
    }
  ];
  let visibleCards = /* @__PURE__ */ new Set();
  let hoveredCard = null;
  let selectedDomain = null;
  const each_array = ensure_array_like(domains);
  $$payload.out += `<section class="impact-domains svelte-14xc0di"><div class="section-header svelte-14xc0di"><span class="section-badge svelte-14xc0di">IMPACT DOMAINS</span> <h2 class="svelte-14xc0di">Solving Tomorrow's<br class="svelte-14xc0di"/><span class="gradient-text svelte-14xc0di">Challenges Today</span></h2> <p class="section-subtitle svelte-14xc0di">Six domains. Infinite possibilities. Real impact.</p></div> <div class="domains-grid svelte-14xc0di"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let domain = each_array[i];
    $$payload.out += `<div${attr_class("domain-card svelte-14xc0di", void 0, {
      "visible": visibleCards.has(i),
      "expanded": selectedDomain === i
    })}${attr("id", `domain-${stringify(i)}`)}${attr_style(`--delay: ${stringify(i * 0.1)}s`)} role="button" tabindex="0"><div${attr_class(`card-background bg-gradient-to-br ${stringify(domain.gradient)}`, "svelte-14xc0di")}></div> <div class="card-content svelte-14xc0di"><div class="card-main svelte-14xc0di"><div class="icon-container svelte-14xc0di"><span class="domain-icon svelte-14xc0di">${escape_html(domain.icon)}</span> <div class="pulse-ring svelte-14xc0di"></div></div> <div class="content-text svelte-14xc0di"><span class="tagline svelte-14xc0di">${escape_html(domain.tagline)}</span> <h3 class="domain-title svelte-14xc0di">${escape_html(domain.title)}</h3> <p class="domain-description svelte-14xc0di">${escape_html(domain.description)}</p></div></div> <div class="metrics-preview svelte-14xc0di"><div class="metric-item svelte-14xc0di"><span class="metric-value svelte-14xc0di">${escape_html(domain.metrics.projects)}</span> <span class="metric-label svelte-14xc0di">Projects</span></div> <div class="progress-container svelte-14xc0di"><div class="progress-track svelte-14xc0di"><div class="progress-fill svelte-14xc0di"${attr_style(`width: ${stringify(visibleCards.has(i) ? domain.metrics.progress : 0)}%`)}></div></div> <span class="progress-label svelte-14xc0di">${escape_html(domain.metrics.progress)}%</span></div></div> `;
    if (selectedDomain === i) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(domain.technologies);
      $$payload.out += `<div class="expanded-content svelte-14xc0di"><div class="details-section svelte-14xc0di"><p class="detailed-description svelte-14xc0di">${escape_html(domain.details)}</p> <div class="impact-metric svelte-14xc0di"><span class="impact-number svelte-14xc0di">${escape_html(domain.metrics.impact)}</span> <span class="impact-label svelte-14xc0di">Global Impact</span></div> <div class="tech-stack svelte-14xc0di"><span class="tech-label svelte-14xc0di">Technologies:</span> <div class="tech-tags svelte-14xc0di"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$payload.out += `<span class="tech-tag svelte-14xc0di">${escape_html(tech)}</span>`;
      }
      $$payload.out += `<!--]--></div></div> <div class="action-buttons svelte-14xc0di"><button class="btn-primary svelte-14xc0di" type="button">Explore Projects</button> <button class="btn-secondary svelte-14xc0di" type="button">Join Research</button></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div${attr_class("card-glow svelte-14xc0di", void 0, { "active": hoveredCard === i })}></div> <div class="corner-accent svelte-14xc0di"></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="impact-summary svelte-14xc0di"><div class="summary-stat svelte-14xc0di"><span class="stat-number svelte-14xc0di">100+</span> <span class="stat-label svelte-14xc0di">Lives Impacted</span></div> <div class="summary-stat svelte-14xc0di"><span class="stat-number svelte-14xc0di">5+</span> <span class="stat-label svelte-14xc0di">Active Projects</span></div> <div class="summary-stat svelte-14xc0di"><span class="stat-number svelte-14xc0di">100%</span> <span class="stat-label svelte-14xc0di">Open Source</span></div></div></section>`;
  pop();
}
function Solutions($$payload, $$props) {
  push();
  const solutions = [
    {
      title: "Digital Transformation",
      subtitle: "Building Tomorrow's Foundations Today",
      icon: "⚡",
      services: [
        {
          name: "Next-Gen Web & Mobile Apps",
          description: "PWAs and native solutions that work offline, scale globally",
          tech: "React • Svelte • Flutter • Node.js"
        },
        {
          name: "Human-Centered UX Design",
          description: "Accessibility-first design that empowers every user",
          tech: "Figma • Design Systems • A11y Testing"
        },
        {
          name: "Cloud-Native Infrastructure",
          description: "Serverless, scalable, secure - built for global impact",
          tech: "AWS • Docker • Kubernetes • CI/CD"
        }
      ],
      metrics: {
        impact: "To empower a 10+ Organisations by 2026",
        efficiency: "80% Cost Reduction",
        scale: "Globally Scalable"
      },
      cta: "Transform Your Mission"
    },
    {
      title: "Intelligence & Analytics",
      subtitle: "Data-Driven Decisions for Maximum Impact",
      icon: "🧠",
      services: [
        {
          name: "Real-Time Impact Dashboards",
          description: "Live insights that turn data into actionable intelligence",
          tech: "D3.js • Apache Kafka • Elasticsearch"
        },
        {
          name: "Predictive Impact Modeling",
          description: "AI-powered forecasting for resource optimization",
          tech: "TensorFlow • Prophet • MLOps Pipeline"
        },
        {
          name: "Automated Report Generation",
          description: "Smart reporting that tells your impact story automatically",
          tech: "Python • Pandas • Custom NLG Models"
        }
      ],
      metrics: {
        impact: "95% Decision Accuracy",
        efficiency: "70% Time Saved",
        scale: "Real-Time Processing"
      },
      cta: "Unlock Your Data's Power"
    },
    {
      title: "Emerging Tech Integration",
      subtitle: "Tomorrow's Technology, Today's Solutions",
      icon: "🚀",
      services: [
        {
          name: "Ethical AI Implementation",
          description: "Bias-free, transparent AI that amplifies human potential",
          tech: "PyTorch • Fairness Tools • Explainable AI"
        },
        {
          name: "IoT for Social Good",
          description: "Connected sensors creating smarter, safer communities",
          tech: "Arduino • Raspberry Pi • LoRaWAN • Edge Computing"
        },
        {
          name: "Blockchain for Transparency",
          description: "Immutable trust systems for donations and impact tracking",
          tech: "Ethereum • Hyperledger • Smart Contracts"
        }
      ],
      metrics: {
        impact: "100% Transparency",
        efficiency: "90% Process Automation",
        scale: "Global Network"
      },
      cta: "Embrace the Future"
    }
  ];
  let visibleSections = /* @__PURE__ */ new Set();
  let hoveredSection = null;
  const each_array = ensure_array_like(solutions);
  $$payload.out += `<section class="solutions svelte-emf7hy"><div class="header svelte-emf7hy"><h2 class="svelte-emf7hy">360° Technology Solutions for Non-Profits</h2> <p class="subtitle svelte-emf7hy">Empowering organizations with cutting-edge tools that amplify impact, not complexity.</p></div> <div class="solutions-grid svelte-emf7hy"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let solution = each_array[i];
    const each_array_1 = ensure_array_like(solution.services);
    const each_array_2 = ensure_array_like(Object.entries(solution.metrics));
    const each_array_3 = ensure_array_like(Array(6));
    const each_array_4 = ensure_array_like(Array(12));
    $$payload.out += `<div${attr_class("solution-container svelte-emf7hy", void 0, {
      "visible": visibleSections.has(i),
      "hovered": hoveredSection === i
    })}${attr("id", `solution-${stringify(i)}`)} role="button" tabindex="0"${attr("aria-label", `View solution: ${solution.title}`)}><div class="solution-card svelte-emf7hy"><div class="card-header svelte-emf7hy"><div class="icon-wrapper svelte-emf7hy"><span class="icon svelte-emf7hy">${escape_html(solution.icon)}</span> <div class="icon-glow svelte-emf7hy"></div></div> <div class="title-section svelte-emf7hy"><h3 class="svelte-emf7hy">${escape_html(solution.title)}</h3> <p class="subtitle-text svelte-emf7hy">${escape_html(solution.subtitle)}</p></div></div> <div class="services-section svelte-emf7hy"><!--[-->`;
    for (let j = 0, $$length2 = each_array_1.length; j < $$length2; j++) {
      let service = each_array_1[j];
      $$payload.out += `<div class="service-card svelte-emf7hy"${attr_style(`--delay: ${stringify(j * 0.1)}s`)}><div class="service-header svelte-emf7hy"><h4 class="svelte-emf7hy">${escape_html(service.name)}</h4> <span class="tech-stack svelte-emf7hy">${escape_html(service.tech)}</span></div> <p class="service-description svelte-emf7hy">${escape_html(service.description)}</p></div>`;
    }
    $$payload.out += `<!--]--></div> <div class="metrics-section svelte-emf7hy"><div class="metrics-grid svelte-emf7hy"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let [key, value] = each_array_2[$$index_1];
      $$payload.out += `<div class="metric svelte-emf7hy"><span class="metric-value svelte-emf7hy">${escape_html(value)}</span> <span class="metric-label svelte-emf7hy">${escape_html(key)}</span></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="cta-section svelte-emf7hy"><button class="cta-button svelte-emf7hy" type="button"><span class="svelte-emf7hy">${escape_html(solution.cta)}</span> <div class="button-arrow svelte-emf7hy">→</div></button></div></div> <div class="solution-visual svelte-emf7hy"><div class="visual-container svelte-emf7hy"><div class="tech-orbit svelte-emf7hy"><div class="orbit-ring orbit-1 svelte-emf7hy"></div> <div class="orbit-ring orbit-2 svelte-emf7hy"></div> <div class="orbit-ring orbit-3 svelte-emf7hy"></div> <div class="center-node svelte-emf7hy"><span class="node-icon svelte-emf7hy">${escape_html(solution.icon)}</span></div> <div class="orbit-nodes svelte-emf7hy"><!--[-->`;
    for (let nodeIndex = 0, $$length2 = each_array_3.length; nodeIndex < $$length2; nodeIndex++) {
      each_array_3[nodeIndex];
      $$payload.out += `<div class="orbit-node svelte-emf7hy"${attr_style(`--angle: ${stringify(nodeIndex * 60)}deg`)}></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="data-flow svelte-emf7hy"><!--[-->`;
    for (let flowIndex = 0, $$length2 = each_array_4.length; flowIndex < $$length2; flowIndex++) {
      each_array_4[flowIndex];
      $$payload.out += `<div class="flow-particle svelte-emf7hy"${attr_style(`--flow-delay: ${stringify(flowIndex * 0.2)}s`)}></div>`;
    }
    $$payload.out += `<!--]--></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="bottom-cta svelte-emf7hy"><h3 class="svelte-emf7hy">Ready to Transform Your Organization?</h3> <p class="svelte-emf7hy">Let's build technology that amplifies your mission and maximizes your impact.</p> <button class="primary-cta svelte-emf7hy" type="button"><span class="svelte-emf7hy">Start Your Journey</span> <div class="cta-glow svelte-emf7hy"></div></button></div></section>`;
  pop();
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  Research($$payload);
  $$payload.out += `<!----> `;
  ImpactDomains($$payload);
  $$payload.out += `<!----> `;
  Solutions($$payload);
  $$payload.out += `<!----> `;
  CallToAction($$payload);
  $$payload.out += `<!----> <main class="svelte-ck21ns"></main>`;
}
export {
  _page as default
};
