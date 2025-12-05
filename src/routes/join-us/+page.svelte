<script>
  import { onMount } from 'svelte';
  import { Users, Code, Heart, Lightbulb, Send } from 'lucide-svelte';
  
  let visible = false;
  let formData = {
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
    skills: '',
    availability: ''
  };
  
  let submitted = false;
  let isSubmitting = false;
  
  const collaborationTypes = [
    {
      icon: Users,
      title: 'NGO Partnership',
      description: 'Partner with us to build technology solutions for your humanitarian mission',
      color: '#000'
    },
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Join our community of developers building tech for social good',
      color: '#666'
    },
    {
      icon: Heart,
      title: 'Research Collaboration',
      description: 'Collaborate on research projects exploring humanitarian technology',
      color: '#000'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Partner',
      description: 'Share ideas and co-create solutions for global challenges',
      color: '#333'
    }
  ];
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
  
  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    submitted = true;
    isSubmitting = false;
    
    // Reset form after 5 seconds
    setTimeout(() => {
      submitted = false;
      formData = {
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: '',
        skills: '',
        availability: ''
      };
    }, 5000);
  }
</script>

<svelte:head>
  <title>Join Us - Humanitech Labs</title>
  <meta name="description" content="Join Humanitech Labs in building technology for humanitarian impact. Partner with us, contribute to open source, or collaborate on research." />
</svelte:head>

<section class="join-us" class:visible>
  <div class="background-elements">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="grid-pattern"></div>
  </div>
  
  <div class="container">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="title-line">Let's Build</span>
        <span class="title-line highlight">Something Meaningful</span>
      </h1>
      <p class="page-subtitle">
        Join our community of innovators, researchers, and changemakers working to create 
        technology that serves humanity.
      </p>
    </div>
    
    <div class="collaboration-types">
      <h2 class="section-title">Ways to Collaborate</h2>
      <div class="types-grid">
        {#each collaborationTypes as type, i}
          <div class="type-card" style="--delay: {i * 0.1}s">
            <div class="card-icon" style="--icon-color: {type.color}">
              <svelte:component this={type.icon} size={32} />
            </div>
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="form-section">
      <div class="form-container">
        <div class="form-header">
          <h2>Register Your Interest</h2>
          <p>Fill out the form below and we'll get back to you about collaboration opportunities.</p>
        </div>
        
        {#if !submitted}
          <form on:submit={handleSubmit} class="registration-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">
                  Full Name <span class="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  bind:value={formData.name}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div class="form-group">
                <label for="email">
                  Email Address <span class="required">*</span>
                </label>
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
                <label for="interest">
                  Area of Interest <span class="required">*</span>
                </label>
                <select id="interest" bind:value={formData.interest} required>
                  <option value="">Select an option</option>
                  <option value="ngo">NGO Partnership</option>
                  <option value="opensource">Open Source Contribution</option>
                  <option value="research">Research Collaboration</option>
                  <option value="innovation">Innovation Partnership</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label for="skills">Your Skills & Expertise (Optional)</label>
              <input 
                type="text" 
                id="skills"
                bind:value={formData.skills}
                placeholder="e.g., Web Development, AI/ML, UX Design, Project Management"
              />
            </div>
            
            <div class="form-group">
              <label for="availability">
                Availability <span class="required">*</span>
              </label>
              <select id="availability" bind:value={formData.availability} required>
                <option value="">Select your availability</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="volunteer">Volunteer</option>
                <option value="project">Project-based</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">
                Tell Us About Your Interest <span class="required">*</span>
              </label>
              <textarea 
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                placeholder="Share your ideas, goals, or how you'd like to collaborate with Humanitech Labs..."
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button" disabled={isSubmitting}>
              {#if isSubmitting}
                <span class="spinner"></span>
                <span>Submitting...</span>
              {:else}
                <Send size={20} />
                <span>Submit Registration</span>
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
            <h3>Thank You for Your Interest!</h3>
            <p>We've received your registration and will review it carefully. Our team will be in touch with you soon to discuss potential collaboration opportunities.</p>
            <p class="success-note">Please check your email for a confirmation message.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .join-us {
    min-height: 100vh;
    padding: 8rem 2rem 4rem;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }

  .join-us.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .background-elements {
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
    filter: blur(80px);
    opacity: 0.3;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.1), transparent);
    top: 10%;
    right: 10%;
    animation: float 8s ease-in-out infinite;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(192, 192, 192, 0.2), transparent);
    bottom: 20%;
    left: 10%;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
  }

  .grid-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
  }

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 5rem;
  }

  .page-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-line {
    display: block;
    color: #000;
  }

  .title-line.highlight {
    background: linear-gradient(135deg, #000 0%, #666 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .page-subtitle {
    font-size: 1.5rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .collaboration-types {
    margin-bottom: 5rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: #000;
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .type-card {
    padding: 2.5rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
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

  .type-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    border-color: #c0c0c0;
  }

  .card-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--icon-color, #000);
  }

  .type-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .type-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  .form-section {
    max-width: 900px;
    margin: 0 auto;
  }

  .form-container {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .form-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .form-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .form-header p {
    font-size: 1.1rem;
    color: #666;
  }

  .registration-form {
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
    font-size: 1rem;
    font-weight: 600;
    color: #000;
  }

  .required {
    color: #e74c3c;
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
    min-height: 150px;
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
    width: 100px;
    height: 100px;
    margin: 0 auto 2rem;
    background: linear-gradient(135deg, #00ff88, #00cc6a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    animation: scaleIn 0.5s ease;
  }

  .success-icon svg {
    width: 50px;
    height: 50px;
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

  .success-message h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }

  .success-message p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .success-note {
    font-size: 0.95rem;
    color: #999;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .join-us {
      padding: 6rem 1rem 3rem;
    }

    .form-container {
      padding: 2rem 1.5rem;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .types-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .page-title {
      font-size: clamp(2rem, 6vw, 3rem);
    }

    .page-subtitle {
      font-size: 1.2rem;
    }
  }
</style>
