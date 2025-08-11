<script>
  import { onMount } from 'svelte';
  
  let sectionRef;
  let isVisible = false;
  let selectedPlan = 'professional';
  
  const pricingPlans = [
    {
      id: 'starter',
      name: 'AI Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses looking to implement basic AI solutions',
      features: [
        'Basic ML model development',
        'Data preprocessing & analysis',
        'Simple automation workflows',
        'Email support',
        'Monthly progress reports',
        'Up to 10,000 API calls/month'
      ],
      popular: false,
      color: '#667eea'
    },
    {
      id: 'professional',
      name: 'AI Professional',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive AI solutions for growing businesses',
      features: [
        'Advanced ML & deep learning models',
        'Computer vision & NLP capabilities',
        'Custom AI integrations',
        'Priority support & consultation',
        'Weekly progress reports',
        'Up to 100,000 API calls/month',
        'Cloud deployment & scaling',
        'Performance monitoring'
      ],
      popular: true,
      color: '#764ba2'
    },
    {
      id: 'enterprise',
      name: 'AI Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale AI transformation for large organizations',
      features: [
        'End-to-end AI strategy & implementation',
        'Multi-model AI ecosystems',
        'Advanced analytics & insights',
        'Dedicated AI team & support',
        'Real-time monitoring & optimization',
        'Unlimited API calls',
        'On-premise & hybrid deployments',
        'Compliance & security audits',
        'Training & knowledge transfer'
      ],
      popular: false,
      color: '#f093fb'
    }
  ];
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef) observer.observe(sectionRef);
    
    return () => observer.disconnect();
  });
</script>

<section class="pricing-section" bind:this={sectionRef}>
  <div class="container">
    <div class="section-header" class:visible={isVisible}>
      <div class="section-badge">
        <span class="badge-icon">💰</span>
        <span>Pricing Plans</span>
      </div>
      <h2 class="section-title">
        Flexible Pricing for
        <span class="gradient-text">Every Business Size</span>
      </h2>
      <p class="section-description">
        Choose the perfect AI solution package that fits your needs and budget. 
        All plans include ongoing support and regular updates.
      </p>
    </div>
    
    <div class="pricing-grid" class:visible={isVisible}>
      {#each pricingPlans as plan, index}
        <div 
          class="pricing-card" 
          class:popular={plan.popular}
          class:selected={selectedPlan === plan.id}
          style="--delay: {index * 0.1}s; --color: {plan.color}"
          on:click={() => selectedPlan = plan.id}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && (selectedPlan = plan.id)}
        >
          {#if plan.popular}
            <div class="popular-badge">
              <span>Most Popular</span>
            </div>
          {/if}
          
          <div class="card-header">
            <h3 class="plan-name">{plan.name}</h3>
            <div class="plan-price">
              <span class="price">{plan.price}</span>
              <span class="period">{plan.period}</span>
            </div>
            <p class="plan-description">{plan.description}</p>
          </div>
          
          <div class="card-body">
            <div class="features-list">
              {#each plan.features as feature}
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </div>
              {/each}
            </div>
          </div>
          
          <div class="card-footer">
            <button class="cta-button" class:primary={plan.popular}>
              {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
          <div class="card-glow"></div>
        </div>
      {/each}
    </div>
    
    <div class="pricing-footer" class:visible={isVisible}>
      <div class="additional-info">
        <div class="info-item">
          <div class="info-icon">🔒</div>
          <div class="info-content">
            <h4>Enterprise Security</h4>
            <p>All plans include enterprise-grade security and compliance</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🚀</div>
          <div class="info-content">
            <h4>Fast Implementation</h4>
            <p>Get your AI solutions up and running in 2-4 weeks</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📞</div>
          <div class="info-content">
            <h4>24/7 Support</h4>
            <p>Round-the-clock technical support for all plans</p>
          </div>
        </div>
      </div>
      
      <div class="custom-solution">
        <h3>Need a Custom Solution?</h3>
        <p>We can create a tailored AI package that perfectly fits your unique requirements and budget.</p>
        <button class="contact-button">
          <span>Schedule Consultation</span>
          <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .pricing-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .pricing-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .section-header.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-description {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .pricing-grid.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .pricing-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }
  
  .pricing-card:hover {
    transform: translateY(-10px);
    border-color: var(--color);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .pricing-card:hover .card-glow {
    opacity: 1;
  }
  
  .pricing-card.popular {
    border-color: var(--color);
    background: rgba(255, 255, 255, 0.08);
  }
  
  .pricing-card.selected {
    border-color: var(--color);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .popular-badge {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0 0 12px 12px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .card-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .plan-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color);
  }
  
  .plan-price {
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 3rem;
    font-weight: 700;
    color: white;
  }
  
  .period {
    font-size: 1rem;
    opacity: 0.7;
    margin-left: 0.5rem;
  }
  
  .plan-description {
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.8;
  }
  
  .card-body {
    margin-bottom: 2rem;
  }
  
  .features-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
  }
  
  .check-icon {
    width: 18px;
    height: 18px;
    color: var(--color);
    flex-shrink: 0;
  }
  
  .card-footer {
    text-align: center;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cta-button.primary {
    background: linear-gradient(135deg, var(--color) 0%, rgba(255, 255, 255, 0.1) 100%);
    border-color: var(--color);
  }
  
  .cta-button:hover {
    background: var(--color);
    border-color: var(--color);
    transform: translateY(-2px);
  }
  
  .arrow {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover .arrow {
    transform: translateX(4px);
  }
  
  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--color), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    filter: blur(30px);
  }
  
  .pricing-footer {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  }
  
  .pricing-footer.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .additional-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .info-icon {
    font-size: 2rem;
    width: 50px;
    text-align: center;
  }
  
  .info-content h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .info-content p {
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.5;
  }
  
  .custom-solution {
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .custom-solution h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .custom-solution p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .contact-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
  
  .calendar-icon {
    width: 20px;
    height: 20px;
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
    }
    
    .additional-info {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .pricing-card {
      padding: 2rem;
    }
    
    .custom-solution {
      padding: 2rem;
    }
  }
</style>

<code>
kit: &#123;
  // Remove the trailingSlash option or replace it with valid options
&#125;
</code>