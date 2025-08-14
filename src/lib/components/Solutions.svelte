<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Zap, Brain, Rocket } from 'lucide-svelte';

  interface Service {
    name: string;
    description: string;
    tech: string;
  }

  interface Metrics {
    impact: string;
    efficiency: string;
    scale: string;
  }

  interface Solution {
    title: string;
    subtitle: string;
    icon: any;
    services: Service[];
    metrics: Metrics;
    cta: string;
  }

  const solutions: Solution[] = [
    {
      title: 'Digital Transformation',
      subtitle: 'Building Tomorrow\'s Foundations Today',
      icon: Zap,
      services: [
        {
          name: 'Next-Gen Web & Mobile Apps',
          description: 'PWAs and native solutions that work offline, scale globally',
          tech: 'React • Svelte • Flutter • Node.js'
        },
        {
          name: 'Human-Centered UX Design',
          description: 'Accessibility-first design that empowers every user',
          tech: 'Figma • Design Systems • A11y Testing'
        },
        {
          name: 'Cloud-Native Infrastructure',
          description: 'Serverless, scalable, secure - built for global impact',
          tech: 'AWS • Docker • Kubernetes • CI/CD'
        }
      ],
      metrics: {
        impact: 'To empower a 10+ Organisations by 2026',
        efficiency: '80% Cost Reduction',
        scale: 'Globally Scalable'
      },
      cta: 'Transform Your Mission'
    },
    {
      title: 'Intelligence & Analytics',
      subtitle: 'Data-Driven Decisions for Maximum Impact',
      icon: Brain,
      services: [
        {
          name: 'Real-Time Impact Dashboards',
          description: 'Live insights that turn data into actionable intelligence',
          tech: 'D3.js • Apache Kafka • Elasticsearch'
        },
        {
          name: 'Predictive Impact Modeling',
          description: 'AI-powered forecasting for resource optimization',
          tech: 'TensorFlow • Prophet • MLOps Pipeline'
        },
        {
          name: 'Automated Report Generation',
          description: 'Smart reporting that tells your impact story automatically',
          tech: 'Python • Pandas • Custom NLG Models'
        }
      ],
      metrics: {
        impact: '95% Decision Accuracy',
        efficiency: '70% Time Saved',
        scale: 'Real-Time Processing'
      },
      cta: 'Unlock Your Data\'s Power'
    },
    {
      title: 'Emerging Tech Integration',
      subtitle: 'Tomorrow\'s Technology, Today\'s Solutions',
      icon: Rocket,
      services: [
        {
          name: 'Ethical AI Implementation',
          description: 'Bias-free, transparent AI that amplifies human potential',
          tech: 'PyTorch • Fairness Tools • Explainable AI'
        },
        {
          name: 'IoT for Social Good',
          description: 'Connected sensors creating smarter, safer communities',
          tech: 'Arduino • Raspberry Pi • LoRaWAN • Edge Computing'
        },
        {
          name: 'Blockchain for Transparency',
          description: 'Immutable trust systems for donations and impact tracking',
          tech: 'Ethereum • Hyperledger • Smart Contracts'
        }
      ],
      metrics: {
        impact: '100% Transparency',
        efficiency: '90% Process Automation',
        scale: 'Global Network'
      },
      cta: 'Embrace the Future'
    }
  ];

  let visibleSections: Set<number> = new Set();
  let hoveredSection: number | null = null;

  function handleIntersection(index: number) {
    return (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections = new Set([...visibleSections, index]);
        }
      });
    };
  }

  function handleMouseEnter(index: number) {
    hoveredSection = index;
  }

  function handleMouseLeave() {
    hoveredSection = null;
  }

  onMount(() => {
    const observers = solutions.map((_, index) => {
      const observer = new IntersectionObserver(handleIntersection(index), {
        threshold: 0.1
      });
      const element = document.querySelector(`#solution-${index}`);
      if (element) observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  });
</script>

<section class="solutions">
  <div class="header">
    <h2>360° Technology Solutions for Non-Profits</h2>
    <p class="subtitle">Empowering organizations with cutting-edge tools that amplify impact, not complexity.</p>
  </div>

  <div class="solutions-grid">
    {#each solutions as solution, i}
      <div
        class="solution-container"
        class:visible={visibleSections.has(i)}
        class:hovered={hoveredSection === i}
        id="solution-{i}"
        on:mouseenter={() => handleMouseEnter(i)}
        on:mouseleave={handleMouseLeave}
        on:keydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleMouseEnter(i);
          }
        }}
        role="button"
        tabindex="0"
        aria-label={`View solution: ${solution.title}`}
      >
        <div class="solution-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svelte:component this={solution.icon} class="icon" size={40} />
              <div class="icon-glow"></div>
            </div>
            <div class="title-section">
              <h3>{solution.title}</h3>
              <p class="subtitle-text">{solution.subtitle}</p>
            </div>
          </div>

          <div class="services-section">
            {#each solution.services as service, j}
              <div class="service-card" style="--delay: {j * 0.1}s">
                <div class="service-header">
                  <h4>{service.name}</h4>
                  <span class="tech-stack">{service.tech}</span>
                </div>
                <p class="service-description">{service.description}</p>
              </div>
            {/each}
          </div>

          <div class="metrics-section">
            <div class="metrics-grid">
              {#each Object.entries(solution.metrics) as [key, value]}
                <div class="metric">
                  <span class="metric-value">{value}</span>
                  <span class="metric-label">{key}</span>
                </div>
              {/each}
            </div>
          </div>

          <div class="cta-section">
            <button class="cta-button" type="button">
              <span>{solution.cta}</span>
              <div class="button-arrow">→</div>
            </button>
          </div>
        </div>

        <div class="solution-visual">
          <div class="visual-container">
            <div class="tech-orbit">
              <div class="orbit-ring orbit-1"></div>
              <div class="orbit-ring orbit-2"></div>
              <div class="orbit-ring orbit-3"></div>
              <div class="center-node">
                <svelte:component this={solution.icon} class="node-icon" size={24} />
              </div>
              <div class="orbit-nodes">
                {#each Array(6) as _, nodeIndex}
                  <div class="orbit-node" style="--angle: {nodeIndex * 60}deg"></div>
                {/each}
              </div>
            </div>
            <div class="data-flow">
              {#each Array(12) as _, flowIndex}
                <div class="flow-particle" style="--flow-delay: {flowIndex * 0.2}s"></div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="bottom-cta">
    <h3>Ready to Transform Your Organization?</h3>
    <p>Let's build technology that amplifies your mission and maximizes your impact.</p>
    <button class="primary-cta" type="button">
      <span>Start Your Journey</span>
      <div class="cta-glow"></div>
    </button>
  </div>
</section>

<style>
  .solutions {
    padding: 6rem 2rem;
    background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    position: relative;
  }

  .header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .header h2 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #000;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .header .subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .solutions-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .solution-container {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 3rem;
    align-items: start;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .solution-container:nth-child(even) {
    grid-template-columns: 300px 1fr;
  }

  .solution-container:nth-child(even) .solution-card {
    order: 2;
  }

  .solution-container:nth-child(even) .solution-visual {
    order: 1;
  }

  .solution-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .solution-card {
    background: white;
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e0e0;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .solution-container:hover .solution-card {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: #c0c0c0;
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .icon-wrapper {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 20px;
    border: 2px solid #dee2e6;
  }

  :global(.icon) {
    z-index: 2;
    color: #333;
  }

  .icon-glow {
    position: absolute;
    inset: -4px;
    background: linear-gradient(45deg, transparent, rgba(192, 192, 192, 0.3), transparent);
    border-radius: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .solution-container:hover .icon-glow {
    opacity: 1;
  }

  .title-section h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }

  .subtitle-text {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }

  .services-section {
    margin-bottom: 2.5rem;
  }

  .service-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInService 0.6s ease forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes slideInService {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .solution-container.visible .service-card {
    animation-play-state: running;
  }

  .service-card:hover {
    background: white;
    border-color: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }

  .service-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
    gap: 1rem;
  }

  .service-header h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    margin: 0;
  }

  .tech-stack {
    font-size: 0.75rem;
    color: #888;
    font-family: 'Monaco', 'Consolas', monospace;
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
  }

  .service-description {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin: 0;
  }

  .metrics-section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8f9fa, #ffffff);
    border-radius: 16px;
    border: 1px solid #e9ecef;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .metric {
    text-align: center;
  }

  .metric-value {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.25rem;
  }

  .metric-label {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cta-section {
    text-align: center;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    border: 2px solid #dee2e6;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    border-color: #adb5bd;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  }

  .button-arrow {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .button-arrow {
    transform: translateX(4px);
  }

  .solution-visual {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }

  .visual-container {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tech-orbit {
    position: relative;
    width: 250px;
    height: 250px;
  }

  .orbit-ring {
    position: absolute;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    opacity: 0.6;
  }

  .orbit-1 {
    inset: 0;
    animation: rotate 20s linear infinite;
  }

  .orbit-2 {
    inset: 25px;
    animation: rotate 15s linear infinite reverse;
  }

  .orbit-3 {
    inset: 50px;
    animation: rotate 25s linear infinite;
  }

  @keyframes rotate {
    to { transform: rotate(360deg); }
  }

  .center-node {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ffffff, #f0f0f0);
    border: 2px solid #c0c0c0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .node-icon {
    font-size: 1.5rem;
  }

  .orbit-nodes {
    position: absolute;
    inset: 0;
  }

  .orbit-node {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #c0c0c0;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform-origin: 0 125px;
    transform: translateX(-50%) rotate(var(--angle)) translateY(-10px);
    animation: pulse 2s ease-in-out infinite;
    animation-delay: calc(var(--angle) / 360deg * 2s);
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: translateX(-50%) rotate(var(--angle)) translateY(-10px) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) rotate(var(--angle)) translateY(-10px) scale(1.5); }
  }

  .data-flow {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .flow-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #888;
    border-radius: 50%;
    opacity: 0;
    animation: flowAnimation 4s linear infinite;
    animation-delay: var(--flow-delay, 0s);
  }

  @keyframes flowAnimation {
    0% { 
      opacity: 0;
      transform: translate(150px, 150px) rotate(0deg) translateX(120px);
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { 
      opacity: 0;
      transform: translate(150px, 150px) rotate(360deg) translateX(120px);
    }
  }

  .bottom-cta {
    text-align: center;
    margin-top: 6rem;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8f9fa, #ffffff);
    border-radius: 24px;
    border: 1px solid #e9ecef;
  }

  .bottom-cta h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .bottom-cta p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .primary-cta {
    padding: 1.25rem 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #000, #333);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .primary-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .cta-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .primary-cta:hover .cta-glow {
    transform: translateX(100%);
  }

  @media (max-width: 1024px) {
    .solution-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .solution-container:nth-child(even) {
      grid-template-columns: 1fr;
    }

    .solution-container:nth-child(even) .solution-card,
    .solution-container:nth-child(even) .solution-visual {
      order: unset;
    }

    .solution-visual {
      position: relative;
      top: unset;
    }

    .visual-container {
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .solutions {
      padding: 4rem 1rem;
    }

    .solution-card {
      padding: 2rem;
    }

    .card-header {
      flex-direction: column;
      gap: 1rem;
    }

    .service-header {
      flex-direction: column;
      gap: 0.5rem;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .visual-container {
      width: 250px;
      height: 250px;
    }

    .tech-orbit {
      width: 200px;
      height: 200px;
    }
  }
</style>