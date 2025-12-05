<script lang="ts">
  import { onMount } from 'svelte';
  import { Linkedin, Twitter, Github, Mail, ExternalLink } from 'lucide-svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="founder-section" id="founder">
  <div class="container">
    <div class="founder-wrapper" class:visible={mounted}>
      <!-- Left Side - Image & Quick Info -->
      <div class="founder-visual">
        <div class="image-container">
          <div class="image-frame">
            <div class="avatar-placeholder">
              <div class="avatar-inner"></div>
            </div>
            <div class="frame-glow"></div>
          </div>
        </div>
        
        <div class="quick-info">
          <h3 class="founder-name">Priyanshu Pattnaik</h3>
          <p class="founder-title">Founder & Builder</p>
          <div class="status-badge">
            <div class="status-dot"></div>
            <span>Currently on a learning break</span>
          </div>
        </div>
      </div>

      <!-- Right Side - Story & Links -->
      <div class="founder-content">
        <div class="content-header">
          <h2 class="section-title">Meet the Founder</h2>
          <p class="section-subtitle">The person behind Humanitech Labs</p>
        </div>

        <div class="founder-story">
          <div class="story-block">
            <div class="story-marker"></div>
            <p>
              I'm a full-time builder and part-time student—a high school student with a deep 
              passion for artificial intelligence and an even deeper desire to make technology 
              work for people, not against them.
            </p>
          </div>

          <div class="story-block">
            <div class="story-marker"></div>
            <p>
              Humanitech Labs isn't a company with investors or a board of directors. It's my 
              attempt to prove that you don't need to be in Silicon Valley or have a fancy degree 
              to build things that matter. You just need to care enough to try.
            </p>
          </div>

          <div class="story-block">
            <div class="story-marker"></div>
            <p>
              Right now, I'm taking time to learn, grow, and figure out the best way forward. 
              Because building fast is easy—building right takes patience.
            </p>
          </div>
        </div>

        <div class="social-section">
          <p class="social-label">Connect with me</p>
          <div class="social-grid">
            <a href="https://www.linkedin.com/in/priyanshu-humanitech/" target="_blank" rel="noopener noreferrer" class="social-card">
              <Linkedin size={24} />
              <span>LinkedIn</span>
              <ExternalLink size={16} class="external-icon" />
            </a>
            <a href="https://twitter.com/priyanshu" target="_blank" rel="noopener noreferrer" class="social-card">
              <Twitter size={24} />
              <span>Twitter</span>
              <ExternalLink size={16} class="external-icon" />
            </a>
            <a href="https://github.com/priyanshu" target="_blank" rel="noopener noreferrer" class="social-card">
              <Github size={24} />
              <span>GitHub</span>
              <ExternalLink size={16} class="external-icon" />
            </a>
            <a href="mailto:hello@humanitech.org" class="social-card">
              <Mail size={24} />
              <span>Email</span>
              <ExternalLink size={16} class="external-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .founder-section {
    padding: 8rem 0;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    position: relative;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .founder-wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 5rem;
    align-items: start;
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .founder-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Visual Side */
  .founder-visual {
    position: sticky;
    top: 2rem;
  }

  .image-container {
    margin-bottom: 2rem;
  }

  .image-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 32px;
    overflow: hidden;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .avatar-inner {
    width: 50%;
    height: 50%;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 50%;
  }

  .frame-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
    border-radius: 32px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .image-frame:hover .frame-glow {
    opacity: 1;
  }

  .quick-info {
    text-align: center;
  }

  .founder-name {
    font-size: 2rem;
    font-weight: 800;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }

  .founder-title {
    font-size: 1.1rem;
    color: #666;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    font-size: 0.9rem;
    color: #666;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    background: #ffa500;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }

  /* Content Side */
  .founder-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .content-header {
    padding-bottom: 2rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #0a0a0a;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: #666;
    margin: 0;
  }

  .founder-story {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .story-block {
    display: flex;
    gap: 1.5rem;
    align-items: start;
  }

  .story-marker {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #0a0a0a, #666);
    border-radius: 50%;
    margin-top: 0.5rem;
    flex-shrink: 0;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
  }

  .story-block p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #333;
    margin: 0;
  }

  .social-section {
    padding-top: 2rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  .social-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1.5rem;
  }

  .social-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .social-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background: #ffffff;
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    text-decoration: none;
    color: #0a0a0a;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .social-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.03), transparent);
    transition: left 0.5s ease;
  }

  .social-card:hover::before {
    left: 100%;
  }

  .social-card:hover {
    border-color: #0a0a0a;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .social-card span {
    flex: 1;
  }

  .external-icon {
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .social-card:hover .external-icon {
    opacity: 1;
    transform: translate(2px, -2px);
  }

  @media (max-width: 1200px) {
    .founder-wrapper {
      grid-template-columns: 350px 1fr;
      gap: 4rem;
    }

    .section-title {
      font-size: 3rem;
    }
  }

  @media (max-width: 968px) {
    .founder-wrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .founder-visual {
      position: relative;
      top: 0;
      max-width: 400px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
    }

    .social-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .founder-section {
      padding: 5rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .founder-wrapper {
      gap: 2.5rem;
    }

    .founder-visual {
      max-width: 300px;
    }

    .founder-name {
      font-size: 1.75rem;
    }

    .founder-title {
      font-size: 1rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .story-block p {
      font-size: 1.05rem;
    }

    .social-card {
      padding: 1rem 1.25rem;
    }
  }
</style>
