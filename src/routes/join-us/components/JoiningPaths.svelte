<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="paths-section" class:mounted>
  <div class="section-header">
    <h2 class="section-title">Choose Your Impact</h2>
    <p class="section-subtitle">Where technology meets humanity, extraordinary careers begin</p>
  </div>
  
  <div class="paths-grid">
    <div class="path-card intern-path" class:mounted>
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="icon-container">
          <svg class="path-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h3 class="path-title">Launch Your Tech Journey</h3>
        <p class="path-description">
          Step into the future with hands-on experience building accessible applications. 
          Master cutting-edge technologies while creating solutions that genuinely matter.
        </p>
        <button class="path-button">
          <span>Start Your Journey</span>
          <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="path-card executive-path" class:mounted>
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="icon-container">
          <svg class="path-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3 class="path-title">Shape Digital Transformation</h3>
        <p class="path-description">
          Lead the charge in human-centered innovation. Drive strategic initiatives that 
          bridge technology gaps and create inclusive digital experiences at scale.
        </p>
        <button class="path-button">
          <span>Explore Leadership</span>
          <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="path-card ambassador-path" class:mounted>
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="icon-container">
          <svg class="path-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
          </svg>
        </div>
        <h3 class="path-title">Amplify Our Mission</h3>
        <p class="path-description">
          Become the voice of inclusive technology. Connect communities, share our vision, 
          and help build a world where technology truly serves everyone.
        </p>
        <button class="path-button">
          <span>Join the Movement</span>
          <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  :root {
    --glass-primary: rgba(255, 255, 255, 0.05);
    --glass-secondary: rgba(255, 255, 255, 0.02);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-border-hover: rgba(255, 255, 255, 0.2);
    --text-primary: rgba(255, 255, 255, 0.95);
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-muted: rgba(255, 255, 255, 0.5);
    --accent-glow: rgba(79, 172, 254, 0.3);
    --accent-soft: rgba(79, 172, 254, 0.1);
  }

  .paths-section {
    padding: 8rem 2rem 6rem;
    position: relative;
    overflow: hidden;
  }

  .paths-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(600px circle at 20% 30%, var(--accent-soft), transparent 40%),
      radial-gradient(800px circle at 80% 70%, var(--accent-soft), transparent 40%);
    opacity: 0;
    transition: opacity 1.5s ease;
  }

  .paths-section.mounted::before {
    opacity: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .paths-section.mounted .section-header {
    transform: translateY(0);
    opacity: 1;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .paths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .path-card {
    position: relative;
    background: var(--glass-primary);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 3rem 2.5rem;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(50px);
    opacity: 0;
    cursor: pointer;
  }

  .path-card.mounted {
    transform: translateY(0);
    opacity: 1;
  }

  .intern-path.mounted {
    transition-delay: 0.1s;
  }

  .executive-path.mounted {
    transition-delay: 0.2s;
  }

  .ambassador-path.mounted {
    transition-delay: 0.3s;
  }

  .path-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--glass-secondary), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .path-card:hover {
    transform: translateY(-8px);
    border-color: var(--glass-border-hover);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px var(--glass-border-hover),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .path-card:hover::before {
    opacity: 1;
  }

  .card-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--accent-glow), transparent 70%);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  .path-card:hover .card-glow {
    opacity: 0.6;
  }

  .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icon-container {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: var(--glass-secondary);
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    transition: all 0.4s ease;
  }

  .path-card:hover .icon-container {
    background: var(--accent-soft);
    border-color: var(--glass-border-hover);
    transform: scale(1.1) rotate(-5deg);
  }

  .path-icon {
    width: 32px;
    height: 32px;
    color: var(--text-primary);
    stroke-width: 1.5;
    transition: all 0.4s ease;
  }

  .path-card:hover .path-icon {
    color: #4facfe;
    transform: scale(1.1);
  }

  .path-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .path-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    flex-grow: 1;
  }

  .path-button {
    background: var(--glass-primary);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    padding: 1rem 2rem;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .path-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  .path-button:hover {
    background: var(--glass-secondary);
    border-color: var(--glass-border-hover);
    transform: translateY(-2px);
    box-shadow: 
      0 10px 20px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .path-button:hover::before {
    left: 100%;
  }

  .button-arrow {
    width: 16px;
    height: 16px;
    stroke-width: 2;
    transition: transform 0.4s ease;
  }

  .path-button:hover .button-arrow {
    transform: translateX(4px);
  }

  .path-button:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .paths-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .path-card {
      padding: 2.5rem 2rem;
    }
  }

  @media (max-width: 768px) {
    .paths-section {
      padding: 6rem 1.5rem 4rem;
    }
    
    .paths-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .section-header {
      margin-bottom: 3rem;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .section-subtitle {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .path-card {
      padding: 2rem 1.5rem;
      border-radius: 20px;
    }
    
    .icon-container {
      width: 70px;
      height: 70px;
    }
    
    .path-icon {
      width: 28px;
      height: 28px;
    }
    
    .path-title {
      font-size: 1.3rem;
    }
    
    .path-description {
      font-size: 1rem;
    }
  }
</style>