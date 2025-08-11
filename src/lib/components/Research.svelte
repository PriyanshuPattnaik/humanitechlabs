<script lang="ts">
  import { onMount } from 'svelte';
  
  type ResearchArea = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    impact: string;
    domains: string[];
    icon: string;
  };
  
  let activeCard: string | null = null;
  let scrollY: number = 0;
  
  const researchAreas: ResearchArea[] = [
    {
      id: 'ethical-ai',
      title: 'Ethical AI & ML',
      subtitle: 'Building Human-Centered Intelligence',
      description: 'Developing bias-free AI systems for disease prediction, drug discovery, and agricultural optimization. Our models prioritize fairness, transparency, and global accessibility.',
      impact: '50+ Lives Impacted',
      domains: ['Healthcare', 'Agriculture', 'Climate'],
      icon: '🧠'
    },
    {
      id: 'assistive-tech',
      title: 'Assistive Technology',
      subtitle: 'Technology Without Barriers',
      description: 'Creating IoT prosthetics, AI-powered sign language recognition, and voice-enabled systems that ensure technology serves everyone, regardless of ability.',
      impact: 'Working on 5+ Accessibility Solutions',
      domains: ['Accessibility', 'IoT', 'Inclusion'],
      icon: '🤝'
    },
    {
      id: 'climate-tech',
      title: 'Climate Intelligence',
      subtitle: 'Data-Driven Environmental Action',
      description: 'Leveraging satellite imagery, IoT sensors, and predictive analytics to combat climate change through renewable energy optimization and carbon tracking.',
      impact: '1 Climate Project',
      domains: ['Environment', 'Sustainability', 'Energy'],
      icon: '🌍'
    },
    {
      id: 'social-systems',
      title: 'Social Impact Systems',
      subtitle: 'Technology for Social Justice',
      description: 'Building blockchain governance platforms, digital identity systems, and civic engagement tools that promote transparency and democratic participation.',
      impact: 'Aiming to Empower 1M+ Citizens',
      domains: ['Governance', 'Transparency', 'Democracy'],
      icon: '⚖️'
    },
    {
      id: 'education-ai',
      title: 'Educational AI',
      subtitle: 'Democratizing Quality Learning',
      description: 'Developing personalized learning platforms, multilingual AI tutors, and AR/VR educational experiences for underserved communities worldwide.',
      impact: '100+ Students Reached',
      domains: ['Education', 'AI', 'Global Access'],
      icon: '📚'
    },
    {
      id: 'open-innovation',
      title: 'Open Source Innovation',
      subtitle: 'Collaborative Global Research',
      description: 'Leading open-source initiatives that accelerate breakthrough discoveries and ensure technological advances benefit humanity as a whole.',
      impact: 'A Growing Developer Community',
      domains: ['Open Source', 'Collaboration', 'Global'],
      icon: '🔓'
    }
  ];

  function handleCardHover(cardId: string): void {
    activeCard = cardId;
  }

  function handleCardLeave(): void {
    activeCard = null;
  }

  function handleScroll(): void {
    scrollY = window.scrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window bind:scrollY />

<section class="research">
  <div class="research-background" style="transform: translateY({scrollY * 0.3}px)"></div>
  
  <!-- Animated geometric elements -->
  <div class="geometric-elements">
    <div class="floating-element" style="transform: translateY({scrollY * -0.2}px) rotate({scrollY * 0.1}deg)"></div>
    <div class="floating-element-2" style="transform: translateY({scrollY * 0.15}px) rotate({scrollY * -0.08}deg)"></div>
  </div>
  
  <div class="container">
    <!-- Hero Section -->
    <div class="research-hero">
      <div class="hero-badge">
        <span class="badge-text">BREAKTHROUGH RESEARCH</span>
      </div>
      <h2 class="section-title">
        BUILDING THE FUTURE OF
        <span class="highlight-text">HUMAN-CENTERED TECH</span>
      </h2>
      <p class="hero-subtitle">
        Where cutting-edge research meets real-world impact. We architect solutions that don't just push technological boundaries—they uplift humanity.
      </p>
    </div>

    <!-- Research Areas Grid -->
    <div class="research-grid">
      {#each researchAreas as area, index}
        <div 
          class="research-card" 
          class:active={activeCard === area.id}
          on:mouseenter={() => handleCardHover(area.id)}
          on:mouseleave={handleCardLeave}
          style="animation-delay: {index * 0.1}s"
          role="button"
          tabindex="0"
          on:keydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardHover(area.id);
            }
          }}
        >
          <div class="card-content">
            <div class="card-header">
              <div class="card-icon" role="img" aria-label={area.title}>{area.icon}</div>
              <div class="card-impact">{area.impact}</div>
            </div>
            
            <h3 class="card-title">{area.title}</h3>
            <p class="card-subtitle">{area.subtitle}</p>
            <p class="card-description">{area.description}</p>
            
            <div class="card-domains">
              {#each area.domains as domain}
                <span class="domain-tag">{domain}</span>
              {/each}
            </div>
            
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div class="card-glow"></div>
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="research-cta">
      <div class="cta-content">
        <h3 class="cta-title">Ready to Shape Tomorrow?</h3>
        <p class="cta-description">Join our global research community and help build technology that matters.</p>
        <div class="cta-buttons">
          <button class="cta-primary" on:click={() => window.location.href = '/research'}>
            Explore Open Research
          </button>
          <button class="cta-secondary" on:click={() => console.log('Collaborate with Us clicked')}>
            Collaborate with Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .research {
    min-height: 120vh;
    background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%);
    color: white;
    position: relative;
    overflow: hidden;
    padding: 8rem 2rem 6rem;
  }

  .research-background {
    position: absolute;
    top: -20%;
    right: -10%;
    width: 70%;
    height: 140%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: 0.15;
    mix-blend-mode: luminosity;
    filter: contrast(1.5) brightness(0.8);
    mask-image: radial-gradient(ellipse at 60% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 85%);
    -webkit-mask-image: radial-gradient(ellipse at 60% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 85%);
  }

  .geometric-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .floating-element,
  .floating-element-2 {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .floating-element {
    width: 200px;
    height: 200px;
    top: 20%;
    left: 10%;
    animation: float 6s ease-in-out infinite;
  }

  .floating-element-2 {
    width: 120px;
    height: 120px;
    top: 60%;
    right: 15%;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* Hero Section */
  .research-hero {
    text-align: center;
    margin-bottom: 6rem;
    animation: fadeInUp 1s ease-out;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }

  .badge-text {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #C0C0C0;
  }

  .section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: #ffffff;
  }

  .highlight-text {
    background: linear-gradient(135deg, #ffffff 0%, #C0C0C0 50%, #808080 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #A0A0A0;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Research Grid */
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 6rem;
  }

  .research-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2.5rem;
    position: relative;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    animation: fadeInUp 0.8s ease-out both;
    overflow: hidden;
  }

  .research-card:hover,
  .research-card:focus {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.3);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
    outline: none;
  }

  .research-card.active .card-glow {
    opacity: 1;
  }

  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .card-icon {
    font-size: 2rem;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .research-card:hover .card-icon,
  .research-card:focus .card-icon {
    filter: grayscale(0%);
  }

  .card-impact {
    font-size: 0.75rem;
    font-weight: 600;
    color: #808080;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .card-subtitle {
    font-size: 0.875rem;
    color: #C0C0C0;
    margin-bottom: 1rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .card-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #A0A0A0;
    margin-bottom: 2rem;
  }

  .card-domains {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .domain-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #C0C0C0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .research-card:hover .domain-tag,
  .research-card:focus .domain-tag {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }

  .card-arrow {
    color: #808080;
    transition: all 0.3s ease;
  }

  .research-card:hover .card-arrow,
  .research-card:focus .card-arrow {
    color: #ffffff;
    transform: translateX(4px);
  }

  /* CTA Section */
  .research-cta {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }

  .cta-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .cta-description {
    font-size: 1.125rem;
    color: #A0A0A0;
    margin-bottom: 2.5rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary,
  .cta-secondary {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-transform: none;
  }

  .cta-primary {
    background: #ffffff;
    color: #000000;
  }

  .cta-primary:hover,
  .cta-primary:focus {
    background: #f0f0f0;
    transform: translateY(-2px);
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  .cta-secondary {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .cta-secondary:hover,
  .cta-secondary:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 2px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .research {
      padding: 4rem 1.5rem;
    }

    .research-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .research-card {
      padding: 2rem;
    }

    .section-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      max-width: 280px;
    }

    .floating-element,
    .floating-element-2 {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .research-card {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.25rem;
    }

    .research-hero {
      margin-bottom: 4rem;
    }
  }
</style>