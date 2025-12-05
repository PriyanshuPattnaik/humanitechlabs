<script>
  import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-svelte';
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Research', href: '/research' },
      { label: 'Join Us', href: '/join-us' }
    ],
    solutions: [
      { label: 'For NGOs', href: '/services/ngos' },
      { label: 'Open Source', href: '/#solutions' },
      { label: 'Collaboration', href: '/#collaboration' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' }
    ]
  };
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/humanitech-labs', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/humanitech-labs', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/humanitechlabs', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@humanitech.org', label: 'Email' }
  ];
</script>

<footer class="footer">
  <div class="footer-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
  </div>
  
  <div class="container">
    <div class="footer-main">
      <div class="footer-brand">
        <div class="brand-logo">
          <img src="/images/2.png" alt="Humanitech Labs" />
        </div>
        <p class="brand-tagline">
          Building technology that serves humanity through ethical AI, 
          open-source innovation, and collaborative research.
        </p>
        <div class="social-links">
          {#each socialLinks as social}
            <a 
              href={social.href} 
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <svelte:component this={social.icon} size={20} />
            </a>
          {/each}
        </div>
      </div>
      
      <div class="footer-links">
        <div class="link-column">
          <h3>Company</h3>
          <ul>
            {#each footerLinks.company as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>
        
        <div class="link-column">
          <h3>Solutions</h3>
          <ul>
            {#each footerLinks.solutions as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>
        
        <div class="link-column">
          <h3>Resources</h3>
          <ul>
            {#each footerLinks.resources as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>
        
        <div class="link-column">
          <h3>Legal</h3>
          <ul>
            {#each footerLinks.legal as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-divider"></div>
      <div class="footer-bottom-content">
        <p class="copyright">
          © {currentYear} Humanitech Labs. All rights reserved.
        </p>
        <p class="made-with">
          Made with <Heart size={16} class="heart-icon" /> for humanity
        </p>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #000000;
    color: #ffffff;
    position: relative;
    overflow: hidden;
    padding: 4rem 0 2rem;
  }

  .footer-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #C0C0C0, transparent);
    top: -200px;
    right: -100px;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #666666, transparent);
    bottom: -150px;
    left: -50px;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .footer-main {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }

  .footer-brand {
    max-width: 400px;
  }

  .brand-logo {
    margin-bottom: 1.5rem;
  }

  .brand-logo img {
    height: 60px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  .brand-tagline {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .social-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transform: translateY(-2px);
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .link-column h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .link-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .link-column li {
    margin-bottom: 0.75rem;
  }

  .link-column a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .link-column a:hover {
    color: #ffffff;
    transform: translateX(4px);
  }

  .footer-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.1) 80%,
      transparent 100%
    );
    margin-bottom: 2rem;
  }

  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright,
  .made-with {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .made-with {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  :global(.heart-icon) {
    color: #e74c3c;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10%, 30% { transform: scale(1.1); }
    20%, 40% { transform: scale(1); }
  }

  @media (max-width: 1024px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding: 3rem 0 1.5rem;
    }

    .container {
      padding: 0 1rem;
    }

    .footer-links {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    .brand-logo img {
      height: 50px;
    }
  }
</style>
