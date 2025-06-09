<script>
  import '../lib/styles/global.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
  <slot />
</main>

<style>
  main {
    min-height: 100vh;
    margin-top: 0; /* Remove any top margin to allow hero section to start from the very top */
  }
</style>