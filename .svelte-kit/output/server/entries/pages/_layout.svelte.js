import { d as attr_class, c as pop, p as push, e as slot } from "../../chunks/index.js";
function Navbar($$payload, $$props) {
  push();
  let isScrolled = false;
  let isMobileMenuOpen = false;
  let isVisible = false;
  $$payload.out += `<nav${attr_class("navbar svelte-17u8zqp", void 0, { "scrolled": isScrolled, "visible": isVisible })}><div class="container svelte-17u8zqp"><div class="logo svelte-17u8zqp"><img src="/images/2.png" alt="HumaniTech Logo" class="svelte-17u8zqp"/></div> <button class="mobile-menu-button svelte-17u8zqp"><span class="bar svelte-17u8zqp"></span> <span class="bar svelte-17u8zqp"></span> <span class="bar svelte-17u8zqp"></span></button> <div${attr_class("nav-links svelte-17u8zqp", void 0, { "open": isMobileMenuOpen })}><a href="#benefits" class="svelte-17u8zqp">About</a> <a href="#focus" class="svelte-17u8zqp">Research</a> <a href="#for-who" class="svelte-17u8zqp">Products</a> <a href="#features" class="svelte-17u8zqp">Blog</a> <a href="#results" class="svelte-17u8zqp">Hub</a> <a href="#results" class="svelte-17u8zqp">Join Us</a> <a href="#faq" class="svelte-17u8zqp">FAQ</a> <a href="#apply" class="apply-button svelte-17u8zqp">Build with Us</a></div></div></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  Navbar($$payload);
  $$payload.out += `<!----> <main class="svelte-1k9uoey"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
}
export {
  _layout as default
};
