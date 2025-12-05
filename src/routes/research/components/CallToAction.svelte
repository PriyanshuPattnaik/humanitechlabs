<script lang="ts">
    import { onMount } from 'svelte';
    import { ArrowRight, Mail } from 'lucide-svelte';
    
    let isVisible = false;
    let ctaRef: HTMLElement;

    function checkVisibility() {
        if (ctaRef) {
            const rect = ctaRef.getBoundingClientRect();
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

<section class="cta-section" bind:this={ctaRef}>
    <div class="container">
        <div class="cta-content" class:visible={isVisible}>
            <h2 class="cta-title">Interested in Research Collaboration?</h2>
            <p class="cta-description">
                While we're currently on a strategic break, we're always open to hearing about interesting research ideas and potential collaborations. Reach out and let's explore possibilities together.
            </p>
            <div class="cta-buttons">
                <a href="/join-us" class="cta-button primary">
                    <span>Join Our Community</span>
                    <ArrowRight size={20} />
                </a>
                <a href="/#contact" class="cta-button secondary">
                    <Mail size={20} />
                    <span>Get in Touch</span>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .cta-section {
        padding: 6rem 0;
        background: #0a0a0a;
        color: white;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .cta-content {
        text-align: center;
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease;
    }

    .cta-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .cta-title {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 1.5rem;
    }

    .cta-description {
        font-size: 1.25rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 3rem;
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
        .cta-section {
            padding: 4rem 0;
        }

        .container {
            padding: 0 1.5rem;
        }

        .cta-description {
            font-size: 1.1rem;
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
