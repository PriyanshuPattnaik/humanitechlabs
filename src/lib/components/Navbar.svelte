<script>
  import { onMount } from 'svelte';
  let isScrolled = false;
  let isMobileMenuOpen = false;
  let isVisible = false;

  onMount(() => {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 20;
      isVisible = window.scrollY > window.innerHeight * 0.5;
    });
  });
</script>

<nav class="navbar" class:scrolled={isScrolled} class:visible={isVisible}>
  <div class="container">
    <div class="logo">
      <img src="/images/2.png" alt="HumaniTech Logo" />
    </div>
    
    <button class="mobile-menu-button" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <div class="nav-links" class:open={isMobileMenuOpen}>
      <a href="#benefits">About</a>
      <a href="#focus">Research</a>
      <a href="#for-who">Products</a>
      <a href="#features">Blog</a>
      <a href="#results">Hub</a>
      <a href="#results">Join Us</a>
      <a href="#faq">FAQ</a>
      <a href="#apply" class="apply-button">Build with Us</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease;
    background: transparent;
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
  }

  .navbar.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    height: 80px;
    width: auto;
    padding: 0.5rem 0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    color: var(--color-jet-black);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: var(--color-electric-blue);
  }

  .apply-button {
    padding: 0.5rem 1.5rem;
    background: var(--color-jet-black);
    color: var(--color-pure-white) !important;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .apply-button:hover {
    background: var(--color-electric-blue);
    transform: translateY(-2px);
  }

  .mobile-menu-button {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .bar {
    width: 24px;
    height: 2px;
    background: var(--color-jet-black);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .mobile-menu-button {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      flex-direction: column;
      padding: 2rem;
      gap: 1.5rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }

    .nav-links.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    .apply-button {
      width: 100%;
      text-align: center;
    }
  }
</style>