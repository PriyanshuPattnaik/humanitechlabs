<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  let currentWordIndex = 0;
  let isAnimating = false;
  
  const rotatingWords = [
    'HUMANITY',
    'IMPACT', 
    'CHANGE',
    'PROGRESS',
    'TOMORROW'
  ];
  
  let typedText = '';
  const fullText = 'Building ethical AI and scalable solutions to bridge the gap between technology and humanitarian needs.';
  let typeIndex = 0;
  
  onMount(() => {
    visible = true;
    
    const rotateWords = () => {
      isAnimating = true;
      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
        isAnimating = false;
      }, 200);
    };
    
    const wordInterval = setInterval(rotateWords, 3500);
    
    const typeText = () => {
      if (typeIndex < fullText.length) {
        typedText += fullText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeText, 50);
      }
    };
    
    setTimeout(typeText, 1500);
    
    return () => clearInterval(wordInterval);
  });
  
  /** @type {Array<{id: number, x: number, y: number, delay: number}>} */
  let particles = [];
  
  onMount(() => {
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      });
    }
    particles = particles;
  });
</script>

<section class="hero" class:visible>
  
  <div class="particles">
    {#each particles as particle}
      <div 
        class="particle" 
        style="left: {particle.x}%; top: {particle.y}%; animation-delay: {particle.delay}s;"
      ></div>
    {/each}
  </div>
  
  <div class="hero-background">
    <div class="gradient-overlay"></div>
  </div>
  
  <div class="container">
    <div class="hero-content">
      <div class="title-wrapper">
        <h1 class="hero-title">
          <span class="word primary">TECH</span>
          <span class="word secondary">FOR</span>
          <span class="word rotating" class:animating={isAnimating}>
            {rotatingWords[currentWordIndex]}
          </span>
          <span class="word accent">UPLIFTING.</span>
        </h1>
        
        <div class="title-underline"></div>
      </div>
      
      <div class="subtitle-container">
        <p class="hero-subtitle typing">
          {typedText}<span class="cursor">|</span>
        </p>
        
        <p class="hero-description">
          We're an innovation lab focused on solving real humanitarian challenges through 
          open-source technology, research, and services for NGOs.
        </p>
        
        <div class="tags">
          <span class="tag">
            <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            Research & Innovation
          </span>
          <span class="tag">
            <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Open Source First
          </span>
          <span class="tag">
            <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Social Impact
          </span>
        </div>
      </div>
      
      <div class="cta-container">
        <div class="primary-cta">
          <a href="/join-us" class="cta-button primary">
            <span>Register to Collaborate</span>
            <span class="button-arrow">→</span>
          </a>
          <a href="/research" class="cta-button secondary">
            <span>Explore Research</span>
          </a>
        </div>
        
        <div class="profile-card">
          <div class="profile-icon-wrapper">
            <img src="/images/4.png" alt="Hume AI" class="profile-icon" />
            <div class="status-indicator"></div>
          </div>
          <div class="profile-text">
            <strong>Meet Hume</strong>
            <span>Your AI research companion exploring humanitarian tech solutions</span>
          </div>
        </div>
      </div>
      
      <div class="metrics">
        <div class="metric">
          <span class="metric-number">20+</span>
          <span class="metric-label">Research Domains</span>
        </div>
        <div class="metric">
          <span class="metric-number">100%</span>
          <span class="metric-label">Open Source</span>
        </div>
        <div class="metric">
          <span class="metric-number">∞</span>
          <span class="metric-label">Potential Impact</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="scroll-text">Scroll to explore</div>
    <div class="scroll-arrow">↓</div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: var(--color-jet-black);
    position: relative;
    overflow: hidden;
    padding: 2rem;
    padding-top: 8rem;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: linear-gradient(45deg, #C0C0C0, #E8E8E8);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); opacity: 0.3; }
    50% { transform: translateY(-20px); opacity: 0.8; }
  }

  .hero-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-image: url('/images/hero.png');
    background-size: cover;
    background-position: center right;
    z-index: 1;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      rgba(255,255,255,0.95) 0%, 
      rgba(255,255,255,0.85) 30%,
      rgba(255,255,255,0.4) 60%,
      transparent 100%
    );
    z-index: 2;
  }

  .container {
    position: relative;
    z-index: 3;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-content {
    max-width: 800px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .visible .hero-content {
    opacity: 1;
    transform: translateY(0);
  }

  .title-wrapper {
    position: relative;
    margin-bottom: 3rem;
  }

  .hero-title {
    font-size: clamp(3.5rem, 12vw, 10rem);
    line-height: 0.9;
    font-family: var(--font-headers);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .word {
    display: block;
    position: relative;
    margin-bottom: 0.1em;
    animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
    transform: translateY(50px);
  }

  .word.primary {
    color: var(--color-jet-black);
    animation-delay: 0.2s;
  }

  .word.secondary {
    color: #666;
    font-size: 0.6em;
    animation-delay: 0.4s;
  }

  .word.rotating {
    background: linear-gradient(135deg, #000000 0%, #C0C0C0 50%, #E8E8E8 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    animation-delay: 0.6s;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .word.rotating.animating {
    transform: translateY(-10px) scale(1.05);
    filter: blur(1px);
  }

  .word.accent {
    color: var(--color-jet-black);
    animation-delay: 0.8s;
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .title-underline {
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #C0C0C0, #E8E8E8);
    animation: expandUnderline 1.5s ease-out 1s forwards;
  }

  @keyframes expandUnderline {
    to { width: 200px; }
  }

  .subtitle-container {
    margin-bottom: 4rem;
  }

  .hero-subtitle {
    font-size: 1.75rem;
    font-family: var(--font-hero);
    color: var(--color-jet-black);
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .cursor {
    animation: blink 1s infinite;
    color: #C0C0C0;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .hero-description {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .tags {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-radius: 50px;
    font-size: 0.9rem;
    font-family: var(--font-body);
    color: var(--color-charcoal-gray);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .tag:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .tag-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .primary-cta {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    text-decoration: none;
    border-radius: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
  }

  .cta-button.primary {
    background: var(--color-jet-black);
    color: var(--color-pure-white);
  }

  .cta-button.primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
  }

  .cta-button.primary:hover::before {
    left: 100%;
  }

  .cta-button.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .cta-button.secondary {
    background: transparent;
    color: var(--color-jet-black);
    border: 2px solid var(--color-jet-black);
  }

  .cta-button.secondary:hover {
    background: var(--color-jet-black);
    color: var(--color-pure-white);
    transform: translateY(-3px);
  }

  .button-arrow {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .button-arrow {
    transform: translateX(5px);
  }

  .profile-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-radius: 16px;
    max-width: 500px;
    color: var(--color-jet-black);
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
  }

  .profile-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .profile-icon-wrapper {
    position: relative;
  }

  .profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #C0C0C0;
  }

  .status-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    background: #00ff88;
    border-radius: 50%;
    border: 2px solid white;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(0, 255, 136, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0); }
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .profile-text strong {
    font-size: 1.1rem;
    color: var(--color-jet-black);
  }

  .profile-text span {
    font-size: 0.95rem;
    color: #666;
  }

  .metrics {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .metric-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-jet-black);
    line-height: 1;
  }

  .metric-label {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.7;
    animation: bounce 2s infinite;
  }

  .scroll-text {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scroll-arrow {
    font-size: 1.2rem;
    color: #C0C0C0;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
      padding-top: 5rem;
    }

    .hero-title {
      font-size: clamp(2.5rem, 8vw, 4rem);
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1.1rem;
    }

    .primary-cta {
      flex-direction: column;
    }

    .cta-button {
      text-align: center;
      justify-content: center;
    }

    .profile-card {
      font-size: 0.9rem;
      padding: 1.25rem 1.5rem;
    }

    .metrics {
      gap: 2rem;
      justify-content: center;
    }

    .hero-background {
      width: 100%;
      opacity: 0.3;
    }
  }
</style>
