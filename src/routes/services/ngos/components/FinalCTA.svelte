<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowRight, Mail } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="final-cta">
  <div class="container">
    {#if mounted}
      <div class="cta-content">
        <div class="status-indicator">
          <div class="pulse"></div>
          <span>Coming Soon</span>
        </div>
        
        <h2>Ready to Transform Your Impact?</h2>
        <p>
          We're currently in development and will be launching our NGO services soon. 
          Join our waitlist to be among the first organizations we work with.
        </p>
        
        <div class="cta-actions">
          <a href="/join-us" class="cta-button primary">
            <Mail size={20} />
            <span>Join the Waitlist</span>
            <ArrowRight size={20} />
          </a>
          <a href="/research" class="cta-button secondary">
            <span>Explore Our Research</span>
          </a>
        </div>
        
        <p class="note">
          Have questions? Reach out to us at <a href="mailto:hello@humanitech.org">hello@humanitech.org</a>
        </p>
      </div>
    {/if}
  </div>
</section>

<style>
  .final-cta {
    padding: 120px 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .cta-content {
    text-align: center;
  }

  .status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .pulse {
    width: 8px;
    height: 8px;
    background: #00ff88;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .cta-content > p {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    border-radius: 12px;
    font-size: 1.05rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .cta-button.primary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .cta-button.primary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  .cta-button.secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .note {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 2rem;
  }

  .note a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .note a:hover {
    color: white;
  }

  @media (max-width: 768px) {
    .final-cta {
      padding: 80px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    .cta-content > p {
      font-size: 1.1rem;
    }

    .cta-actions {
      flex-direction: column;
      align-items: center;
    }

    .cta-button {
      width: 100%;
      max-width: 320px;
      justify-content: center;
    }
  }
</style>
