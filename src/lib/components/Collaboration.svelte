<script lang="ts">
    import { onMount } from 'svelte';
    
    type Node = {
      id: number;
      x: number;
      y: number;
      connections: number[];
      pulse: boolean;
      type?: 'hub' | 'research' | 'ngo' | 'satellite';
    };
    
    let nodes: Node[] = [];
    let visible = false;
    let networkActive = false;
    
    const partnerships = [
      {
        type: 'Global Research Consortium',
        icon: '🧬',
        description: 'Leading breakthrough AI research with 50+ universities across 20 countries. From MIT to IIT, we\'re pushing the boundaries of ethical AI.',
        impact: 'To Lead 100+ Research Collaborations by 2025',
        projects: 45,
        gradient: 'from-blue-600 to-purple-600'
      },
      {
        type: 'Open Source Accelerator',
        icon: '⚡',
        description: 'Democratizing access to cutting-edge technology. Our open-source initiatives have been adopted by 10,000+ developers worldwide.',
        impact: '20+ developers engaged',
        projects: 120,
        gradient: 'from-green-600 to-teal-600'
      },
      {
        type: 'Non-Profit Tech Alliance',
        icon: '🌍',
        description: 'Empowering 5+ NGOs with  technology solutions, half the cost. We\'re building everything from disaster response systems to educational platforms.',
        impact: '5+ NGOs empowered',
        projects: 85,
        gradient: 'from-orange-600 to-red-600'
      },
      {
        type: 'Innovation Hubs Network',
        icon: '🚀',
        description: 'Creating tech-for-good ecosystems in emerging markets. Building sustainable innovation centers that solve local challenges.',
        impact: '15 countries reached',
        projects: 30,
        gradient: 'from-purple-600 to-pink-600'
      }
    ];
  
    const milestones = [
      { 
        year: '2023', 
        title: 'Foundation & First Impact',
        description: 'Launched with our first AI healthcare project, serving 100+ patients in rural India',
        metric: '100+ patients served'
      },
      { 
        year: '2024', 
        title: 'Global Expansion',
        description: 'Expanded to 2 countries with agricultural IoT solutions improving crop yields by 40%',
        metric: '40% yield increase'
      },
      { 
        year: '2025', 
        title: 'Open Source Revolution',
        description: 'Aim to Release 25+ open-source tools adopted by universities and NGOs worldwide',
        metric: '25+ tools'
      },
      { 
        year: '2026', 
        title: 'Ecosystem Leadership',
        description: 'Become the leading tech-for-good platform with 100+ active collaborations',
        metric: '100+ collaborations'
      }
    ];
  
    const partnerLogos = [
      { name: 'Unmute.cz', type: 'Research' },
      { name: 'Yahmi', type: 'Research' },
      { name: 'Young Scientiscts of India', type: 'Research' },
    ];
  
    /** @type {number} */
    let activeCard = -1;
    let currentMilestone = 0;
  
    // Auto-advance milestones
    let milestoneInterval: ReturnType<typeof setInterval> | undefined;
  
    onMount(() => {
      // Generate more sophisticated network nodes
      const centerNodes: { x: number; y: number; type: 'hub' | 'research' | 'ngo' }[] = [
        { x: 50, y: 50, type: 'hub' },
        { x: 25, y: 25, type: 'research' },
        { x: 75, y: 25, type: 'research' },
        { x: 25, y: 75, type: 'ngo' },
        { x: 75, y: 75, type: 'ngo' }
      ];
  
      // Add center nodes
      centerNodes.forEach((node, i) => {
        nodes.push({
          id: i,
          x: node.x,
          y: node.y,
          connections: [],
          pulse: node.type === 'hub',
          type: node.type
        });
      });
  
      // Add satellite nodes
      for (let i = 5; i < 20; i++) {
        nodes.push({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          connections: [],
          pulse: false,
          type: 'satellite'
        });
      }
  
      // Create intelligent connections
      nodes.forEach(node => {
        if (node.type === 'hub') {
          // Hub connects to multiple nodes
          const targets = [1, 2, 3, 4, 5, 8, 12, 15];
          node.connections = targets.filter(t => t !== node.id);
        } else if (node.type === 'research' || node.type === 'ngo') {
          // Connect to hub and some satellites
          node.connections = [0, ...Array(2).fill(0).map(() => 
            Math.floor(Math.random() * 15) + 5
          )];
        } else {
          // Satellites connect to fewer nodes
          const numConnections = Math.floor(Math.random() * 2) + 1;
          for (let i = 0; i < numConnections; i++) {
            const target = Math.floor(Math.random() * nodes.length);
            if (target !== node.id && !node.connections.includes(target)) {
              node.connections.push(target);
            }
          }
        }
      });
  
      nodes = nodes;
      visible = true;
  
      // Start milestone auto-advance
      milestoneInterval = setInterval(() => {
        currentMilestone = (currentMilestone + 1) % milestones.length;
      }, 4000);
  
      // Activate network after delay
      setTimeout(() => {
        networkActive = true;
      }, 1000);
  
      return () => {
        if (milestoneInterval) clearInterval(milestoneInterval);
      };
    });
  
    function getNodeSize(node: Node) {
      switch(node.type) {
        case 'hub': return '16px';
        case 'research':
        case 'ngo': return '12px';
        default: return '8px';
      }
    }
  
    function getNodeColor(node: Node) {
      switch(node.type) {
        case 'hub': return '#000000';
        case 'research': return '#4F46E5';
        case 'ngo': return '#059669';
        default: return '#6B7280';
      }
    }
  
    function handleCardInteraction(index: number) {
      activeCard = activeCard === index ? -1 : index;
      
      // Trigger network pulse effect
      nodes.forEach(node => {
        if (Math.random() > 0.7) {
          node.pulse = true;
          setTimeout(() => {
            node.pulse = false;
            nodes = nodes;
          }, 1000);
        }
      });
      nodes = nodes;
    }
  </script>
  
  <section class="collaboration" class:visible class:network-active={networkActive}>
    <div class="container">
      <div class="header-section">
        <h2 class="section-title">
          <span class="gradient-text">Building the Future</span>
          <span class="highlight-text">Together</span>
        </h2>
        <p class="section-description">
          We don't just collaborate—we create ecosystems. Our global network of 
          <strong>500+ partners</strong> spans research institutions, NGOs, and innovation hubs, 
          delivering technology that transforms <strong>2.5 million lives</strong> annually.
        </p>
        
        <div class="impact-stats">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Global Partners</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2.5M+</div>
            <div class="stat-label">Lives Impacted</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20</div>
            <div class="stat-label">Countries</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Open Source</div>
          </div>
        </div>
      </div>
  
      <div class="network-visualization">
        <div class="network-bg"></div>
        {#each nodes as node}
          <div 
            class="node" 
            class:pulse={node.pulse}
            class:hub={node.type === 'hub'}
            class:active={networkActive}
            style="
              left: {node.x}%; 
              top: {node.y}%;
              width: {getNodeSize(node)};
              height: {getNodeSize(node)};
              background: {getNodeColor(node)};
            "
          >
            {#each node.connections as connection}
              {#if nodes[connection]}
                <svg class="connection-line" class:active={networkActive}>
                  <line
                    x1="0"
                    y1="0"
                    x2="{(nodes[connection].x - node.x) * 8}px"
                    y2="{(nodes[connection].y - node.y) * 4}px"
                    stroke="rgba(0,0,0,0.1)"
                    stroke-width="1"
                    class="connection-path"
                  />
                </svg>
              {/if}
            {/each}
          </div>
        {/each}
        
        <div class="network-labels">
          <div class="label research-label">Research Institutions</div>
          <div class="label ngo-label">NGO Partners</div>
          <div class="label hub-label">Humanitech Hub</div>
        </div>
      </div>
  
      <div class="partnership-grid">
        {#each partnerships as partnership, i}
          <div 
            class="partnership-card"
            class:active={activeCard === i}
            on:click={() => handleCardInteraction(i)}
            on:keydown={(e) => e.key === 'Enter' && handleCardInteraction(i)}
            role="button"
            tabindex="0"
          >
            <div class="card-header">
              <span class="partnership-icon">{partnership.icon}</span>
              <div class="card-metrics">
                <div class="metric-item">
                  <span class="metric-number">{partnership.projects}</span>
                  <span class="metric-label">Projects</span>
                </div>
              </div>
            </div>
            
            <h3 class="card-title">{partnership.type}</h3>
            <div class="impact-badge bg-gradient-to-r {partnership.gradient}">
              {partnership.impact}
            </div>
            
            <div class="card-content" class:expanded={activeCard === i}>
              <p class="partnership-description">{partnership.description}</p>
              <button class="learn-more-btn">
                Explore Partnership →
              </button>
            </div>
          </div>
        {/each}
      </div>
  
      <div class="partners-showcase">
        <h3 class="partners-title">Trusted by Global Leaders</h3>
        <div class="partner-logos">
          {#each partnerLogos as partner, i}
            <div class="logo-card" style="animation-delay: {i * 0.1}s">
              <div class="logo-placeholder">
                <div class="logo-content">
                  <div class="partner-name">{partner.name}</div>
                  <div class="partner-type">{partner.type}</div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
  
      <div class="timeline-section">
        <h3 class="timeline-title">Our Journey of Impact</h3>
        <div class="timeline">
          {#each milestones as milestone, i}
            <div 
              class="timeline-item" 
              class:active={currentMilestone === i}
              on:click={() => currentMilestone = i}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  currentMilestone = i;
                }
              }}
              role="tab"
              tabindex="0"
              aria-label={`View milestone: ${milestone.title}`}
              aria-selected={currentMilestone === i}
            >
              <div class="timeline-year">{milestone.year}</div>
              <div class="timeline-content">
                <h4 class="milestone-title">{milestone.title}</h4>
                <p class="milestone-description">{milestone.description}</p>
                <div class="milestone-metric">{milestone.metric}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
  
      <div class="cta-section">
        <h3 class="cta-title">Ready to Shape Tomorrow?</h3>
        <p class="cta-description">
          Join our ecosystem of innovators, researchers, and changemakers.
        </p>
        <div class="cta-buttons">
          <button class="cta-primary">Start Collaboration</button>
          <button class="cta-secondary">Explore Partnerships</button>
        </div>
      </div>
    </div>
  </section>
  
  <style>
  
    .collaboration {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      padding: 8rem 2rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
  
    .collaboration::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
    }
  
    .collaboration.visible {
      opacity: 1;
      transform: translateY(0);
    }
  
    .container {
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
    }
  
    .header-section {
      text-align: center;
      margin-bottom: 6rem;
    }
  
    .section-title {
      font-size: clamp(3rem, 6vw, 5rem);
      font-weight: 900;
      margin-bottom: 2rem;
      line-height: 1.1;
    }
  
    .gradient-text {
      background: linear-gradient(135deg, #000000, #4B5563);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  
    .highlight-text {
      background: linear-gradient(135deg, #1F2937, #000000);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
    }
  
    .highlight-text::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #6B7280, #000000);
      border-radius: 2px;
    }
  
    .section-description {
      max-width: 900px;
      margin: 0 auto 3rem;
      font-size: 1.25rem;
      line-height: 1.7;
      color: #374151;
    }
  
    .impact-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      max-width: 800px;
      margin: 0 auto;
    }
  
    .stat-item {
      text-align: center;
    }
  
    .stat-number {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #000000, #4B5563);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: block;
      margin-bottom: 0.5rem;
    }
  
    .stat-label {
      font-size: 1rem;
      color: #6B7280;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  
    .network-visualization {
      height: 500px;
      position: relative;
      margin-bottom: 6rem;
      border-radius: 20px;
      background: linear-gradient(135deg, #f8fafc, #ffffff);
      border: 1px solid rgba(0,0,0,0.05);
      overflow: hidden;
    }
  
    .network-bg {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    }
  
    .node {
      position: absolute;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      z-index: 2;
    }
  
    .node.active {
      transform: translate(-50%, -50%) scale(1.2);
    }
  
    .node.hub {
      box-shadow: 0 0 20px rgba(0,0,0,0.2);
      border: 2px solid white;
    }
  
    .node.pulse {
      animation: pulse-effect 1s ease-out;
    }
  
    .connection-line {
      position: absolute;
      top: 50%;
      left: 50%;
      pointer-events: none;
      z-index: 1;
    }
  
    .connection-path {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
  
    .network-active .connection-path {
      opacity: 1;
      animation: flow 3s infinite linear;
    }
  
    .network-labels {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
  
    .label {
      position: absolute;
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.9);
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #374151;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0,0,0,0.05);
    }
  
    .research-label { top: 20%; left: 10%; }
    .ngo-label { bottom: 20%; right: 10%; }
    .hub-label { top: 45%; left: 45%; }
  
    .partnership-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 6rem;
    }
  
    .partnership-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: 1px solid rgba(0,0,0,0.05);
      position: relative;
      overflow: hidden;
    }
  
    .partnership-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #6B7280, #000000);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  
    .partnership-card:hover::before,
    .partnership-card.active::before {
      transform: scaleX(1);
    }
  
    .partnership-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
  
    .partnership-card.active {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }
  
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
  
    .partnership-icon {
      font-size: 2.5rem;
      filter: grayscale(0.3);
      transition: filter 0.3s ease;
    }
  
    .partnership-card:hover .partnership-icon {
      filter: grayscale(0);
    }
  
    .card-metrics {
      text-align: right;
    }
  
    .metric-item {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  
    .metric-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
    }
  
    .metric-label {
      font-size: 0.8rem;
      color: #6B7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  
    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #111827;
    }
  
    .impact-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1rem;
    }
  
    .card-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .card-content.expanded {
      max-height: 200px;
    }
  
    .partnership-description {
      line-height: 1.6;
      color: #374151;
      margin-bottom: 1.5rem;
    }
  
    .learn-more-btn {
      background: linear-gradient(135deg, #000000, #374151);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }
  
    .learn-more-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  
    .partners-showcase {
      margin-bottom: 6rem;
    }
  
    .partners-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: #111827;
    }
  
    .partner-logos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
  
    .logo-card {
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      transform: translateY(20px);
    }
  
    .logo-placeholder {
      aspect-ratio: 3/2;
      background: linear-gradient(135deg, #f8fafc, #ffffff);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,0.05);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
  
    .logo-placeholder:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
      border-color: rgba(0,0,0,0.1);
    }
  
    .logo-content {
      text-align: center;
    }
  
    .partner-name {
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.25rem;
    }
  
    .partner-type {
      font-size: 0.8rem;
      color: #6B7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  
    .timeline-section {
      margin-bottom: 6rem;
    }
  
    .timeline-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 4rem;
      color: #111827;
    }
  
    .timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      position: relative;
    }
  
    .timeline-item {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: 2px solid transparent;
    }
  
    .timeline-item:hover,
    .timeline-item.active {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      border-color: #000000;
    }
  
    .timeline-year {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #000000, #4B5563);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
  
    .milestone-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #111827;
    }
  
    .milestone-description {
      line-height: 1.6;
      color: #374151;
      margin-bottom: 1rem;
    }
  
    .milestone-metric {
      font-weight: 600;
      color: #059669;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  
    .cta-section {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #111827, #000000);
      border-radius: 20px;
      color: white;
    }
  
    .cta-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  
    .cta-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
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
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
  
    .cta-primary {
      background: white;
      color: #000000;
    }
  
    .cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }
  
    .cta-secondary {
      background: transparent;
      color: white;
      border-color: rgba(255, 255, 255, 0.3);
    }
  
    .cta-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  
    @keyframes pulse-effect {
      0% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.7; }
      100% { transform: translate(-50%, -50%) scale(1); }
    }
  
    @keyframes flow {
      0% { stroke-dasharray: 5, 10; stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 15; }
    }
  
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @media (max-width: 768px) {
      .collaboration {
        padding: 4rem 1rem;
      }
  
      .section-title {
        font-size: 2.5rem;
      }
  
      .impact-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
  
      .network-visualization {
        height: 300px;
      }
  
      .partnership-grid {
        grid-template-columns: 1fr;
      }
  
      .timeline {
        grid-template-columns: 1fr;
      }
  
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
  
      .cta-primary,
      .cta-secondary {
        width: 100%;
        max-width: 300px;
      }
    }
  </style>