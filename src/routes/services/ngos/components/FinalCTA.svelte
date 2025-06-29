<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="final-cta" id="get-quote" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
  <div class="cta-container">
    <div class="cta-content">
      <div class="cta-badge">Ready to Get Started?</div>
      <h2>Let's Build Something Amazing Together</h2>
      <p>Take the first step towards technological transformation. Our team is ready to help you amplify your impact and reach more people than ever before.</p>
      
      <div class="cta-buttons" in:fly={{ y: 30, duration: 800, delay: 400 }}>
        <a href="https://tally.so" class="cta-button primary">
          <span>Get Quote</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="https://calendly.com" class="cta-button secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 2V6M16 2V6M3 10H21M5 4H19A2 2 0 0 1 21 6V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V6A2 2 0 0 1 5 4Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span>Schedule Consultation</span>
        </a>
      </div>
      
      <div class="contact-info" in:fly={{ y: 30, duration: 800, delay: 600 }}>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="1.5"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span>humanify.tech@gmail.com</span>
        </div>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10 13A5 5 0 0 0 10 3A5 5 0 0 0 10 13Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8.21 13.89L7 23L13 20L19 23L17.79 13.88" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span>humanittech.com</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Social Proof Section -->
  <div class="social-proof" in:fly={{ y: 50, duration: 1000, delay: 800 }}>
    <div class="container">
      <h3>What NGOs Are Saying</h3>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Humanitech transformed our digital presence completely. Their mission-aligned approach and affordable pricing made technology accessible to us."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <span class="author-name">Sarah Johnson</span>
              <span class="author-role">Executive Director, Community Health Initiative</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"The research-driven approach and ongoing support have been invaluable. Our impact measurement capabilities have improved dramatically."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <span class="author-name">Michael Chen</span>
              <span class="author-role">Program Manager, Education Foundation</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Finally, a tech partner that understands the unique challenges of NGOs. Their ethical approach and transparent pricing are refreshing."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <span class="author-name">Dr. Emily Rodriguez</span>
              <span class="author-role">Founder, Climate Action Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Floating Elements -->
  <div class="floating-elements">
    <div class="floating-element" style="--delay: 0s; --duration: 4s;"></div>
    <div class="floating-element" style="--delay: 1s; --duration: 5s;"></div>
    <div class="floating-element" style="--delay: 2s; --duration: 6s;"></div>
  </div>
</section>

<style>
  .final-cta {
    padding: 120px 0;
    position: relative;
    overflow: hidden;
  }

  .cta-container {
    position: relative;
    z-index: 1;
  }

  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.08);
    padding: 8px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
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

  .cta-content p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin: 32px 0;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    border-radius: 100px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .cta-button.primary {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  .contact-info {
    display: flex;
    gap: 32px;
    justify-content: center;
    margin-top: 48px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }

  .contact-item svg {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Social Proof */
  .social-proof {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .social-proof h3 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 48px;
    color: #fff;
    text-align: center;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
  }

  .testimonial-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .testimonial-content p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 24px;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .author-info {
    display: flex;
    flex-direction: column;
  }

  .author-name {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
  }

  .author-role {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  /* Floating Elements */
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .floating-element {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(180, 200, 255, 0.13) 0%, transparent 70%);
    border-radius: 50%;
    animation: float var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
    50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    .social-proof h3 {
      font-size: 28px;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .final-cta {
      padding: 80px 0;
    }

    h2 {
      font-size: 28px;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-button {
      width: 100%;
      justify-content: center;
    }

    .contact-info {
      flex-direction: column;
      align-items: center;
    }

    .social-proof {
      margin-top: 60px;
      padding-top: 60px;
    }

    .social-proof h3 {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    h2 {
      font-size: 24px;
    }

    .testimonial-card {
      padding: 24px;
    }
  }
</style> 