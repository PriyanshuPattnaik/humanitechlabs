<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let mounted = false;
    let statsVisible = false;
  
    onMount(() => {
      mounted = true;
      
      // Intersection Observer for stats animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsVisible) {
            statsVisible = true;
            animateStats();
          }
        });
      }, { threshold: 0.3 });
  
      const statsSection = document.querySelector('.challenges-grid');
      if (statsSection) observer.observe(statsSection);
  
      return () => observer.disconnect();
    });
  
    function animateStats() {
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach((element, index) => {
        const target = parseInt(element.textContent || '0');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
  
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target.toString();
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current).toString();
          }
        }, 16);
      });
    }
  </script>
  
  <section class="problem-statement" id="learn-more">
    {#if mounted}
      <div class="background-gradient"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
  
      <div class="container" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-icon">⚡</span>
            The Challenge
          </div>
          <h2>The Technology Gap in Non-Profits</h2>
          <p>While technology has transformed every sector, NGOs continue to face significant barriers in accessing the digital tools they need to maximize their impact.</p>
        </div>
        
        <div class="challenges-grid">
          <div class="challenge-card" in:fly={{ y: 30, duration: 800, delay: 400 }}>
            <div class="card-glow"></div>
            <div class="challenge-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <h3>Limited Digital Presence</h3>
            <p>Many NGOs struggle with outdated websites, poor user experience, and lack of mobile optimization, limiting their ability to reach and engage supporters effectively.</p>
            <div class="challenge-stats">
              <div class="stat-container">
                <span class="stat">
                  <span class="stat-number">73</span>%
                </span>
                <span class="label">of NGOs lack mobile-optimized websites</span>
              </div>
            </div>
          </div>
          
          <div class="challenge-card" in:fly={{ y: 30, duration: 800, delay: 600 }}>
            <div class="card-glow"></div>
            <div class="challenge-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 6 8.5C6 10.5 7 12 9 13C7 14 6 15.5 6 17.5A3.5 3.5 0 0 0 9.5 21H17" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <h3>Prohibitive Costs</h3>
            <p>Traditional agencies charge premium rates that are often beyond the reach of non-profits, forcing them to choose between technology investment and direct program funding.</p>
            <div class="challenge-stats">
              <div class="stat-container">
                <span class="stat">$<span class="stat-number">50</span>K+</span>
                <span class="label">average cost for custom web development</span>
              </div>
            </div>
          </div>
          
          <div class="challenge-card" in:fly={{ y: 30, duration: 800, delay: 800 }}>
            <div class="card-glow"></div>
            <div class="challenge-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Data Inefficiency</h3>
            <p>Manual processes, scattered data, and lack of analytics prevent NGOs from making informed decisions and demonstrating impact to stakeholders effectively.</p>
            <div class="challenge-stats">
              <div class="stat-container">
                <span class="stat">
                  <span class="stat-number">68</span>%
                </span>
                <span class="label">struggle with impact measurement</span>
              </div>
            </div>
          </div>
          
          <div class="challenge-card" in:fly={{ y: 30, duration: 800, delay: 1000 }}>
            <div class="card-glow"></div>
            <div class="challenge-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <h3>Skills Gap</h3>
            <p>Limited technical expertise within organizations creates dependency on external vendors and prevents sustainable technology adoption and maintenance.</p>
            <div class="challenge-stats">
              <div class="stat-container">
                <span class="stat">
                  <span class="stat-number">85</span>%
                </span>
                <span class="label">lack in-house technical expertise</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mission-statement" in:fly={{ y: 50, duration: 1000, delay: 1200 }}>
          <div class="mission-glow"></div>
          <div class="mission-content">
            <h3>Our Mission-Driven Solution</h3>
            <p>We believe that technology should be a force multiplier for social good, not a barrier. That's why we've created a comprehensive technology service specifically designed for NGOs - combining cutting-edge solutions with mission-aligned pricing and ongoing support.</p>
            <div class="mission-highlights">
              <div class="highlight">
                <div class="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span>Accessible pricing for non-profits</span>
              </div>
              <div class="highlight">
                <div class="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span>End-to-end technology solutions</span>
              </div>
              <div class="highlight">
                <div class="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span>Ongoing capacity building support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </section>
  
  <style>
    .problem-statement {
      position: relative;
      padding: 120px 0;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
      overflow: hidden;
    }
  
    .background-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.01) 0%, transparent 50%);
    }
  
    .floating-shapes {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
  
    .shape {
      position: absolute;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
      border-radius: 50%;
      filter: blur(1px);
      animation: float 6s ease-in-out infinite;
    }
  
    .shape-1 {
      width: 120px;
      height: 120px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
  
    .shape-2 {
      width: 80px;
      height: 80px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }
  
    .shape-3 {
      width: 60px;
      height: 60px;
      bottom: 30%;
      left: 20%;
      animation-delay: 4s;
    }
  
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
  
    .container {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      z-index: 1;
    }
  
    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }
  
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 12px 20px;
      border-radius: 50px;
      margin-bottom: 32px;
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
  
    .section-badge:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
  
    .badge-icon {
      font-size: 16px;
    }
  
    h2 {
      font-size: clamp(32px, 5vw, 56px);
      font-weight: 800;
      margin-bottom: 24px;
      color: #ffffff;
      background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      line-height: 1.2;
    }
  
    .section-header p {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.75);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }
  
    .challenges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
  
    .challenge-card {
      position: relative;
      background: rgba(255, 255, 255, 0.06);
      padding: 40px;
      border-radius: 28px;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .challenge-card:hover {
      transform: translateY(-12px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.05);
    }
  
    .card-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: opacity 0.3s ease;
      opacity: 0;
    }
  
    .challenge-card:hover .card-glow {
      opacity: 1;
    }
  
    .challenge-icon {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
      color: #ffffff;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
  
    .challenge-card:hover .challenge-icon {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }
  
    .challenge-card h3 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #ffffff;
      line-height: 1.3;
    }
  
    .challenge-card p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 32px;
      line-height: 1.7;
    }
  
    .challenge-stats {
      margin-top: auto;
    }
  
    .stat-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  
    .stat {
      font-size: 32px;
      font-weight: 900;
      background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: flex;
      align-items: baseline;
    }
  
    .stat-number {
      font-feature-settings: 'tnum';
    }
  
    .label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }
  
    .mission-statement {
      position: relative;
      background: rgba(255, 255, 255, 0.08);
      padding: 64px;
      border-radius: 32px;
      backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      text-align: center;
      overflow: hidden;
    }
  
    .mission-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    }
  
    .mission-content h3 {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 32px;
      color: #ffffff;
      background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  
    .mission-content p {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.8);
      max-width: 900px;
      margin: 0 auto 48px;
      line-height: 1.7;
    }
  
    .mission-highlights {
      display: flex;
      gap: 48px;
      justify-content: center;
      flex-wrap: wrap;
    }
  
    .highlight {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
    }
  
    .highlight:hover {
      color: #ffffff;
      transform: translateY(-2px);
    }
  
    .highlight-icon {
      width: 32px;
      height: 32px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    /* Responsive Design */
    @media (max-width: 1024px) {
      .mission-highlights {
        gap: 32px;
      }
      
      .mission-content h3 {
        font-size: 32px;
      }

      .challenges-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
      }
    }
  
    @media (max-width: 768px) {
      .problem-statement {
        padding: 60px 0;
      }

      .container {
        padding: 0 20px;
      }

      .section-header {
        margin-bottom: 60px;
      }

      .section-badge {
        padding: 10px 16px;
        font-size: 13px;
        margin-bottom: 24px;
      }

      h2 {
        font-size: 32px;
        margin-bottom: 20px;
      }

      .section-header p {
        font-size: 16px;
        max-width: 100%;
      }

      .challenges-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 60px;
      }

      .challenge-card {
        padding: 28px 24px;
      }

      .challenge-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 24px;
      }

      .challenge-card h3 {
        font-size: 24px;
        margin-bottom: 16px;
      }

      .challenge-card p {
        font-size: 15px;
        margin-bottom: 24px;
      }

      .stat {
        font-size: 28px;
      }

      .label {
        font-size: 13px;
      }

      .mission-statement {
        padding: 40px 28px;
      }

      .mission-content h3 {
        font-size: 28px;
        margin-bottom: 24px;
      }

      .mission-content p {
        font-size: 16px;
        margin-bottom: 32px;
      }

      .mission-highlights {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .highlight {
        font-size: 15px;
      }

      .highlight-icon {
        width: 28px;
        height: 28px;
      }
    }
  
    @media (max-width: 480px) {
      .problem-statement {
        padding: 40px 0;
      }

      .container {
        padding: 0 16px;
      }

      .section-header {
        margin-bottom: 40px;
      }

      .section-badge {
        padding: 8px 12px;
        font-size: 12px;
        margin-bottom: 20px;
      }

      h2 {
        font-size: 28px;
        margin-bottom: 16px;
      }

      .section-header p {
        font-size: 15px;
      }

      .challenges-grid {
        gap: 16px;
        margin-bottom: 40px;
      }

      .challenge-card {
        padding: 24px 20px;
      }

      .challenge-icon {
        width: 56px;
        height: 56px;
        margin-bottom: 20px;
      }

      .challenge-card h3 {
        font-size: 22px;
        margin-bottom: 12px;
      }

      .challenge-card p {
        font-size: 14px;
        margin-bottom: 20px;
      }

      .stat {
        font-size: 24px;
      }

      .label {
        font-size: 12px;
      }

      .mission-statement {
        padding: 32px 20px;
      }

      .mission-content h3 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .mission-content p {
        font-size: 15px;
        margin-bottom: 24px;
      }

      .mission-highlights {
        gap: 16px;
      }

      .highlight {
        font-size: 14px;
      }

      .highlight-icon {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 360px) {
      .problem-statement {
        padding: 30px 0;
      }

      .container {
        padding: 0 12px;
      }

      .section-header {
        margin-bottom: 32px;
      }

      h2 {
        font-size: 24px;
      }

      .section-header p {
        font-size: 14px;
      }

      .challenge-card {
        padding: 20px 16px;
      }

      .challenge-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
      }

      .challenge-card h3 {
        font-size: 20px;
      }

      .challenge-card p {
        font-size: 13px;
      }

      .stat {
        font-size: 20px;
      }

      .mission-statement {
        padding: 24px 16px;
      }

      .mission-content h3 {
        font-size: 20px;
      }

      .mission-content p {
        font-size: 14px;
      }

      .highlight {
        font-size: 13px;
      }
    }
  </style>