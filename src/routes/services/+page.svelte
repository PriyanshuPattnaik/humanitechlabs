<script>
  import { onMount } from 'svelte';
  import { Handshake, Bot, Zap, TrendingUp, Rocket } from 'lucide-svelte';
  
  let isVisible = false;
  
  const services = [
    {
      id: 'ngos',
      title: 'Technology Solutions for NGOs',
      description: 'Comprehensive digital solutions designed specifically for non-profit organizations to amplify their social impact.',
      icon: Handshake,
      features: ['Web Development', 'Data Analytics', 'Capacity Building', 'Digital Strategy'],
      color: '#667eea',
      link: '/services/ngos'
    }
  ];
  
  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>Our Services | Humanitech Labs</title>
  <meta name="description" content="Technology solutions designed for social impact. We're building comprehensive services to empower non-profit organizations through modern digital solutions." />
  <meta name="keywords" content="NGO technology services, social impact technology, non-profit digital solutions, humanitarian tech" />
</svelte:head>

<section class="services-hero">
  <div class="hero-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
  </div>
  
  <div class="container">
    <div class="hero-content" class:visible={isVisible}>
      <div class="hero-badge">
        <Zap class="badge-icon" size={16} />
        <span>Our Services</span>
      </div>
      
      <h1 class="hero-title">
        Technology Solutions for
        <span class="gradient-text">Social Impact</span>
      </h1>
      
      <p class="hero-description">
        We're building comprehensive technology services designed to empower non-profit 
        organizations and amplify their mission impact through modern digital solutions.
      </p>
    </div>
  </div>
</section>

<section class="services-grid-section">
  <div class="container">
    <div class="services-grid" class:visible={isVisible}>
      {#each services as service, index}
        <div class="service-card" style="--delay: {index * 0.2}s; --color: {service.color}">
          <div class="card-header">
            <div class="service-icon">
              <svelte:component this={service.icon} size={48} />
            </div>
            <h2 class="service-title">{service.title}</h2>
            <p class="service-description">{service.description}</p>
          </div>
          
          <div class="card-body">
            <div class="features-list">
              {#each service.features as feature}
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
            <a href={service.link} class="service-button">
              <span>Learn More</span>
              <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <div class="card-glow"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="why-choose-section">
  <div class="container">
    <div class="section-header" class:visible={isVisible}>
      <h2 class="section-title">Why Humanitech?</h2>
      <p class="section-description">
        We combine technical expertise with genuine commitment to social impact
      </p>
    </div>
    
    <div class="benefits-grid" class:visible={isVisible}>
      <div class="benefit-item">
        <div class="benefit-icon">
          <Rocket size={32} />
        </div>
        <h3>Research-Driven</h3>
        <p>Our solutions are informed by ongoing research in humanitarian technology and real-world insights.</p>
      </div>
      <div class="benefit-item">
        <div class="benefit-icon">
          <Handshake size={32} />
        </div>
        <h3>Mission-Aligned</h3>
        <p>We understand the unique challenges NGOs face and design solutions accordingly.</p>
      </div>
      <div class="benefit-item">
        <div class="benefit-icon">
          <TrendingUp size={32} />
        </div>
        <h3>Modern Technology</h3>
        <p>We use cutting-edge technologies and best practices to build scalable solutions.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-content" class:visible={isVisible}>
      <h2 class="cta-title">Ready to Amplify Your Impact?</h2>
      <p class="cta-description">
        We're currently developing our services and will be launching soon. Join our waitlist to be among the first.
      </p>
      <div class="cta-actions">
        <a href="/services/ngos" class="cta-button primary">
          <span>Explore NGO Services</span>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/join-us" class="cta-button secondary">
          <span>Join Waitlist</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .services-hero {
    min-height: 70vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  
  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;
  }
  
  .orb-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    top: 20%;
    left: 10%;
  }
  
  .orb-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #a8edea, #fed6e3);
    bottom: 20%;
    right: 20%;
    animation-delay: 3s;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-description {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .services-grid-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .services-grid.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .service-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .service-card:hover .card-glow {
    opacity: 1;
  }
  
  .card-header {
    margin-bottom: 2rem;
  }
  
  .service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  .service-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
  }
  
  .service-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a5568;
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
    color: #2d3748;
  }
  
  .check-icon {
    width: 18px;
    height: 18px;
    color: var(--color);
    flex-shrink: 0;
  }
  
  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .service-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--color);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .service-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .arrow {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }
  
  .service-button:hover .arrow {
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
    filter: blur(20px);
  }
  
  .why-choose-section {
    padding: 6rem 0;
    background: white;
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
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
  }
  
  .section-description {
    font-size: 1.2rem;
    color: #4a5568;
  }
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  
  .benefits-grid.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .benefit-item {
    text-align: center;
    padding: 2rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .benefit-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .benefit-item h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
  }
  
  .benefit-item p {
    color: #4a5568;
    line-height: 1.6;
  }
  
  .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
  }
  
  .cta-content {
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cta-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .cta-description {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .cta-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .cta-button.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .benefits-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .cta-title {
      font-size: 2rem;
    }
  }
</style>