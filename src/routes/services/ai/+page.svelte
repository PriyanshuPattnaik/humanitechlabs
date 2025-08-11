<script>
  import Hero from './components/Hero.svelte';
  import AIServices from './components/AIServices.svelte';
  import TechStack from './components/TechStack.svelte';
  import CaseStudies from './components/CaseStudies.svelte';
  import Pricing from './components/Pricing.svelte';
  import FinalCTA from './components/FinalCTA.svelte';
</script>

<svelte:head>
  <title>AI Integration Services - HumaniTech</title>
  <meta name="description" content="Transform your organization with cutting-edge AI solutions. Custom AI integration, automation, and intelligent systems for modern businesses." />
  <meta name="keywords" content="AI integration, artificial intelligence, automation, machine learning, AI consulting" />
</svelte:head>

<Hero />
<AIServices />
<TechStack />
<CaseStudies />
<Pricing />
<FinalCTA />

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>