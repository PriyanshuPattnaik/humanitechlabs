<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="process-timeline" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
  <div class="container">
    <div class="section-header">
      <div class="section-badge">Our Process</div>
      <h2>6-Step Engagement Process</h2>
      <p>Our research-backed methodology ensures successful technology implementation and maximum impact for your organization.</p>
    </div>
    
    <div class="timeline-container">
      <div class="timeline-line"></div>
      
      {#each [
        { 
          number: '01', 
          title: 'Discovery & Assessment', 
          desc: 'Comprehensive analysis of your organization\'s needs, current technology stack, and impact goals',
          icon: 'M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
          duration: '1-2 weeks'
        },
        { 
          number: '02', 
          title: 'Strategy Development', 
          desc: 'Create a customized technology roadmap aligned with your mission and budget constraints',
          icon: 'M9 5H7A2 2 0 0 0 5 7V19A2 2 0 0 0 7 21H17A2 2 0 0 0 19 19V7A2 2 0 0 0 17 5H15M9 5A2 2 0 0 0 11 3H13A2 2 0 0 0 15 5M9 5A2 2 0 0 1 11 7H13A2 2 0 0 1 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01',
          duration: '1-2 weeks'
        },
        { 
          number: '03', 
          title: 'Research & Innovation', 
          desc: 'Our research team explores cutting-edge solutions and develops custom technology approaches',
          icon: 'M9 20L3 17V4L9 7L15 4L21 7V20L15 17L9 20Z',
          duration: '2-3 weeks'
        },
        { 
          number: '04', 
          title: 'Development & Testing', 
          desc: 'Agile development process with regular check-ins, feedback loops, and quality assurance',
          icon: 'M12 3L20 12H16V20H8V12H4L12 3Z',
          duration: '4-8 weeks'
        },
        { 
          number: '05', 
          title: 'Deployment & Training', 
          desc: 'Seamless deployment with comprehensive training and knowledge transfer for your team',
          icon: 'M13 10V3L4 14H11L11 21L20 10H13Z',
          duration: '1-2 weeks'
        },
        { 
          number: '06', 
          title: 'Ongoing Support', 
          desc: 'Continuous optimization, feature development, and 24/7 technical support',
          icon: 'M3 12H21M12 3V21',
          duration: 'Ongoing'
        }
      ] as step, i}
        <div class="step-card" style="animation-delay: {i * 0.1}s" in:fly={{ y: 30, duration: 800, delay: 400 + i * 200 }}>
          <div class="step-number">{step.number}</div>
          <div class="step-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="{step.icon}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="step-content">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div class="step-duration">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{step.duration}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="process-highlights" in:fly={{ y: 50, duration: 1000, delay: 1600 }}>
      <div class="highlight-card">
        <div class="highlight-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 20L3 17V4L9 7L15 4L21 7V20L15 17L9 20Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h4>Research-Backed Methodology</h4>
        <p>Our process is grounded in academic research and industry best practices, ensuring proven results.</p>
      </div>
      
      <div class="highlight-card">
        <div class="highlight-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M20.5 21C20.5 16.8579 16.6421 13.5 12 13.5C7.35786 13.5 3.5 16.8579 3.5 21" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h4>Collaborative Approach</h4>
        <p>We work closely with your team throughout the process, ensuring alignment with your vision and goals.</p>
      </div>
      
      <div class="highlight-card">
        <div class="highlight-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4>Agile Development</h4>
        <p>Flexible, iterative development process that adapts to your changing needs and feedback.</p>
      </div>
    </div>
    
    <div class="timeline-note" in:fly={{ y: 30, duration: 800, delay: 1800 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Most projects completed within 3-6 months, depending on complexity and scope</span>
    </div>
  </div>
</section>

<style>
  .process-timeline {
    padding: 120px 0;
    background: rgba(255, 255, 255, 0.02);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #fff;
  }

  .section-header p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Timeline */
  .timeline-container {
    position: relative;
    max-width: 900px;
    margin: 0 auto 80px;
  }

  .timeline-line {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
  }

  .step-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 32px;
    position: relative;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  .step-number {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
  }

  .step-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }

  .step-content {
    flex: 1;
  }

  .step-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #fff;
  }

  .step-card p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .step-duration {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  .step-duration svg {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Process Highlights */
  .process-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    margin-bottom: 48px;
  }

  .highlight-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 24px;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .highlight-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    color: #fff;
  }

  .highlight-card h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #fff;
  }

  .highlight-card p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }

  .timeline-note {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  .timeline-note svg {
    color: rgba(255, 255, 255, 0.6);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    .process-highlights {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .process-timeline {
      padding: 80px 0;
    }

    h2 {
      font-size: 28px;
    }

    .step-card {
      flex-direction: column;
      text-align: center;
      padding: 24px;
    }

    .step-icon {
      margin: 0 auto;
    }

    .step-duration {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    h2 {
      font-size: 24px;
    }

    .step-card {
      padding: 20px;
    }
  }
</style> 