<script lang="ts">
  import { onMount } from 'svelte';
  import { Heart, Scale, Handshake } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="pricing-philosophy">
  <div class="container">
    {#if mounted}
      <div class="content-wrapper">
        <h2>Our Pricing Philosophy</h2>
        <p class="lead">
          We're committed to making technology accessible to organizations doing important work. 
          Our pricing model is designed to be fair, transparent, and aligned with the non-profit sector.
        </p>
        
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="card-icon">
              <Heart size={28} />
            </div>
            <h3>Mission-First</h3>
            <p>
              We believe in supporting organizations that are making a real difference. 
              Our pricing reflects this commitment to social impact.
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-icon">
              <Scale size={28} />
            </div>
            <h3>Fair & Transparent</h3>
            <p>
              No hidden fees, no surprises. We provide clear pricing that respects 
              your budget constraints and funding realities.
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-icon">
              <Handshake size={28} />
            </div>
            <h3>Long-Term Partnership</h3>
            <p>
              We're not just vendors—we're partners in your mission. Our goal is to 
              build lasting relationships that grow with your organization.
            </p>
          </div>
        </div>
        
        <div class="note">
          <p>
            <strong>Note:</strong> We're currently finalizing our service offerings and pricing structure. 
            Join our waitlist to be among the first to know when we launch.
          </p>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .pricing-philosophy {
    padding: 100px 0;
    background: white;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-wrapper {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #666;
    margin-bottom: 3rem;
  }

  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .philosophy-card {
    padding: 2rem;
    background: #fafafa;
    border-radius: 16px;
    border: 1px solid #e5e5e5;
    text-align: center;
    transition: all 0.3s ease;
  }

  .philosophy-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  .card-icon {
    width: 64px;
    height: 64px;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: #0a0a0a;
    border: 1px solid #e5e5e5;
  }

  .philosophy-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }

  .philosophy-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }

  .note {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 12px;
    border-left: 4px solid #0a0a0a;
    text-align: left;
  }

  .note p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
  }

  .note strong {
    color: #0a0a0a;
  }

  @media (max-width: 768px) {
    .pricing-philosophy {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .philosophy-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
