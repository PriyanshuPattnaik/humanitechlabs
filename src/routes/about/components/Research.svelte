<script lang="ts">
    import { onMount } from 'svelte';
    
    interface ResearchArea {
        title: string;
        description: string;
        icon: string;
        color: string;
        gradient: string;
    }

    let visibleImpactCards: Set<number> = new Set();
    let hoveredImpactCard: number | null = null;
    let showResearch = false;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInSection = false;

    const researchAreas: ResearchArea[] = [
        {
            title: "AI Ethics & Bias Detection",
            description: "Developing frameworks for ethical AI development and deployment with transparent, responsible innovation at the core.",
            icon: "🤖",
            color: "#000000",
            gradient: "linear-gradient(135deg, #000000 0%, #404040 100%)"
        },
        {
            title: "Sustainable Computing",
            description: "Creating energy-efficient algorithms and green tech solutions that minimize environmental impact while maximizing performance.",
            icon: "🌱",
            color: "#c0c0c0",
            gradient: "linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%)"
        },
        {
            title: "Human-AI Collaboration",
            description: "Exploring new models for human-AI partnership and augmentation that enhance human capabilities rather than replace them.",
            icon: "🤝",
            color: "#000000",
            gradient: "linear-gradient(135deg, #2a2a2a 0%, #000000 100%)"
        }
    ];

    function handleImpactIntersection(index: number) {
        return (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        visibleImpactCards = new Set([...visibleImpactCards, index]);
                    }, index * 200);
                }
            });
        };
    }

    function handleImpactMouseEnter(index: number) {
        hoveredImpactCard = index;
    }

    function handleImpactMouseLeave() {
        hoveredImpactCard = null;
    }

    function handleMouseMove(event: MouseEvent) {
        if (isMouseInSection) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
    }

    function handleSectionMouseEnter() {
        isMouseInSection = true;
    }

    function handleSectionMouseLeave() {
        isMouseInSection = false;
    }

    onMount(() => {
        setTimeout(() => {
            showResearch = true;
        }, 3200);

        // Initialize research section animations
        const researchObservers = researchAreas.map((_, index) => {
            const observer = new IntersectionObserver(handleImpactIntersection(index), {
                threshold: 0.1
            });
            const element = document.querySelector(`#research-card-${index}`);
            if (element) observer.observe(element);
            return observer;
        });

        // Mouse tracking
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            researchObservers.forEach(observer => observer.disconnect());
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<svelte:window bind:scrollY />

<section 
    class="research-section" 
    id="research"
    aria-label="Research Areas"
    on:mouseenter={handleSectionMouseEnter}
    on:mouseleave={handleSectionMouseLeave}
>
    <!-- Animated background elements -->
    <div class="research-background" style="transform: translateY({scrollY * 0.2}px)"></div>
    <div class="metallic-orb" style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02}px)"></div>
    <div class="floating-particles">
        {#each Array(12) as _, i}
            <div class="particle" style="--delay: {i * 0.8}s; --duration: {8 + i * 2}s"></div>
        {/each}
    </div>
    
    <!-- Gradient overlay -->
    <div class="gradient-overlay"></div>
    
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" class:visible={showResearch}>
                <span class="title-word" style="--delay: 0.1s">Where</span>
                <span class="title-word" style="--delay: 0.2s">Tomorrow's</span>
                <span class="title-word metallic-text" style="--delay: 0.3s">Solutions</span>
                <span class="title-word" style="--delay: 0.4s">Take</span>
                <span class="title-word" style="--delay: 0.5s">Shape</span>
                <span class="title-word metallic-text" style="--delay: 0.6s">Today</span>
            </h2>
        </div>
        
        <div class="research-content fade-in" class:visible={showResearch}>
            <p class="section-description">
                Our research lab isn't separate from our mission—it <em>IS</em> our mission in action. 
                Here, we explore emerging technologies not for their novelty, but for their potential 
                to solve problems that matter.
            </p>
            
            <div class="research-grid">
                {#each researchAreas as area, i}
                    <div 
                        class="research-card"
                        class:visible={visibleImpactCards.has(i)}
                        class:hovered={hoveredImpactCard === i}
                        id="research-card-{i}"
                        role="article"
                        aria-label="Research Area: {area.title}"
                        on:mouseenter={() => handleImpactMouseEnter(i)}
                        on:mouseleave={handleImpactMouseLeave}
                        style="--card-color: {area.color}; --card-gradient: {area.gradient}; --animation-delay: {i * 0.2}s"
                    >
                        <div class="card-inner">
                            <div class="card-content">
                                <div class="research-icon-container">
                                    <div class="icon-glow"></div>
                                    <div class="research-icon">{area.icon}</div>
                                </div>
                                <h3 class="card-title">{area.title}</h3>
                                <p class="card-description">{area.description}</p>
                            </div>
                            <div class="card-effects">
                                <div class="card-glow"></div>
                                <div class="card-shimmer"></div>
                                <div class="card-border"></div>
                            </div>
                        </div>
                        <div class="card-reflection"></div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .research-section {
        position: relative;
        overflow: hidden;
        background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
        padding: 120px 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .research-background {
        position: absolute;
        top: -30%;
        right: -20%;
        width: 80%;
        height: 160%;
        background: conic-gradient(from 45deg, transparent, rgba(192, 192, 192, 0.08), transparent, rgba(0, 0, 0, 0.05), transparent);
        border-radius: 50%;
        filter: blur(40px);
        animation: rotate 60s linear infinite;
    }

    .metallic-orb {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(192, 192, 192, 0.3), transparent);
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.6;
        animation: pulse 8s ease-in-out infinite;
    }

    .floating-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: linear-gradient(45deg, #c0c0c0, #ffffff);
        border-radius: 50%;
        opacity: 0;
        animation: float var(--duration, 10s) ease-in-out infinite;
        animation-delay: var(--delay, 0s);
    }

    .particle:nth-child(odd) {
        left: 20%;
        animation-name: float-left;
    }

    .particle:nth-child(even) {
        right: 20%;
        animation-name: float-right;
    }

    .gradient-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(248, 249, 250, 0.7) 25%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(240, 240, 240, 0.6) 75%,
            rgba(255, 255, 255, 0.9) 100%
        );
        pointer-events: none;
    }

    .container {
        position: relative;
        z-index: 2;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .section-header {
        text-align: center;
        margin-bottom: 80px;
    }

    .section-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5em;
    }

    .title-word {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-delay: var(--delay, 0s);
        color: #000000;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .section-title.visible .title-word {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
    }

    .metallic-text {
        background: linear-gradient(135deg, #c0c0c0 0%, #ffffff 25%, #a8a8a8 50%, #ffffff 75%, #c0c0c0 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s ease-in-out infinite;
        position: relative;
    }

    .metallic-text::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        animation: sweep 2s ease-in-out infinite;
        animation-delay: 1s;
    }

    .research-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-delay: 0.8s;
    }

    .research-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-description {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 60px auto;
        font-size: 1.25rem;
        color: #333333;
        line-height: 1.7;
        font-weight: 400;
    }

    .section-description em {
        font-style: italic;
        color: #000000;
        font-weight: 600;
    }

    .research-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
        margin-top: 60px;
    }

    .research-card {
        opacity: 0;
        transform: translateY(80px) scale(0.9);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-delay: var(--animation-delay, 0s);
        perspective: 1000px;
        height: 100%;
    }

    .research-card.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .card-inner {
        position: relative;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        padding: 40px;
        height: 100%;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-style: preserve-3d;
        border: 1px solid rgba(192, 192, 192, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }

    .research-card:hover .card-inner {
        transform: translateY(-12px) rotateX(5deg);
        box-shadow: 
            0 24px 48px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        border-color: var(--card-color);
    }

    .card-content {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .research-icon-container {
        position: relative;
        width: 80px;
        height: 80px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-glow {
        position: absolute;
        inset: -10px;
        background: var(--card-gradient);
        border-radius: 50%;
        opacity: 0;
        filter: blur(20px);
        transition: opacity 0.4s ease;
    }

    .research-card:hover .icon-glow {
        opacity: 0.3;
    }

    .research-icon {
        font-size: 3rem;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        transition: all 0.4s ease;
    }

    .research-card:hover .research-icon {
        transform: scale(1.1) translateZ(20px);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 16px;
        color: #000000;
        line-height: 1.3;
        transition: color 0.3s ease;
    }

    .research-card:hover .card-title {
        background: var(--card-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .card-description {
        font-size: 1rem;
        color: #555555;
        line-height: 1.6;
        font-weight: 400;
        flex-grow: 1;
        transition: color 0.3s ease;
    }

    .research-card:hover .card-description {
        color: #333333;
    }

    .card-effects {
        position: absolute;
        inset: 0;
        border-radius: 24px;
        pointer-events: none;
        overflow: hidden;
    }

    .card-glow {
        position: absolute;
        inset: -2px;
        background: var(--card-gradient);
        opacity: 0;
        transition: opacity 0.4s ease;
        border-radius: 25px;
        filter: blur(8px);
    }

    .research-card:hover .card-glow {
        opacity: 0.2;
    }

    .card-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.3) 50%, 
            transparent 70%
        );
        transform: translateX(-100%);
        transition: transform 0.6s ease;
    }

    .research-card:hover .card-shimmer {
        transform: translateX(100%);
    }

    .card-border {
        position: absolute;
        inset: 0;
        border-radius: 24px;
        padding: 1px;
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.5), 
            transparent, 
            rgba(192, 192, 192, 0.3)
        );
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: source-out;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .research-card:hover .card-border {
        opacity: 1;
    }

    .card-reflection {
        position: absolute;
        bottom: -50%;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 100%
        );
        transform: scaleY(-1);
        opacity: 0;
        transition: opacity 0.4s ease;
        border-radius: 0 0 24px 24px;
        filter: blur(1px);
    }

    .research-card:hover .card-reflection {
        opacity: 1;
    }

    /* Animations */
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
    }

    @keyframes float-left {
        0%, 100% { 
            opacity: 0; 
            transform: translateY(100vh) translateX(-20px); 
        }
        10%, 90% { 
            opacity: 1; 
        }
        50% { 
            transform: translateY(-20px) translateX(20px); 
        }
    }

    @keyframes float-right {
        0%, 100% { 
            opacity: 0; 
            transform: translateY(100vh) translateX(20px); 
        }
        10%, 90% { 
            opacity: 1; 
        }
        50% { 
            transform: translateY(-20px) translateX(-20px); 
        }
    }

    @keyframes shimmer {
        0%, 100% { background-position: 200% 0; }
        50% { background-position: -200% 0; }
    }

    @keyframes sweep {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .research-section {
            padding: 80px 0;
        }

        .research-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .card-inner {
            padding: 30px;
        }

        .section-description {
            font-size: 1.1rem;
            margin-bottom: 40px;
        }

        .section-title {
            gap: 0.3em;
        }

        .metallic-orb {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 480px) {
        .research-grid {
            grid-template-columns: 1fr;
        }

        .card-inner {
            padding: 24px;
        }

        .research-icon {
            font-size: 2.5rem;
        }

        .card-title {
            font-size: 1.3rem;
        }
    }
</style>