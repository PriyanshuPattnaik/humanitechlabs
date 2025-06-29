<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="why-choose" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
  <div class="container">
    <div class="section-header">
      <div class="section-badge">Why Humanitech</div>
      <h2>Why NGOs Trust Us</h2>
      <p>We're not just a tech company—we're your mission-driven technology partner with a unique approach to social impact.</p>
    </div>
    
    <div class="features-grid">
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 400 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Tech for Good Focus</h3>
        <p>We're driven by a singular mission: leveraging technology to amplify social impact. Every solution we create is designed with your mission at the center.</p>
        <div class="feature-highlight">
          <span>Mission-first approach</span>
        </div>
      </div>
      
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 600 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 20L3 17V4L9 7L15 4L21 7V20L15 17L9 20Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Research Institution Background</h3>
        <p>As a research institution, we bring academic rigor and cutting-edge innovation to every project. Our solutions are grounded in research and proven methodologies.</p>
        <div class="feature-highlight">
          <span>Academic excellence</span>
        </div>
      </div>
      
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 800 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Exclusive NGO Specialization</h3>
        <p>We work exclusively with non-profit organizations, giving us deep expertise in the unique challenges and opportunities faced by the social sector.</p>
        <div class="feature-highlight">
          <span>NGO expertise</span>
        </div>
      </div>
      
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 1000 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 6 8.5C6 10.5 7 12 9 13C7 14 6 15.5 6 17.5A3.5 3.5 0 0 0 9.5 21H17" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Ethical Pricing Model</h3>
        <p>Our pricing is designed to maximize your impact, not our profit. We offer transparent, mission-aligned pricing that makes technology accessible to all NGOs.</p>
        <div class="feature-highlight">
          <span>Impact-driven pricing</span>
        </div>
      </div>
      
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 1200 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M12 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Scalable Solutions</h3>
        <p>Technology that grows with your organization and adapts to changing needs. We build for the future, not just the present.</p>
        <div class="feature-highlight">
          <span>Future-proof technology</span>
        </div>
      </div>
      
      <div class="feature-card" in:fly={{ y: 30, duration: 800, delay: 1400 }}>
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Ethics-Driven Development</h3>
        <p>Committed to data privacy, accessibility, and sustainable technology practices. We build solutions that respect both people and the planet.</p>
        <div class="feature-highlight">
          <span>Ethical technology</span>
        </div>
      </div>
    </div>
    
    <div class="trust-indicators" in:fly={{ y: 50, duration: 1000, delay: 1600 }}>
      <div class="indicator">
        <div class="indicator-number">100%</div>
        <div class="indicator-label">NGO Focus</div>
      </div>
      <div class="indicator">
        <div class="indicator-number">Research</div>
        <div class="indicator-label">Driven</div>
      </div>
      <div class="indicator">
        <div class="indicator-number">Ethical</div>
        <div class="indicator-label">Approach</div>
      </div>
      <div class="indicator">
        <div class="indicator-number">Mission</div>
        <div class="indicator-label">Aligned</div>
      </div>
    </div>
  </div>
</section>

<style>
  .why-choose {
    padding: 120px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #fff;
  }

  .section-header p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
    margin-bottom: 64px;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .feature-icon {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    color: #fff;
  }

  .feature-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
  }

  .feature-card p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .feature-highlight {
    display: inline-block;
    background: rgba(255, 255, 255, 0.08);
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Trust Indicators */
  .trust-indicators {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
  }

  .indicator {
    text-align: center;
  }

  .indicator-number {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }

  .indicator-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    .features-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .trust-indicators {
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    .why-choose {
      padding: 80px 0;
    }

    h2 {
      font-size: 28px;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .trust-indicators {
      gap: 24px;
    }

    .indicator-number {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    h2 {
      font-size: 24px;
    }

    .feature-card {
      padding: 24px;
    }

    .trust-indicators {
      gap: 16px;
    }

    .indicator-number {
      font-size: 20px;
    }
  }
</style> 