<script lang="ts">
  import { onMount } from 'svelte';
  import { Globe, Database, Cpu, GraduationCap } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="services-grid">
  <div class="container">
    {#if mounted}
      <div class="section-header">
        <h2>Service Areas We're Developing</h2>
        <p>
          Our comprehensive approach covers the full spectrum of technology needs for modern non-profits.
        </p>
      </div>
      
      <div class="services-container">
        <div class="service-card">
          <div class="service-icon">
            <Globe size={36} />
          </div>
          <h3>Digital Foundation</h3>
          <p class="service-description">
            Modern web and mobile solutions that help you reach and engage your community effectively.
          </p>
          <ul class="service-features">
            <li>Responsive Web Development</li>
            <li>Brand Identity & Design</li>
            <li>Digital Marketing Strategy</li>
            <li>SEO & Performance</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <Database size={36} />
          </div>
          <h3>Data & Analytics</h3>
          <p class="service-description">
            Transform your data into actionable insights that drive better decision-making.
          </p>
          <ul class="service-features">
            <li>Impact Measurement Systems</li>
            <li>Donor Management & CRM</li>
            <li>Operational Dashboards</li>
            <li>Reporting Automation</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <Cpu size={36} />
          </div>
          <h3>Emerging Technologies</h3>
          <p class="service-description">
            Leverage cutting-edge technologies to amplify your mission impact.
          </p>
          <ul class="service-features">
            <li>AI & Machine Learning</li>
            <li>IoT Applications</li>
            <li>Blockchain Solutions</li>
            <li>Chatbot Interfaces</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <GraduationCap size={36} />
          </div>
          <h3>Capacity Building</h3>
          <p class="service-description">
            Empower your team with the knowledge and skills for long-term success.
          </p>
          <ul class="service-features">
            <li>Technology Training</li>
            <li>Digital Strategy Consulting</li>
            <li>Technical Support</li>
            <li>Knowledge Transfer</li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .services-grid {
    padding: 100px 0;
    background: #fafafa;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .section-header p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #666;
  }

  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .service-card {
    padding: 2.5rem;
    background: white;
    border-radius: 16px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #d0d0d0;
  }

  .service-icon {
    width: 72px;
    height: 72px;
    background: #f5f5f5;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .service-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }

  .service-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1.5rem;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .service-features li {
    font-size: 0.95rem;
    color: #666;
    padding-left: 1.5rem;
    position: relative;
  }

  .service-features li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #0a0a0a;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .services-grid {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .services-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 2rem;
    }
  }
</style>
