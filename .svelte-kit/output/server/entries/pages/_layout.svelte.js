import { n as attr_class, q as attr, m as pop, p as push, t as ensure_array_like, u as escape_html, v as slot } from "../../chunks/index.js";
import { H as Heart } from "../../chunks/heart.js";
import { G as Github, L as Linkedin, T as Twitter } from "../../chunks/twitter.js";
import { M as Mail } from "../../chunks/mail.js";
function Navbar($$payload, $$props) {
  push();
  let isScrolled = false;
  let isMobileMenuOpen = false;
  let isVisible = false;
  let showServices = false;
  $$payload.out += `<nav${attr_class("navbar svelte-a8q9kl", void 0, { "scrolled": isScrolled, "visible": isVisible })}><div class="navbar-blur svelte-a8q9kl"></div> <div class="container svelte-a8q9kl"><div class="logo svelte-a8q9kl"><img src="/images/2.png" alt="HumaniTech Logo" class="svelte-a8q9kl"/> <div class="logo-glow svelte-a8q9kl"></div></div> <button${attr_class("mobile-menu-button svelte-a8q9kl", void 0, { "active": isMobileMenuOpen })} aria-label="Toggle mobile menu"${attr("aria-expanded", isMobileMenuOpen)} aria-controls="nav-links"><span class="bar bar-1 svelte-a8q9kl"></span> <span class="bar bar-2 svelte-a8q9kl"></span> <span class="bar bar-3 svelte-a8q9kl"></span> <div class="button-glow svelte-a8q9kl"></div></button> <div${attr_class("nav-links svelte-a8q9kl", void 0, { "open": isMobileMenuOpen })} id="nav-links"><div class="nav-backdrop svelte-a8q9kl"></div> <a href="/" class="svelte-a8q9kl"><span class="link-text svelte-a8q9kl">Home</span> <div class="link-glow svelte-a8q9kl"></div></a> <a href="/about" class="svelte-a8q9kl"><span class="link-text svelte-a8q9kl">About</span> <div class="link-glow svelte-a8q9kl"></div></a> <a href="/research" class="svelte-a8q9kl"><span class="link-text svelte-a8q9kl">Research</span> <div class="link-glow svelte-a8q9kl"></div></a> <a href="/#solutions" class="svelte-a8q9kl"><span class="link-text svelte-a8q9kl">Solutions</span> <div class="link-glow svelte-a8q9kl"></div></a> <div class="services-dropdown-wrapper svelte-a8q9kl" role="button" tabindex="0" aria-haspopup="true"${attr("aria-expanded", showServices)}><span class="services-link svelte-a8q9kl"><span class="link-text svelte-a8q9kl">Services</span> <svg${attr_class("chevron svelte-a8q9kl", void 0, { "rotated": showServices })} viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6,9 12,15 18,9"></polyline></svg> <div class="link-glow svelte-a8q9kl"></div></span> <div${attr_class("services-dropdown svelte-a8q9kl", void 0, { "show": showServices })}><div class="dropdown-backdrop svelte-a8q9kl"></div> <div class="dropdown-content svelte-a8q9kl"><div class="dropdown-section svelte-a8q9kl"><div class="dropdown-title svelte-a8q9kl"><svg class="title-icon svelte-a8q9kl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></path></svg> Our Services</div> <a href="/services/ngos" class="dropdown-item svelte-a8q9kl"><div class="item-icon svelte-a8q9kl"><span class="icon-bg svelte-a8q9kl"></span> <svg class="icon-svg svelte-a8q9kl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div> <div class="item-content svelte-a8q9kl"><span class="item-title svelte-a8q9kl">NGO Services</span> <span class="item-description svelte-a8q9kl">Technology for social impact</span></div> <div class="item-glow svelte-a8q9kl"></div></a></div></div></div></div> <a href="/#collaboration" class="svelte-a8q9kl"><span class="link-text svelte-a8q9kl">Collaborate</span> <div class="link-glow svelte-a8q9kl"></div></a> <a href="/join-us" class="apply-button svelte-a8q9kl"><span class="button-text svelte-a8q9kl">Join Us</span> <div class="button-shine svelte-a8q9kl"></div> <div class="button-glow-effect svelte-a8q9kl"></div></a></div></div></nav>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Join Us", href: "/join-us" }
    ],
    solutions: [
      { label: "For NGOs", href: "/services/ngos" },
      { label: "Open Source", href: "/#solutions" },
      {
        label: "Collaboration",
        href: "/#collaboration"
      }
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Code of Conduct", href: "#" }
    ]
  };
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/humanitech-labs",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/humanitech-labs",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/humanitechlabs",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:hello@humanitech.org",
      label: "Email"
    }
  ];
  const each_array = ensure_array_like(socialLinks);
  const each_array_1 = ensure_array_like(footerLinks.company);
  const each_array_2 = ensure_array_like(footerLinks.solutions);
  const each_array_3 = ensure_array_like(footerLinks.resources);
  const each_array_4 = ensure_array_like(footerLinks.legal);
  $$payload.out += `<footer class="footer svelte-1ddyvzh"><div class="footer-background svelte-1ddyvzh"><div class="gradient-orb orb-1 svelte-1ddyvzh"></div> <div class="gradient-orb orb-2 svelte-1ddyvzh"></div></div> <div class="container svelte-1ddyvzh"><div class="footer-main svelte-1ddyvzh"><div class="footer-brand svelte-1ddyvzh"><div class="brand-logo svelte-1ddyvzh"><img src="/images/2.png" alt="Humanitech Labs" class="svelte-1ddyvzh"/></div> <p class="brand-tagline svelte-1ddyvzh">Building technology that serves humanity through ethical AI, 
          open-source innovation, and collaborative research.</p> <div class="social-links svelte-1ddyvzh"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a${attr("href", social.href)} class="social-link svelte-1ddyvzh" target="_blank" rel="noopener noreferrer"${attr("aria-label", social.label)}><!---->`;
    social.icon?.($$payload, { size: 20 });
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="footer-links svelte-1ddyvzh"><div class="link-column svelte-1ddyvzh"><h3 class="svelte-1ddyvzh">Company</h3> <ul class="svelte-1ddyvzh"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let link = each_array_1[$$index_1];
    $$payload.out += `<li class="svelte-1ddyvzh"><a${attr("href", link.href)} class="svelte-1ddyvzh">${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="link-column svelte-1ddyvzh"><h3 class="svelte-1ddyvzh">Solutions</h3> <ul class="svelte-1ddyvzh"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let link = each_array_2[$$index_2];
    $$payload.out += `<li class="svelte-1ddyvzh"><a${attr("href", link.href)} class="svelte-1ddyvzh">${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="link-column svelte-1ddyvzh"><h3 class="svelte-1ddyvzh">Resources</h3> <ul class="svelte-1ddyvzh"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let link = each_array_3[$$index_3];
    $$payload.out += `<li class="svelte-1ddyvzh"><a${attr("href", link.href)} class="svelte-1ddyvzh">${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="link-column svelte-1ddyvzh"><h3 class="svelte-1ddyvzh">Legal</h3> <ul class="svelte-1ddyvzh"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let link = each_array_4[$$index_4];
    $$payload.out += `<li class="svelte-1ddyvzh"><a${attr("href", link.href)} class="svelte-1ddyvzh">${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div> <div class="footer-bottom svelte-1ddyvzh"><div class="footer-divider svelte-1ddyvzh"></div> <div class="footer-bottom-content svelte-1ddyvzh"><p class="copyright svelte-1ddyvzh">© ${escape_html(currentYear)} Humanitech Labs. All rights reserved.</p> <p class="made-with svelte-1ddyvzh">Made with `;
  Heart($$payload, { size: 16, class: "heart-icon" });
  $$payload.out += `<!----> for humanity</p></div></div></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  Navbar($$payload);
  $$payload.out += `<!----> <main class="svelte-dyalnv"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
