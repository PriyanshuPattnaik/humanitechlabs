<script lang="ts">
    import { onMount } from 'svelte';
    
    let sectionElement: HTMLElement;
    let mounted = false;
  
    onMount(() => {
      mounted = true;
    });
  </script>
  
  <section bind:this={sectionElement} class="culture-section" class:mounted>
    <div class="background-gradient"></div>
    <div class="floating-elements">
      <div class="float-orb orb-1"></div>
      <div class="float-orb orb-2"></div>
      <div class="float-orb orb-3"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="section-badge">
          <span class="badge-dot"></span>
          Our Culture
        </div>
        
        <h1 class="hero-title">
          Where <span class="highlight-text">passion</span> meets <span class="highlight-text">purpose</span>
        </h1>
        
        <p class="hero-description">
          We're not your typical tech company. We're a global collective of dreamers, builders, and changemakers—from ambitious high schoolers to seasoned professionals—all united by one mission: using technology to uplift humanity.
        </p>
      </div>
  
      <div class="culture-grid">
        <div class="culture-card primary-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">🌍</div>
            </div>
            <h3>Global. Remote. Connected.</h3>
          </div>
          <p>Our team spans continents and time zones, bringing diverse perspectives from every corner of the world. Whether you're joining us full-time or contributing your weekends and evenings, you're part of something bigger than geography.</p>
        </div>
  
        <div class="culture-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">🚀</div>
            </div>
            <h3>Age is Just a Number</h3>
          </div>
          <p>From brilliant high schoolers with fresh ideas to industry veterans with deep expertise—we believe great minds come in all ages. What matters is your passion to make a difference.</p>
        </div>
  
        <div class="culture-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">⚡</div>
            </div>
            <h3>Flexible by Design</h3>
          </div>
          <p>Life happens. Whether you're balancing studies, managing another job, or diving in full-time, we adapt to your rhythm while maintaining our commitment to excellence.</p>
        </div>
  
        <div class="culture-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">💡</div>
            </div>
            <h3>Innovation Without Ego</h3>
          </div>
          <p>The best ideas can come from anywhere—a weekend warrior, a midnight coder, or someone brand new to tech. We create space for every voice to be heard and every perspective to shine.</p>
        </div>
  
        <div class="culture-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">🤝</div>
            </div>
            <h3>Human-First Technology</h3>
          </div>
          <p>We don't build tech for tech's sake. Every line of code, every design decision, every strategy serves one purpose: creating a better world for real people with real needs.</p>
        </div>
  
        <div class="culture-card">
          <div class="card-header">
            <div class="icon-container">
              <div class="icon">✨</div>
            </div>
            <h3>Growth Through Impact</h3>
          </div>
          <p>Here, personal growth and global impact go hand in hand. As you help us solve humanity's challenges, we help you become the leader you're meant to be.</p>
        </div>
      </div>
  
      <div class="closing-statement">
        <div class="statement-card">
          <h2>Ready to shape the future?</h2>
          <p>Join a movement where your skills, passion, and time—however much you can give—contribute to something extraordinary. Because when human potential meets cutting-edge technology, magic happens.</p>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .culture-section {
      position: relative;
      min-height: 100vh;
      background: #0a0a0a;
      color: #ffffff;
      padding: 4rem 0;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease-out;
    }
  
    .culture-section.mounted {
      opacity: 1;
      transform: translateY(0);
    }
  
    .background-gradient {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 20% 30%, rgba(64, 64, 64, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(128, 128, 128, 0.2) 0%, transparent 50%),
                  linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
      z-index: 1;
    }
  
    .floating-elements {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }
  
    .float-orb {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      animation: float 8s ease-in-out infinite;
    }
  
    .orb-1 {
      width: 200px;
      height: 200px;
      top: 10%;
      left: -50px;
      animation-delay: 0s;
    }
  
    .orb-2 {
      width: 150px;
      height: 150px;
      top: 60%;
      right: -30px;
      animation-delay: 3s;
    }
  
    .orb-3 {
      width: 100px;
      height: 100px;
      bottom: 20%;
      left: 20%;
      animation-delay: 6s;
    }
  
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
  
    .container {
      position: relative;
      z-index: 3;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
  
    .hero-content {
      text-align: center;
      margin-bottom: 4rem;
    }
  
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 50px;
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 2rem;
      animation: glow 2s ease-in-out infinite alternate;
    }
  
    .badge-dot {
      width: 8px;
      height: 8px;
      background: #ffffff;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
  
    @keyframes glow {
      from { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
      to { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
    }
  
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }
  
    .highlight-text {
      background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
    }
  
    .highlight-text::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, #ffffff 50%, transparent 100%);
      opacity: 0.6;
    }
  
    .hero-description {
      font-size: 1.25rem;
      line-height: 1.6;
      color: #b0b0b0;
      max-width: 700px;
      margin: 0 auto;
      font-weight: 400;
    }
  
    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
  
    .culture-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      padding: 2rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
  
    .culture-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
    }
  
    .culture-card:hover {
      transform: translateY(-8px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  
    .primary-card {
      grid-column: span 2;
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
    }
  
    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  
    .icon-container {
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }
  
    .icon {
      font-size: 1.5rem;
    }
  
    .culture-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0;
      color: #ffffff;
    }
  
    .culture-card p {
      color: #b0b0b0;
      line-height: 1.6;
      margin: 0;
      font-size: 1rem;
    }
  
    .closing-statement {
      text-align: center;
    }
  
    .statement-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 3rem 2rem;
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }
  
    .statement-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%);
      pointer-events: none;
    }
  
    .statement-card h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  
    .statement-card p {
      font-size: 1.125rem;
      color: #b0b0b0;
      line-height: 1.6;
      margin: 0;
    }
  
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }
  
      .culture-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
  
      .primary-card {
        grid-column: span 1;
      }
  
      .culture-card {
        padding: 1.5rem;
      }
  
      .card-header {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
      }
  
      .icon-container {
        width: 50px;
        height: 50px;
      }
  
      .statement-card {
        padding: 2rem 1.5rem;
      }
    }
  
    @media (max-width: 480px) {
      .culture-section {
        padding: 2rem 0;
      }
  
      .hero-content {
        margin-bottom: 2rem;
      }
  
      .section-badge {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
  
      .culture-card {
        padding: 1.25rem;
      }
    }
  </style>