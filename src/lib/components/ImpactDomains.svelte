<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Dna, Wheat, Brain, Globe, Scale, Lightbulb } from 'lucide-svelte';
  
  /** @typedef {Object} DomainMetrics
   * @property {number} progress
   * @property {number} projects
   * @property {string} impact
   */
  
  /** @typedef {Object} Domain
   * @property {string} title
   * @property {string} icon
   * @property {string} tagline
   * @property {string} description
   * @property {string} details
   * @property {DomainMetrics} metrics
   * @property {string[]} technologies
   * @property {string} gradient
   */
  
  /** @type {Domain[]} */
  let domains = [
    {
      title: 'Healthcare & Medicine',
      icon: Dna,
      tagline: 'Healing Through Intelligence',
      description: 'AI-powered diagnostics revolutionizing patient care',
      details: 'From predictive disease modeling to personalized treatment plans, we\'re building the future of medicine where AI saves lives before symptoms appear.',
      metrics: { progress: 87, projects: 2, impact: '10+ lives touched' },
      technologies: ['Deep Learning', 'Computer Vision', 'NLP'],
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Agriculture & Food Security',
      icon: Wheat,
      tagline: 'Feeding Tomorrow, Today',
      description: 'Smart farming for a hunger-free world',
      details: 'Precision agriculture powered by IoT sensors, satellite imagery, and AI algorithms that optimize crop yields while minimizing environmental impact.',
      metrics: { progress: 10, projects: 1, impact: 'To Empower 50k+ Farmers' },
      technologies: ['IoT Sensors', 'Satellite AI', 'Blockchain'],
      gradient: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Education & Accessibility',
      icon: Brain,
      tagline: 'Knowledge Without Barriers',
      description: 'Democratizing learning through adaptive AI',
      details: 'Personalized learning experiences that adapt to individual needs, breaking down barriers of language, disability, and geography.',
      metrics: { progress: 75, projects: 2, impact: '100+ students reached' },
      technologies: ['Adaptive AI', 'AR/VR', 'Voice Tech'],
      gradient: 'from-purple-50 to-violet-50'
    },
    {
      title: 'Climate & Sustainability',
      icon: Globe,
      tagline: 'Planet-Scale Solutions',
      description: 'Tech-driven climate action and regeneration',
      details: 'Advanced climate modeling, carbon footprint optimization, and renewable energy management systems that make sustainability scalable.',
      metrics: { progress: 79, projects: 1, impact: 'To Reduce 50M tons CO₂' },
      technologies: ['Climate ML', 'Smart Grids', 'Carbon Analytics'],
      gradient: 'from-teal-50 to-green-50'
    },
    {
      title: 'Social Equity & Governance',
      icon: Scale,
      tagline: 'Democracy Amplified',
      description: 'Transparent governance through blockchain',
      details: 'Building trust in institutions through immutable records, participatory decision-making platforms, and bias-free AI systems.',
      metrics: { progress: 71, projects: 1, impact: 'To Serve 100+ Communities' },
      technologies: ['Blockchain', 'Civic AI', 'Privacy Tech'],
      gradient: 'from-orange-50 to-red-50'
    },
    {
      title: 'Financial Inclusion',
      icon: Lightbulb,
      tagline: 'Banking the Unbanked',
      description: 'AI-driven financial accessibility',
      details: 'Revolutionary fintech solutions bringing banking, credit, and investment opportunities to underserved communities worldwide.',
      metrics: { progress: 68, projects: 1, impact: 'To Impact 1M+ People' },
      technologies: ['AI Credit', 'Mobile Banking', 'Micro-lending'],
      gradient: 'from-yellow-50 to-orange-50'
    }
  ];

  /** @type {Set<number>} */
  let visibleCards = new Set();
  
  /** @type {number | null} */
  let hoveredCard = null;
  
  /** @type {number | null} */
  let selectedDomain = null;

  /**
   * @param {number} index
   * @returns {(entries: IntersectionObserverEntry[]) => void}
   */
  function handleIntersection(index) {
    return (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            visibleCards = new Set([...visibleCards, index]);
          }, index * 100); // Staggered animation
        }
      });
    };
  }

  /**
   * @param {Domain} domain
   * @param {number} index
   */
  function handleCardClick(domain, index) {
    selectedDomain = selectedDomain === index ? null : index;
  }

  onMount(() => {
    const observers = domains.map((_, index) => {
      const observer = new IntersectionObserver(handleIntersection(index), {
        threshold: 0.1,
        rootMargin: '50px'
      });
      const element = document.querySelector(`#domain-${index}`);
      if (element) observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  });
</script>

<section class="impact-domains">
  <div class="section-header">
    <span class="section-badge">IMPACT DOMAINS</span>
    <h2>Solving Tomorrow's<br><span class="gradient-text">Challenges Today</span></h2>
    <p class="section-subtitle">Six domains. Infinite possibilities. Real impact.</p>
  </div>
  
  <div class="domains-grid">
    {#each domains as domain, i}
      <div
        class="domain-card"
        id="domain-{i}"
        class:visible={visibleCards.has(i)}
        class:expanded={selectedDomain === i}
        on:click={() => handleCardClick(domain, i)}
        on:mouseenter={() => hoveredCard = i}
        on:mouseleave={() => hoveredCard = null}
        style="--delay: {i * 0.1}s"
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && handleCardClick(domain, i)}
      >
        <div class="card-background bg-gradient-to-br {domain.gradient}"></div>
        
        <div class="card-content">
          <!-- Main Content -->
          <div class="card-main">
            <div class="icon-container">
              <span class="domain-icon">
                <svelte:component this={domain.icon} size={40} strokeWidth={1.5} />
              </span>
              <div class="pulse-ring"></div>
            </div>
            
            <div class="content-text">
              <span class="tagline">{domain.tagline}</span>
              <h3 class="domain-title">{domain.title}</h3>
              <p class="domain-description">{domain.description}</p>
            </div>
          </div>

          <!-- Metrics Bar -->
          <div class="metrics-preview">
            <div class="metric-item">
              <span class="metric-value">{domain.metrics.projects}</span>
              <span class="metric-label">Projects</span>
            </div>
            <div class="progress-container">
              <div class="progress-track">
                <div 
                  class="progress-fill" 
                  style="width: {visibleCards.has(i) ? domain.metrics.progress : 0}%"
                ></div>
              </div>
              <span class="progress-label">{domain.metrics.progress}%</span>
            </div>
          </div>

          <!-- Expanded Content -->
          {#if selectedDomain === i}
            <div class="expanded-content" transition:fly={{ y: 20, duration: 300 }}>
              <div class="details-section">
                <p class="detailed-description">{domain.details}</p>
                
                <div class="impact-metric">
                  <span class="impact-number">{domain.metrics.impact}</span>
                  <span class="impact-label">Global Impact</span>
                </div>

                <div class="tech-stack">
                  <span class="tech-label">Technologies:</span>
                  <div class="tech-tags">
                    {#each domain.technologies as tech}
                      <span class="tech-tag">{tech}</span>
                    {/each}
                  </div>
                </div>

                <div class="action-buttons">
                  <button class="btn-primary" type="button">Explore Projects</button>
                  <button class="btn-secondary" type="button">Join Research</button>
                </div>
              </div>
            </div>
          {/if}
        </div>

        <!-- Hover Effects -->
        <div class="card-glow" class:active={hoveredCard === i}></div>
        <div class="corner-accent"></div>
      </div>
    {/each}
  </div>

  <!-- Stats Summary -->
  <div class="impact-summary">
    <div class="summary-stat">
      <span class="stat-number">100+</span>
      <span class="stat-label">Lives Impacted</span>
    </div>
    <div class="summary-stat">
      <span class="stat-number">5+</span>
      <span class="stat-label">Active Projects</span>
    </div>
    <div class="summary-stat">
      <span class="stat-number">100%</span>
      <span class="stat-label">Open Source</span>
    </div>
  </div>
</section>

<style>
  .impact-domains {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
  }

  .impact-domains::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(192, 192, 192, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(160, 160, 160, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
  }

  .section-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: #666;
  }

  h2 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: #000;
  }

  .gradient-text {
    background: linear-gradient(135deg, #666 0%, #999 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  .domains-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto 4rem;
  }

  .domain-card {
    position: relative;
    background: white;
    border-radius: 24px;
    border: 1px solid rgba(192, 192, 192, 0.2);
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--delay);
  }

  .domain-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .domain-card.expanded {
    grid-column: 1 / -1;
    max-width: 800px;
    margin: 0 auto;
  }

  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .domain-card:hover .card-background {
    opacity: 1;
  }

  .card-content {
    position: relative;
    padding: 2rem;
    z-index: 2;
  }

  .card-main {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .icon-container {
    position: relative;
    flex-shrink: 0;
  }

  .domain-icon {
    font-size: 2.5rem;
    display: block;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    color: #000000;
  }

  .domain-icon :global(svg) {
    color: #000000;
    stroke: #000000;
  }

  .domain-card:hover .domain-icon {
    transform: scale(1.1);
  }

  .pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 2px solid rgba(192, 192, 192, 0.3);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 2s infinite;
  }

  .domain-card:hover .pulse-ring {
    opacity: 1;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
  }

  .content-text {
    flex: 1;
  }

  .tagline {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #888;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .domain-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #000;
    line-height: 1.2;
  }

  .domain-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }

  .metrics-preview {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(192, 192, 192, 0.1);
  }

  .metric-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
  }

  .metric-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: #000;
  }

  .metric-label {
    font-size: 0.75rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .progress-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .progress-track {
    flex: 1;
    height: 6px;
    background: rgba(192, 192, 192, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #C0C0C0, #A0A0A0);
    border-radius: 3px;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.5s;
  }

  .progress-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #666;
    min-width: 40px;
  }

  .expanded-content {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(192, 192, 192, 0.1);
  }

  .detailed-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
  }

  .impact-metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    margin-bottom: 2rem;
  }

  .impact-number {
    font-size: 2rem;
    font-weight: 800;
    color: #000;
  }

  .impact-label {
    font-size: 0.875rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .tech-stack {
    margin-bottom: 2rem;
  }

  .tech-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #888;
    display: block;
    margin-bottom: 0.75rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    padding: 0.5rem 1rem;
    background: rgba(192, 192, 192, 0.1);
    border: 1px solid rgba(192, 192, 192, 0.2);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #666;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 0.875rem;
  }

  .btn-primary {
    background: #000;
    color: white;
  }

  .btn-primary:hover {
    background: #333;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: #000;
    border: 1px solid rgba(192, 192, 192, 0.3);
  }

  .btn-secondary:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  .card-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, rgba(192, 192, 192, 0.3), rgba(160, 160, 160, 0.3));
    border-radius: 26px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .card-glow.active {
    opacity: 1;
  }

  .corner-accent {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 6px;
    height: 6px;
    background: rgba(192, 192, 192, 0.5);
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .domain-card:hover .corner-accent {
    background: #A0A0A0;
    transform: scale(1.5);
  }

  .impact-summary {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 3rem 0;
    border-top: 1px solid rgba(192, 192, 192, 0.1);
  }

  .summary-stat {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 800;
    color: #000;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .impact-domains {
      padding: 4rem 1rem;
    }

    .domains-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .domain-card.expanded {
      grid-column: 1;
    }

    .card-main {
      flex-direction: column;
      gap: 1rem;
    }

    .icon-container {
      align-self: center;
    }

    .impact-summary {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    .action-buttons {
      flex-direction: column;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
      display: flex;
    }
  }
</style>
