<script lang="ts">
    type Collaboration = {
        id: string;
        name: string;
        type: 'university' | 'industry' | 'government' | 'nonprofit';
        description: string;
        logo: string;
        projects: number;
        duration: string;
        focus: string[];
    };
    
    const collaborations: Collaboration[] = [
        {
            id: 'stanford',
            name: 'Stanford University',
            type: 'university',
            description: 'Collaborating on fundamental AI research, particularly in the areas of machine learning theory and AI safety.',
            logo: '/static/images/collaborations/stanford.png',
            projects: 8,
            duration: '5+ years',
            focus: ['AI Safety', 'Machine Learning', 'Robotics']
        },
        {
            id: 'mit',
            name: 'MIT',
            type: 'university',
            description: 'Joint research initiatives in computer vision, natural language processing, and human-AI interaction.',
            logo: '/static/images/collaborations/mit.png',
            projects: 12,
            duration: '3+ years',
            focus: ['Computer Vision', 'NLP', 'HCI']
        },
        {
            id: 'google',
            name: 'Google Research',
            type: 'industry',
            description: 'Partnership focused on large-scale machine learning systems and responsible AI development.',
            logo: '/static/images/collaborations/google.png',
            projects: 15,
            duration: '4+ years',
            focus: ['Large-scale ML', 'Responsible AI', 'Infrastructure']
        },
        {
            id: 'microsoft',
            name: 'Microsoft Research',
            type: 'industry',
            description: 'Collaborating on AI for healthcare, accessibility, and sustainable computing solutions.',
            logo: '/static/images/collaborations/microsoft.png',
            projects: 10,
            duration: '2+ years',
            focus: ['Healthcare AI', 'Accessibility', 'Sustainability']
        },
        {
            id: 'nih',
            name: 'National Institutes of Health',
            type: 'government',
            description: 'Government partnership advancing AI applications in medical research and healthcare delivery.',
            logo: '/static/images/collaborations/nih.png',
            projects: 6,
            duration: '3+ years',
            focus: ['Medical AI', 'Clinical Research', 'Public Health']
        },
        {
            id: 'openai',
            name: 'OpenAI',
            type: 'industry',
            description: 'Collaborative research on AI alignment, safety, and the development of beneficial AI systems.',
            logo: '/static/images/collaborations/openai.png',
            projects: 7,
            duration: '2+ years',
            focus: ['AI Alignment', 'Safety Research', 'Beneficial AI']
        }
    ];

    function getTypeColor(type: string): string {
        switch (type) {
            case 'university': return '#3b82f6';
            case 'industry': return '#8b5cf6';
            case 'government': return '#10b981';
            case 'nonprofit': return '#f59e0b';
            default: return '#6b7280';
        }
    }

    function getTypeLabel(type: string): string {
        switch (type) {
            case 'university': return 'Academic';
            case 'industry': return 'Industry';
            case 'government': return 'Government';
            case 'nonprofit': return 'Nonprofit';
            default: return 'Other';
        }
    }
</script>

<section class="collaboration">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Research Collaborations</h2>
            <p class="section-subtitle">
                We believe in the power of collaboration to accelerate AI research and development. 
                Our partnerships with leading universities, industry leaders, and government agencies 
                enable us to tackle complex challenges and create meaningful impact.
            </p>
        </div>

        <div class="collaboration-grid">
            {#each collaborations as collaboration}
                <div class="collaboration-card">
                    <div class="card-header">
                        <div class="partner-logo">
                            <img src={collaboration.logo} alt={collaboration.name} />
                        </div>
                        <div class="partner-type" style="background: {getTypeColor(collaboration.type)}20; color: {getTypeColor(collaboration.type)}">
                            {getTypeLabel(collaboration.type)}
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <h3 class="partner-name">{collaboration.name}</h3>
                        <p class="partner-description">{collaboration.description}</p>
                        
                        <div class="partner-focus">
                            <h4 class="focus-title">Research Focus</h4>
                            <div class="focus-tags">
                                {#each collaboration.focus as area}
                                    <span class="focus-tag">{area}</span>
                                {/each}
                            </div>
                        </div>
                        
                        <div class="partner-stats">
                            <div class="stat">
                                <span class="stat-number">{collaboration.projects}</span>
                                <span class="stat-label">Projects</span>
                            </div>
                            <div class="stat">
                                <span class="stat-text">{collaboration.duration}</span>
                                <span class="stat-label">Duration</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="collaboration-cta">
            <div class="cta-content">
                <h3 class="cta-title">Interested in Collaborating?</h3>
                <p class="cta-description">
                    We're always open to new research partnerships and collaborations. 
                    Whether you're from academia, industry, or government, let's explore 
                    how we can work together to advance AI for the benefit of humanity.
                </p>
                <div class="cta-buttons">
                    <button class="btn-primary" on:click={() => console.log('Propose Collaboration clicked')}>
                        Propose Collaboration
                    </button>
                    <button class="btn-secondary" on:click={() => console.log('Learn More clicked')}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .collaboration {
        padding: 8rem 2rem;
        background: #f8fafc;
        position: relative;
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
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
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .collaboration-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .collaboration-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .collaboration-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: #d1d5db;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .partner-logo {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .partner-logo img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .partner-type {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .card-content {
        flex: 1;
    }

    .partner-name {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .partner-description {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .partner-focus {
        margin-bottom: 1.5rem;
    }

    .focus-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .focus-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .focus-tag {
        font-size: 0.75rem;
        background: #f3f4f6;
        color: #374151;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 500;
    }

    .partner-stats {
        display: flex;
        gap: 2rem;
    }

    .stat {
        text-align: center;
    }

    .stat-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: #3b82f6;
    }

    .stat-text {
        display: block;
        font-size: 1.125rem;
        font-weight: 600;
        color: #3b82f6;
    }

    .stat-label {
        font-size: 0.75rem;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .collaboration-cta {
        text-align: center;
        padding: 4rem;
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .cta-content {
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .cta-description {
        font-size: 1.125rem;
        color: #6b7280;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }

    .btn-secondary {
        background: transparent;
        color: #6b7280;
        border: 2px solid #e5e7eb;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-secondary:hover {
        border-color: #d1d5db;
        background: #f9fafb;
        color: #374151;
    }

    @media (max-width: 768px) {
        .collaboration {
            padding: 4rem 1rem;
        }

        .section-title {
            font-size: 2.5rem;
        }

        .section-subtitle {
            font-size: 1.125rem;
        }

        .collaboration-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .collaboration-card {
            padding: 1.5rem;
        }

        .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }

        .partner-stats {
            gap: 1rem;
        }

        .cta-title {
            font-size: 2rem;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
            max-width: 300px;
        }
    }
</style> 