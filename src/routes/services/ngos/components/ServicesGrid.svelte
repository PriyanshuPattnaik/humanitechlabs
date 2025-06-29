<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="services-grid" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
  <div class="container">
    <div class="section-header">
      <div class="section-badge">Our Services</div>
      <h2>Comprehensive Technology Solutions</h2>
      <p>From digital foundation to emerging technologies, we provide end-to-end solutions tailored for NGOs.</p>
    </div>
    
    <div class="services-container">
      <!-- Digital Foundation -->
      <div class="service-card" data-service="foundation" in:fly={{ y: 30, duration: 800, delay: 400 }}>
        <div class="service-header">
          <div class="service-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
          <h3>Digital Foundation</h3>
          <p>Build your digital presence with cutting-edge web and mobile solutions.</p>
        </div>
        
        <div class="service-features">
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Web & Mobile Development</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Graphics & Brand Design</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Digital Marketing Strategy</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>SEO & Performance Optimization</span>
          </div>
        </div>
        
        <div class="service-glow"></div>
      </div>

      <!-- Data & Analytics -->
      <div class="service-card" data-service="analytics" in:fly={{ y: 30, duration: 800, delay: 600 }}>
        <div class="service-header">
          <div class="service-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M3 3V21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Data & Analytics</h3>
          <p>Make data-driven decisions with powerful analytics and insights.</p>
        </div>
        
        <div class="service-features">
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Impact Measurement Systems</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Donor Analytics & CRM</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Operational Dashboards</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Predictive Analytics</span>
          </div>
        </div>
        
        <div class="service-glow"></div>
      </div>

      <!-- Emerging Technologies -->
      <div class="service-card" data-service="emerging" in:fly={{ y: 30, duration: 800, delay: 800 }}>
        <div class="service-header">
          <div class="service-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <h3>Emerging Technologies</h3>
          <p>Leverage cutting-edge technologies to amplify your mission impact.</p>
        </div>
        
        <div class="service-features">
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>AI & Machine Learning</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>IoT Applications</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Blockchain Solutions</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Voice & Chatbot Interfaces</span>
          </div>
        </div>
        
        <div class="service-glow"></div>
      </div>

      <!-- Capacity Building -->
      <div class="service-card" data-service="capacity" in:fly={{ y: 30, duration: 800, delay: 1000 }}>
        <div class="service-header">
          <div class="service-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <h3>Capacity Building</h3>
          <p>Empower your team with knowledge and ongoing technical support.</p>
        </div>
        
        <div class="service-features">
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Tech Training Programs</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Digital Strategy Consulting</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>24/7 Technical Support</span>
          </div>
          <div class="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Knowledge Transfer Sessions</span>
          </div>
        </div>
        
        <div class="service-glow"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .services-grid {
    padding: 120px 0;
    background: rgba(255, 255, 255, 0.02);
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

  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }

  .service-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .service-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .service-header {
    margin-bottom: 32px;
  }

  .service-icon {
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

  .service-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
  }

  .service-card p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }

  .service-features {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  .feature svg {
    color: #fff;
    flex-shrink: 0;
  }

  .service-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0%, rgba(180, 200, 255, 0.18), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .service-card:hover .service-glow {
    opacity: 1;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      padding: 80px 0;
    }

    h2 {
      font-size: 28px;
    }

    .services-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    h2 {
      font-size: 24px;
    }

    .service-card {
      padding: 24px;
    }
  }
</style> 