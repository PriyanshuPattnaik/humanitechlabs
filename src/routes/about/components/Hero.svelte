<script lang="ts">
    import { onMount } from 'svelte';
    
    // Types
    interface Particle {
        id: number;
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        delay: number;
        opacity: number;
    }

    interface FloatingElement {
        id: number;
        x: number;
        y: number;
        rotation: number;
        scale: number;
        speed: number;
    }

    // Particle system
    let particles: Particle[] = [];
    let floatingElements: FloatingElement[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let heroRef: HTMLElement;
    let isLoaded = false;
    
    onMount(() => {
        // Initialize particles with more dynamic properties
        particles = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 4,
            opacity: Math.random() * 0.8 + 0.2
        }));

        // Initialize floating geometric elements
        floatingElements = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotation: Math.random() * 360,
            scale: Math.random() * 0.8 + 0.3,
            speed: Math.random() * 0.3 + 0.1
        }));

        // Trigger entrance animations
        setTimeout(() => {
            isLoaded = true;
        }, 100);

        // Mouse tracking for parallax effect
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef) {
                const rect = heroRef.getBoundingClientRect();
                mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
                mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
            }
        };

        // Animate particles
        const animateParticles = () => {
            particles = particles.map(particle => ({
                ...particle,
                x: (particle.x + particle.vx + 100) % 100,
                y: (particle.y + particle.vy + 100) % 100
            }));
        };

        // Animate floating elements
        const animateElements = () => {
            floatingElements = floatingElements.map(element => ({
                ...element,
                rotation: (element.rotation + element.speed) % 360
            }));
        };

        document.addEventListener('mousemove', handleMouseMove);
        const particleInterval = setInterval(animateParticles, 100);
        const elementInterval = setInterval(animateElements, 50);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearInterval(particleInterval);
            clearInterval(elementInterval);
        };
    });

    // Scroll to impact section
    const scrollToImpact = () => {
        document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
    };
</script>

<section class="hero" bind:this={heroRef}>
    <!-- Animated Background Grid -->
    <div class="grid-background"></div>
    
    <!-- Dynamic Particles -->
    <div class="particles">
        {#each particles as particle (particle.id)}
            <div 
                class="particle" 
                style="
                    left: {particle.x}%; 
                    top: {particle.y}%; 
                    width: {particle.size}px;
                    height: {particle.size}px;
                    opacity: {particle.opacity};
                    animation-delay: {particle.delay}s;
                    transform: translate3d({mouseX * 0.02}px, {mouseY * 0.02}px, 0);
                "
            ></div>
        {/each}
    </div>

    <!-- Floating Geometric Elements -->
    <div class="floating-elements">
        {#each floatingElements as element (element.id)}
            <div 
                class="floating-element"
                style="
                    left: {element.x}%;
                    top: {element.y}%;
                    transform: translate(-50%, -50%) 
                               rotate({element.rotation}deg) 
                               scale({element.scale})
                               translate3d({mouseX * 0.01}px, {mouseY * 0.01}px, 0);
                "
            >
                <div class="geometric-shape"></div>
            </div>
        {/each}
    </div>

    <!-- Gradient Orbs -->
    <div class="gradient-orbs">
        <div class="orb orb-1" style="transform: translate3d({mouseX * 0.03}px, {mouseY * 0.03}px, 0);"></div>
        <div class="orb orb-2" style="transform: translate3d({mouseX * -0.02}px, {mouseY * -0.02}px, 0);"></div>
        <div class="orb orb-3" style="transform: translate3d({mouseX * 0.01}px, {mouseY * 0.04}px, 0);"></div>
    </div>

    <!-- Metallic Bars -->
    <div class="metallic-bars">
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content" class:loaded={isLoaded}>
        <div class="content-wrapper">
            <h1 class="hero-title">
                <span class="title-line">We Don't Just Build Technology—</span>
                <span class="title-highlight">We Build Hope</span>
            </h1>
            
            <p class="hero-subtitle">
                At Humanitech Labs, every line of code carries purpose, every algorithm serves humanity, and every innovation bridges the gap between what is and what could be.
            </p>
            
            <button class="cta-button" on:click={scrollToImpact}>
                <span class="button-text">Discover Our Impact</span>
                <div class="button-bg"></div>
                <div class="button-shine"></div>
            </button>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
    </div>
</section>

<style>
    :root {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-silver: #c0c0c0;
        --color-metallic: #8a8a8a;
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 2rem;
        --spacing-lg: 3rem;
        --transition-fast: all 0.3s ease;
        --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .hero {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
        color: var(--color-black);
    }

    .grid-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: gridMove 20s linear infinite;
        z-index: 1;
    }

    @keyframes gridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(60px, 60px); }
    }

    .particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .particle {
        position: absolute;
        background: linear-gradient(45deg, var(--color-silver), var(--color-metallic));
        border-radius: 50%;
        animation: particleFloat 8s ease-in-out infinite;
        box-shadow: 0 0 10px rgba(192, 192, 192, 0.3);
    }

    @keyframes particleFloat {
        0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.3;
        }
        50% { 
            transform: translateY(-30px) scale(1.2);
            opacity: 0.8;
        }
    }

    .floating-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .floating-element {
        position: absolute;
        animation: elementFloat 12s ease-in-out infinite;
    }

    .geometric-shape {
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, transparent, rgba(192, 192, 192, 0.2), transparent);
        border: 1px solid rgba(192, 192, 192, 0.3);
        backdrop-filter: blur(10px);
    }

    @keyframes elementFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }

    .gradient-orbs {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }

    .orb {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(192, 192, 192, 0.1) 0%, transparent 70%);
        filter: blur(40px);
        animation: orbPulse 6s ease-in-out infinite;
    }

    .orb-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        right: 15%;
        animation-delay: 0s;
    }

    .orb-2 {
        width: 200px;
        height: 200px;
        bottom: 20%;
        left: 10%;
        animation-delay: 2s;
    }

    .orb-3 {
        width: 150px;
        height: 150px;
        top: 60%;
        right: 60%;
        animation-delay: 4s;
    }

    @keyframes orbPulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
    }

    .metallic-bars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .bar {
        position: absolute;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(192, 192, 192, 0.1) 20%, 
            rgba(192, 192, 192, 0.3) 50%, 
            rgba(192, 192, 192, 0.1) 80%, 
            transparent 100%
        );
        animation: barSlide 8s ease-in-out infinite;
    }

    .bar-1 {
        width: 2px;
        height: 100%;
        left: 25%;
        animation-delay: 0s;
    }

    .bar-2 {
        width: 100%;
        height: 2px;
        top: 30%;
        animation-delay: 2s;
    }

    .bar-3 {
        width: 1px;
        height: 100%;
        right: 35%;
        animation-delay: 4s;
    }

    @keyframes barSlide {
        0%, 100% { opacity: 0; transform: scaleY(0); }
        50% { opacity: 1; transform: scaleY(1); }
    }

    .hero-content {
        position: relative;
        z-index: 10;
        text-align: center;
        max-width: 1200px;
        padding: 0 var(--spacing-md);
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease-out;
    }

    .hero-content.loaded {
        opacity: 1;
        transform: translateY(0);
    }

    .content-wrapper {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        padding: var(--spacing-lg);
        border: 1px solid rgba(192, 192, 192, 0.1);
    }

    .hero-title {
        font-size: clamp(2rem, 5vw, 5rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: var(--spacing-md);
        letter-spacing: -0.02em;
    }

    .title-line {
        display: block;
        color: var(--color-black);
        animation: titleSlideIn 1s ease-out 0.5s both;
    }

    .title-highlight {
        display: block;
        background: linear-gradient(135deg, var(--color-silver), var(--color-metallic));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: titleSlideIn 1s ease-out 0.8s both, shimmer 3s ease-in-out infinite;
        position: relative;
    }

    @keyframes titleSlideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes shimmer {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
    }

    .hero-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        max-width: 800px;
        margin: 0 auto var(--spacing-lg) auto;
        color: var(--color-black);
        opacity: 0.8;
        line-height: 1.6;
        animation: subtitleFadeIn 1s ease-out 1.2s both;
    }

    @keyframes subtitleFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 0.8;
            transform: translateY(0);
        }
    }

    .cta-button {
        position: relative;
        display: inline-block;
        padding: var(--spacing-sm) var(--spacing-lg);
        border: none;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-white);
        cursor: pointer;
        overflow: hidden;
        transition: all 0.4s ease;
        animation: buttonFadeIn 1s ease-out 1.5s both;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(192, 192, 192, 0.2);
    }

    .button-text {
        position: relative;
        z-index: 3;
        transition: all 0.3s ease;
    }

    .button-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--color-black), var(--color-metallic));
        z-index: 1;
        transition: all 0.4s ease;
    }

    .button-shine {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        z-index: 2;
        transform: rotate(45deg) translateY(-100%);
        transition: transform 0.6s ease;
    }

    .cta-button:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover .button-bg {
        background: linear-gradient(135deg, var(--color-silver), var(--color-white));
    }

    .cta-button:hover .button-text {
        color: var(--color-black);
    }

    .cta-button:hover .button-shine {
        transform: rotate(45deg) translateY(100%);
    }

    @keyframes buttonFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .scroll-indicator {
        position: absolute;
        bottom: var(--spacing-md);
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        animation: scrollBounce 2s ease-in-out infinite;
    }

    .scroll-arrow {
        width: 2px;
        height: 30px;
        background: linear-gradient(to bottom, transparent, var(--color-silver));
        position: relative;
    }

    .scroll-arrow::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid var(--color-silver);
    }

    @keyframes scrollBounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(10px); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .content-wrapper {
            padding: var(--spacing-md);
        }
        
        .hero-title {
            margin-bottom: var(--spacing-sm);
        }
        
        .hero-subtitle {
            margin-bottom: var(--spacing-md);
        }
        
        .orb {
            display: none;
        }
        
        .metallic-bars {
            opacity: 0.5;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: var(--spacing-sm);
        }
        
        .content-wrapper {
            padding: var(--spacing-sm);
        }
    }
</style>