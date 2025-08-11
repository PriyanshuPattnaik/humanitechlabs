<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  });
</script>

<slot />

<style>
  :global(.ai-services-page) {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    min-height: 100vh;
  }
  
  :global(.ai-services-page .section) {
    padding: 4rem 0;
  }
  
  :global(.ai-services-page .container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>