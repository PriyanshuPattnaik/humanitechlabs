<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let mounted = false;
    let currentStat = 0;
    
    const stats = [
      { number: '5+', label: 'NGOs Empowered' },
      { number: '200+', label: 'Lives Impacted' },
      { number: '100%', label: 'Client Satisfaction' },
      { number: '3x', label: 'Faster Impact' }
    ];
  
    onMount(() => {
      mounted = true;
      // Rotate stats every 3 seconds
      const interval = setInterval(() => {
        currentStat = (currentStat + 1) % stats.length;
      }, 3000);
      
      return () => clearInterval(interval);
    });
  </script>
  
  <section class="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        {#if mounted}
          <div class="hero-badge" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
            Technology for Good
          </div>
          
          <h1 in:fly={{ y: 50, duration: 1000, delay: 400 }}>
            Empowering NGOs with 
            <span class="gradient-text">Next-Gen Technology</span>
          </h1>
          
          <p class="hero-description" in:fly={{ y: 30, duration: 800, delay: 600 }}>
            Transform your mission with cutting-edge digital solutions designed specifically for non-profits. 
            From intelligent websites to data-driven impact measurement, we bridge the technology gap 
            so you can focus on changing the world.
          </p>
          
          <div class="hero-actions" in:fly={{ y: 30, duration: 800, delay: 800 }}>
            <button class="cta-primary">
              <span>Start Your Transformation</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            
            <button class="cta-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              See Our Impact
            </button>
          </div>
          
          <div class="hero-stats" in:fade={{ duration: 800, delay: 1000 }}>
            <div class="stats-container">
              {#each stats as stat, i}
                <div class="stat-item" class:active={currentStat === i}>
                  <div class="stat-number">{stat.number}</div>
                  <div class="stat-label">{stat.label}</div>
                </div>
              {/each}
            </div>
            <div class="stats-indicator">
              {#each stats as _, i}
                <div class="indicator-dot" class:active={currentStat === i}></div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
      
      <div class="hero-visual">
        {#if mounted}
          <div class="visual-container" in:fly={{ x: 50, duration: 1200, delay: 600 }}>
            <div class="floating-card card-1" in:fly={{ y: 20, duration: 1000, delay: 1200 }}>
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3V21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">Impact Analytics</div>
                <div class="card-subtitle">Real-time insights</div>
              </div>
              <div class="card-metric">+247%</div>
            </div>
            
            <div class="floating-card card-2" in:fly={{ y: -20, duration: 1000, delay: 1400 }}>
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">Donor Engagement</div>
                <div class="card-subtitle">Automated outreach</div>
              </div>
              <div class="engagement-dots">
                <div class="dot active"></div>
                <div class="dot active"></div>
                <div class="dot"></div>
              </div>
            </div>
            
            <div class="floating-card card-3" in:fly={{ x: -20, duration: 1000, delay: 1600 }}>
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">Secure Platform</div>
                <div class="card-subtitle">Enterprise-grade</div>
              </div>
              <div class="security-indicator">
                <div class="security-ring"></div>
                <div class="security-dot"></div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>
  
  <style>
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    }
  
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
  
    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.15;
      animation: float 8s ease-in-out infinite;
    }
  
    .orb-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      top: -200px;
      right: -200px;
      animation-delay: 0s;
    }
  
    .orb-2 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
      bottom: -150px;
      left: -150px;
      animation-delay: 2s;
    }
  
    .orb-3 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: 4s;
    }
  
    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-20px) scale(1.05); }
    }
  
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      min-height: 100vh;
    }
  
    .hero-content {
      z-index: 2;
    }
  
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 20px;
      border-radius: 100px;
      margin-bottom: 32px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    h1 {
      font-size: 64px;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 32px;
      color: #fff;
      letter-spacing: -0.02em;
    }
  
    .gradient-text {
      background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.6) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: gradientShift 3s ease-in-out infinite;
    }
  
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  
    .hero-description {
      font-size: 20px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 48px;
      max-width: 600px;
    }
  
    .hero-actions {
      display: flex;
      gap: 24px;
      margin-bottom: 64px;
      flex-wrap: wrap;
    }
  
    .cta-primary {
      display: flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
      color: #fff;
      padding: 16px 32px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
  
    .cta-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s;
    }
  
    .cta-primary:hover::before {
      left: 100%;
    }
  
    .cta-primary:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
      border-color: rgba(255, 255, 255, 0.3);
    }
  
    .cta-secondary {
      display: flex;
      align-items: center;
      gap: 12px;
      background: transparent;
      color: rgba(255, 255, 255, 0.8);
      padding: 16px 32px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .cta-secondary:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
    }
  
    .hero-stats {
      position: relative;
    }
  
    .stats-container {
      display: flex;
      gap: 48px;
      position: relative;
      height: 80px;
      overflow: hidden;
    }
  
    .stat-item {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.5s ease;
      min-width: 120px;
    }
  
    .stat-item.active {
      opacity: 1;
      transform: translateY(0);
    }
  
    .stat-number {
      font-size: 36px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 4px;
      background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  
    .stat-label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }
  
    .stats-indicator {
      display: flex;
      gap: 8px;
      margin-top: 24px;
    }
  
    .indicator-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }
  
    .indicator-dot.active {
      background: #fff;
      transform: scale(1.2);
    }
  
    .hero-visual {
      position: relative;
      height: 600px;
      z-index: 2;
    }
  
    .visual-container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  
    .floating-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 24px;
      transition: all 0.3s ease;
      animation: cardFloat 6s ease-in-out infinite;
    }
  
    .floating-card:hover {
      transform: translateY(-8px) scale(1.02);
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }
  
    .card-1 {
      top: 50px;
      right: 80px;
      width: 220px;
      animation-delay: 0s;
    }
  
    .card-2 {
      top: 200px;
      left: 60px;
      width: 200px;
      animation-delay: 2s;
    }
  
    .card-3 {
      bottom: 80px;
      right: 40px;
      width: 180px;
      animation-delay: 4s;
    }
  
    @keyframes cardFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(1deg); }
    }
  
    .card-icon {
      width: 48px;
      height: 48px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      color: #fff;
    }
  
    .card-title {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 4px;
    }
  
    .card-subtitle {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 16px;
    }
  
    .card-metric {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.6) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  
    .engagement-dots {
      display: flex;
      gap: 6px;
    }
  
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }
  
    .dot.active {
      background: #fff;
      animation: pulse 2s ease-in-out infinite;
    }
  
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.2); }
    }
  
    .security-indicator {
      position: relative;
      width: 32px;
      height: 32px;
    }
  
    .security-ring {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      animation: securityPulse 3s ease-in-out infinite;
    }
  
    .security-dot {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background: #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  
    @keyframes securityPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
  
    /* Responsive Design */
    @media (max-width: 1200px) {
      .container {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
      }
  
      h1 {
        font-size: 56px;
      }
  
      .hero-visual {
        order: -1;
        height: 400px;
      }
    }
  
    @media (max-width: 768px) {
      .container {
        padding: 80px 24px;
      }
  
      h1 {
        font-size: 40px;
      }
  
      .hero-description {
        font-size: 18px;
      }
  
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
  
      .cta-primary,
      .cta-secondary {
        width: 100%;
        justify-content: center;
        max-width: 300px;
      }
  
      .stats-container {
        justify-content: center;
      }
  
      .floating-card {
        position: relative !important;
        margin: 16px auto;
        max-width: 280px;
      }
  
      .visual-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
      }
    }
  
    @media (max-width: 480px) {
      .container {
        padding: 60px 16px;
      }
  
      h1 {
        font-size: 32px;
      }
  
      .hero-description {
        font-size: 16px;
      }
  
      .floating-card {
        padding: 20px;
        margin: 12px auto;
      }
    }
  </style>