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
  <title>NGO Services - Free Technology Solutions | Humanitech</title>
  <meta name="description" content="Transform your NGO's impact with free 360° technology solutions. Web development, AI, data analytics, and more for qualifying non-profits." />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- Problem Statement -->
<ProblemStatement />

<!-- Solution Overview -->
<SolutionOverview />

<!-- Services Grid -->
<ServicesGrid />

<!-- Pricing Philosophy -->
<PricingPhilosophy />

<!-- Process Timeline -->
<ProcessTimeline />

<!-- Why Choose Us -->
<WhyChooseUs />

<!-- Final CTA -->
<FinalCTA />

<style>
  :global(html) {
    background: #000000;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #000000;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
    