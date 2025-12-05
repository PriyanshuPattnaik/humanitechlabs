<script lang="ts">
    import { onMount } from 'svelte';
    
    let showContact = false;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;
    let contactRef: HTMLElement;

    onMount(() => {
        setTimeout(() => {
            showContact = true;
        }, 3700);

        // Mouse tracking for interactive effects
        const handleMouseMove = (e: MouseEvent) => {
            if (contactRef) {
                const rect = contactRef.getBoundingClientRect();
                mouseX = ((e.clientX - rect.left) / rect.width) * 100;
                mouseY = ((e.clientY - rect.top) / rect.height) * 100;
            }
        };

        const handleMouseEnter = () => {
            isHovered = true;
        };

        const handleMouseLeave = () => {
            isHovered = false;
        };

        if (contactRef) {
            contactRef.addEventListener('mousemove', handleMouseMove);
            contactRef.addEventListener('mouseenter', handleMouseEnter);
            contactRef.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (contactRef) {
                contactRef.removeEventListener('mousemove', handleMouseMove);
                contactRef.removeEventListener('mouseenter', handleMouseEnter);
                contactRef.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    });
</script>

<svelte:window bind:scrollY />

<section class="contact-section" id="contact" bind:this={contactRef}>
    <!-- Dynamic Background Elements -->
    <div class="background-grid"></div>
    <div class="metallic-orb" style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02}px) translateY({scrollY * 0.1}px)"></div>
    <div class="floating-particles">
        {#each Array(15) as _, i}
            <div class="particle" style="animation-delay: {i * 0.3}s;"></div>
        {/each}
    </div>

    <!-- Interactive Light Beam -->
    <div class="light-beam" 
         class:active={isHovered}
         style="background: radial-gradient(ellipse at {mouseX}% {mouseY}%, rgba(255,255,255,0.1) 0%, transparent 50%);">
    </div>

    <div class="container">
        <div class="section-header" class:visible={showContact}>
            <h2 class="section-title">
                <span class="title-line">Let's Build Something</span>
                <span class="title-line highlight">Meaningful Together</span>
            </h2>
            <div class="title-underline"></div>
        </div>

        <div class="contact-content" class:visible={showContact}>
            <p class="section-description">
                Whether you're a nonprofit looking to scale your impact, a researcher exploring new frontiers, 
                or a developer passionate about making a difference—we want to hear from you.
            </p>
            
            <div class="contact-grid">
                <div class="contact-card" data-card="1">
                    <div class="card-glow"></div>
                    <div class="card-border"></div>
                    <div class="card-content">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                        <h3>Partner With Us</h3>
                        <p>Join our network of organizations creating positive change through technology.</p>
                        <a href="/join-us" class="contact-link">
                            <span>Start a Conversation</span>
                            <div class="link-arrow">→</div>
                        </a>
                    </div>
                </div>

                <div class="contact-card" data-card="2">
                    <div class="card-glow"></div>
                    <div class="card-border"></div>
                    <div class="card-content">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <circle cx="12" cy="12" r="5"/>
                                <path d="M12 1v6m0 6v6"/>
                                <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
                                <path d="M1 12h6m6 0h6"/>
                                <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
                            </svg>
                        </div>
                        <h3>Share Your Ideas</h3>
                        <p>Have a project in mind? Let's explore how we can bring it to life together.</p>
                        <a href="/join-us" class="contact-link">
                            <span>Pitch Your Project</span>
                            <div class="link-arrow">→</div>
                        </a>
                    </div>
                </div>

                <div class="contact-card" data-card="3">
                    <div class="card-glow"></div>
                    <div class="card-border"></div>
                    <div class="card-content">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                            </svg>
                        </div>
                        <h3>Join Our Team</h3>
                        <p>Looking for a place where your work makes a real difference? We're always growing.</p>
                        <a href="/join-us" class="contact-link">
                            <span>View Opportunities</span>
                            <div class="link-arrow">→</div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="contact-cta">
                <div class="cta-glow"></div>
                <div class="cta-content">
                    <p>Ready to make an impact?</p>
                    <a href="/join-us" class="cta-button">
                        <span>Get in Touch</span>
                        <div class="button-shine"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --color-white: #ffffff;
        --color-black: #000000;
        --color-silver: #c0c0c0;
        --color-metallic: #8e8e93;
        --spacing-sm: 1rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
    }

    .contact-section {
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
        padding: 8rem 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    /* Background Elements */
    .background-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-move 20s linear infinite;
    }

    .metallic-orb {
        position: absolute;
        top: 20%;
        right: 10%;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(142,142,147,0.4) 40%, transparent 70%);
        border-radius: 50%;
        filter: blur(60px);
        animation: orb-float 8s ease-in-out infinite;
    }

    .floating-particles {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(0,0,0,0.1);
        border-radius: 50%;
        animation: particle-float 15s linear infinite;
    }

    .particle:nth-child(odd) {
        background: rgba(255,255,255,0.6);
        animation-duration: 12s;
    }

    .light-beam {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    .light-beam.active {
        opacity: 1;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 2;
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(60px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section-header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        color: var(--color-black);
        line-height: 1.2;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .title-line {
        display: block;
        transform: translateX(-100px);
        opacity: 0;
        animation: title-slide 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .title-line:nth-child(2) {
        animation-delay: 0.2s;
    }

    .title-line.highlight {
        background: linear-gradient(135deg, #000 0%, #666 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        position: relative;
    }

    .title-underline {
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, transparent 0%, #000 50%, transparent 100%);
        margin: 0 auto;
        border-radius: 2px;
        transform: scaleX(0);
        animation: underline-expand 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
    }

    .contact-content {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
    }

    .contact-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-description {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 4rem auto;
        font-size: 1.25rem;
        color: var(--color-black);
        opacity: 0.8;
        line-height: 1.8;
        font-weight: 300;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .contact-card {
        position: relative;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        padding: 0;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(20px);
        opacity: 0;
        animation: card-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .contact-card:nth-child(2) {
        animation-delay: 0.2s;
    }

    .contact-card:nth-child(3) {
        animation-delay: 0.4s;
    }

    .card-glow {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
        border-radius: 24px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .card-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 24px;
        transition: border-color 0.3s ease;
    }

    .contact-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }

    .contact-card:hover .card-glow {
        opacity: 1;
    }

    .contact-card:hover .card-border {
        border-color: rgba(0,0,0,0.2);
    }

    .card-content {
        padding: 2.5rem;
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: 20px;
        margin-bottom: 1.5rem;
        color: var(--color-black);
        transition: all 0.3s ease;
    }

    .contact-card:hover .card-icon {
        transform: scale(1.1) rotate(5deg);
        background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.2) 100%);
    }

    .contact-card h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--color-black);
    }

    .contact-card p {
        font-size: 1rem;
        color: var(--color-black);
        opacity: 0.7;
        line-height: 1.6;
        margin-bottom: 2rem;
        font-weight: 300;
    }

    .contact-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-black);
        text-decoration: none;
        font-weight: 600;
        padding: 1rem 1.5rem;
        border: 2px solid rgba(0,0,0,0.1);
        border-radius: 12px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
    }

    .contact-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
        transition: left 0.5s ease;
    }

    .contact-link:hover::before {
        left: 100%;
    }

    .contact-link:hover {
        background: var(--color-black);
        color: var(--color-white);
        border-color: var(--color-black);
        transform: translateY(-2px);
    }

    .link-arrow {
        transition: transform 0.3s ease;
    }

    .contact-link:hover .link-arrow {
        transform: translateX(4px);
    }

    .contact-cta {
        position: relative;
        text-align: center;
        padding: 3rem;
        background: rgba(0,0,0,0.02);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 32px;
        backdrop-filter: blur(10px);
        overflow: hidden;
    }

    .cta-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: glow-rotate 10s linear infinite;
    }

    .cta-content {
        position: relative;
        z-index: 2;
    }

    .contact-cta p {
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: var(--color-black);
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--color-black);
        color: var(--color-white);
        text-decoration: none;
        font-weight: 600;
        padding: 1.25rem 2.5rem;
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
        font-size: 1.1rem;
    }

    .button-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
        transition: left 0.6s ease;
    }

    .cta-button:hover .button-shine {
        left: 100%;
    }

    .cta-button:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }

    /* Animations */
    @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }

    @keyframes orb-float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -20px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
    }

    @keyframes particle-float {
        0% {
            transform: translate(0, 100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(100px, -100px) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes title-slide {
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes underline-expand {
        to {
            transform: scaleX(1);
        }
    }

    @keyframes card-reveal {
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes glow-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .contact-section {
            padding: 4rem 0;
        }

        .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .section-description {
            font-size: 1.1rem;
        }

        .contact-cta p {
            font-size: 1.5rem;
        }

        .card-content {
            padding: 2rem;
        }

        .contact-cta {
            padding: 2rem;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 0 1rem;
        }

        .section-title {
            font-size: 2rem;
        }

        .metallic-orb {
            width: 250px;
            height: 250px;
        }
    }
</style>