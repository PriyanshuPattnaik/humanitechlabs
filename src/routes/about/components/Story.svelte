<script lang="ts">
    import { onMount } from 'svelte';
    
    let projects = 0, nonprofits = 0, research = 0, openSource = 0;
    let statsAnimated = false;
    let scrollY = 0;
    let mouseX = 0, mouseY = 0;
    let storyRef: HTMLElement;
    let isVisible = false;

    const STATS_TARGETS = {
        projects: 50,
        nonprofits: 25,
        research: 15,
        openSource: 100
    };

    const STATS_INCREMENT = {
        projects: 0.8,
        nonprofits: 0.4,
        research: 0.25,
        openSource: 1.5
    };
    
    function animateStats() {
        if (statsAnimated) return;
        statsAnimated = true;
        
        const interval = setInterval(() => {
            let allComplete = true;
            
            if (projects < STATS_TARGETS.projects) {
                projects = Math.min(projects + STATS_INCREMENT.projects, STATS_TARGETS.projects);
                allComplete = false;
            }
            if (nonprofits < STATS_TARGETS.nonprofits) {
                nonprofits = Math.min(nonprofits + STATS_INCREMENT.nonprofits, STATS_TARGETS.nonprofits);
                allComplete = false;
            }
            if (research < STATS_TARGETS.research) {
                research = Math.min(research + STATS_INCREMENT.research, STATS_TARGETS.research);
                allComplete = false;
            }
            if (openSource < STATS_TARGETS.openSource) {
                openSource = Math.min(openSource + STATS_INCREMENT.openSource, STATS_TARGETS.openSource);
                allComplete = false;
            }
            
            if (allComplete) clearInterval(interval);
        }, 25);
    }

    function handleMouseMove(event: MouseEvent) {
        mouseX = (event.clientX / window.innerWidth) * 100;
        mouseY = (event.clientY / window.innerHeight) * 100;
    }

    function checkVisibility() {
        if (storyRef) {
            const rect = storyRef.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.7 && !isVisible) {
                isVisible = true;
                setTimeout(() => {
                    animateStats();
                }, 300);
            }
        }
    }
    
    onMount(() => {
        checkVisibility();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', checkVisibility);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', checkVisibility);
        };
    });
</script>

<svelte:window bind:scrollY />

<section class="story-section" id="story" bind:this={storyRef}>
    <!-- Animated Background Grid -->
    <div class="grid-background">
        <div class="grid-lines"></div>
    </div>
    
    <!-- Dynamic Cursor Following Light -->
    <div 
        class="cursor-light" 
        style="transform: translate({mouseX * 0.1}px, {mouseY * 0.1}px)"
    ></div>
    
    <!-- Floating Geometric Elements -->
    <div class="geometric-elements">
        <div 
            class="floating-element hexagon" 
            style="transform: translateY({scrollY * -0.3}px) rotate({scrollY * 0.15}deg)"
        ></div>
        <div 
            class="floating-element triangle" 
            style="transform: translateY({scrollY * 0.2}px) rotate({scrollY * -0.12}deg)"
        ></div>
        <div 
            class="floating-element circle" 
            style="transform: translateY({scrollY * -0.15}px) rotate({scrollY * 0.08}deg)"
        ></div>
        <div 
            class="floating-element square" 
            style="transform: translateY({scrollY * 0.25}px) rotate({scrollY * -0.1}deg)"
        ></div>
    </div>

    <!-- Parallax Orbs -->
    <div class="parallax-orbs">
        <div 
            class="orb orb-1" 
            style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02 + scrollY * -0.1}px)"
        ></div>
        <div 
            class="orb orb-2" 
            style="transform: translate({mouseX * -0.015}px, {mouseY * -0.015 + scrollY * 0.08}px)"
        ></div>
        <div 
            class="orb orb-3" 
            style="transform: translate({mouseX * 0.025}px, {mouseY * 0.025 + scrollY * -0.05}px)"
        ></div>
    </div>
    
    <div class="container">
        <div class="title-container">
            <h2 class="section-title" class:visible={isVisible}>
                <span class="title-word">Born</span>
                <span class="title-word">from</span>
                <span class="title-word">Belief,</span>
                <span class="title-break"></span>
                <span class="title-word">Driven</span>
                <span class="title-word">by</span>
                <span class="title-word">Purpose</span>
            </h2>
            <div class="title-underline" class:visible={isVisible}></div>
        </div>
        
        <div class="story-content" class:visible={isVisible}>
            <div class="story-paragraph">
                <p>In a world where technology often feels <span class="highlight">cold and distant</span>, we asked a simple question: What if innovation could feel <span class="highlight-metallic">human again</span>?</p>
            </div>
            <div class="story-paragraph">
                <p>Humanitech Labs was born from the belief that technology isn't just about solving problems—it's about solving the <span class="highlight">right problems</span>, for the <span class="highlight">right people</span>, at the <span class="highlight">right time</span>. We're not another tech company chasing profits; we're a collective of dreamers, builders, and changemakers who see <span class="highlight-metallic">code as poetry</span> and <span class="highlight-metallic">algorithms as instruments of hope</span>.</p>
            </div>
        </div>
        
        <div class="stats-grid" class:visible={isVisible}>
            <div class="stat-card">
                <div class="stat-icon">
                    <div class="icon-projects"></div>
                </div>
                <div class="stat-value">{Math.floor(projects)}+</div>
                <div class="stat-label">Impactful Projects Delivered</div>
                <div class="stat-glow"></div>
                <div class="stat-border-animation"></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <div class="icon-nonprofits"></div>
                </div>
                <div class="stat-value">{Math.floor(nonprofits)}+</div>
                <div class="stat-label">Nonprofits Empowered</div>
                <div class="stat-glow"></div>
                <div class="stat-border-animation"></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <div class="icon-research"></div>
                </div>
                <div class="stat-value">{Math.floor(research)}+</div>
                <div class="stat-label">Research Collaborations</div>
                <div class="stat-glow"></div>
                <div class="stat-border-animation"></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <div class="icon-opensource"></div>
                </div>
                <div class="stat-value">{Math.floor(openSource)}%</div>
                <div class="stat-label">Open Source Commitment</div>
                <div class="stat-glow"></div>
                <div class="stat-border-animation"></div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --color-white: #ffffff;
        --color-black: #000000;
        --color-silver: #c0c0c0;
        --color-metallic: rgba(192, 192, 192, 0.3);
        --color-metallic-bright: rgba(255, 255, 255, 0.8);
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 2rem;
        --spacing-lg: 3rem;
        --spacing-xl: 5rem;
        --transition-normal: all 0.3s ease;
        --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .story-section {
        padding: var(--spacing-xl) 0;
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .grid-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.03;
        pointer-events: none;
        z-index: 1;
    }

    .grid-lines {
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-drift 20s linear infinite;
    }

    @keyframes grid-drift {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }

    .cursor-light {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(192, 192, 192, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
        transition: transform 0.3s ease-out;
    }

    .geometric-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
    }

    .floating-element {
        position: absolute;
        border: 2px solid rgba(192, 192, 192, 0.4);
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
    }

    .hexagon {
        width: 80px;
        height: 80px;
        top: 15%;
        left: 8%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        animation: float-rotate 8s ease-in-out infinite;
    }

    .triangle {
        width: 60px;
        height: 60px;
        top: 70%;
        right: 12%;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        animation: float-pulse 6s ease-in-out infinite;
    }

    .circle {
        width: 100px;
        height: 100px;
        top: 25%;
        right: 20%;
        border-radius: 50%;
        animation: float-glow 10s ease-in-out infinite;
    }

    .square {
        width: 50px;
        height: 50px;
        top: 80%;
        left: 20%;
        border-radius: 8px;
        animation: float-scale 7s ease-in-out infinite;
    }

    @keyframes float-rotate {
        0%, 100% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
    }

    @keyframes float-pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
    }

    @keyframes float-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(192, 192, 192, 0.3); }
        50% { box-shadow: 0 0 40px rgba(192, 192, 192, 0.6); }
    }

    @keyframes float-scale {
        0%, 100% { transform: scale(1) rotate(0deg); }
        33% { transform: scale(1.1) rotate(120deg); }
        66% { transform: scale(0.9) rotate(240deg); }
    }

    .parallax-orbs {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .orb {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(192, 192, 192, 0.2));
        backdrop-filter: blur(20px);
        animation: orb-float 12s ease-in-out infinite;
    }

    .orb-1 {
        width: 200px;
        height: 200px;
        top: 10%;
        left: 70%;
        animation-delay: 0s;
    }

    .orb-2 {
        width: 120px;
        height: 120px;
        top: 60%;
        left: 10%;
        animation-delay: -4s;
    }

    .orb-3 {
        width: 150px;
        height: 150px;
        top: 80%;
        right: 15%;
        animation-delay: -8s;
    }

    @keyframes orb-float {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
        50% { transform: translateY(-20px) scale(1.05); opacity: 0.6; }
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 4;
    }

    .title-container {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        position: relative;
    }

    .section-title {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        font-weight: 800;
        color: var(--color-black);
        margin-bottom: var(--spacing-md);
        line-height: 1.1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.3em;
    }

    .title-word {
        display: inline-block;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .title-break {
        width: 100%;
        height: 0;
    }

    .section-title.visible .title-word {
        opacity: 1;
        transform: translateY(0);
    }

    .section-title.visible .title-word:nth-child(1) { transition-delay: 0.1s; }
    .section-title.visible .title-word:nth-child(2) { transition-delay: 0.2s; }
    .section-title.visible .title-word:nth-child(3) { transition-delay: 0.3s; }
    .section-title.visible .title-word:nth-child(5) { transition-delay: 0.4s; }
    .section-title.visible .title-word:nth-child(6) { transition-delay: 0.5s; }
    .section-title.visible .title-word:nth-child(7) { transition-delay: 0.6s; }

    .title-underline {
        width: 0;
        height: 4px;
        background: linear-gradient(90deg, transparent, var(--color-metallic-bright), transparent);
        margin: 0 auto;
        transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.8s;
    }

    .title-underline.visible {
        width: 200px;
    }

    .story-content {
        max-width: 900px;
        margin: 0 auto var(--spacing-xl) auto;
        text-align: center;
    }

    .story-paragraph {
        margin-bottom: var(--spacing-lg);
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .story-content.visible .story-paragraph:nth-child(1) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1s;
    }

    .story-content.visible .story-paragraph:nth-child(2) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1.3s;
    }

    .story-content p {
        font-size: 1.25rem;
        line-height: 1.7;
        color: #333;
        margin: 0;
    }

    .highlight {
        background: linear-gradient(120deg, transparent 0%, var(--color-metallic) 50%, transparent 100%);
        padding: 0.1em 0.3em;
        border-radius: 4px;
        font-weight: 600;
        color: var(--color-black);
    }

    .highlight-metallic {
        background: linear-gradient(120deg, rgba(192, 192, 192, 0.2) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(192, 192, 192, 0.2) 100%);
        padding: 0.1em 0.3em;
        border-radius: 4px;
        font-weight: 600;
        color: var(--color-black);
        position: relative;
    }

    .highlight-metallic::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%);
        transform: translateX(-100%);
        animation: shimmer 3s ease-in-out infinite;
        border-radius: 4px;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(100%); }
        100% { transform: translateX(100%); }
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-md);
        margin: var(--spacing-xl) 0;
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 1.6s;
    }

    .stats-grid.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .stat-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(192, 192, 192, 0.2);
        border-radius: 24px;
        padding: var(--spacing-lg) var(--spacing-md);
        text-align: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .stat-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(192, 192, 192, 0.6);
    }

    .stat-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto var(--spacing-sm) auto;
        position: relative;
    }

    .stat-icon div {
        width: 100%;
        height: 100%;
        border: 3px solid var(--color-silver);
        border-radius: 50%;
        position: relative;
        background: linear-gradient(45deg, rgba(192, 192, 192, 0.1), rgba(255, 255, 255, 0.3));
    }

    .icon-projects::before {
        content: '⚡';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
    }

    .icon-nonprofits::before {
        content: '❤️';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
    }

    .icon-research::before {
        content: '🔬';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
    }

    .icon-opensource::before {
        content: '🌟';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
    }

    .stat-value {
        font-size: 3.5rem;
        font-weight: 800;
        color: var(--color-black);
        margin-bottom: var(--spacing-xs);
        background: linear-gradient(135deg, #000000, #404040);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: number-glow 2s ease-in-out infinite alternate;
    }

    @keyframes number-glow {
        0% { filter: brightness(1); }
        100% { filter: brightness(1.2); }
    }

    .stat-label {
        font-size: 1rem;
        color: #666;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .stat-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, rgba(192, 192, 192, 0.3) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
        border-radius: 24px;
    }

    .stat-card:hover .stat-glow {
        opacity: 1;
    }

    .stat-border-animation {
        position: absolute;
        inset: -2px;
        padding: 2px;
        background: linear-gradient(45deg, transparent, var(--color-metallic-bright), transparent);
        border-radius: 24px;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    .stat-card:hover .stat-border-animation {
        opacity: 1;
        animation: border-spin 2s linear infinite;
    }

    @keyframes border-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .stat-border-animation::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 22px;
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }

        .story-content p {
            font-size: 1.1rem;
        }

        .container {
            padding: 0 1rem;
        }

        .title-break {
            display: none;
        }

        .floating-element {
            opacity: 0.3;
            transform: scale(0.7);
        }
    }

    @media (max-width: 480px) {
        .story-section {
            padding: var(--spacing-lg) 0;
        }

        .stat-card {
            padding: var(--spacing-md) var(--spacing-sm);
        }

        .stat-value {
            font-size: 2.5rem;
        }
    }
</style>