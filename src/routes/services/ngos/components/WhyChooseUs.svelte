<script lang="ts">
  import { onMount } from 'svelte';
  import { BookOpen, Users2, Zap, Shield } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="why-choose-us">
  <div class="container">
    {#if mounted}
      <div class="section-header">
        <h2>Why Work With Us</h2>
        <p>
          We bring a unique combination of technical expertise, research-driven insights, 
          and genuine commitment to social impact.
        </p>
      </div>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">
            <BookOpen size={32} />
          </div>
          <h3>Research-Backed</h3>
          <p>
            Our solutions are informed by ongoing research in humanitarian technology 
            and real-world insights from the non-profit sector.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">
            <Users2 size={32} />
          </div>
          <h3>Sector Understanding</h3>
          <p>
            We understand the unique challenges NGOs face—from limited budgets to 
            complex stakeholder needs and impact measurement.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">
            <Zap size={32} />
          </div>
          <h3>Modern Technology</h3>
          <p>
            We use cutting-edge technologies and best practices to build solutions 
            that are fast, secure, and built to scale.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">
            <Shield size={32} />
          </div>
          <h3>Long-Term Support</h3>
          <p>
            We're committed to your success beyond launch, providing ongoing support, 
            training, and capacity building for your team.
          </p>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .why-choose-us {
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

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .benefit-card {
    padding: 2.5rem;
    background: white;
    border-radius: 16px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #d0d0d0;
  }

  .benefit-icon {
    width: 64px;
    height: 64px;
    background: #f5f5f5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .benefit-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }

  .benefit-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 768px) {
    .why-choose-us {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .benefit-card {
      padding: 2rem;
    }
  }
</style>
