<script lang="ts">
  import { onMount } from 'svelte';
  
  let missionRef: HTMLElement;
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.3 }
    );
    
    if (missionRef) {
      observer.observe(missionRef);
    }
    
    return () => observer.disconnect();
  });
</script>

<section class="mission-section" bind:this={missionRef}>
  <div class="background-effects">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
  
  <div class="mission-container" class:animate={isVisible}>
    <div class="glass-morphism-card">
      <div class="content-wrapper">
        <div class="mission-badge">
          <span class="badge-text">Our Mission</span>
        </div>
        
        <h2 class="mission-headline">
          Where Technology Meets 
          <span class="gradient-text">Human Purpose</span>
        </h2>
        
        <div class="mission-description">
          <p class="primary-text">
            We don't just build applications—we craft digital experiences that amplify human potential. 
            Every line of code, every interface, every cloud architecture is designed with one question: 
            <em>How does this make life better?</em>
          </p>
          
          <p class="secondary-text">
            From accessibility-first React interfaces to globally-scaled Flutter apps, we merge cutting-edge 
            technology with human-centered design. Because the future isn't just about what technology can do—
            it's about what it can do for humanity.
          </p>
        </div>
        
        <div class="tech-highlight">
          <div class="tech-grid">
            <span class="tech-item">React</span>
            <span class="tech-item">Svelte</span>
            <span class="tech-item">Flutter</span>
            <span class="tech-item">Node.js</span>
            <span class="tech-item">Cloud-Native</span>
            <span class="tech-item">A11y First</span>
          </div>
        </div>
      </div>
      
      <div class="card-glow"></div>
    </div>
  </div>
</section>

<style>
  .mission-section {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem;
    background: linear-gradient(135deg, #fff 0%, #f5f5f5 100%);
    overflow: hidden;
  }
  
  .background-effects {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
  
  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.13;
    animation: float 6s ease-in-out infinite;
  }
  
  .orb-1 {
    width: 260px;
    height: 260px;
    background: linear-gradient(45deg, #e5e5e5, #bcbcbc);
    top: 18%;
    left: 8%;
    animation-delay: 0s;
  }
  
  .orb-2 {
    width: 180px;
    height: 180px;
    background: linear-gradient(135deg, #f5f5f5, #d4d4d4);
    top: 60%;
    right: 12%;
    animation-delay: 2s;
  }
  
  .orb-3 {
    width: 120px;
    height: 120px;
    background: linear-gradient(225deg, #e5e5e5, #a3a3a3);
    bottom: 25%;
    left: 18%;
    animation-delay: 4s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
  
  .mission-container {
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .mission-container.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .glass-morphism-card {
    position: relative;
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(192,192,192,0.15);
    border-radius: 24px;
    padding: 3.5rem 3rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 24px 0 rgba(192,192,192,0.08);
    color: #181818;
    transition: box-shadow 0.3s;
  }
  
  .glass-morphism-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.14), 0 2px 24px 0 rgba(192,192,192,0.12);
  }
  
  .card-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(192,192,192,0.05), rgba(255,255,255,0.1));
    border-radius: 24px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .glass-morphism-card:hover .card-glow {
    opacity: 1;
  }
  
  .content-wrapper {
    text-align: center;
  }
  
  .mission-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 50px;
    padding: 0.5rem 1.2rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
    backdrop-filter: blur(6px);
  }
  
  .badge-text {
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  
  .mission-headline {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    color: #181818;
    letter-spacing: -0.01em;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #bcbcbc 0%, #e0e0e0 40%, #8a8a8a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -0.01em;
    animation: shimmer 3s ease-in-out infinite;
    position: relative;
  }
  
  @keyframes shimmer {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }
  
  .mission-description {
    margin-bottom: 2.2rem;
  }
  
  .primary-text {
    font-size: 1.15rem;
    color: #232323;
    margin-bottom: 0.7rem;
    font-weight: 500;
  }
  
  .secondary-text {
    font-size: 1.05rem;
    color: #444;
    font-weight: 400;
    opacity: 0.85;
  }
  
  .tech-highlight {
    margin-top: 2.2rem;
  }
  
  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    justify-content: center;
  }
  
  .tech-item {
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
    color: #232323;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 0.4rem 1.1rem;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 1px 4px 0 rgba(192,192,192,0.08);
    transition: background 0.3s;
  }
  
  .tech-item:hover {
    background: linear-gradient(135deg, #e0e0e0 0%, #bcbcbc 100%);
    color: #111;
  }
  
  @media (max-width: 700px) {
    .glass-morphism-card {
      padding: 2rem 0.7rem;
    }
    
    .mission-headline {
      font-size: 1.4rem;
    }
    
    .tech-item {
      font-size: 0.95rem;
      padding: 0.3rem 0.7rem;
    }
  }
</style>