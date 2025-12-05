<script>
  import '../lib/styles/global.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: 100vh;
    margin-top: 0;
  }
</style>