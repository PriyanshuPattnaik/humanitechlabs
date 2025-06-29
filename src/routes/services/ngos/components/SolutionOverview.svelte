<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let mounted = false;
    let activeCard = -1;
    
    onMount(() => {
      mounted = true;
    });
    
    const solutions = [
      {
        title: "Digital Foundation",
        description: "Build a strong digital presence with modern websites, mobile apps, and digital marketing strategies that effectively communicate your mission and engage supporters.",
        features: [
          "Professional website development",
          "Mobile app creation",
          "Brand identity & design",
          "Digital marketing campaigns"
        ],
        icon: `<path d="M12 2L2 7V10C2 16 6 20.88 12 22C18 20.88 22 16 22 10V7L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>`
      },
      {
        title: "Data & Analytics",
        description: "Transform raw data into actionable insights with advanced analytics, impact measurement systems, and donor management solutions that drive informed decision-making.",
        features: [
          "Impact measurement dashboards",
          "Donor analytics & CRM",
          "Operational efficiency tools",
          "Predictive analytics"
        ],
        icon: `<path d="M3 3V21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
      },
      {
        title: "Emerging Technologies",
        description: "Leverage cutting-edge technologies like AI, IoT, and blockchain to create innovative solutions that solve complex social challenges and scale your impact.",
        features: [
          "AI-powered automation",
          "IoT monitoring systems",
          "Blockchain transparency",
          "Voice & chatbot interfaces"
        ],
        icon: `<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5"/>`
      },
      {
        title: "Capacity Building",
        description: "Empower your team with the knowledge and skills needed to maintain and evolve your technology solutions through training, consulting, and ongoing support.",
        features: [
          "Technical training programs",
          "Digital strategy consulting",
          "24/7 technical support",
          "Knowledge transfer sessions"
        ],
        icon: `<path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
               <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>`
      }
    ];
  </script>
  
  <section class="solution-overview">
    <div class="container">
      <!-- Header Section -->
      {#if mounted}
        <div class="section-header" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
          <div class="section-badge">
            <span>Our Approach</span>
            <div class="badge-glow"></div>
          </div>
          <h2>360° Technology Solutions</h2>
          <p>From digital foundation to cutting-edge innovations, we provide comprehensive technology services that transform how NGOs operate and amplify their impact.</p>
        </div>
      {/if}
      
      <!-- Central Orbit Visualization -->
      {#if mounted}
        <div class="solution-visual" in:fade={{ duration: 1200, delay: 400 }}>
          <div class="solution-circle">
            <!-- Central Element -->
            <div class="center-element">
              <div class="center-icon">
                <div class="icon-glow"></div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
              <h3>Your Mission</h3>
              <div class="center-pulse"></div>
            </div>
            
            <!-- Orbiting Elements -->
            <div class="orbit orbit-1">
              {#each solutions as solution, index}
                <div 
                  class="orbit-item" 
                  style="--angle: {index * 90}deg; --delay: {index * 100}ms"
                  in:fly={{ y: 20, duration: 800, delay: 600 + index * 100 }}
                >
                  <div class="orbit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {@html solution.icon}
                    </svg>
                    <div class="orbit-glow"></div>
                  </div>
                  <span>{solution.title}</span>
                </div>
              {/each}
            </div>
            
            <!-- Animated Connections -->
            <div class="connection-lines">
              {#each Array(4) as _, i}
                <div class="connection-line" style="--rotation: {i * 90}deg; --delay: {i * 200}ms"></div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
      
      <!-- Solution Details Grid -->
      <div class="solution-details">
        {#each solutions as solution, index}
          {#if mounted}
            <div 
              class="detail-card"
              class:active={activeCard === index}
              on:mouseenter={() => activeCard = index}
              on:mouseleave={() => activeCard = -1}
              in:fly={{ y: 30, duration: 800, delay: 800 + index * 200 }}
            >
              <div class="card-header">
                <div class="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {@html solution.icon}
                  </svg>
                  <div class="icon-bg"></div>
                </div>
                <h3>{solution.title}</h3>
              </div>
              
              <p>{solution.description}</p>
              
              <ul class="feature-list">
                {#each solution.features as feature, featureIndex}
                  <li style="--feature-delay: {featureIndex * 50}ms">
                    <div class="feature-bullet"></div>
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>
              
              <div class="card-glow"></div>
            </div>
          {/if}
        {/each}
      </div>
      
      <!-- Research Focus Section -->
      {#if mounted}
        <div class="research-focus" in:fly={{ y: 50, duration: 1000, delay: 1400 }}>
          <div class="research-content">
            <div class="research-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 20L3 17V4L9 7L15 4L21 7V20L15 17L9 20Z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <div class="research-glow"></div>
            </div>
            
            <div class="research-text">
              <h3>Research & Development Focus</h3>
              <p>As a research institution, we don't just implement existing solutions—we innovate. Our team continuously explores emerging technologies and develops custom solutions tailored to the unique challenges faced by NGOs.</p>
              
              <div class="research-highlights">
                {#each ['Custom technology development', 'Emerging tech integration', 'Continuous innovation'] as highlight, index}
                  <div class="highlight" style="--highlight-delay: {index * 100}ms">
                    <div class="highlight-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <span>{highlight}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          
          <div class="research-bg-glow"></div>
        </div>
      {/if}
    </div>
  </section>
  
  <style>
    :global(body) {
      --primary-gradient: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      --glass-bg: rgba(255, 255, 255, 0.08);
      --glass-border: rgba(255, 255, 255, 0.12);
      --glass-hover: rgba(255, 255, 255, 0.12);
      --text-primary: #ffffff;
      --text-secondary: rgba(255, 255, 255, 0.7);
      --text-muted: rgba(255, 255, 255, 0.5);
      --accent-glow: rgba(255, 255, 255, 0.2);
    }
  
    .solution-overview {
      padding: 120px 0 140px;
      background: var(--primary-gradient);
      position: relative;
      overflow: hidden;
    }
  
    .solution-overview::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }
  
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }
  
    /* Header Styles */
    .section-header {
      text-align: center;
      margin-bottom: 100px;
    }
  
    .section-badge {
      position: relative;
      display: inline-block;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      padding: 12px 24px;
      border-radius: 50px;
      margin-bottom: 32px;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      backdrop-filter: blur(20px);
      overflow: hidden;
    }
  
    .badge-glow {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      animation: badge-shimmer 3s infinite;
    }
  
    @keyframes badge-shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  
    h2 {
      font-size: clamp(36px, 5vw, 56px);
      font-weight: 800;
      margin-bottom: 24px;
      color: var(--text-primary);
      background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  
    .section-header p {
      font-size: 18px;
      color: var(--text-secondary);
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.7;
    }
  
    /* Solution Visual */
    .solution-visual {
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
    }
  
    .solution-circle {
      position: relative;
      width: 450px;
      height: 450px;
    }
  
    .center-element {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 10;
    }
  
    .center-icon {
      position: relative;
      width: 100px;
      height: 100px;
      background: var(--glass-bg);
      border: 2px solid var(--glass-border);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: var(--text-primary);
      backdrop-filter: blur(20px);
      overflow: hidden;
    }
  
    .icon-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      animation: pulse-glow 2s ease-in-out infinite;
    }
  
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
      50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
    }
  
    .center-pulse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: pulse-ring 3s ease-out infinite;
    }
  
    @keyframes pulse-ring {
      0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
    }
  
    .center-element h3 {
      font-size: 20px;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }
  
    .orbit {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid var(--glass-border);
      border-radius: 50%;
      animation: rotate 30s linear infinite;
    }
  
    @keyframes rotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
  
    .orbit-1 {
      width: 340px;
      height: 340px;
    }
  
    .orbit-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-170px) rotate(calc(-1 * var(--angle)));
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
      animation: float 3s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  
    @keyframes float {
      0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-170px) rotate(calc(-1 * var(--angle))) translateY(0px); }
      50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-170px) rotate(calc(-1 * var(--angle))) translateY(-5px); }
    }
  
    .orbit-icon {
      position: relative;
      width: 56px;
      height: 56px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      backdrop-filter: blur(20px);
      transition: all 0.3s ease;
      overflow: hidden;
    }
  
    .orbit-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      border-radius: 16px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  
    .orbit-icon:hover .orbit-glow {
      opacity: 1;
    }
  
    .orbit-item span {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      white-space: nowrap;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
  
    .connection-lines {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
  
    .connection-line {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 80px;
      background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
      transform: translate(-50%, -50%) rotate(var(--rotation));
      animation: connection-pulse 2s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  
    @keyframes connection-pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
  
    /* Solution Details */
    .solution-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
      margin-bottom: 100px;
    }
  
    .detail-card {
      position: relative;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      padding: 40px 32px;
      border-radius: 24px;
      backdrop-filter: blur(20px);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      overflow: hidden;
    }
  
    .detail-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  
    .detail-card:hover::before {
      opacity: 1;
    }
  
    .detail-card:hover {
      transform: translateY(-12px);
      background: var(--glass-hover);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  
    .card-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
  
    .card-icon {
      position: relative;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
    }
  
    .icon-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--glass-bg);
      border-radius: 12px;
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(10px);
    }
  
    .detail-card h3 {
      font-size: 24px;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }
  
    .detail-card p {
      font-size: 16px;
      color: var(--text-secondary);
      margin-bottom: 28px;
      line-height: 1.7;
    }
  
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .feature-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
      color: var(--text-secondary);
      font-weight: 500;
      opacity: 0;
      animation: fade-in-up 0.6s ease forwards;
      animation-delay: var(--feature-delay);
    }
  
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .feature-bullet {
      width: 6px;
      height: 6px;
      background: var(--text-primary);
      border-radius: 50%;
      flex-shrink: 0;
    }
  
    .card-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
  
    .detail-card:hover .card-glow {
      opacity: 1;
    }
  
    /* Research Focus */
    .research-focus {
      position: relative;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      padding: 56px 48px;
      border-radius: 32px;
      backdrop-filter: blur(20px);
      overflow: hidden;
    }
  
    .research-content {
      display: flex;
      align-items: center;
      gap: 40px;
      position: relative;
      z-index: 2;
    }
  
    .research-icon {
      position: relative;
      width: 96px;
      height: 96px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      flex-shrink: 0;
      backdrop-filter: blur(20px);
    }
  
    .research-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      animation: research-pulse 2.5s ease-in-out infinite;
    }
  
    @keyframes research-pulse {
      0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
      50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    }
  
    .research-text h3 {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 20px;
      color: var(--text-primary);
      background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  
    .research-text p {
      font-size: 17px;
      color: var(--text-secondary);
      margin-bottom: 32px;
      line-height: 1.7;
    }
  
    .research-highlights {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
    }
  
    .highlight {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 15px;
      opacity: 0;
      animation: highlight-fade-in 0.8s ease forwards;
      animation-delay: var(--highlight-delay);
    }
  
    @keyframes highlight-fade-in {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  
    .highlight-icon {
      width: 24px;
      height: 24px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      backdrop-filter: blur(10px);
    }
  
    .research-bg-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  
    /* Responsive Design */
    @media (max-width: 1024px) {
      .solution-overview {
        padding: 80px 0 100px;
      }
  
      .section-header {
        margin-bottom: 80px;
      }
  
      .solution-circle {
        width: 350px;
        height: 350px;
      }
  
      .orbit-1 {
        width: 280px;
        height: 280px;
      }
  
      .orbit-item {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-140px) rotate(calc(-1 * var(--angle)));
      }
  
      @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-140px) rotate(calc(-1 * var(--angle))) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-140px) rotate(calc(-1 * var(--angle))) translateY(-5px); }
      }
  
      .solution-details {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
      }
  
      .research-content {
        flex-direction: column;
        text-align: center;
        gap: 32px;
      }
  
      .research-highlights {
        justify-content: center;
      }
    }
  
    @media (max-width: 768px) {
      .solution-overview {
        padding: 60px 0 80px;
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
  
      .solution-visual {
        margin-bottom: 60px;
      }
  
      .solution-circle {
        width: 280px;
        height: 280px;
      }
  
      .orbit-1 {
        width: 220px;
        height: 220px;
      }
  
      .orbit-item {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-110px) rotate(calc(-1 * var(--angle)));
      }
  
      @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-110px) rotate(calc(-1 * var(--angle))) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-110px) rotate(calc(-1 * var(--angle))) translateY(-5px); }
      }
  
      .center-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 16px;
      }
  
      .center-element h3 {
        font-size: 18px;
      }
  
      .orbit-icon {
        width: 48px;
        height: 48px;
      }
  
      .orbit-item span {
        font-size: 11px;
      }
  
      .solution-details {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 60px;
      }
  
      .detail-card {
        padding: 32px 24px;
      }
  
      .card-header {
        gap: 12px;
        margin-bottom: 16px;
      }
  
      .card-icon {
        width: 40px;
        height: 40px;
      }
  
      .detail-card h3 {
        font-size: 20px;
      }
  
      .detail-card p {
        font-size: 15px;
        margin-bottom: 20px;
      }
  
      .feature-list li {
        font-size: 14px;
        padding: 6px 0;
      }
  
      .research-focus {
        padding: 40px 28px;
      }
  
      .research-content {
        gap: 24px;
      }
  
      .research-icon {
        width: 80px;
        height: 80px;
      }
  
      .research-text h3 {
        font-size: 24px;
        margin-bottom: 16px;
      }
  
      .research-text p {
        font-size: 15px;
        margin-bottom: 24px;
      }
  
      .research-highlights {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
  
      .highlight {
        font-size: 14px;
      }
  
      .highlight-icon {
        width: 20px;
        height: 20px;
      }
    }
  
    @media (max-width: 480px) {
      .solution-overview {
        padding: 40px 0 60px;
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
  
      .solution-visual {
        margin-bottom: 40px;
      }
  
      .solution-circle {
        width: 240px;
        height: 240px;
      }
  
      .orbit-1 {
        width: 180px;
        height: 180px;
      }
  
      .orbit-item {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-90px) rotate(calc(-1 * var(--angle)));
      }
  
      @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-90px) rotate(calc(-1 * var(--angle))) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-90px) rotate(calc(-1 * var(--angle))) translateY(-5px); }
      }
  
      .center-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 12px;
      }
  
      .center-element h3 {
        font-size: 16px;
      }
  
      .orbit-icon {
        width: 40px;
        height: 40px;
      }
  
      .orbit-item span {
        font-size: 10px;
      }
  
      .solution-details {
        gap: 16px;
        margin-bottom: 40px;
      }
  
      .detail-card {
        padding: 24px 20px;
      }
  
      .card-header {
        gap: 10px;
        margin-bottom: 12px;
      }
  
      .card-icon {
        width: 36px;
        height: 36px;
      }
  
      .detail-card h3 {
        font-size: 18px;
      }
  
      .detail-card p {
        font-size: 14px;
        margin-bottom: 16px;
      }
  
      .feature-list li {
        font-size: 13px;
        padding: 4px 0;
      }
  
      .research-focus {
        padding: 32px 20px;
      }
  
      .research-content {
        gap: 20px;
      }
  
      .research-icon {
        width: 64px;
        height: 64px;
      }
  
      .research-text h3 {
        font-size: 20px;
        margin-bottom: 12px;
      }
  
      .research-text p {
        font-size: 14px;
        margin-bottom: 20px;
      }
  
      .research-highlights {
        gap: 12px;
      }
  
      .highlight {
        font-size: 13px;
      }
  
      .highlight-icon {
        width: 18px;
        height: 18px;
      }
    }
  
    @media (max-width: 360px) {
      .solution-overview {
        padding: 30px 0 40px;
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
  
      .solution-circle {
        width: 200px;
        height: 200px;
      }
  
      .orbit-1 {
        width: 150px;
        height: 150px;
      }
  
      .orbit-item {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-75px) rotate(calc(-1 * var(--angle)));
      }
  
      @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-75px) rotate(calc(-1 * var(--angle))) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-75px) rotate(calc(-1 * var(--angle))) translateY(-5px); }
      }
  
      .center-icon {
        width: 56px;
        height: 56px;
      }
  
      .center-element h3 {
        font-size: 14px;
      }
  
      .orbit-icon {
        width: 32px;
        height: 32px;
      }
  
      .orbit-item span {
        font-size: 9px;
      }
  
      .detail-card {
        padding: 20px 16px;
      }
  
      .card-icon {
        width: 32px;
        height: 32px;
      }
  
      .detail-card h3 {
        font-size: 16px;
      }
  
      .detail-card p {
        font-size: 13px;
      }
  
      .feature-list li {
        font-size: 12px;
      }
  
      .research-focus {
        padding: 24px 16px;
      }
  
      .research-icon {
        width: 56px;
        height: 56px;
      }
  
      .research-text h3 {
        font-size: 18px;
      }
  
      .research-text p {
        font-size: 13px;
      }
  
      .highlight {
        font-size: 12px;
      }
  
      .highlight-icon {
        width: 16px;
        height: 16px;
      }
    }
  </style>