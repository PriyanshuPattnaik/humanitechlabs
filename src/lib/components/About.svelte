<script lang="ts">
  import { onMount } from 'svelte';
  import { Atom, Globe, Handshake } from 'lucide-svelte';
  import NotificationBanner from './NotificationBanner.svelte';
  
  let mounted = false;
  let scrollY = 0;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:window bind:scrollY />

<NotificationBanner />

<section class="about">
  <div class="about-background">
    <video class="background-video" autoplay loop muted playsinline>
      <source src="/images/aboutanimation.mp4" type="video/mp4">
    </video>
    <div class="gradient-overlay"></div>
  </div>
  
  <div class="container">
    <div class="hero-section" class:visible={mounted}>
      <div class="title-container">
        <h1 class="main-title">
          <span class="code-bracket">//</span> 
          BRIDGING 
          <span class="highlight">HUMANITY</span>
          <br>
          <span class="ampersand">&</span> 
          <span class="tech-text">TECHNOLOGY</span>
        </h1>
        <div class="subtitle-container">
          <p class="subtitle">INNOVATION WITH IMPACT</p>
          <div class="typing-indicator">
            <span class="cursor">|</span>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-section" class:visible={mounted}>
      <div class="stat-item">
        <div class="stat-number">20+</div>
        <div class="stat-label">Research Domains</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">Open Source</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">∞</div>
        <div class="stat-label">Potential Impact</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="main-content">
        <div class="intro-section">
          <h2 class="section-title">Our Mission</h2>
          <p class="lead-text">
            We architect <strong>ethical AI</strong>, <strong>scalable technology</strong>, and <strong>inclusive digital ecosystems</strong> to empower the next billion people. At Humanitech Labs, we transform breakthrough research into real-world solutions that address humanity's most pressing challenges.
          </p>
        </div>

        <div class="philosophy-section">
          <h3 class="philosophy-title">
            <span class="code-comment">/* Our Approach */</span>
          </h3>
          <p class="philosophy-text">
            Every algorithm we develop, every system we build, and every innovation we create is designed with one principle: <em>technology should amplify human potential, not replace it</em>. We operate at the intersection of cutting-edge research and social impact, ensuring our work creates lasting positive change.
          </p>
          
          <div class="approach-grid">
            <div class="approach-item">
              <div class="approach-icon">
                <Atom size={32} />
              </div>
              <h4>Research-Driven</h4>
              <p>Groundbreaking research in AI, IoT, blockchain, and emerging technologies</p>
            </div>
            <div class="approach-item">
              <div class="approach-icon">
                <Globe size={32} />
              </div>
              <h4>Impact-Focused</h4>
              <p>Solutions addressing healthcare, education, climate, and social equity</p>
            </div>
            <div class="approach-item">
              <div class="approach-icon">
                <Handshake size={32} />
              </div>
              <h4>Collaborative</h4>
              <p>Open-source development with global research institutions and NGOs</p>
            </div>
          </div>
        </div>

        <div class="domains-preview">
          <h3 class="domains-title">Impact Domains</h3>
          <div class="domain-tags">
            <span class="domain-tag">Healthcare AI</span>
            <span class="domain-tag">AgriTech</span>
            <span class="domain-tag">Climate Solutions</span>
            <span class="domain-tag">Education Tech</span>
            <span class="domain-tag">Accessibility</span>
            <span class="domain-tag">Financial Inclusion</span>
            <span class="domain-tag">Disaster Management</span>
            <span class="domain-tag">Space Tech</span>
          </div>
        </div>
      </div>

      <div class="mission-sidebar">
        <div class="mission-points">
          <div class="point-group">
            <div class="point" data-number="01">
              <h4>RESEARCH</h4>
              <p>Pushing boundaries in ethical AI and emerging technologies</p>
            </div>
            <div class="point" data-number="02">
              <h4>INNOVATE</h4>
              <p>Building scalable solutions for real-world challenges</p>
            </div>
            <div class="point" data-number="03">
              <h4>IMPACT</h4>
              <p>Empowering communities through technology for good</p>
            </div>
          </div>
        </div>

        <div class="cta-sidebar">
          <div class="cta-content">
            <h4>Ready to Build Impact?</h4>
            <p>Join us in creating technology that matters</p>
            <a href="/join-us" class="cta-button">
              <span>Collaborate with Us</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    min-height: 100vh;
    background: linear-gradient(135deg, #000000, #1a1a1a);
    color: white;
    position: relative;
    overflow: hidden;
    padding: 6rem 2rem;
  }

  .about-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    mix-blend-mode: luminosity;
    filter: contrast(1.2) brightness(0.8);
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.95) 100%);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-section {
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }

  .hero-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .title-container {
    position: relative;
  }

  .main-title {
    font-size: clamp(3rem, 5vw, 6rem);
    font-weight: 900;
    line-height: 0.9;
    margin: 0;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .code-bracket {
    color: #808080;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8em;
  }

  .highlight {
    background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ampersand {
    color: #808080;
    font-style: italic;
    font-size: 0.9em;
  }

  .tech-text {
    background: linear-gradient(135deg, #ffffff 0%, #808080 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #808080;
    margin: 0;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .typing-indicator {
    display: flex;
    align-items: center;
  }

  .cursor {
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 6rem;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease 0.3s;
  }

  .stats-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #808080;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .main-content {
    max-width: 800px;
  }

  .section-title {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .lead-text {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 3rem;
    color: #B0B0B0;
  }

  .lead-text strong {
    color: #ffffff;
    font-weight: 600;
  }

  .philosophy-section {
    margin-bottom: 3rem;
  }

  .philosophy-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #808080;
    margin-bottom: 1.5rem;
  }

  .code-comment {
    color: #808080;
  }

  .philosophy-text {
    font-size: 1rem;
    line-height: 1.7;
    color: #A0A0A0;
    margin-bottom: 2rem;
  }

  .philosophy-text em {
    color: #ffffff;
    font-style: italic;
  }

  .approach-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .approach-item {
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .approach-item:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
  }

  .approach-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .approach-item h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .approach-item p {
    color: #808080;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
  }

  .domains-preview {
    margin-top: 3rem;
  }

  .domains-title {
    font-size: 1.25rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .domain-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .domain-tag {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #C0C0C0;
    transition: all 0.3s ease;
  }

  .domain-tag:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: scale(1.05);
  }

  .mission-sidebar {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .point-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .point {
    position: relative;
    padding: 1.5rem;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .point::before {
    content: attr(data-number);
    position: absolute;
    left: -1rem;
    top: 1rem;
    width: 2rem;
    height: 2rem;
    background: #000000;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
    color: #ffffff;
  }

  .point:hover {
    border-left-color: #ffffff;
    transform: translateX(10px);
  }

  .point:hover::before {
    border-color: #ffffff;
    background: #ffffff;
    color: #000000;
  }

  .point h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }

  .point p {
    font-size: 0.875rem;
    color: #808080;
    line-height: 1.5;
    margin: 0;
  }

  .cta-sidebar {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
  }

  .cta-content h4 {
    color: #ffffff;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .cta-content p {
    color: #A0A0A0;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .cta-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%);
    color: #000000;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }

  .arrow {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  .cta-button:hover .arrow {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    .about {
      padding: 4rem 1.5rem;
    }

    .main-title {
      font-size: 3rem;
      line-height: 1;
    }

    .content-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .stats-section {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .approach-grid {
      grid-template-columns: 1fr;
    }

    .mission-sidebar {
      order: -1;
    }

    .point {
      padding: 1rem;
      border-left: none;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
      padding-top: 2rem;
    }

    .point::before {
      left: 0;
      top: -1rem;
    }

    .point:hover {
      transform: translateY(-5px);
    }
  }
</style>