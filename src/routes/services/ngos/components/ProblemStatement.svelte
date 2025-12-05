<script lang="ts">
  import { onMount } from 'svelte';
  import { TrendingDown, DollarSign, BarChart3, Users } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="problem-statement" id="vision">
  <div class="container">
    {#if mounted}
      <div class="section-header">
        <h2>The Digital Divide in Non-Profits</h2>
        <p>
          While technology has transformed every sector, many NGOs still face significant barriers 
          in accessing the digital tools they need to maximize their impact.
        </p>
      </div>
      
      <div class="challenges-grid">
        <div class="challenge-card">
          <div class="icon-wrapper">
            <TrendingDown size={32} />
          </div>
          <h3>Limited Digital Presence</h3>
          <p>
            Many organizations struggle with outdated websites and poor user experience, 
            limiting their ability to reach supporters and beneficiaries effectively.
          </p>
        </div>
        
        <div class="challenge-card">
          <div class="icon-wrapper">
            <DollarSign size={32} />
          </div>
          <h3>Budget Constraints</h3>
          <p>
            Traditional development agencies charge premium rates that are often beyond reach, 
            forcing difficult choices between technology and program funding.
          </p>
        </div>
        
        <div class="challenge-card">
          <div class="icon-wrapper">
            <BarChart3 size={32} />
          </div>
          <h3>Data Challenges</h3>
          <p>
            Manual processes and scattered data prevent organizations from making informed 
            decisions and demonstrating impact to stakeholders.
          </p>
        </div>
        
        <div class="challenge-card">
          <div class="icon-wrapper">
            <Users size={32} />
          </div>
          <h3>Skills Gap</h3>
          <p>
            Limited technical expertise creates dependency on external vendors and prevents 
            sustainable technology adoption and maintenance.
          </p>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .problem-statement {
    padding: 100px 0;
    background: #ffffff;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
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

  .challenges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .challenge-card {
    padding: 2rem;
    background: #fafafa;
    border-radius: 16px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
  }

  .challenge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #d0d0d0;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
    border: 1px solid #e5e5e5;
  }

  .challenge-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }

  .challenge-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 768px) {
    .problem-statement {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .challenges-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
