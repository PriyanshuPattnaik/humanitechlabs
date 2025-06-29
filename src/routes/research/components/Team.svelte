<script lang="ts">
    type TeamMember = {
        id: string;
        name: string;
        role: string;
        expertise: string[];
        bio: string;
        image: string;
        publications: number;
        projects: number;
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
    
    const teamMembers: TeamMember[] = [
        {
            id: 'sarah-chen',
            name: 'Dr. Sarah Chen',
            role: 'Research Director',
            expertise: ['AI Safety', 'Machine Learning', 'Ethics'],
            bio: 'Leading our AI safety research with over 15 years of experience in developing trustworthy AI systems.',
            image: '/static/images/team/sarah-chen.jpg',
            publications: 45,
            projects: 12,
            linkedin: '#',
            twitter: '#',
            github: '#'
        },
        {
            id: 'michael-rodriguez',
            name: 'Prof. Michael Rodriguez',
            role: 'Senior Research Scientist',
            expertise: ['Computer Vision', 'Deep Learning', 'Robotics'],
            bio: 'Pioneering research in computer vision and autonomous systems with applications in healthcare and robotics.',
            image: '/static/images/team/michael-rodriguez.jpg',
            publications: 38,
            projects: 8,
            linkedin: '#',
            twitter: '#'
        },
        {
            id: 'emily-watson',
            name: 'Dr. Emily Watson',
            role: 'Research Scientist',
            expertise: ['Natural Language Processing', 'Multimodal AI', 'Human-AI Interaction'],
            bio: 'Specializing in natural language understanding and creating intuitive human-AI interfaces.',
            image: '/static/images/team/emily-watson.jpg',
            publications: 32,
            projects: 15,
            linkedin: '#',
            github: '#'
        },
        {
            id: 'alex-kim',
            name: 'Dr. Alex Kim',
            role: 'Research Scientist',
            expertise: ['Multimodal AI', 'Audio Processing', 'Signal Processing'],
            bio: 'Developing unified multimodal AI systems that can process text, vision, and audio simultaneously.',
            image: '/static/images/team/alex-kim.jpg',
            publications: 28,
            projects: 10,
            linkedin: '#',
            twitter: '#',
            github: '#'
        },
        {
            id: 'lisa-park',
            name: 'Dr. Lisa Park',
            role: 'Research Scientist',
            expertise: ['Healthcare AI', 'Medical Imaging', 'Clinical Applications'],
            bio: 'Applying AI to healthcare challenges, from medical imaging analysis to personalized treatment planning.',
            image: '/static/images/team/lisa-park.jpg',
            publications: 41,
            projects: 18,
            linkedin: '#',
            github: '#'
        },
        {
            id: 'david-thompson',
            name: 'Prof. David Thompson',
            role: 'Research Scientist',
            expertise: ['Robustness', 'Adversarial ML', 'System Reliability'],
            bio: 'Focusing on building robust and reliable machine learning systems for real-world deployment.',
            image: '/static/images/team/david-thompson.jpg',
            publications: 35,
            projects: 14,
            linkedin: '#',
            twitter: '#'
        }
    ];
</script>

<section class="team">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Research Team</h2>
            <p class="section-subtitle">
                Meet our world-class research team of scientists, engineers, and innovators 
                who are pushing the boundaries of artificial intelligence and creating 
                technology that benefits humanity.
            </p>
        </div>

        <div class="team-grid">
            {#each teamMembers as member}
                <div class="team-card">
                    <div class="member-image">
                        <img src={member.image} alt={member.name} />
                        <div class="member-overlay">
                            <div class="social-links">
                                {#if member.linkedin}
                                    <a href={member.linkedin} class="social-link linkedin" aria-label="LinkedIn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                {/if}
                                {#if member.twitter}
                                    <a href={member.twitter} class="social-link twitter" aria-label="Twitter">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                {/if}
                                {#if member.github}
                                    <a href={member.github} class="social-link github" aria-label="GitHub">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </div>
                    
                    <div class="member-info">
                        <h3 class="member-name">{member.name}</h3>
                        <p class="member-role">{member.role}</p>
                        <p class="member-bio">{member.bio}</p>
                        
                        <div class="member-expertise">
                            {#each member.expertise as skill}
                                <span class="expertise-tag">{skill}</span>
                            {/each}
                        </div>
                        
                        <div class="member-stats">
                            <div class="stat">
                                <span class="stat-number">{member.publications}</span>
                                <span class="stat-label">Publications</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">{member.projects}</span>
                                <span class="stat-label">Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="team-cta">
            <h3 class="cta-title">Join Our Research Team</h3>
            <p class="cta-description">
                We're always looking for talented researchers, engineers, and scientists 
                who are passionate about advancing AI for the benefit of humanity.
            </p>
            <div class="cta-buttons">
                <button class="btn-primary" on:click={() => console.log('View Open Positions clicked')}>
                    View Open Positions
                </button>
                <button class="btn-secondary" on:click={() => console.log('Contact Us clicked')}>
                    Contact Us
                </button>
            </div>
        </div>
    </div>
</section>

<style>
    .team {
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

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .team-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .team-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: #d1d5db;
    }

    .member-image {
        position: relative;
        height: 250px;
        overflow: hidden;
    }

    .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .team-card:hover .member-image img {
        transform: scale(1.05);
    }

    .member-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9));
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .team-card:hover .member-overlay {
        opacity: 1;
    }

    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-link {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .social-link:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .member-info {
        padding: 2rem;
    }

    .member-name {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }

    .member-role {
        font-size: 1rem;
        color: #3b82f6;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .member-bio {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .member-expertise {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .expertise-tag {
        font-size: 0.75rem;
        background: #f3f4f6;
        color: #374151;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 500;
    }

    .member-stats {
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

    .stat-label {
        font-size: 0.75rem;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .team-cta {
        text-align: center;
        padding: 3rem;
        background: #f8fafc;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
    }

    .cta-title {
        font-size: 2rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .cta-description {
        font-size: 1.125rem;
        color: #6b7280;
        margin-bottom: 2rem;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
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
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .btn-secondary {
        background: transparent;
        color: #6b7280;
        border: 2px solid #e5e7eb;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-size: 0.875rem;
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
        .team {
            padding: 4rem 1rem;
        }

        .section-title {
            font-size: 2.5rem;
        }

        .section-subtitle {
            font-size: 1.125rem;
        }

        .team-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .member-info {
            padding: 1.5rem;
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