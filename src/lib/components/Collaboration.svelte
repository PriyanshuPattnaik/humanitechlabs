<script>
  import { onMount } from 'svelte';
  import { Users, Code, Heart, Lightbulb } from 'lucide-svelte';
  
  let visible = false;
  let formData = {
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  };
  
  let submitted = false;
  let isSubmitting = false;
  
  const collaborationTypes = [
    {
      icon: Users,
      title: 'NGO Partnership',
      description: 'Partner with us to build technology solutions for your humanitarian mission'
    },
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Join our community of developers building tech for social good'
    },
    {
      icon: Heart,
      title: 'Research Collaboration',
      description: 'Collaborate on research projects exploring humanitarian technology'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Partner',
      description: 'Share ideas and co-create solutions for global challenges'
    }
  ];
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 200);
  });
  
  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    submitted = true;
    isSubmitting = false;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      submitted = false;
      formData = {
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      };
    }, 3000);
  }
</script>

<section class="collaboration" class:visible>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Let's Build Together</h2>
      <p class="section-subtitle">
        Join our community of innovators, researchers, and changemakers working to create 
        technology that serves humanity.
      </p>
    </div>
    
    <div class="collaboration-grid">
      {#each collaborationTypes as type, i}
        <div class="collab-card" style="--delay: {i * 0.1}s">
          <div class="card-icon">
            <svelte:component this={type.icon} size={32} />
          </div>
          <h3>{type.title}</h3>
          <p>{type.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="registration-section">
      <div class="form-container">
        <h3 class="form-title">Register Your Interest</h3>
        <p class="form-description">
          Fill out the form below and we'll get back to you about collaboration opportunities.
        </p>
        
        {#if !submitted}
          <form on:submit={handleSubmit} class="collaboration-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  bind:value={formData.name}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  bind:value={formData.email}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="organization">Organization (Optional)</label>
                <input 
                  type="text" 
                  id="organization"
                  bind:value={formData.organization}
                  placeholder="Your organization name"
                />
              </div>
              
              <div class="form-group">
                <label for="interest">Area of Interest *</label>
                <select id="interest" bind:value={formData.interest} required>
                  <option value="">Select an option</option>
                  <option value="ngo">NGO Partnership</option>
                  <option value="opensource">Open Source Contribution</option>
                  <option value="research">Research Collaboration</option>
                  <option value="innovation">Innovation Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Tell Us About Your Interest *</label>
              <textarea 
                id="message"
                bind:value={formData.message}
                required
                rows="5"
                placeholder="Share your ideas, goals, or how you'd like to collaborate..."
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button" disabled={isSubmitting}>
              {#if isSubmitting}
                <span class="spinner"></span>
                <span>Submitting...</span>
              {:else}
                <span>Submit Registration</span>
                <span class="button-arrow">→</span>
              {/if}
            </button>
          </form>
        {:else}
          <div class="success-message">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4>Thank You!</h4>
            <p>We've received your registration and will be in touch soon.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .collaboration {
    padding: 6rem 2rem;
    background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .collaboration.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: #000;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .collaboration-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 5rem;
  }

  .collab-card {
    padding: 2rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.6s ease forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .collab-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    border-color: #c0c0c0;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #000;
  }

  .collab-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .collab-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  .registration-section {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .form-title {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
    text-align: center;
  }

  .form-description {
    font-size: 1.1rem;
    color: #666;
    text-align: center;
    margin-bottom: 3rem;
  }

  .collaboration-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #000;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: var(--font-body);
    transition: all 0.3s ease;
    background: white;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-button {
    padding: 1.25rem 2.5rem;
    background: #000;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .submit-button:hover:not(:disabled) {
    background: #333;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .button-arrow {
    transition: transform 0.3s ease;
  }

  .submit-button:hover:not(:disabled) .button-arrow {
    transform: translateX(5px);
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .success-message {
    text-align: center;
    padding: 3rem 2rem;
  }

  .success-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #00ff88, #00cc6a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    animation: scaleIn 0.5s ease;
  }

  .success-icon svg {
    width: 40px;
    height: 40px;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .success-message h4 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .success-message p {
    font-size: 1.1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .collaboration {
      padding: 4rem 1rem;
    }

    .registration-section {
      padding: 2rem 1.5rem;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .collaboration-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
