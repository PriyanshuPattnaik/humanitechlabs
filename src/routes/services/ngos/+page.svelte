<script lang="ts">
  import Hero from './components/Hero.svelte';
  import ProblemStatement from './components/ProblemStatement.svelte';
  import SolutionOverview from './components/SolutionOverview.svelte';
  import ServicesGrid from './components/ServicesGrid.svelte';
  import PricingPhilosophy from './components/PricingPhilosophy.svelte';
  import ProcessTimeline from './components/ProcessTimeline.svelte';
  import WhyChooseUs from './components/WhyChooseUs.svelte';
  import FinalCTA from './components/FinalCTA.svelte';
</script>

<svelte:head>
  <title>NGO Technology Services | Humanitech Labs</title>
  <meta name="description" content="Comprehensive technology solutions designed for non-profit organizations. Modern web development, data analytics, and capacity building to amplify your social impact." />
  <meta name="keywords" content="NGO technology services, non-profit web development, social impact technology, humanitarian tech solutions" />
</svelte:head>

<Hero />
<ProblemStatement />
<SolutionOverview />
<ServicesGrid />
<PricingPhilosophy />
<ProcessTimeline />
<WhyChooseUs />
<FinalCTA />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
    