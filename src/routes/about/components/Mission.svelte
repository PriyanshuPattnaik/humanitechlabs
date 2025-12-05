<script lang="ts">
  import { onMount } from 'svelte';
  import { Target, Eye, Sparkles, Code2, Heart, Zap } from 'lucide-svelte';
  
  let mounted = false;
  let activeCard = 0;
  
  onMount(() => {
    mounted = true;
  });

  function setActive(index: number) {
    activeCard = index;
  }
</script>

<section class="mission-section" id="mission">
  <!-- Animated Background -->
  <div class="bg-animation">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="grid-overlay"></div>
  </div>

  <div class="container">
    <!-- Mission & Vision - Overlapping Cards -->
    <div class="mv-container" class:visible={mounted}>
      <div class="mv-cards">
        <!-- Mission Card -->
        <div 
          class="mv-card mission-card" 
          class:active={activeCard === 0}
          on:mouseenter={() => setActive(0)}
          on:focus={() => setActive(0)}
          role="button"
          tabindex="0"
        >
          <div class="card-bg"></div>
          <div class="card-shine"></div>
          
          <div class="card-header">
            <div class="icon-box">
              <Target size={40} strokeWidth={1.5} />
            </div>
            <div class="card-label">01</div>
          </div>
          
          <h2 class="card-title">Our Mission</h2>
          <p class="card-text">
            To build technology that bridges gaps—between communities and opportunities, 
            problems and solutions, today's challenges and tomorrow's possibilities.
          </p>
          
          <div class="card-footer">
            <div class="footer-line"></div>
            <span class="footer-text">Empowering Through Innovation</span>
          </div>
        </div>

        <!-- Vision Card -->
        <div 
          class="mv-card vision-card" 
          class:active={activeCard === 1}
          on:mouseenter={() => setActive(1)}
          on:focus={() => setActive(1)}
          role="button"
          tabindex="0"
        >
          <div class="card-bg"></div>
          <div class="card-shine"></div>
          
          <div class="card-header">
            <div class="icon-box">
              <Eye size={40} strokeWidth={1.5} />
            </div>
            <div class="card-label">02</div>
          </div>
          
          <h2 class="card-title">Our Vision</h2>
          <p class="card-text">
            A world where technology feels accessible and human. Where innovation 
            serves everyone, not just the privileged few. Where breakthroughs are kinder.
          </p>
          
          <div class="card-footer">
            <div class="footer-line"></div>
            <span class="footer-text">Technology for Humanity</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Values - Modern Grid -->
    <div class="values-container" class:visible={mounted}>
      <div class="values-header">
        <div class="header-icon">
          <Sparkles size={28} />
        </div>
        <h2 class="values-title">What We Stand For</h2>
        <p class="values-subtitle">Core principles driving our innovation</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-number">01</div>
          <div class="value-icon">
            <Heart size={32} strokeWidth={1.5} />
          </div>
          <h3 class="value-title">Human-First</h3>
          <p class="value-desc">Technology that amplifies human potential, not replaces it</p>
          <div class="value-glow"></div>
        </div>

        <div class="value-card">
          <div class="value-number">02</div>
          <div class="value-icon">
            <Code2 size={32} strokeWidth={1.5} />
          </div>
          <h3 class="value-title">Open Source</h3>
          <p class="value-desc">Transparency and collaboration in everything we build</p>
          <div class="value-glow"></div>
        </div>

        <div class="value-card">
          <div class="value-number">03</div>
          <div class="value-icon">
            <Zap size={32} strokeWidth={1.5} />
          </div>
          <h3 class="value-title">Impact Driven</h3>
          <p class="value-desc">Real solutions for real problems, no buzzwords</p>
          <div class="value-glow"></div>
        </div>

        <div class="value-card">
          <div class="value-number">04</div>
          <div class="value-icon">
            <Sparkles size={32} strokeWidth={1.5} />
          </div>
          <h3 class="value-title">Community Built</h3>
          <p class="value-desc">Building with people, not just for them</p>
          <div class="value-glow"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .mission-section {
    position: relative;
    min-height: 100vh;
    padding: 10rem 0;
    background: #000000;
    overflow: hidden;
  }

  /* Animated Background */
  .bg-animation {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.15;
    animation: float-orb 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
    bottom: -150px;
    left: -150px;
    animation-delay: 7s;
  }

  .orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 14s;
  }

  @keyframes float-orb {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(50px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-50px, 50px) scale(0.9);
    }
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 80%);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  /* Mission & Vision Cards */
  .mv-container {
    margin-bottom: 12rem;
    opacity: 0;
    transform: translateY(60px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .mv-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .mv-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .mv-card {
    position: relative;
    padding: 4rem;
    min-height: 550px;
    border-radius: 32px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
  }

  .card-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 32px;
    transition: all 0.6s ease;
  }

  .mv-card.active .card-bg {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .mv-card.active {
    transform: translateY(-20px) scale(1.02);
  }

  .card-shine {
    position: absolute;
    inset: 0;
    border-radius: 32px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .mv-card.active .card-shine {
    opacity: 1;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .icon-box {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    transition: all 0.4s ease;
  }

  .mv-card.active .icon-box {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  .card-label {
    font-size: 5rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.03);
    line-height: 1;
    font-family: 'JetBrains Mono', monospace;
  }

  .card-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
    position: relative;
    z-index: 1;
  }

  .card-text {
    font-size: 1.3rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.75);
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .mv-card.active .card-text {
    color: rgba(255, 255, 255, 0.9);
  }

  .card-footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    position: relative;
    z-index: 1;
  }

  .footer-line {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
    transition: width 0.4s ease;
  }

  .mv-card.active .footer-line {
    width: 100px;
  }

  .footer-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Values Section */
  .values-container {
    opacity: 0;
    transform: translateY(60px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
  }

  .values-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .values-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .header-icon {
    display: inline-flex;
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-bottom: 2rem;
  }

  .values-title {
    font-size: 4rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }

  .values-subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .value-card {
    position: relative;
    padding: 3rem 2rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .value-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-12px);
  }

  .value-number {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.03);
    font-family: 'JetBrains Mono', monospace;
    line-height: 1;
  }

  .value-icon {
    width: 72px;
    height: 72px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .value-card:hover .value-icon {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) rotate(5deg);
  }

  .value-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .value-desc {
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .value-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .value-card:hover .value-glow {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 968px) {
    .mission-section {
      padding: 6rem 0;
    }

    .mv-cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .mv-card {
      padding: 3rem 2rem;
      min-height: 450px;
    }

    .card-title {
      font-size: 2.5rem;
    }

    .card-text {
      font-size: 1.15rem;
    }

    .values-title {
      font-size: 3rem;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .mission-section {
      padding: 5rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .mv-container {
      margin-bottom: 8rem;
    }

    .mv-card {
      padding: 2.5rem 2rem;
      min-height: 400px;
    }

    .icon-box {
      width: 64px;
      height: 64px;
    }

    .card-label {
      font-size: 3.5rem;
    }

    .card-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .card-text {
      font-size: 1.05rem;
    }

    .values-header {
      margin-bottom: 3rem;
    }

    .values-title {
      font-size: 2.5rem;
    }

    .values-subtitle {
      font-size: 1.1rem;
    }

    .value-card {
      padding: 2.5rem 2rem;
    }

    .value-icon {
      width: 64px;
      height: 64px;
    }

    .value-title {
      font-size: 1.3rem;
    }

    .value-desc {
      font-size: 1rem;
    }
  }
</style>
