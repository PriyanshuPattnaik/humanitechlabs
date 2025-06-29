<script lang="ts">
    type Publication = {
        id: string;
        title: string;
        authors: string[];
        abstract: string;
        date: string;
        venue: string;
        tags: string[];
        pdfUrl?: string;
        codeUrl?: string;
        demoUrl?: string;
    };
    
    const publications: Publication[] = [
        {
            id: 'ai-safety-framework',
            title: 'A Comprehensive Framework for AI Safety and Alignment',
            authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Dr. Emily Watson'],
            abstract: 'We present a novel framework for ensuring AI systems remain safe and aligned with human values throughout their development and deployment lifecycle.',
            date: '2024-01-15',
            venue: 'Nature Machine Intelligence',
            tags: ['AI Safety', 'Alignment', 'Framework'],
            pdfUrl: '#',
            codeUrl: '#',
            demoUrl: '#'
        },
        {
            id: 'multimodal-understanding',
            title: 'Unified Multimodal Understanding: Bridging Text, Vision, and Audio',
            authors: ['Dr. Alex Kim', 'Dr. Lisa Park', 'Prof. David Thompson'],
            abstract: 'This paper introduces a unified approach to multimodal AI that can seamlessly process and understand text, images, and audio simultaneously.',
            date: '2023-12-20',
            venue: 'ICML 2024',
            tags: ['Multimodal AI', 'Computer Vision', 'NLP'],
            pdfUrl: '#',
            codeUrl: '#'
        },
        {
            id: 'robust-ml-systems',
            title: 'Building Robust Machine Learning Systems for Real-World Deployment',
            authors: ['Dr. James Wilson', 'Dr. Maria Garcia', 'Prof. Robert Lee'],
            abstract: 'We propose novel techniques for creating machine learning systems that are robust, reliable, and perform consistently in real-world environments.',
            date: '2023-11-10',
            venue: 'NeurIPS 2023',
            tags: ['Robustness', 'Deployment', 'Reliability'],
            pdfUrl: '#',
            codeUrl: '#'
        },
        {
            id: 'human-ai-collaboration',
            title: 'Designing Effective Human-AI Collaboration Interfaces',
            authors: ['Dr. Rachel Green', 'Dr. Tom Brown', 'Prof. Amanda White'],
            abstract: 'This research explores how to design AI interfaces that enhance human capabilities and enable effective collaboration between humans and AI systems.',
            date: '2023-10-05',
            venue: 'CHI 2024',
            tags: ['HCI', 'AI Interfaces', 'Collaboration'],
            pdfUrl: '#',
            demoUrl: '#'
        },
        {
            id: 'ai-for-healthcare',
            title: 'AI-Powered Healthcare: From Diagnosis to Treatment Planning',
            authors: ['Dr. Kevin Johnson', 'Dr. Sophia Lee', 'Prof. William Davis'],
            abstract: 'We demonstrate how AI can be effectively applied to healthcare challenges, from early disease detection to personalized treatment recommendations.',
            date: '2023-09-18',
            venue: 'Nature Medicine',
            tags: ['Healthcare', 'Medical AI', 'Diagnosis'],
            pdfUrl: '#',
            codeUrl: '#'
        },
        {
            id: 'sustainable-ai',
            title: 'Towards Sustainable AI: Energy-Efficient Training and Inference',
            authors: ['Dr. Emma Wilson', 'Dr. Carlos Martinez', 'Prof. Jennifer Adams'],
            abstract: 'This work addresses the environmental impact of AI systems by developing energy-efficient training and inference methods.',
            date: '2023-08-22',
            venue: 'ICLR 2024',
            tags: ['Sustainability', 'Energy Efficiency', 'Green AI'],
            pdfUrl: '#',
            codeUrl: '#'
        }
    ];

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
</script>

<section class="publications">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Latest Publications</h2>
            <p class="section-subtitle">
                Our research team regularly publishes cutting-edge work in top-tier conferences and journals. 
                Explore our latest contributions to the field of artificial intelligence.
            </p>
        </div>

        <div class="publications-grid">
            {#each publications as publication}
                <article class="publication-card">
                    <div class="publication-header">
                        <div class="publication-meta">
                            <span class="publication-date">{formatDate(publication.date)}</span>
                            <span class="publication-venue">{publication.venue}</span>
                        </div>
                        <div class="publication-tags">
                            {#each publication.tags as tag}
                                <span class="tag">{tag}</span>
                            {/each}
                        </div>
                    </div>
                    
                    <h3 class="publication-title">{publication.title}</h3>
                    
                    <div class="publication-authors">
                        {#each publication.authors as author, index}
                            <span class="author">{author}{index < publication.authors.length - 1 ? ', ' : ''}</span>
                        {/each}
                    </div>
                    
                    <p class="publication-abstract">{publication.abstract}</p>
                    
                    <div class="publication-links">
                        {#if publication.pdfUrl}
                            <a href={publication.pdfUrl} class="link-btn pdf-link">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M14 2H2C1.45 2 1 2.45 1 3V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V3C15 2.45 14.55 2 14 2ZM14 13H2V3H14V13Z" fill="currentColor"/>
                                    <path d="M4 5H12V6H4V5ZM4 7H12V8H4V7ZM4 9H10V10H4V9Z" fill="currentColor"/>
                                </svg>
                                PDF
                            </a>
                        {/if}
                        
                        {#if publication.codeUrl}
                            <a href={publication.codeUrl} class="link-btn code-link">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M8 1L1 8L8 15L9.4 13.6L3.8 8L9.4 2.4L8 1ZM8 1L15 8L8 15L6.6 13.6L12.2 8L6.6 2.4L8 1Z" fill="currentColor"/>
                                </svg>
                                Code
                            </a>
                        {/if}
                        
                        {#if publication.demoUrl}
                            <a href={publication.demoUrl} class="link-btn demo-link">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1ZM8 13C5.24 13 3 10.76 3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13Z" fill="currentColor"/>
                                    <path d="M6 6L10 8L6 10V6Z" fill="currentColor"/>
                                </svg>
                                Demo
                            </a>
                        {/if}
                    </div>
                </article>
            {/each}
        </div>

        <div class="publications-cta">
            <p class="cta-text">Want to explore more of our research?</p>
            <div class="cta-buttons">
                <button class="btn-primary" on:click={() => console.log('View All Publications clicked')}>
                    View All Publications
                </button>
                <button class="btn-secondary" on:click={() => console.log('Subscribe to Updates clicked')}>
                    Subscribe to Updates
                </button>
            </div>
        </div>
    </div>
</section>

<style>
    .publications {
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
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .publications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .publication-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .publication-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: #d1d5db;
    }

    .publication-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .publication-meta {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .publication-date {
        font-size: 0.875rem;
        color: #6b7280;
        font-weight: 500;
    }

    .publication-venue {
        font-size: 0.875rem;
        color: #3b82f6;
        font-weight: 600;
    }

    .publication-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag {
        font-size: 0.75rem;
        background: #f3f4f6;
        color: #374151;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 500;
    }

    .publication-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.75rem;
        line-height: 1.4;
    }

    .publication-authors {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 1rem;
        font-style: italic;
    }

    .publication-abstract {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .publication-links {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .link-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 1px solid transparent;
    }

    .pdf-link {
        background: #fee2e2;
        color: #dc2626;
        border-color: #fecaca;
    }

    .pdf-link:hover {
        background: #fecaca;
        color: #b91c1c;
    }

    .code-link {
        background: #dbeafe;
        color: #2563eb;
        border-color: #bfdbfe;
    }

    .code-link:hover {
        background: #bfdbfe;
        color: #1d4ed8;
    }

    .demo-link {
        background: #dcfce7;
        color: #16a34a;
        border-color: #bbf7d0;
    }

    .demo-link:hover {
        background: #bbf7d0;
        color: #15803d;
    }

    .publications-cta {
        text-align: center;
        padding: 3rem;
        background: #ffffff;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
    }

    .cta-text {
        font-size: 1.125rem;
        color: #6b7280;
        margin-bottom: 1.5rem;
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
        .publications {
            padding: 4rem 1rem;
        }

        .section-title {
            font-size: 2.5rem;
        }

        .section-subtitle {
            font-size: 1.125rem;
        }

        .publications-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .publication-card {
            padding: 1.5rem;
        }

        .publication-header {
            flex-direction: column;
            align-items: flex-start;
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