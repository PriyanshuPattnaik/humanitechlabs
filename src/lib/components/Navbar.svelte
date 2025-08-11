<script>
  import { onMount } from 'svelte';
  let isScrolled = false;
  let isMobileMenuOpen = false;
  let isVisible = false;
  let showServices = false;
  let isMobile = false;
  let isAnimating = false;

  function handleResize() {
    isMobile = window.innerWidth <= 768;
    if (!isMobile && isMobileMenuOpen) {
      isMobileMenuOpen = false;
    }
  }

  function toggleMobileMenu() {
    if (isAnimating) return;
    isAnimating = true;
    isMobileMenuOpen = !isMobileMenuOpen;
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  }

  function handleNavClick() {
    if (isMobile) {
      isMobileMenuOpen = false;
    }
  }

  onMount(() => {
    let ticking = false;
    
    function updateScrollState() {
      isScrolled = window.scrollY > 20;
      isVisible = window.scrollY > window.innerHeight * 0.3;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<nav class="navbar" class:scrolled={isScrolled} class:visible={isVisible}>
  <div class="navbar-blur"></div>
  <div class="container">
    <div class="logo">
      <img src="/images/2.png" alt="HumaniTech Logo"/>
      <div class="logo-glow"></div>
    </div>
    
    <button 
      class="mobile-menu-button" 
      class:active={isMobileMenuOpen}
      on:click={toggleMobileMenu}
      aria-label="Toggle mobile menu"
      aria-expanded={isMobileMenuOpen}
      aria-controls="nav-links"
    >
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
      <div class="button-glow"></div>
    </button>

    <div class="nav-links" class:open={isMobileMenuOpen} id="nav-links">
      <div class="nav-backdrop"></div>
      <a href="/" on:click={handleNavClick}>
        <span class="link-text">Home</span>
        <div class="link-glow"></div>
      </a>
      <a href="/about" on:click={handleNavClick}>
        <span class="link-text">About</span>
        <div class="link-glow"></div>
      </a>
      <a href="/research" on:click={handleNavClick}>
        <span class="link-text">Research</span>
        <div class="link-glow"></div>
      </a>
      <a href="#for-who" on:click={handleNavClick}>
        <span class="link-text">Products</span>
        <div class="link-glow"></div>
      </a>
      
      <div
        class="services-dropdown-wrapper"
        role="button"
        tabindex="0"
        aria-haspopup="true"
        aria-expanded={showServices}
        on:mouseenter={() => { if (!isMobile) showServices = true; }}
        on:mouseleave={() => { if (!isMobile) showServices = false; }}
        on:focus={() => showServices = true}
        on:blur={(e) => { 
          if (!isMobile) {
            setTimeout(() => {
              if (!e.currentTarget.matches(':focus')) {
                showServices = false;
              }
            }, 0);
          }
        }}
        on:click={() => { if (isMobile) showServices = !showServices; }}
        on:keydown={(e) => { 
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showServices = !showServices;
          }
        }}
      >
        <span class="services-link">
          <span class="link-text">Services</span>
          <svg class="chevron" class:rotated={showServices} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          <div class="link-glow"></div>
        </span>
        
        <div class="services-dropdown" class:show={showServices}>
          <div class="dropdown-backdrop"></div>
          <div class="dropdown-content">
            <div class="dropdown-section">
              <div class="dropdown-title">
                <span class="title-icon">🤖</span>
                For NGOs
              </div>
              <a href="/services/ngos" class="dropdown-item" on:click={handleNavClick}>
                <div class="item-icon">
                  <span class="icon-bg"></span>
                  <span class="icon-text">🤝</span>
                </div>
                <div class="item-content">
                  <span class="item-title">360 Tech Solution</span>
                  <span class="item-description">Complete digital transformation</span>
                </div>
                <div class="item-glow"></div>
              </a>
              <a href="/services/ai" class="dropdown-item" on:click={handleNavClick}>
                <div class="item-icon">
                  <span class="icon-bg"></span>
                  <span class="icon-text">⚡</span>
                </div>
                <div class="item-content">
                  <span class="item-title">AI Integration</span>
                  <span class="item-description">Smart automation solutions</span>
                </div>
                <div class="item-glow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#features" on:click={handleNavClick}>
        <span class="link-text">Blog</span>
        <div class="link-glow"></div>
      </a>
      <a href="#results" on:click={handleNavClick}>
        <span class="link-text">Hub</span>
        <div class="link-glow"></div>
      </a>
      <a href="/join-us" on:click={handleNavClick}>
        <span class="link-text">Join Us</span>
        <div class="link-glow"></div>
      </a>
      <a href="#faq" on:click={handleNavClick}>
        <span class="link-text">FAQ</span>
        <div class="link-glow"></div>
      </a>
      <a href="/services/ngos" class="apply-button" on:click={handleNavClick}>
        <span class="button-text">Build with Us</span>
        <div class="button-shine"></div>
        <div class="button-glow-effect"></div>
      </a>
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
    padding: 0.75rem 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
  }

  .navbar-blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .navbar.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .navbar.scrolled .navbar-blur {
    opacity: 1;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .logo {
    position: relative;
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 70px;
    width: auto;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(0, 123, 255, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .logo:hover .logo-glow {
    opacity: 1;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    position: relative;
  }

  .nav-backdrop {
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .nav-links a {
    color: #111;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .link-text {
    position: relative;
    z-index: 1;
  }

  .link-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }

  .nav-links a:hover .link-glow {
    opacity: 1;
  }

  .nav-links a:hover {
    color: #007BFF;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  }

  .apply-button {
    padding: 0.75rem 2rem !important;
    background: linear-gradient(135deg, #111 0%, #333 100%);
    color: #fff !important;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .button-text {
    position: relative;
    z-index: 2;
    font-weight: 600;
  }

  .button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  .button-glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }

  .apply-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
    background: linear-gradient(135deg, #007BFF 0%, #0056b3 100%);
  }

  .apply-button:hover .button-shine {
    left: 100%;
  }

  .apply-button:hover .button-glow-effect {
    opacity: 1;
  }

  .services-dropdown-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .services-link {
    color: #111;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .chevron {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  .services-link:hover,
  .services-dropdown-wrapper:focus .services-link {
    color: #007BFF;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  }

  .services-link:hover .link-glow {
    opacity: 1;
  }

  .services-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    min-width: 320px;
    background: transparent;
    border-radius: 20px;
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px) scale(0.95);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .dropdown-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  }

  .dropdown-content {
    position: relative;
    z-index: 1;
    padding: 1.5rem;
  }

  .services-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  .dropdown-section {
    margin-bottom: 1rem;
  }

  .dropdown-title {
    color: #007BFF;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .title-icon {
    font-size: 1.2rem;
  }

  .dropdown-item {
    color: #111 !important;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .item-icon {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .icon-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(255, 255, 255, 0.1));
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .icon-text {
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
  }

  .item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .item-title {
    font-weight: 600;
    color: #111;
  }

  .item-description {
    font-size: 0.8rem;
    color: #666;
    opacity: 0.8;
  }

  .item-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(255, 255, 255, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }

  .dropdown-item:hover {
    transform: translateX(4px);
    color: #007BFF !important;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.1);
  }

  .dropdown-item:hover .item-glow {
    opacity: 1;
  }

  .dropdown-item:hover .icon-bg {
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(255, 255, 255, 0.2));
  }

  .dropdown-item:hover .item-title {
    color: #007BFF;
  }

  .mobile-menu-button {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .button-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }

  .mobile-menu-button:hover .button-glow {
    opacity: 1;
  }

  .bar {
    width: 24px;
    height: 3px;
    background: #111;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
  }

  .mobile-menu-button.active .bar-1 {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .mobile-menu-button.active .bar-2 {
    opacity: 0;
    transform: scale(0);
  }

  .mobile-menu-button.active .bar-3 {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 0.5rem 1rem;
    }

    .mobile-menu-button {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 70px;
      left: 1rem;
      right: 1rem;
      background: transparent;
      flex-direction: column;
      padding: 2rem;
      gap: 1rem;
      transform: translateY(-100vh);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      max-height: calc(100vh - 90px);
      overflow-y: auto;
      border-radius: 20px;
    }

    .nav-backdrop {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      opacity: 1;
    }

    .nav-links.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    .nav-links a {
      width: 100%;
      text-align: left;
      padding: 1rem;
      font-size: 1rem;
    }

    .apply-button {
      width: 100%;
      text-align: center;
      padding: 1rem 2rem !important;
      margin-top: 1rem;
    }

    .services-dropdown-wrapper {
      width: 100%;
    }

    .services-link {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    .services-dropdown {
      position: static;
      width: 100%;
      margin-top: 0.5rem;
      min-width: auto;
      transform: none;
      visibility: visible;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .services-dropdown.show {
      opacity: 1;
      max-height: 300px;
    }

    .dropdown-content {
      padding: 1rem;
    }

    .dropdown-item {
      padding: 1rem;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }

    .dropdown-item:hover {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 0.5rem;
    }

    .nav-links {
      left: 0.5rem;
      right: 0.5rem;
      padding: 1.5rem;
    }

    .logo img {
      height: 60px;
    }
  }
</style>