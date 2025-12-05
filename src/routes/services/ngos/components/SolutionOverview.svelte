<script lang="ts">
  import { onMount } from 'svelte';
  import { Target, Lightbulb, Rocket } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="solution-overview">
  <div class="container">
    {#if mounted}
      <div class="content-wrapper">
        <div class="text-content">
          <h2>Our Approach</h2>
          <p class="lead">
            We believe technology should be a force multiplier for social good, not a barrier. 
            That's why we're developing a comprehensive service model specifically designed for NGOs.
          </p>
          
          <div class="principles">
            <div class="principle">
              <div class="principle-icon">
                <Target size={24} />
              </div>
              <div class="principle-content">
                <h3>Mission-Aligned</h3>
                <p>Every solution is designed with your organization's unique mission and impact goals in mind.</p>
              </div>
            </div>
            
            <div class="principle">
              <div class="principle-icon">
                <Lightbulb size={24} />
              </div>
              <div class="principle-content">
                <h3>Research-Driven</h3>
                <p>We leverage our research in humanitarian technology to build solutions that truly work.</p>
              </div>
            </div>
            
            <div class="principle">
              <div class="principle-icon">
                <Rocket size={24} />
              </div>
              <div class="principle-content">
                <h3>Sustainable</h3>
                <p>We focus on building capacity within your team for long-term technology sustainability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .solution-overview {
    padding: 100px 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .lead {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 3rem;
  }

  .principles {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .principle {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .principle:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(8px);
  }

  .principle-icon {
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .principle-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .principle-content p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    .solution-overview {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .principle {
      flex-direction: column;
      padding: 1.5rem;
    }

    .principle:hover {
      transform: translateY(-4px);
    }
  }
</style>
