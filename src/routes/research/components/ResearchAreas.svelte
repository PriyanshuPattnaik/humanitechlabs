<script lang="ts">
    import { onMount } from 'svelte';
    
    type ResearchArea = {
        id: string;
        title: string;
        subtitle: string;
        description: string;
        impact: string;
        domains: string[];
        icon: string;
        color: string;
    };
    
    let activeCard: string | null = null;
    let scrollY: number = 0;
    
    const researchAreas: ResearchArea[] = [
        {
            id: 'ai-safety',
            title: 'AI Safety & Alignment',
            subtitle: 'Building Trustworthy AI Systems',
            description: 'Developing robust frameworks for AI safety, alignment, and interpretability. Our research focuses on creating AI systems that are safe, reliable, and aligned with human values.',
            impact: '10+ Safety Protocols',
            domains: ['Safety', 'Alignment', 'Interpretability'],
            icon: '🛡️',
            color: '#3b82f6'
        },
        {
            id: 'machine-learning',
            title: 'Advanced Machine Learning',
            subtitle: 'Pushing the Boundaries of AI',
            description: 'Exploring novel architectures, training methods, and optimization techniques to advance the state-of-the-art in machine learning and artificial intelligence.',
            impact: '25+ Novel Algorithms',
            domains: ['Deep Learning', 'Optimization', 'Architecture'],
            icon: '🧠',
            color: '#8b5cf6'
        },
        {
            id: 'multimodal-ai',
            title: 'Multimodal AI Systems',
            subtitle: 'Understanding the World Through Multiple Senses',
            description: 'Building AI systems that can process and understand text, images, audio, and video simultaneously, enabling more comprehensive and human-like understanding.',
            impact: '15+ Multimodal Models',
            domains: ['Computer Vision', 'NLP', 'Audio Processing'],
            icon: '👁️',
            color: '#06b6d4'
        },
        {
            id: 'robotics',
            title: 'Robotics & Automation',
            subtitle: 'Intelligent Systems in the Physical World',
            description: 'Developing autonomous robots and intelligent automation systems that can safely and efficiently operate in real-world environments.',
            impact: '8+ Robot Platforms',
            domains: ['Autonomy', 'Control', 'Perception'],
            icon: '🤖',
            color: '#10b981'
        },
        {
            id: 'human-ai-interaction',
            title: 'Human-AI Interaction',
            subtitle: 'Designing Intuitive AI Interfaces',
            description: 'Creating natural and intuitive ways for humans to interact with AI systems, focusing on usability, accessibility, and user experience.',
            impact: '20+ Interaction Models',
            domains: ['UX Design', 'Accessibility', 'Natural Language'],
            icon: '👥',
            color: '#f59e0b'
        },
        {
            id: 'ai-for-good',
            title: 'AI for Social Impact',
            subtitle: 'Technology Serving Humanity',
            description: 'Applying AI to solve pressing global challenges in healthcare, education, climate change, and social justice.',
            impact: '30+ Impact Projects',
            domains: ['Healthcare', 'Education', 'Climate'],
            icon: '🌍',
            color: '#ef4444'
        }
    ];

    function handleCardHover(cardId: string): void {
        activeCard = cardId;
    }

    function handleCardLeave(): void {
        activeCard = null;
    }

    function handleScroll(): void {
        scrollY = window.scrollY;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<svelte:window bind:scrollY />

<section class="research-areas">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Research Areas</h2>
            <p class="section-subtitle">
                Our research spans multiple domains, from fundamental AI safety to practical applications 
                that benefit society. Each area represents a frontier where we're pushing the boundaries 
                of what's possible.
            </p>
        </div>

        <div class="research-grid">
            {#each researchAreas as area, index}
                <div 
                    class="research-card" 
                    class:active={activeCard === area.id}
                    on:mouseenter={() => handleCardHover(area.id)}
                    on:mouseleave={handleCardLeave}
                    style="animation-delay: {index * 0.1}s"
                    role="button"
                    tabindex="0"
                    on:keydown={(e: KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            handleCardHover(area.id);
                        }
                    }}
                >
                    <div class="card-content">
                        <div class="card-header">
                            <div class="card-icon" style="background: {area.color}20" role="img" aria-label={area.title}>
                                {area.icon}
                            </div>
                            <div class="card-impact">{area.impact}</div>
                        </div>
                        
                        <h3 class="card-title">{area.title}</h3>
                        <p class="card-subtitle">{area.subtitle}</p>
                        <p class="card-description">{area.description}</p>
                        
                        <div class="card-domains">
                            {#each area.domains as domain}
                                <span class="domain-tag" style="background: {area.color}20; color: {area.color}">
                                    {domain}
                                </span>
                            {/each}
                        </div>
                        
                        <div class="card-arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="card-glow" style="background: radial-gradient(circle, {area.color}20 0%, transparent 70%)"></div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .research-areas {
        padding: 8rem 2rem;
        background: #ffffff;
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
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .research-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .research-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .research-card:hover,
    .research-card.active {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: #d1d5db;
    }

    .card-content {
        position: relative;
        z-index: 2;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .card-icon {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    .card-impact {
        font-size: 0.875rem;
        font-weight: 600;
        color: #6b7280;
        background: #f3f4f6;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }

    .card-subtitle {
        font-size: 1rem;
        color: #6b7280;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    .card-description {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .card-domains {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .domain-tag {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .card-arrow {
        position: absolute;
        bottom: 1.5rem;
        right: 1.5rem;
        color: #9ca3af;
        transition: all 0.3s ease;
    }

    .research-card:hover .card-arrow {
        color: #3b82f6;
        transform: translateX(4px);
    }

    .card-glow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .research-card:hover .card-glow {
        opacity: 1;
    }

    @media (max-width: 768px) {
        .research-areas {
            padding: 4rem 1rem;
        }

        .section-title {
            font-size: 2.5rem;
        }

        .section-subtitle {
            font-size: 1.125rem;
        }

        .research-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .research-card {
            padding: 1.5rem;
        }
    }
</style> 