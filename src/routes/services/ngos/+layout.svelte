<script>
  import { page } from '$app/stores';
</script>

<div class="breadcrumb">
  <div class="container">
    <a href="/">Home</a>
    <span class="separator">/</span>
    <a href="/services">Services</a>
    <span class="separator">/</span>
    <span class="current">For NGOs</span>
  </div>
</div>

<slot />

<style>
  .breadcrumb {
    background: var(--color-background, #f5f5f5);
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border, #e0e0e0);
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .breadcrumb a {
    color: var(--color-text, #333);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .breadcrumb a:hover {
    color: var(--color-accent, #007bff);
  }

  .separator {
    margin: 0 0.5rem;
    color: var(--color-text-light, #666);
  }

  .current {
    color: var(--color-text-light, #666);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
</style> 