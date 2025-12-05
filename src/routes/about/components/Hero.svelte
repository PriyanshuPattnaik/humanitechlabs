<script lang="ts">
    import { onMount } from 'svelte';
    import { AlertCircle } from 'lucide-svelte';
    
    let isLoaded = false;
    
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 100);
    });

    const scrollToStory = () => {
        document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
    };
</script>

<section class="hero">
    <!-- Notification Banner -->
    <div class="notification-banner" class:visible={isLoaded}>
        <div class="banner-content">
            <AlertCircle size={20} />
            <div class="banner-text">
                <strong>Humanitech Labs is currently on a strategic break.</strong>
                <span>We're refining our approach and will return stronger. Stay tuned!</span>
            </div>
        </div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content" class:loaded={isLoaded}>
        <div class="content-wrapper">
            <h1 class="hero-title">
                <span class="title-line">About Humanitech Labs</span>
            </h1>
            
            <p class="hero-subtitle">
                We're not just another tech lab. We're a small team with big dreams—building technology that actually matters, solving problems that actually exist, and creating impact that actually lasts.
            </p>
            
            <button class="cta-button" on:click={scrollToStory}>
                <span class="button-text">Our Story</span>
                <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </button>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        padding-top: 8rem;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        color: #0a0a0a;
    }

    .notification-banner {
        position: absolute;
        top: 6rem;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        max-width: 800px;
        width: calc(100% - 2rem);
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 10;
        margin-bottom: 2rem;
    }

    .notification-banner.visible {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }

    .banner-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.5rem;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .banner-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.9rem;
        color: #0a0a0a;
    }

    .banner-text strong {
        font-weight: 600;
    }

    .banner-text span {
        font-size: 0.85rem;
        opacity: 0.7;
    }

    .hero-content {
        position: relative;
        z-index: 5;
        text-align: center;
        max-width: 900px;
        padding: 0 2rem;
        margin-top: 5rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease-out;
    }

    .hero-content.loaded {
        opacity: 1;
        transform: translateY(0);
    }

    .content-wrapper {
        padding: 2rem;
    }

    .hero-title {
        font-size: clamp(2.5rem, 6vw, 5rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
    }

    .title-line {
        display: block;
        color: #0a0a0a;
    }

    .hero-subtitle {
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
        max-width: 700px;
        margin: 0 auto 3rem auto;
        color: #333;
        line-height: 1.6;
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #ffffff;
        background: #0a0a0a;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .button-text {
        position: relative;
        z-index: 2;
    }

    .button-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }

    .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover .button-icon {
        transform: translateY(3px);
    }

    @media (max-width: 768px) {
        .hero {
            min-height: 80vh;
            padding: 1rem;
            padding-top: 6rem;
        }

        .notification-banner {
            top: 5rem;
            width: calc(100% - 1rem);
        }

        .banner-content {
            padding: 0.875rem 1rem;
            gap: 0.75rem;
        }

        .banner-text {
            font-size: 0.85rem;
        }

        .banner-text span {
            font-size: 0.8rem;
        }

        .hero-content {
            margin-top: 3rem;
        }

        .content-wrapper {
            padding: 1rem;
        }

        .hero-subtitle {
            margin-bottom: 2rem;
        }
    }
</style>
