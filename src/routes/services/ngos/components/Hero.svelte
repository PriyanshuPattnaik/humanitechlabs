<script lang="ts">
  import { onMount } from 'svelte';
  import { Sparkles, ArrowRight, Code2, Heart } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="hero">
  <div class="container">
    {#if mounted}
      <div class="hero-content">
        <div class="status-badge">
          <Sparkles size={16} />
          <span>Services for NGOs</span>
        </div>
        
        <h1>
          Technology Solutions
          <span class="highlight">Built for Impact</span>
        </h1>
        
        <p class="hero-description">
          We're building a comprehensive technology service designed specifically for non-profit organizations. 
          Our mission is to bridge the digital divide and empower NGOs with the tools they need to amplify their impact.
        </p>
        
        <div class="value-props">
          <div class="prop">
            <Code2 size={20} />
            <span>Modern Web Solutions</span>
          </div>
          <div class="prop">
            <Heart size={20} />
            <span>Mission-Aligned Approach</span>
          </div>
        </div>
        
        <div class="hero-actions">
          <a href="#vision" class="cta-primary">
            <span>Explore Our Vision</span>
            <ArrowRight size={20} />
          </a>
          <a href="/join-us" class="cta-secondary">
            <span>Join the Waitlist</span>
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
    color: white;
    padding: 120px 0 80px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    max-width: 800px;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-content {
    transform: translateY(30px);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .highlight {
    display: block;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2.5rem;
    max-width: 700px;
  }

  .value-props {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .prop {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 500;
  }

  .hero-actions {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cta-primary,
  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .cta-primary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .cta-primary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  .cta-secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    .hero {
      min-height: 70vh;
      padding: 100px 0 60px;
    }

    .container {
      padding: 0 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    .hero-description {
      font-size: 1.1rem;
    }

    .value-props {
      gap: 1.5rem;
    }

    .hero-actions {
      flex-direction: column;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      justify-content: center;
    }
  }
</style>
