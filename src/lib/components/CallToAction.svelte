<script>
  import { onMount } from 'svelte';

  const ctaButtons = [
    { text: 'Start a Project', primary: true, href: '/join-us' },
    { text: 'Join Our Research', primary: false, href: '/research' },
    { text: 'Partner with Us', primary: true, href: '/join-us' },
    { text: 'Explore Open Source', primary: false, href: '/#solutions' }
  ];

  let visible = false;
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  onMount(() => {
    visible = true;
  });

  function handleSubmit() {
    // Form submission logic here
    // TODO: Implement form submission
  }
</script>

<section class="cta-section" class:visible>
  <div class="container">
    <h2 class="section-title">Ready to Create Impact?</h2>
    <p class="section-description">
      Join us in building technology that matters. Whether you're a researcher, developer, 
      or organization seeking solutions, let's collaborate to create a better tomorrow.
    </p>

    <div class="cta-grid">
      {#each ctaButtons as button, i}
        <a 
          href={button.href}
          class="cta-button" 
          class:primary={button.primary}
          style="animation-delay: {i * 0.1}s"
        >
          {button.text}
          <div class="button-shine"></div>
        </a>
      {/each}
    </div>

    <div class="contact-form">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <input 
            type="text" 
            placeholder="Your Name"
            bind:value={formData.name}
            required
          />
        </div>
        <div class="form-group">
          <input 
            type="email" 
            placeholder="Your Email"
            bind:value={formData.email}
            required
          />
        </div>
        <div class="form-group">
          <textarea 
            placeholder="Your Message"
            bind:value={formData.message}
            required
          ></textarea>
        </div>
        <a href="/join-us" class="submit-button primary">
          Send Message
          <div class="button-shine"></div>
        </a>
      </form>
    </div>
  </div>
</section>

<style>
  .cta-section {
    background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
    padding: 6rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .cta-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #000000, #666666);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-description {
    max-width: 800px;
    margin: 0 auto 4rem;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;
  }

  .cta-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto 4rem;
  }

  .cta-button {
    position: relative;
    padding: 1.5rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 0.5s ease backwards;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .cta-button.primary {
    background: #000;
    color: white;
  }

  .cta-button:not(.primary) {
    background: white;
    color: black;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .button-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: transform 0.5s ease;
  }

  .cta-button:hover .button-shine {
    transform: rotate(45deg) translate(50%, 50%);
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #000;
  }

  .submit-button {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    background: #000;
    color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .cta-section {
      padding: 4rem 1rem;
    }

    .cta-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .section-description {
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .contact-form {
      padding: 1.5rem;
    }
  }
</style>