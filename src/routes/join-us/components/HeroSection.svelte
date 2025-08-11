<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroSection: HTMLElement;
  let glassCard: HTMLElement;
  let floatingElements: HTMLElement[] = [];
  let mounted = false;
  
  // Smooth scroll to Open Roles section
  function scrollToRoles() {
    const el = document.getElementById('open-roles-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Advanced parallax mouse movement with depth layers
  function handleMouseMove(event: MouseEvent) {
    if (!glassCard || !heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    // Main card transform with enhanced depth
    glassCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
    
    // Floating elements parallax
    floatingElements.forEach((el, index) => {
      const intensity = (index + 1) * 0.3;
      const moveX = (x - centerX) * intensity * 0.02;
      const moveY = (y - centerY) * intensity * 0.02;
      el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + intensity * 0.05})`;
    });
  }
  
  function handleMouseLeave() {
    if (glassCard) {
      glassCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
    floatingElements.forEach(el => {
      el.style.transform = 'translate(0px, 0px) scale(1)';
    });
  }
  
  onMount(() => {
    mounted = true;
    // Initialize floating elements
    floatingElements = Array.from(document.querySelectorAll('.floating-element'));
  });
</script>

<section 
  class="hero-section" 
  class:mounted
  bind:this={heroSection}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <!-- Dynamic background layers -->
  <div class="bg-layer primary"></div>
  <div class="bg-layer secondary"></div>
  <div class="noise-overlay"></div>
  
  <!-- Floating geometric elements -->
  <div class="floating-element circle" style="top: 15%; left: 10%;"></div>
  <div class="floating-element square" style="top: 70%; right: 15%;"></div>
  <div class="floating-element triangle" style="top: 40%; left: 85%;"></div>
  <div class="floating-element hexagon" style="bottom: 20%; left: 20%;"></div>
  
  <!-- Main glass card -->
  <div class="glass-card" bind:this={glassCard}>
    <div class="card-glow"></div>
    <div class="content-wrapper">
      
      <div class="status-badge">
        <div class="pulse-dot"></div>
        <span>We're Hiring Visionaries</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line primary">Shape the Future</span>
        <span class="title-line gradient">of Human Technology</span>
        <span class="title-line secondary">Interaction</span>
      </h1>
      
      <p class="subtitle">
        At Humanitech, we don't just build products—we craft experiences that bridge the gap between human potential and technological possibility. Join our team of innovators creating 
        <span class="highlight">intuitive digital ecosystems</span>, 
        <span class="highlight">scalable cloud architectures</span>, and 
        <span class="highlight">human-first design systems</span> 
        that transform how people connect with technology.
      </p>
      
      <div class="cta-container">
        <button class="cta-primary" on:click={scrollToRoles} aria-label="Explore Career Opportunities">
          <span class="btn-content">
            <span class="btn-text">Explore Opportunities</span>
            <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div class="btn-shine"></div>
        </button>
        
        <button class="cta-secondary" aria-label="Learn About Our Culture">
          <span class="btn-text">Our Culture</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
    </div>
  </div>
  
  <!-- Ambient light effects -->
  <div class="ambient-light top-left"></div>
  <div class="ambient-light bottom-right"></div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    overflow: hidden;
    background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
    isolation: isolate;
  }

  .hero-section.mounted {
    animation: sectionFadeIn 1s ease-out;
  }

  @keyframes sectionFadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }

  /* Background layers */
  .bg-layer {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .bg-layer.primary {
    background: radial-gradient(circle at 30% 20%, rgba(0,0,0,0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0,0,0,0.015) 0%, transparent 50%);
    animation: bgFloat1 15s ease-in-out infinite;
  }

  .bg-layer.secondary {
    background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0,0,0,0.008) 60deg, transparent 120deg, rgba(0,0,0,0.012) 180deg, transparent 240deg, rgba(0,0,0,0.006) 300deg, transparent 360deg);
    animation: bgRotate 30s linear infinite;
  }

  .noise-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  @keyframes bgFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-10px, -5px) scale(1.02); }
  }

  @keyframes bgRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Floating geometric elements */
  .floating-element {
    position: absolute;
    background: rgba(0,0,0,0.03);
    border: 1px solid rgba(0,0,0,0.05);
    backdrop-filter: blur(20px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 3;
    animation: float 6s ease-in-out infinite;
  }

  .floating-element.circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    animation-delay: 0s;
  }

  .floating-element.square {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    transform: rotate(45deg);
    animation-delay: 1s;
  }

  .floating-element.triangle {
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid rgba(0,0,0,0.03);
    background: none;
    animation-delay: 2s;
  }

  .floating-element.hexagon {
    width: 70px;
    height: 70px;
    background: rgba(0,0,0,0.03);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation-delay: 3s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  /* Main glass card */
  .glass-card {
    position: relative;
    z-index: 10;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 32px;
    max-width: 900px;
    width: 100%;
    backdrop-filter: blur(30px);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    isolation: isolate;
  }

  .card-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%);
    border-radius: 34px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .glass-card:hover .card-glow {
    opacity: 1;
  }

  .content-wrapper {
    padding: 5rem 4rem;
    text-align: center;
  }

  /* Status badge */
  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100px;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 3rem;
    backdrop-filter: blur(10px);
    letter-spacing: 0.5px;
  }

  .pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
    100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
  }

  /* Hero title */
  .hero-title {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 2.5rem;
    letter-spacing: -0.03em;
  }

  .title-line {
    display: block;
  }

  .title-line.primary {
    color: #0a0a0a;
  }

  .title-line.gradient {
    background: linear-gradient(135deg, #2d2d2d 0%, #888888 50%, #1a1a1a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
    position: relative;
    animation: gradientShift 4s ease-in-out infinite;
  }

  .title-line.secondary {
    color: #404040;
    font-weight: 700;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Subtitle */
  .subtitle {
    color: #2a2a2a;
    font-size: 1.3rem;
    line-height: 1.65;
    margin-bottom: 3.5rem;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .highlight {
    background: rgba(0,0,0,0.06);
    border-radius: 6px;
    padding: 0.15rem 0.4rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  /* CTA buttons */
  .cta-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .cta-primary {
    position: relative;
    background: linear-gradient(135deg, #1a1a1a 0%, #404040 100%);
    border: 1px solid #2d2d2d;
    color: #ffffff;
    border-radius: 100px;
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    isolation: isolate;
  }

  .btn-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 2;
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .btn-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.6s ease;
    z-index: 1;
  }

  .cta-primary:hover {
    background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    transform: translateY(-3px);
  }

  .cta-primary:hover .btn-shine {
    left: 100%;
  }

  .cta-primary:hover .btn-icon {
    transform: translate(2px, -2px);
  }

  .cta-secondary {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(0,0,0,0.1);
    color: #2a2a2a;
    border-radius: 100px;
    padding: 1.2rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-secondary:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }

  /* Ambient lights */
  .ambient-light {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(100px);
    z-index: 0;
    pointer-events: none;
  }

  .ambient-light.top-left {
    top: -150px;
    left: -150px;
    background: radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%);
    animation: ambientFloat1 8s ease-in-out infinite;
  }

  .ambient-light.bottom-right {
    bottom: -150px;
    right: -150px;
    background: radial-gradient(circle, rgba(0,0,0,0.015) 0%, transparent 70%);
    animation: ambientFloat2 10s ease-in-out infinite reverse;
  }

  @keyframes ambientFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(20px, -10px) scale(1.1); }
  }

  @keyframes ambientFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-15px, 15px) scale(0.9); }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .content-wrapper {
      padding: 3rem 2rem;
    }

    .hero-title {
      font-size: clamp(2.2rem, 8vw, 3.5rem);
      margin-bottom: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    .cta-container {
      flex-direction: column;
      align-items: stretch;
    }

    .cta-primary, .cta-secondary {
      padding: 1rem 2rem;
      font-size: 1rem;
    }

    .floating-element {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 1rem;
    }

    .content-wrapper {
      padding: 2.5rem 1.5rem;
    }

    .status-badge {
      font-size: 0.8rem;
      padding: 0.6rem 1.2rem;
    }
  }
</style>