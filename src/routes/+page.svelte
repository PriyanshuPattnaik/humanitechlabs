<script>
  import CallToAction from '$lib/components/CallToAction.svelte';
  import Collaboration from '$lib/components/Collaboration.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Research from '$lib/components/Research.svelte';
  import ImpactDomains from '$lib/components/ImpactDomains.svelte';
  import Solutions from '$lib/components/Solutions.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import SideNav from '$lib/components/SideNav.svelte';
</script>

<SideNav />
<section id="hero">
  <Hero />
</section>
<section id="about">
  <About />
</section>
<section id="research">
  <Research />
</section>
<section id="impact">
  <ImpactDomains />
</section>
<section id="solutions">
  <Solutions />
</section>
<section id="collaboration">
  <Collaboration />
</section>
<section id="cta">
  <CallToAction />
</section>
<section id="contact">
  <Contact />
</section>

<main>
</main>

<style>
  main {
    min-height: 100vh;
  }

  section {
    scroll-margin-top: 2rem;
  }
</style>



