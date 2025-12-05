<script lang="ts">
  import { onMount } from 'svelte';
  import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="process-timeline">
  <div class="container">
    {#if mounted}
      <div class="section-header">
        <h2>Our Process</h2>
        <p>
          A collaborative approach that puts your mission at the center of everything we build.
        </p>
      </div>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker">
            <MessageSquare size={24} />
          </div>
          <div class="timeline-content">
            <h3>Discovery</h3>
            <p>
              We start by understanding your organization, mission, challenges, and goals. 
              This helps us tailor solutions that truly fit your needs.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker">
            <Lightbulb size={24} />
          </div>
          <div class="timeline-content">
            <h3>Strategy</h3>
            <p>
              Together, we develop a comprehensive technology strategy aligned with your 
              mission and resources, prioritizing what matters most.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker">
            <Code size={24} />
          </div>
          <div class="timeline-content">
            <h3>Development</h3>
            <p>
              Our team builds your solution using modern technologies and best practices, 
              keeping you involved throughout the process.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker">
            <Rocket size={24} />
          </div>
          <div class="timeline-content">
            <h3>Launch & Support</h3>
            <p>
              We ensure a smooth launch and provide ongoing support, training, and 
              maintenance to help you succeed long-term.
            </p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .process-timeline {
    padding: 100px 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .section-header p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
  }

  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 32px;
    top: 32px;
    bottom: 32px;
    width: 2px;
    background: rgba(255, 255, 255, 0.1);
  }

  .timeline-item {
    display: flex;
    gap: 2rem;
    position: relative;
  }

  .timeline-marker {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .timeline-item:hover .timeline-marker {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .timeline-content {
    flex: 1;
    padding-top: 0.5rem;
  }

  .timeline-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .timeline-content p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    .process-timeline {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .timeline::before {
      left: 24px;
    }

    .timeline {
      gap: 2rem;
    }

    .timeline-item {
      gap: 1.5rem;
    }

    .timeline-marker {
      width: 48px;
      height: 48px;
    }

    .timeline-content h3 {
      font-size: 1.25rem;
    }
  }
</style>
