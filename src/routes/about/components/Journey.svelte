<script lang="ts">
    import { onMount } from 'svelte';
    import { ArrowRight } from 'lucide-svelte';
    
    let isVisible = false;
    let journeyRef: HTMLElement;

    function checkVisibility() {
        if (journeyRef) {
            const rect = journeyRef.getBoundingClientRect();
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

<section class="journey-section" id="journey" bind:this={journeyRef}>
    <div class="container">
        <div class="section-header" class:visible={isVisible}>
            <h2 class="section-title">What's Next?</h2>
        </div>
        
        <div class="journey-content" class:visible={isVisible}>
            <div class="journey-text">
                <p>
                    We're currently in a phase of reflection and growth. Taking time to understand what works, what doesn't, and how we can build technology that truly serves people.
                </p>
                <p>
                    When we return, it won't be with grand promises or inflated claims. It'll be with honest work, real solutions, and a commitment to doing things the right way—even if it's the harder way.
                </p>
            </div>
            
            <div class="cta-section">
                <h3>Want to Stay Updated?</h3>
                <p>Follow our journey and be the first to know when we're back.</p>
                <div class="cta-buttons">
                    <a href="/join-us" class="cta-button primary">
                        <span>Join Our Community</span>
                        <ArrowRight size={20} />
                    </a>
                    <a href="/#contact" class="cta-button secondary">
                        <span>Get in Touch</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .journey-section {
        padding: 6rem 0;
        background: #0a0a0a;
        color: white;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }

    .section-header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        color: #ffffff;
    }

    .journey-content {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease 0.3s;
    }

    .journey-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .journey-text {
        margin-bottom: 4rem;
    }

    .journey-text p {
        font-size: 1.25rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
    }

    .cta-section {
        text-align: center;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
    }

    .cta-section h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .cta-section > p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 2rem;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }

    .cta-button.primary {
        background: #ffffff;
        color: #0a0a0a;
    }

    .cta-button.primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }

    .cta-button.secondary {
        background: transparent;
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .cta-button.secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        .journey-section {
            padding: 4rem 0;
        }

        .container {
            padding: 0 1.5rem;
        }

        .journey-text p {
            font-size: 1.1rem;
        }

        .cta-section {
            padding: 2rem 1.5rem;
        }

        .cta-section h3 {
            font-size: 1.75rem;
        }

        .cta-buttons {
            flex-direction: column;
        }

        .cta-button {
            width: 100%;
            justify-content: center;
        }
    }
</style>
