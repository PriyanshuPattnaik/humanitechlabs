<script lang="ts">
    let formData = {
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
    };
    
    let isSubmitting = false;
    let submitSuccess = false;
    let submitError = false;

    function handleSubmit() {
        isSubmitting = true;
        submitError = false;
        
        // Simulate form submission
        setTimeout(() => {
            isSubmitting = false;
            submitSuccess = true;
            
            // Reset form after success
            setTimeout(() => {
                submitSuccess = false;
                formData = {
                    name: '',
                    email: '',
                    organization: '',
                    subject: '',
                    message: ''
                };
            }, 3000);
        }, 1500);
    }

    function handleInput(field: keyof typeof formData, value: string) {
        formData[field] = value;
    }
</script>

<section class="contact">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2 class="section-title">Get in Touch</h2>
                <p class="section-subtitle">
                    Have questions about our research? Want to collaborate? 
                    We'd love to hear from you. Reach out to our research team.
                </p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div class="method-content">
                            <h3 class="method-title">Email</h3>
                            <p class="method-detail">research@humanitech.org</p>
                            <p class="method-description">For general research inquiries and collaboration proposals</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div class="method-content">
                            <h3 class="method-title">Phone</h3>
                            <p class="method-detail">+1 (555) 123-4567</p>
                            <p class="method-description">Available Monday-Friday, 9 AM - 6 PM EST</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div class="method-content">
                            <h3 class="method-title">Office</h3>
                            <p class="method-detail">123 Research Drive<br>San Francisco, CA 94105</p>
                            <p class="method-description">Visit our research facility by appointment</p>
                        </div>
                    </div>
                </div>
                
                <div class="social-links">
                    <h3 class="social-title">Follow Our Research</h3>
                    <div class="social-icons">
                        <a href="#" class="social-link" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <h3 class="form-title">Send us a Message</h3>
                
                {#if submitSuccess}
                    <div class="success-message">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22,4 12,14.01 9,11.01"/>
                        </svg>
                        <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                {:else}
                    <form on:submit|preventDefault={handleSubmit}>
                        <div class="form-group">
                            <label for="name" class="form-label">Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                class="form-input" 
                                bind:value={formData.name}
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="email" class="form-label">Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                class="form-input" 
                                bind:value={formData.email}
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="organization" class="form-label">Organization</label>
                            <input 
                                type="text" 
                                id="organization" 
                                class="form-input" 
                                bind:value={formData.organization}
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="subject" class="form-label">Subject *</label>
                            <select id="subject" class="form-input" bind:value={formData.subject} required>
                                <option value="">Select a subject</option>
                                <option value="research-collaboration">Research Collaboration</option>
                                <option value="publication-inquiry">Publication Inquiry</option>
                                <option value="student-internship">Student Internship</option>
                                <option value="job-opportunity">Job Opportunity</option>
                                <option value="general-inquiry">General Inquiry</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message" class="form-label">Message *</label>
                            <textarea 
                                id="message" 
                                class="form-textarea" 
                                rows="5"
                                bind:value={formData.message}
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn" disabled={isSubmitting}>
                            {#if isSubmitting}
                                <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                                </svg>
                                Sending...
                            {:else}
                                Send Message
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        padding: 8rem 2rem;
        background: #ffffff;
        position: relative;
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }

    .section-title {
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .section-subtitle {
        font-size: 1.25rem;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 3rem;
    }

    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .contact-method {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    .method-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-shrink: 0;
    }

    .method-content {
        flex: 1;
    }

    .method-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }

    .method-detail {
        font-size: 1rem;
        color: #3b82f6;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .method-description {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.5;
    }

    .social-links {
        margin-top: 2rem;
    }

    .social-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-link {
        width: 40px;
        height: 40px;
        background: #f3f4f6;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .social-link:hover {
        background: #3b82f6;
        color: white;
        transform: translateY(-2px);
    }

    .contact-form {
        background: #f8fafc;
        padding: 2.5rem;
        border-radius: 16px;
        border: 1px solid #e5e7eb;
    }

    .form-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.5rem;
    }

    .form-input,
    .form-textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 0.875rem;
        color: #1f2937;
        background: #ffffff;
        transition: all 0.3s ease;
    }

    .form-input:focus,
    .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-textarea {
        resize: vertical;
        min-height: 120px;
    }

    .submit-btn {
        width: 100%;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .spinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .success-message {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: #dcfce7;
        color: #166534;
        border-radius: 8px;
        font-weight: 500;
    }

    .success-message svg {
        color: #16a34a;
    }

    @media (max-width: 768px) {
        .contact {
            padding: 4rem 1rem;
        }

        .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .section-title {
            font-size: 2.5rem;
        }

        .section-subtitle {
            font-size: 1.125rem;
        }

        .contact-form {
            padding: 2rem;
        }

        .social-icons {
            justify-content: center;
        }
    }
</style> 