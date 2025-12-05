import "clsx";
import { x as sanitize_props, y as spread_props, v as slot, t as ensure_array_like, n as attr_class, q as attr, z as attr_style, u as escape_html, m as pop, p as push, A as stringify } from "../../chunks/index.js";
import { U as Users, C as Code, L as Lightbulb } from "../../chunks/users.js";
import { H as Heart } from "../../chunks/heart.js";
import { I as Icon } from "../../chunks/Icon.js";
import { H as Handshake, R as Rocket } from "../../chunks/rocket.js";
import { S as Sparkles, T as Target } from "../../chunks/target.js";
import { Z as Zap } from "../../chunks/zap.js";
import { M as Mail } from "../../chunks/mail.js";
function Atom($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    [
      "path",
      {
        "d": "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
      }
    ],
    [
      "path",
      {
        "d": "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "atom" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Brain($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 18V5" }],
    [
      "path",
      {
        "d": "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"
      }
    ],
    [
      "path",
      {
        "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"
      }
    ],
    [
      "path",
      { "d": "M17.997 5.125a4 4 0 0 1 2.526 5.77" }
    ],
    ["path", { "d": "M18 18a4 4 0 0 0 2-7.464" }],
    [
      "path",
      {
        "d": "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"
      }
    ],
    ["path", { "d": "M6 18a4 4 0 0 1-2-7.464" }],
    [
      "path",
      { "d": "M6.003 5.125a4 4 0 0 0-2.526 5.77" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "brain" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Dna($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m10 16 1.5 1.5" }],
    ["path", { "d": "m14 8-1.5-1.5" }],
    [
      "path",
      {
        "d": "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
      }
    ],
    ["path", { "d": "m16.5 10.5 1 1" }],
    ["path", { "d": "m17 6-2.891-2.891" }],
    [
      "path",
      { "d": "M2 15c6.667-6 13.333 0 20-6" }
    ],
    ["path", { "d": "m20 9 .891.891" }],
    ["path", { "d": "M3.109 14.109 4 15" }],
    ["path", { "d": "m6.5 12.5 1 1" }],
    ["path", { "d": "m7 18 2.891 2.891" }],
    [
      "path",
      {
        "d": "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "dna" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Globe($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$payload, spread_props([
    { name: "globe" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Graduation_cap($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { "d": "M22 10v6" }],
    [
      "path",
      { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "graduation-cap" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function House($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "house" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Info($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "info" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Play($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Scale($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    [
      "path",
      {
        "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    ["path", { "d": "M7 21h10" }],
    ["path", { "d": "M12 3v18" }],
    [
      "path",
      { "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "scale" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Wheat($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M2 22 16 8" }],
    [
      "path",
      {
        "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    [
      "path",
      {
        "d": "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    [
      "path",
      {
        "d": "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    [
      "path",
      {
        "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
      }
    ],
    [
      "path",
      {
        "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ],
    [
      "path",
      {
        "d": "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ],
    [
      "path",
      {
        "d": "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "wheat" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function CallToAction($$payload, $$props) {
  push();
  const ctaButtons = [
    {
      text: "Start a Project",
      primary: true,
      href: "/join-us"
    },
    {
      text: "Join Our Research",
      primary: false,
      href: "/research"
    },
    {
      text: "Partner with Us",
      primary: true,
      href: "/join-us"
    },
    {
      text: "Explore Open Source",
      primary: false,
      href: "/#solutions"
    }
  ];
  let visible = false;
  let formData = { name: "", email: "", message: "" };
  const each_array = ensure_array_like(ctaButtons);
  $$payload.out += `<section${attr_class("cta-section svelte-1kvg245", void 0, { "visible": visible })}><div class="container svelte-1kvg245"><h2 class="section-title svelte-1kvg245">Ready to Create Impact?</h2> <p class="section-description svelte-1kvg245">Join us in building technology that matters. Whether you're a researcher, developer, 
      or organization seeking solutions, let's collaborate to create a better tomorrow.</p> <div class="cta-grid svelte-1kvg245"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let button = each_array[i];
    $$payload.out += `<a${attr("href", button.href)}${attr_class("cta-button svelte-1kvg245", void 0, { "primary": button.primary })}${attr_style(`animation-delay: ${stringify(i * 0.1)}s`)}>${escape_html(button.text)} <div class="button-shine svelte-1kvg245"></div></a>`;
  }
  $$payload.out += `<!--]--></div> <div class="contact-form svelte-1kvg245"><form><div class="form-group svelte-1kvg245"><input type="text" placeholder="Your Name"${attr("value", formData.name)} required class="svelte-1kvg245"/></div> <div class="form-group svelte-1kvg245"><input type="email" placeholder="Your Email"${attr("value", formData.email)} required class="svelte-1kvg245"/></div> <div class="form-group svelte-1kvg245"><textarea placeholder="Your Message" required class="svelte-1kvg245">`;
  const $$body = escape_html(formData.message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <a href="/join-us" class="submit-button primary svelte-1kvg245">Send Message <div class="button-shine svelte-1kvg245"></div></a></form></div></div></section>`;
  pop();
}
function Collaboration($$payload, $$props) {
  push();
  let visible = false;
  let formData = {
    name: "",
    email: "",
    organization: "",
    message: ""
  };
  let isSubmitting = false;
  const collaborationTypes = [
    {
      icon: Users,
      title: "NGO Partnership",
      description: "Partner with us to build technology solutions for your humanitarian mission"
    },
    {
      icon: Code,
      title: "Open Source Contributor",
      description: "Join our community of developers building tech for social good"
    },
    {
      icon: Heart,
      title: "Research Collaboration",
      description: "Collaborate on research projects exploring humanitarian technology"
    },
    {
      icon: Lightbulb,
      title: "Innovation Partner",
      description: "Share ideas and co-create solutions for global challenges"
    }
  ];
  const each_array = ensure_array_like(collaborationTypes);
  $$payload.out += `<section${attr_class("collaboration svelte-h62r9v", void 0, { "visible": visible })}><div class="container svelte-h62r9v"><div class="section-header svelte-h62r9v"><h2 class="section-title svelte-h62r9v">Let's Build Together</h2> <p class="section-subtitle svelte-h62r9v">Join our community of innovators, researchers, and changemakers working to create 
        technology that serves humanity.</p></div> <div class="collaboration-grid svelte-h62r9v"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let type = each_array[i];
    $$payload.out += `<div class="collab-card svelte-h62r9v"${attr_style(`--delay: ${stringify(i * 0.1)}s`)}><div class="card-icon svelte-h62r9v"><!---->`;
    type.icon?.($$payload, { size: 32 });
    $$payload.out += `<!----></div> <h3 class="svelte-h62r9v">${escape_html(type.title)}</h3> <p class="svelte-h62r9v">${escape_html(type.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="registration-section svelte-h62r9v"><div class="form-container svelte-h62r9v"><h3 class="form-title svelte-h62r9v">Register Your Interest</h3> <p class="form-description svelte-h62r9v">Fill out the form below and we'll get back to you about collaboration opportunities.</p> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<form class="collaboration-form svelte-h62r9v"><div class="form-row svelte-h62r9v"><div class="form-group svelte-h62r9v"><label for="name" class="svelte-h62r9v">Full Name *</label> <input type="text" id="name"${attr("value", formData.name)} required placeholder="John Doe" class="svelte-h62r9v"/></div> <div class="form-group svelte-h62r9v"><label for="email" class="svelte-h62r9v">Email Address *</label> <input type="email" id="email"${attr("value", formData.email)} required placeholder="john@example.com" class="svelte-h62r9v"/></div></div> <div class="form-row svelte-h62r9v"><div class="form-group svelte-h62r9v"><label for="organization" class="svelte-h62r9v">Organization (Optional)</label> <input type="text" id="organization"${attr("value", formData.organization)} placeholder="Your organization name" class="svelte-h62r9v"/></div> <div class="form-group svelte-h62r9v"><label for="interest" class="svelte-h62r9v">Area of Interest *</label> <select id="interest" required class="svelte-h62r9v"><option value="">Select an option</option><option value="ngo">NGO Partnership</option><option value="opensource">Open Source Contribution</option><option value="research">Research Collaboration</option><option value="innovation">Innovation Partnership</option><option value="other">Other</option></select></div></div> <div class="form-group svelte-h62r9v"><label for="message" class="svelte-h62r9v">Tell Us About Your Interest *</label> <textarea id="message" required rows="5" placeholder="Share your ideas, goals, or how you'd like to collaborate..." class="svelte-h62r9v">`;
    const $$body = escape_html(formData.message);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea></div> <button type="submit" class="submit-button svelte-h62r9v"${attr("disabled", isSubmitting, true)}>`;
    {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span>Submit Registration</span> <span class="button-arrow svelte-h62r9v">→</span>`;
    }
    $$payload.out += `<!--]--></button></form>`;
  }
  $$payload.out += `<!--]--></div></div></div></section>`;
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
  $$payload.out += `<section${attr_class("hero svelte-1uieio2", void 0, { "visible": visible })}><div class="particles svelte-1uieio2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let particle = each_array[$$index];
    $$payload.out += `<div class="particle svelte-1uieio2"${attr_style(`left: ${stringify(particle.x)}%; top: ${stringify(particle.y)}%; animation-delay: ${stringify(particle.delay)}s;`)}></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="hero-background svelte-1uieio2"><div class="gradient-overlay svelte-1uieio2"></div></div> <div class="container svelte-1uieio2"><div class="hero-content svelte-1uieio2"><div class="title-wrapper svelte-1uieio2"><h1 class="hero-title svelte-1uieio2"><span class="word primary svelte-1uieio2">TECH</span> <span class="word secondary svelte-1uieio2">FOR</span> <span${attr_class("word rotating svelte-1uieio2", void 0, { "animating": isAnimating })}>${escape_html(rotatingWords[currentWordIndex])}</span> <span class="word accent svelte-1uieio2">UPLIFTING.</span></h1> <div class="title-underline svelte-1uieio2"></div></div> <div class="subtitle-container svelte-1uieio2"><p class="hero-subtitle typing svelte-1uieio2">${escape_html(typedText)}<span class="cursor svelte-1uieio2">|</span></p> <p class="hero-description svelte-1uieio2">We're an innovation lab focused on solving real humanitarian challenges through 
          open-source technology, research, and services for NGOs.</p> <div class="tags svelte-1uieio2"><span class="tag svelte-1uieio2"><svg class="tag-icon svelte-1uieio2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" class="svelte-1uieio2"></path></svg> Research &amp; Innovation</span> <span class="tag svelte-1uieio2"><svg class="tag-icon svelte-1uieio2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" class="svelte-1uieio2"></path></svg> Open Source First</span> <span class="tag svelte-1uieio2"><svg class="tag-icon svelte-1uieio2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1uieio2"></path></svg> Social Impact</span></div></div> <div class="cta-container svelte-1uieio2"><div class="primary-cta svelte-1uieio2"><a href="/join-us" class="cta-button primary svelte-1uieio2"><span class="svelte-1uieio2">Register to Collaborate</span> <span class="button-arrow svelte-1uieio2">→</span></a> <a href="/research" class="cta-button secondary svelte-1uieio2"><span class="svelte-1uieio2">Explore Research</span></a></div> <div class="profile-card svelte-1uieio2"><div class="profile-icon-wrapper svelte-1uieio2"><img src="/images/4.png" alt="Hume AI" class="profile-icon svelte-1uieio2"/> <div class="status-indicator svelte-1uieio2"></div></div> <div class="profile-text svelte-1uieio2"><strong class="svelte-1uieio2">Meet Hume</strong> <span class="svelte-1uieio2">Your AI research companion exploring humanitarian tech solutions</span></div></div></div> <div class="metrics svelte-1uieio2"><div class="metric svelte-1uieio2"><span class="metric-number svelte-1uieio2">20+</span> <span class="metric-label svelte-1uieio2">Research Domains</span></div> <div class="metric svelte-1uieio2"><span class="metric-number svelte-1uieio2">100%</span> <span class="metric-label svelte-1uieio2">Open Source</span></div> <div class="metric svelte-1uieio2"><span class="metric-number svelte-1uieio2">∞</span> <span class="metric-label svelte-1uieio2">Potential Impact</span></div></div></div></div> <div class="scroll-indicator svelte-1uieio2"><div class="scroll-text svelte-1uieio2">Scroll to explore</div> <div class="scroll-arrow svelte-1uieio2">↓</div></div></section>`;
  pop();
}
function NotificationBanner($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function About($$payload, $$props) {
  push();
  let mounted = false;
  NotificationBanner($$payload);
  $$payload.out += `<!----> <section class="about svelte-wz6oel"><div class="about-background svelte-wz6oel"><video class="background-video svelte-wz6oel" autoplay loop muted playsinline><source src="/images/aboutanimation.mp4" type="video/mp4" class="svelte-wz6oel"/></video> <div class="gradient-overlay svelte-wz6oel"></div></div> <div class="container svelte-wz6oel"><div${attr_class("hero-section svelte-wz6oel", void 0, { "visible": mounted })}><div class="title-container svelte-wz6oel"><h1 class="main-title svelte-wz6oel"><span class="code-bracket svelte-wz6oel">//</span> BRIDGING <span class="highlight svelte-wz6oel">HUMANITY</span> <br class="svelte-wz6oel"/> <span class="ampersand svelte-wz6oel">&amp;</span> <span class="tech-text svelte-wz6oel">TECHNOLOGY</span></h1> <div class="subtitle-container svelte-wz6oel"><p class="subtitle svelte-wz6oel">INNOVATION WITH IMPACT</p> <div class="typing-indicator svelte-wz6oel"><span class="cursor svelte-wz6oel">|</span></div></div></div></div> <div${attr_class("stats-section svelte-wz6oel", void 0, { "visible": mounted })}><div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">20+</div> <div class="stat-label svelte-wz6oel">Research Domains</div></div> <div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">100%</div> <div class="stat-label svelte-wz6oel">Open Source</div></div> <div class="stat-item svelte-wz6oel"><div class="stat-number svelte-wz6oel">∞</div> <div class="stat-label svelte-wz6oel">Potential Impact</div></div></div> <div class="content-grid svelte-wz6oel"><div class="main-content svelte-wz6oel"><div class="intro-section svelte-wz6oel"><h2 class="section-title svelte-wz6oel">Our Mission</h2> <p class="lead-text svelte-wz6oel">We architect <strong class="svelte-wz6oel">ethical AI</strong>, <strong class="svelte-wz6oel">scalable technology</strong>, and <strong class="svelte-wz6oel">inclusive digital ecosystems</strong> to empower the next billion people. At Humanitech Labs, we transform breakthrough research into real-world solutions that address humanity's most pressing challenges.</p></div> <div class="philosophy-section svelte-wz6oel"><h3 class="philosophy-title svelte-wz6oel"><span class="code-comment svelte-wz6oel">/* Our Approach */</span></h3> <p class="philosophy-text svelte-wz6oel">Every algorithm we develop, every system we build, and every innovation we create is designed with one principle: <em class="svelte-wz6oel">technology should amplify human potential, not replace it</em>. We operate at the intersection of cutting-edge research and social impact, ensuring our work creates lasting positive change.</p> <div class="approach-grid svelte-wz6oel"><div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">`;
  Atom($$payload, { size: 32 });
  $$payload.out += `<!----></div> <h4 class="svelte-wz6oel">Research-Driven</h4> <p class="svelte-wz6oel">Groundbreaking research in AI, IoT, blockchain, and emerging technologies</p></div> <div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">`;
  Globe($$payload, { size: 32 });
  $$payload.out += `<!----></div> <h4 class="svelte-wz6oel">Impact-Focused</h4> <p class="svelte-wz6oel">Solutions addressing healthcare, education, climate, and social equity</p></div> <div class="approach-item svelte-wz6oel"><div class="approach-icon svelte-wz6oel">`;
  Handshake($$payload, { size: 32 });
  $$payload.out += `<!----></div> <h4 class="svelte-wz6oel">Collaborative</h4> <p class="svelte-wz6oel">Open-source development with global research institutions and NGOs</p></div></div></div> <div class="domains-preview svelte-wz6oel"><h3 class="domains-title svelte-wz6oel">Impact Domains</h3> <div class="domain-tags svelte-wz6oel"><span class="domain-tag svelte-wz6oel">Healthcare AI</span> <span class="domain-tag svelte-wz6oel">AgriTech</span> <span class="domain-tag svelte-wz6oel">Climate Solutions</span> <span class="domain-tag svelte-wz6oel">Education Tech</span> <span class="domain-tag svelte-wz6oel">Accessibility</span> <span class="domain-tag svelte-wz6oel">Financial Inclusion</span> <span class="domain-tag svelte-wz6oel">Disaster Management</span> <span class="domain-tag svelte-wz6oel">Space Tech</span></div></div></div> <div class="mission-sidebar svelte-wz6oel"><div class="mission-points svelte-wz6oel"><div class="point-group svelte-wz6oel"><div class="point svelte-wz6oel" data-number="01"><h4 class="svelte-wz6oel">RESEARCH</h4> <p class="svelte-wz6oel">Pushing boundaries in ethical AI and emerging technologies</p></div> <div class="point svelte-wz6oel" data-number="02"><h4 class="svelte-wz6oel">INNOVATE</h4> <p class="svelte-wz6oel">Building scalable solutions for real-world challenges</p></div> <div class="point svelte-wz6oel" data-number="03"><h4 class="svelte-wz6oel">IMPACT</h4> <p class="svelte-wz6oel">Empowering communities through technology for good</p></div></div></div> <div class="cta-sidebar svelte-wz6oel"><div class="cta-content svelte-wz6oel"><h4 class="svelte-wz6oel">Ready to Build Impact?</h4> <p class="svelte-wz6oel">Join us in creating technology that matters</p> <a href="/join-us" class="cta-button svelte-wz6oel"><span class="svelte-wz6oel">Collaborate with Us</span> <span class="arrow svelte-wz6oel">→</span></a></div></div></div></div></div></section>`;
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
      icon: Brain
    },
    {
      id: "assistive-tech",
      title: "Assistive Technology",
      subtitle: "Technology Without Barriers",
      description: "Creating IoT prosthetics, AI-powered sign language recognition, and voice-enabled systems that ensure technology serves everyone, regardless of ability.",
      impact: "Working on 5+ Accessibility Solutions",
      domains: ["Accessibility", "IoT", "Inclusion"],
      icon: Users
    },
    {
      id: "climate-tech",
      title: "Climate Intelligence",
      subtitle: "Data-Driven Environmental Action",
      description: "Leveraging satellite imagery, IoT sensors, and predictive analytics to combat climate change through renewable energy optimization and carbon tracking.",
      impact: "1 Climate Project",
      domains: ["Environment", "Sustainability", "Energy"],
      icon: Globe
    },
    {
      id: "social-systems",
      title: "Social Impact Systems",
      subtitle: "Technology for Social Justice",
      description: "Building blockchain governance platforms, digital identity systems, and civic engagement tools that promote transparency and democratic participation.",
      impact: "Aiming to Empower 1M+ Citizens",
      domains: ["Governance", "Transparency", "Democracy"],
      icon: Scale
    },
    {
      id: "education-ai",
      title: "Educational AI",
      subtitle: "Democratizing Quality Learning",
      description: "Developing personalized learning platforms, multilingual AI tutors, and AR/VR educational experiences for underserved communities worldwide.",
      impact: "100+ Students Reached",
      domains: ["Education", "AI", "Global Access"],
      icon: Graduation_cap
    },
    {
      id: "open-innovation",
      title: "Open Source Innovation",
      subtitle: "Collaborative Global Research",
      description: "Leading open-source initiatives that accelerate breakthrough discoveries and ensure technological advances benefit humanity as a whole.",
      impact: "A Growing Developer Community",
      domains: ["Open Source", "Collaboration", "Global"],
      icon: Sparkles
    }
  ];
  const each_array = ensure_array_like(researchAreas);
  $$payload.out += `<section class="research svelte-1qi257a"><div class="research-background svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * 0.3)}px)`)}></div> <div class="geometric-elements svelte-1qi257a"><div class="floating-element svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * -0.2)}px) rotate(${stringify(scrollY * 0.1)}deg)`)}></div> <div class="floating-element-2 svelte-1qi257a"${attr_style(`transform: translateY(${stringify(scrollY * 0.15)}px) rotate(${stringify(scrollY * -0.08)}deg)`)}></div></div> <div class="container svelte-1qi257a"><div class="research-hero svelte-1qi257a"><div class="hero-badge svelte-1qi257a"><span class="badge-text svelte-1qi257a">BREAKTHROUGH RESEARCH</span></div> <h2 class="section-title svelte-1qi257a">BUILDING THE FUTURE OF <span class="highlight-text svelte-1qi257a">HUMAN-CENTERED TECH</span></h2> <p class="hero-subtitle svelte-1qi257a">Where cutting-edge research meets real-world impact. We architect solutions that don't just push technological boundaries—they uplift humanity.</p></div> <div class="research-grid svelte-1qi257a"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let area = each_array[index];
    const each_array_1 = ensure_array_like(area.domains);
    $$payload.out += `<div${attr_class("research-card svelte-1qi257a", void 0, { "active": activeCard === area.id })}${attr_style(`animation-delay: ${stringify(index * 0.1)}s`)} role="button" tabindex="0"><div class="card-content svelte-1qi257a"><div class="card-header svelte-1qi257a"><div class="card-icon svelte-1qi257a" role="img"${attr("aria-label", area.title)}><!---->`;
    area.icon?.($$payload, { size: 32, strokeWidth: 1.5 });
    $$payload.out += `<!----></div> <div class="card-impact svelte-1qi257a">${escape_html(area.impact)}</div></div> <h3 class="card-title svelte-1qi257a">${escape_html(area.title)}</h3> <p class="card-subtitle svelte-1qi257a">${escape_html(area.subtitle)}</p> <p class="card-description svelte-1qi257a">${escape_html(area.description)}</p> <div class="card-domains svelte-1qi257a"><!--[-->`;
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
      icon: Dna,
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
      icon: Wheat,
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
      icon: Brain,
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
      icon: Globe,
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
      icon: Scale,
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
      icon: Lightbulb,
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
  $$payload.out += `<section class="impact-domains svelte-aybfsu"><div class="section-header svelte-aybfsu"><span class="section-badge svelte-aybfsu">IMPACT DOMAINS</span> <h2 class="svelte-aybfsu">Solving Tomorrow's<br class="svelte-aybfsu"/><span class="gradient-text svelte-aybfsu">Challenges Today</span></h2> <p class="section-subtitle svelte-aybfsu">Six domains. Infinite possibilities. Real impact.</p></div> <div class="domains-grid svelte-aybfsu"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let domain = each_array[i];
    $$payload.out += `<div${attr_class("domain-card svelte-aybfsu", void 0, {
      "visible": visibleCards.has(i),
      "expanded": selectedDomain === i
    })}${attr("id", `domain-${stringify(i)}`)}${attr_style(`--delay: ${stringify(i * 0.1)}s`)} role="button" tabindex="0"><div${attr_class(`card-background bg-gradient-to-br ${stringify(domain.gradient)}`, "svelte-aybfsu")}></div> <div class="card-content svelte-aybfsu"><div class="card-main svelte-aybfsu"><div class="icon-container svelte-aybfsu"><span class="domain-icon svelte-aybfsu"><!---->`;
    domain.icon?.($$payload, { size: 40, strokeWidth: 1.5 });
    $$payload.out += `<!----></span> <div class="pulse-ring svelte-aybfsu"></div></div> <div class="content-text svelte-aybfsu"><span class="tagline svelte-aybfsu">${escape_html(domain.tagline)}</span> <h3 class="domain-title svelte-aybfsu">${escape_html(domain.title)}</h3> <p class="domain-description svelte-aybfsu">${escape_html(domain.description)}</p></div></div> <div class="metrics-preview svelte-aybfsu"><div class="metric-item svelte-aybfsu"><span class="metric-value svelte-aybfsu">${escape_html(domain.metrics.projects)}</span> <span class="metric-label svelte-aybfsu">Projects</span></div> <div class="progress-container svelte-aybfsu"><div class="progress-track svelte-aybfsu"><div class="progress-fill svelte-aybfsu"${attr_style(`width: ${stringify(visibleCards.has(i) ? domain.metrics.progress : 0)}%`)}></div></div> <span class="progress-label svelte-aybfsu">${escape_html(domain.metrics.progress)}%</span></div></div> `;
    if (selectedDomain === i) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(domain.technologies);
      $$payload.out += `<div class="expanded-content svelte-aybfsu"><div class="details-section svelte-aybfsu"><p class="detailed-description svelte-aybfsu">${escape_html(domain.details)}</p> <div class="impact-metric svelte-aybfsu"><span class="impact-number svelte-aybfsu">${escape_html(domain.metrics.impact)}</span> <span class="impact-label svelte-aybfsu">Global Impact</span></div> <div class="tech-stack svelte-aybfsu"><span class="tech-label svelte-aybfsu">Technologies:</span> <div class="tech-tags svelte-aybfsu"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$payload.out += `<span class="tech-tag svelte-aybfsu">${escape_html(tech)}</span>`;
      }
      $$payload.out += `<!--]--></div></div> <div class="action-buttons svelte-aybfsu"><button class="btn-primary svelte-aybfsu" type="button">Explore Projects</button> <button class="btn-secondary svelte-aybfsu" type="button">Join Research</button></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div${attr_class("card-glow svelte-aybfsu", void 0, { "active": hoveredCard === i })}></div> <div class="corner-accent svelte-aybfsu"></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="impact-summary svelte-aybfsu"><div class="summary-stat svelte-aybfsu"><span class="stat-number svelte-aybfsu">100+</span> <span class="stat-label svelte-aybfsu">Lives Impacted</span></div> <div class="summary-stat svelte-aybfsu"><span class="stat-number svelte-aybfsu">5+</span> <span class="stat-label svelte-aybfsu">Active Projects</span></div> <div class="summary-stat svelte-aybfsu"><span class="stat-number svelte-aybfsu">100%</span> <span class="stat-label svelte-aybfsu">Open Source</span></div></div></section>`;
  pop();
}
function Solutions($$payload, $$props) {
  push();
  const solutions = [
    {
      title: "Digital Transformation",
      subtitle: "Building Tomorrow's Foundations Today",
      icon: Zap,
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
      icon: Brain,
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
      icon: Rocket,
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
  $$payload.out += `<section class="solutions svelte-daeshd"><div class="header svelte-daeshd"><h2 class="svelte-daeshd">360° Technology Solutions for Non-Profits</h2> <p class="subtitle svelte-daeshd">Empowering organizations with cutting-edge tools that amplify impact, not complexity.</p></div> <div class="solutions-grid svelte-daeshd"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let solution = each_array[i];
    const each_array_1 = ensure_array_like(solution.services);
    const each_array_2 = ensure_array_like(Object.entries(solution.metrics));
    const each_array_3 = ensure_array_like(Array(6));
    const each_array_4 = ensure_array_like(Array(12));
    $$payload.out += `<div${attr_class("solution-container svelte-daeshd", void 0, {
      "visible": visibleSections.has(i),
      "hovered": hoveredSection === i
    })}${attr("id", `solution-${stringify(i)}`)} role="button" tabindex="0"${attr("aria-label", `View solution: ${solution.title}`)}><div class="solution-card svelte-daeshd"><div class="card-header svelte-daeshd"><div class="icon-wrapper svelte-daeshd"><!---->`;
    solution.icon?.($$payload, { class: "icon", size: 40 });
    $$payload.out += `<!----> <div class="icon-glow svelte-daeshd"></div></div> <div class="title-section svelte-daeshd"><h3 class="svelte-daeshd">${escape_html(solution.title)}</h3> <p class="subtitle-text svelte-daeshd">${escape_html(solution.subtitle)}</p></div></div> <div class="services-section svelte-daeshd"><!--[-->`;
    for (let j = 0, $$length2 = each_array_1.length; j < $$length2; j++) {
      let service = each_array_1[j];
      $$payload.out += `<div class="service-card svelte-daeshd"${attr_style(`--delay: ${stringify(j * 0.1)}s`)}><div class="service-header svelte-daeshd"><h4 class="svelte-daeshd">${escape_html(service.name)}</h4> <span class="tech-stack svelte-daeshd">${escape_html(service.tech)}</span></div> <p class="service-description svelte-daeshd">${escape_html(service.description)}</p></div>`;
    }
    $$payload.out += `<!--]--></div> <div class="metrics-section svelte-daeshd"><div class="metrics-grid svelte-daeshd"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let [key, value] = each_array_2[$$index_1];
      $$payload.out += `<div class="metric svelte-daeshd"><span class="metric-value svelte-daeshd">${escape_html(value)}</span> <span class="metric-label svelte-daeshd">${escape_html(key)}</span></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="cta-section svelte-daeshd"><a href="/join-us" class="cta-button svelte-daeshd"><span class="svelte-daeshd">${escape_html(solution.cta)}</span> <div class="button-arrow svelte-daeshd">→</div></a></div></div> <div class="solution-visual svelte-daeshd"><div class="visual-container svelte-daeshd"><div class="tech-orbit svelte-daeshd"><div class="orbit-ring orbit-1 svelte-daeshd"></div> <div class="orbit-ring orbit-2 svelte-daeshd"></div> <div class="orbit-ring orbit-3 svelte-daeshd"></div> <div class="center-node svelte-daeshd"><!---->`;
    solution.icon?.($$payload, { class: "node-icon", size: 24 });
    $$payload.out += `<!----></div> <div class="orbit-nodes svelte-daeshd"><!--[-->`;
    for (let nodeIndex = 0, $$length2 = each_array_3.length; nodeIndex < $$length2; nodeIndex++) {
      each_array_3[nodeIndex];
      $$payload.out += `<div class="orbit-node svelte-daeshd"${attr_style(`--angle: ${stringify(nodeIndex * 60)}deg`)}></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="data-flow svelte-daeshd"><!--[-->`;
    for (let flowIndex = 0, $$length2 = each_array_4.length; flowIndex < $$length2; flowIndex++) {
      each_array_4[flowIndex];
      $$payload.out += `<div class="flow-particle svelte-daeshd"${attr_style(`--flow-delay: ${stringify(flowIndex * 0.2)}s`)}></div>`;
    }
    $$payload.out += `<!--]--></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="bottom-cta svelte-daeshd"><h3 class="svelte-daeshd">Ready to Transform Your Organization?</h3> <p class="svelte-daeshd">Let's build technology that amplifies your mission and maximizes your impact.</p> <button class="primary-cta svelte-daeshd" type="button"><span class="svelte-daeshd">Start Your Journey</span> <div class="cta-glow svelte-daeshd"></div></button></div></section>`;
  pop();
}
function Contact($$payload, $$props) {
  push();
  let showContact = false;
  let scrollY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let isHovered = false;
  const each_array = ensure_array_like(Array(15));
  $$payload.out += `<section class="contact-section svelte-1jpet06" id="contact"><div class="background-grid svelte-1jpet06"></div> <div class="metallic-orb svelte-1jpet06"${attr_style(`transform: translate(${stringify(mouseX * 0.02)}px, ${stringify(mouseY * 0.02)}px) translateY(${stringify(scrollY * 0.1)}px)`)}></div> <div class="floating-particles svelte-1jpet06"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="particle svelte-1jpet06"${attr_style(`animation-delay: ${stringify(i * 0.3)}s;`)}></div>`;
  }
  $$payload.out += `<!--]--></div> <div${attr_class("light-beam svelte-1jpet06", void 0, { "active": isHovered })}${attr_style(`background: radial-gradient(ellipse at ${stringify(mouseX)}% ${stringify(mouseY)}%, rgba(255,255,255,0.1) 0%, transparent 50%);`)}></div> <div class="container svelte-1jpet06"><div${attr_class("section-header svelte-1jpet06", void 0, { "visible": showContact })}><h2 class="section-title svelte-1jpet06"><span class="title-line svelte-1jpet06">Let's Build Something</span> <span class="title-line highlight svelte-1jpet06">Meaningful Together</span></h2> <div class="title-underline svelte-1jpet06"></div></div> <div${attr_class("contact-content svelte-1jpet06", void 0, { "visible": showContact })}><p class="section-description svelte-1jpet06">Whether you're a nonprofit looking to scale your impact, a researcher exploring new frontiers, 
                or a developer passionate about making a difference—we want to hear from you.</p> <div class="contact-grid svelte-1jpet06"><div class="contact-card svelte-1jpet06" data-card="1"><div class="card-glow svelte-1jpet06"></div> <div class="card-border svelte-1jpet06"></div> <div class="card-content svelte-1jpet06"><div class="card-icon svelte-1jpet06"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="svelte-1jpet06"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" class="svelte-1jpet06"></path><circle cx="9" cy="7" r="4" class="svelte-1jpet06"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" class="svelte-1jpet06"></path><path d="M16 3.13a4 4 0 0 1 0 7.75" class="svelte-1jpet06"></path></svg></div> <h3 class="svelte-1jpet06">Partner With Us</h3> <p class="svelte-1jpet06">Join our network of organizations creating positive change through technology.</p> <a href="/join-us" class="contact-link svelte-1jpet06"><span class="svelte-1jpet06">Start a Conversation</span> <div class="link-arrow svelte-1jpet06">→</div></a></div></div> <div class="contact-card svelte-1jpet06" data-card="2"><div class="card-glow svelte-1jpet06"></div> <div class="card-border svelte-1jpet06"></div> <div class="card-content svelte-1jpet06"><div class="card-icon svelte-1jpet06"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="svelte-1jpet06"><circle cx="12" cy="12" r="5" class="svelte-1jpet06"></circle><path d="M12 1v6m0 6v6" class="svelte-1jpet06"></path><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" class="svelte-1jpet06"></path><path d="M1 12h6m6 0h6" class="svelte-1jpet06"></path><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24" class="svelte-1jpet06"></path></svg></div> <h3 class="svelte-1jpet06">Share Your Ideas</h3> <p class="svelte-1jpet06">Have a project in mind? Let's explore how we can bring it to life together.</p> <a href="/join-us" class="contact-link svelte-1jpet06"><span class="svelte-1jpet06">Pitch Your Project</span> <div class="link-arrow svelte-1jpet06">→</div></a></div></div> <div class="contact-card svelte-1jpet06" data-card="3"><div class="card-glow svelte-1jpet06"></div> <div class="card-border svelte-1jpet06"></div> <div class="card-content svelte-1jpet06"><div class="card-icon svelte-1jpet06"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="svelte-1jpet06"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" class="svelte-1jpet06"></polygon></svg></div> <h3 class="svelte-1jpet06">Join Our Team</h3> <p class="svelte-1jpet06">Looking for a place where your work makes a real difference? We're always growing.</p> <a href="/join-us" class="contact-link svelte-1jpet06"><span class="svelte-1jpet06">View Opportunities</span> <div class="link-arrow svelte-1jpet06">→</div></a></div></div></div> <div class="contact-cta svelte-1jpet06"><div class="cta-glow svelte-1jpet06"></div> <div class="cta-content svelte-1jpet06"><p class="svelte-1jpet06">Ready to make an impact?</p> <a href="/join-us" class="cta-button svelte-1jpet06"><span class="svelte-1jpet06">Get in Touch</span> <div class="button-shine svelte-1jpet06"></div></a></div></div></div></div></section>`;
  pop();
}
function SideNav($$payload, $$props) {
  push();
  let sections = [
    { id: "hero", label: "Home", icon: House },
    { id: "about", label: "About", icon: Info },
    { id: "research", label: "Research", icon: Zap },
    { id: "impact", label: "Impact", icon: Target },
    {
      id: "solutions",
      label: "Solutions",
      icon: Settings
    },
    {
      id: "collaboration",
      label: "Collaboration",
      icon: Users
    },
    { id: "cta", label: "Get Started", icon: Play },
    { id: "contact", label: "Contact", icon: Mail }
  ];
  let activeSection = "hero";
  let isVisible = false;
  let hoveredIndex = -1;
  const each_array = ensure_array_like(sections);
  $$payload.out += `<nav${attr_class("side-nav svelte-han5yg", void 0, { "visible": isVisible })}><div class="nav-glow svelte-han5yg"></div> <div class="nav-container svelte-han5yg"><div class="progress-line svelte-han5yg"><div class="progress-fill svelte-han5yg"${attr_style(`height: ${stringify((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%`)}></div></div> <div class="nav-dots svelte-han5yg"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let section = each_array[index];
    $$payload.out += `<button${attr_class("nav-dot svelte-han5yg", void 0, {
      "active": activeSection === section.id,
      "hovered": hoveredIndex === index
    })}${attr("aria-label", `Go to ${section.label} section`)}${attr_style(`animation-delay: ${stringify(index * 0.1)}s`)}>`;
    if (activeSection === section.id) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="pulse-ring pulse-ring-1 svelte-han5yg"></div> <div class="pulse-ring pulse-ring-2 svelte-han5yg"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span class="dot svelte-han5yg"><!---->`;
    section.icon?.($$payload, { class: "dot-icon", size: 10 });
    $$payload.out += `<!----> <span class="dot-core svelte-han5yg"></span></span> <span class="section-label svelte-han5yg"><span class="label-text svelte-han5yg">${escape_html(section.label)}</span> <span class="label-accent svelte-han5yg"></span></span></button>`;
  }
  $$payload.out += `<!--]--></div> <div class="nav-accent svelte-han5yg"></div></div></nav>`;
  pop();
}
function _page($$payload) {
  SideNav($$payload);
  $$payload.out += `<!----> <section id="hero" class="svelte-elxplk">`;
  Hero($$payload);
  $$payload.out += `<!----></section> <section id="about" class="svelte-elxplk">`;
  About($$payload);
  $$payload.out += `<!----></section> <section id="research" class="svelte-elxplk">`;
  Research($$payload);
  $$payload.out += `<!----></section> <section id="impact" class="svelte-elxplk">`;
  ImpactDomains($$payload);
  $$payload.out += `<!----></section> <section id="solutions" class="svelte-elxplk">`;
  Solutions($$payload);
  $$payload.out += `<!----></section> <section id="collaboration" class="svelte-elxplk">`;
  Collaboration($$payload);
  $$payload.out += `<!----></section> <section id="cta" class="svelte-elxplk">`;
  CallToAction($$payload);
  $$payload.out += `<!----></section> <section id="contact" class="svelte-elxplk">`;
  Contact($$payload);
  $$payload.out += `<!----></section> <main class="svelte-elxplk"></main>`;
}
export {
  _page as default
};
