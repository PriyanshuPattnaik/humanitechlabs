<script lang="ts">
    import { onMount } from 'svelte';
    
    let isVisible = false;
    let storyRef: HTMLElement;

    function checkVisibility() {
        if (storyRef) {
            const rect = storyRef.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.7 && !isVisible) {
                isVisible = true;
            }
        }
    }
    
    onMount(() => {
        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
        
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    });
</script>

<section class="story-section" id="story" bind:this={storyRef}>
    <div class="container">
        <div class="title-container">
            <h2 class="section-title" class:visible={isVisible}>
                The Beginning
            </h2>
        </div>
        
        <div class="story-content" class:visible={isVisible}>
            <div class="story-paragraph">
                <p>
                    Humanitech Labs started with a simple question: <strong>What if technology could be more human?</strong>
                </p>
            </div>
            
            <div class="story-paragraph">
                <p>
                    We're not backed by venture capital. We don't have fancy offices or hundreds of employees. What we have is a genuine belief that technology should solve real problems for real people—not just chase the next trend or buzzword.
                </p>
            </div>
            
            <div class="story-paragraph">
                <p>
                    Right now, we're taking a strategic break to refine our approach, learn from our experiences, and come back with solutions that truly matter. Because rushing to build something isn't as important as building the <em>right</em> thing.
                </p>
            </div>
        </div>
        
        <div class="values-grid" class:visible={isVisible}>
            <div class="value-card">
                <div class="value-content">
                    <h3>Research-Driven</h3>
                    <p>We explore emerging technologies and their potential for social impact</p>
                </div>
            </div>
            
            <div class="value-card">
                <div class="value-content">
                    <h3>Open Source</h3>
                    <p>Transparency and collaboration are at the heart of everything we build</p>
                </div>
            </div>
            
            <div class="value-card">
                <div class="value-content">
                    <h3>Impact-Focused</h3>
                    <p>Technology that creates meaningful change, not just impressive demos</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .story-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
        min-height: 80vh;
        display: flex;
        align-items: center;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .title-container {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        color: #0a0a0a;
        margin-bottom: 1rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .section-title.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .story-content {
        max-width: 800px;
        margin: 0 auto 4rem auto;
    }

    .story-paragraph {
        margin-bottom: 2rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .story-content.visible .story-paragraph:nth-child(1) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
    }

    .story-content.visible .story-paragraph:nth-child(2) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.4s;
    }

    .story-content.visible .story-paragraph:nth-child(3) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.6s;
    }

    .story-content p {
        font-size: 1.25rem;
        line-height: 1.8;
        color: #333;
        margin: 0;
    }

    .story-content strong {
        color: #0a0a0a;
        font-weight: 600;
    }

    .story-content em {
        font-style: italic;
        color: #0a0a0a;
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 4rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.8s;
    }

    .values-grid.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .value-card {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        padding: 2rem;
        transition: all 0.3s ease;
    }

    .value-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 0, 0, 0.2);
    }

    .value-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0a0a0a;
        margin-bottom: 0.75rem;
    }

    .value-content p {
        font-size: 1rem;
        line-height: 1.6;
        color: #666;
    }

    @media (max-width: 768px) {
        .story-section {
            padding: 4rem 0;
        }

        .container {
            padding: 0 1.5rem;
        }

        .story-content p {
            font-size: 1.1rem;
        }

        .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }
</style>
