<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="pricing-philosophy" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
  <div class="container">
    <div class="section-header">
      <div class="section-badge">Our Pricing</div>
      <h2>Mission-Aligned Pricing Philosophy</h2>
      <p>We believe that technology should be accessible to all NGOs, regardless of their budget size. Our pricing model is designed to maximize your impact, not our profit.</p>
    </div>
    
    <div class="pricing-principles">
      <div class="principle-card" in:fly={{ y: 30, duration: 800, delay: 400 }}>
        <div class="principle-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 6 8.5C6 10.5 7 12 9 13C7 14 6 15.5 6 17.5A3.5 3.5 0 0 0 9.5 21H17" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Lowest Cost Guarantee</h3>
        <p>We guarantee that our services will cost significantly less than traditional agencies while delivering superior quality and results.</p>
        <div class="principle-highlight">
          <span class="highlight-number">60-80%</span>
          <span class="highlight-text">less than market rates</span>
        </div>
      </div>
      
      <div class="principle-card" in:fly={{ y: 30, duration: 800, delay: 600 }}>
        <div class="principle-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3>Mission-Aligned Pricing</h3>
        <p>Our pricing is structured around your organization's impact potential and mission alignment, not profit maximization.</p>
        <div class="principle-highlight">
          <span class="highlight-number">Flexible</span>
          <span class="highlight-text">pricing based on impact</span>
        </div>
      </div>
      
      <div class="principle-card" in:fly={{ y: 30, duration: 800, delay: 800 }}>
        <div class="principle-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 12H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Transparent Approach</h3>
        <p>No hidden fees, no surprise costs. We provide clear, upfront pricing with detailed breakdowns of all services and deliverables.</p>
        <div class="principle-highlight">
          <span class="highlight-number">100%</span>
          <span class="highlight-text">transparent pricing</span>
        </div>
      </div>
    </div>
    
    <div class="pricing-comparison" in:fly={{ y: 50, duration: 1000, delay: 1000 }}>
      <h3>How We Compare</h3>
      <div class="comparison-table">
        <div class="comparison-header">
          <div class="comparison-cell">Service</div>
          <div class="comparison-cell">Traditional Agency</div>
          <div class="comparison-cell">Humanitech</div>
        </div>
        
        <div class="comparison-row">
          <div class="comparison-cell">Website Development</div>
          <div class="comparison-cell">$15,000 - $50,000</div>
          <div class="comparison-cell highlight">$3,000 - $12,000</div>
        </div>
        
        <div class="comparison-row">
          <div class="comparison-cell">Mobile App</div>
          <div class="comparison-cell">$25,000 - $100,000</div>
          <div class="comparison-cell highlight">$5,000 - $20,000</div>
        </div>
        
        <div class="comparison-row">
          <div class="comparison-cell">Data Analytics Setup</div>
          <div class="comparison-cell">$10,000 - $30,000</div>
          <div class="comparison-cell highlight">$2,000 - $8,000</div>
        </div>
        
        <div class="comparison-row">
          <div class="comparison-cell">AI Integration</div>
          <div class="comparison-cell">$20,000 - $75,000</div>
          <div class="comparison-cell highlight">$4,000 - $15,000</div>
        </div>
      </div>
    </div>
    
    <div class="pricing-note" in:fly={{ y: 30, duration: 800, delay: 1200 }}>
      <div class="note-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="note-text">
          <h4>Custom Pricing for Every Organization</h4>
          <p>We understand that every NGO is unique. Contact us for a personalized quote that aligns with your specific needs, budget, and impact goals.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .pricing-philosophy {
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

  .pricing-principles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
    margin-bottom: 80px;
  }

  .principle-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease;
  }

  .principle-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .principle-icon {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: #fff;
  }

  .principle-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
  }

  .principle-card p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .principle-highlight {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .highlight-number {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .highlight-text {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  /* Pricing Comparison */
  .pricing-comparison {
    margin-bottom: 64px;
  }

  .pricing-comparison h3 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 32px;
    color: #fff;
    text-align: center;
  }

  .comparison-table {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .comparison-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    background: rgba(255, 255, 255, 0.08);
  }

  .comparison-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .comparison-row:last-child {
    border-bottom: none;
  }

  .comparison-cell {
    padding: 20px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }

  .comparison-header .comparison-cell {
    font-weight: 600;
    color: #fff;
  }

  .comparison-cell.highlight {
    color: #fff;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.05);
  }

  /* Pricing Note */
  .pricing-note {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .note-content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .note-content svg {
    color: #fff;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .note-text h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #fff;
  }

  .note-text p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    .pricing-principles {
      grid-template-columns: 1fr;
    }

    .comparison-header,
    .comparison-row {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .pricing-philosophy {
      padding: 80px 0;
    }

    h2 {
      font-size: 28px;
    }

    .pricing-comparison h3 {
      font-size: 24px;
    }

    .comparison-header,
    .comparison-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .comparison-header {
      display: none;
    }

    .comparison-row {
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .comparison-cell {
      padding: 8px 0;
      font-size: 14px;
    }

    .comparison-cell:first-child {
      font-weight: 600;
      color: #fff;
    }

    .note-content {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    h2 {
      font-size: 24px;
    }

    .principle-card {
      padding: 24px;
    }

    .pricing-note {
      padding: 24px;
    }
  }
</style> 