<script lang="ts">
    import { onMount } from 'svelte';
    
    interface ImpactArea {
        title: string;
        description: string;
        icon: string;
        gradient: string;
    }

    let visibleImpactCards: Set<number> = new Set();
    let hoveredImpactCard: number | null = null;
    let showImpact = false;
    let mouseX = 0;
    let mouseY = 0;
    let sectionElement: HTMLElement;

    const impactAreas: ImpactArea[] = [
        {
            title: "Healthcare & Medicine",
            description: "Democratizing healthcare through AI-powered diagnostics, telemedicine platforms, and assistive technologies that ensure no one is left behind in the pursuit of wellness.",
            icon: "🏥",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(192,192,192,0.2) 100%)"
        },
        {
            title: "Education & Learning",
            description: "Breaking down barriers to knowledge with personalized AI tutors, AR/VR classrooms, and digital literacy programs that reach the most underserved communities.",
            icon: "📚",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(169,169,169,0.25) 100%)"
        },
        {
            title: "Climate & Sustainability",
            description: "Fighting climate change with smart monitoring systems, renewable energy optimization, and blockchain-powered carbon tracking that makes sustainability measurable.",
            icon: "🌍",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(211,211,211,0.2) 100%)"
        },
        {
            title: "Agriculture & Food Security",
            description: "Empowering farmers with IoT precision farming, AI crop optimization, and transparent supply chains that feed communities while protecting our planet.",
            icon: "🌱",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(192,192,192,0.22) 100%)"
        },
        {
            title: "Financial Inclusion",
            description: "Building bridges to economic opportunity with fraud-detection AI, secure blockchain transactions, and fintech tools designed for marginalized communities.",
            icon: "💰",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(169,169,169,0.24) 100%)"
        },
        {
            title: "Accessibility & Inclusion",
            description: "Ensuring technology works for everyone through AI-powered sign language recognition, assistive devices, and inclusive design that celebrates human diversity.",
            icon: "♿",
            gradient: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(211,211,211,0.21) 100%)"
        }
    ];

    function handleImpactIntersection(index: number) {
        return (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        visibleImpactCards = new Set([...visibleImpactCards, index]);
                    }, index * 150);
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
        if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            mouseX = ((event.clientX - rect.left) / rect.width) * 100;
            mouseY = ((event.clientY - rect.top) / rect.height) * 100;
        }
    }

    onMount(() => {
        setTimeout(() => {
            showImpact = true;
        }, 1700);

        // Initialize impact section animations
        const impactObservers = impactAreas.map((_, index) => {
            const observer = new IntersectionObserver(handleImpactIntersection(index), {
                threshold: 0.1,
                rootMargin: '50px'
            });
            const element = document.querySelector(`#impact-card-${index}`);
            if (element) observer.observe(element);
            return observer;
        });

        return () => {
            impactObservers.forEach(observer => observer.disconnect());
        };
    });
</script>

<section 
    class="impact-section" 
    id="impact"
    role="application"
    aria-label="Interactive Impact Section"
    bind:this={sectionElement}
    on:mousemove={handleMouseMove}
    style="--mouse-x: {mouseX}%; --mouse-y: {mouseY}%"
>
    <!-- Background Elements -->
    <div class="background-grid"></div>
    <div class="floating-particles">
        {#each Array(20) as _, i}
            <div class="particle" style="--delay: {i * 0.3}s; --duration: {8 + (i % 4)}s;"></div>
        {/each}
    </div>
    
    <!-- Dynamic cursor spotlight -->
    <div class="cursor-spotlight"></div>

    <div class="container">
        <!-- Enhanced Title with Morphing Text Effect -->
        <div class="title-container">
            <h2 class="section-title" class:visible={showImpact}>
                <span class="title-line">Where Technology</span>
                <span class="title-line title-accent">Meets Humanity</span>
            </h2>
            <div class="title-underline"></div>
        </div>

        <!-- Enhanced Impact Grid -->
        <div class="impact-grid">
            {#each impactAreas as area, i}
                <div 
                    class="impact-card"
                    class:visible={visibleImpactCards.has(i)}
                    class:hovered={hoveredImpactCard === i}
                    id="impact-card-{i}"
                    on:mouseenter={() => handleImpactMouseEnter(i)}
                    on:mouseleave={handleImpactMouseLeave}
                    on:keydown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleImpactMouseEnter(i);
                        }
                    }}
                    role="button"
                    tabindex="0"
                    aria-label={`View impact area: ${area.title}`}
                    style="--card-gradient: {area.gradient}; --stagger-delay: {i * 0.15}s;"
                >
                    <!-- Glass morphism background -->
                    <div class="card-glass"></div>
                    
                    <!-- Animated border -->
                    <div class="card-border"></div>
                    
                    <!-- Metallic shine effect -->
                    <div class="metallic-shine"></div>
                    
                    <!-- Content -->
                    <div class="card-content">
                        <div class="impact-icon-container">
                            <div class="icon-glow"></div>
                            <div class="impact-icon">{area.icon}</div>
                        </div>
                        <h3 class="impact-title">{area.title}</h3>
                        <p class="impact-description">{area.description}</p>
                    </div>
                    
                    <!-- Hover overlay -->
                    <div class="hover-overlay"></div>
                    
                    <!-- Ripple effect -->
                    <div class="ripple-effect"></div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    :root {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-silver: #c0c0c0;
        --color-gray: #808080;
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 2rem;
        --spacing-lg: 3rem;
        --spacing-xl: 4rem;
    }

    .impact-section {
        padding: var(--spacing-xl) 0;
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

    /* Background Grid */
    .background-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: gridMove 20s linear infinite;
        z-index: 0;
    }

    @keyframes gridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }

    /* Floating Particles */
    .floating-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }

    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
        border-radius: 50%;
        animation: float var(--duration) ease-in-out infinite var(--delay);
        left: calc(10% + (var(--mouse-x, 50%) * 0.1));
        top: calc(10% + (var(--mouse-y, 50%) * 0.1));
    }

    @keyframes float {
        0%, 100% { 
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
        }
        10% { opacity: 1; }
        50% { 
            transform: translateY(-100px) translateX(50px) scale(1.2);
            opacity: 0.8;
        }
        90% { opacity: 1; }
    }

    /* Cursor Spotlight */
    .cursor-spotlight {
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        left: calc(var(--mouse-x, 50%) - 300px);
        top: calc(var(--mouse-y, 50%) - 300px);
        transition: all 0.3s ease;
        z-index: 1;
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 var(--spacing-md);
        position: relative;
        z-index: 2;
    }

    /* Enhanced Title */
    .title-container {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        position: relative;
    }

    .section-title {
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        font-weight: 800;
        line-height: 1.1;
        color: var(--color-white);
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .section-title.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .title-line {
        display: block;
        position: relative;
        overflow: hidden;
    }

    .title-accent {
        background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #ffffff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 30px rgba(255,255,255,0.3);
        animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
        0%, 100% { background-position: -200% center; }
        50% { background-position: 200% center; }
    }

    .title-underline {
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ffffff, transparent);
        margin: var(--spacing-sm) auto 0;
        animation: expandLine 2s ease-out 1s forwards;
        transform: scaleX(0);
    }

    @keyframes expandLine {
        to { transform: scaleX(1); }
    }

    /* Enhanced Impact Grid */
    .impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--spacing-md);
        perspective: 1000px;
    }

    .impact-card {
        position: relative;
        border-radius: 20px;
        padding: var(--spacing-md);
        overflow: hidden;
        opacity: 0;
        transform: translateY(60px) rotateX(10deg);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        cursor: pointer;
        min-height: 280px;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
    }

    .impact-card.visible {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
        transition-delay: var(--stagger-delay);
    }

    /* Glass Morphism Background */
    .card-glass {
        position: absolute;
        inset: 0;
        background: var(--card-gradient);
        backdrop-filter: blur(20px);
        border-radius: inherit;
        z-index: 1;
    }

    /* Animated Border */
    .card-border {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(45deg, 
            transparent, 
            rgba(255,255,255,0.2), 
            transparent, 
            rgba(192,192,192,0.3),
            transparent
        );
        background-size: 400% 400%;
        animation: borderFlow 4s ease-in-out infinite;
        z-index: 2;
    }

    .card-border::before {
        content: '';
        position: absolute;
        inset: 1px;
        background: rgba(0,0,0,0.8);
        border-radius: inherit;
    }

    @keyframes borderFlow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    /* Metallic Shine */
    .metallic-shine {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255,255,255,0.1) 50%, 
            transparent 70%
        );
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.6s ease;
        z-index: 3;
        pointer-events: none;
    }

    .impact-card:hover .metallic-shine {
        animation: shine 0.8s ease-out;
    }

    @keyframes shine {
        0% { transform: rotate(45deg) translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: rotate(45deg) translateX(100%); opacity: 0; }
    }

    /* Card Content */
    .card-content {
        position: relative;
        z-index: 4;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .impact-icon-container {
        position: relative;
        margin-bottom: var(--spacing-sm);
        width: fit-content;
    }

    .icon-glow {
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .impact-card:hover .icon-glow {
        opacity: 1;
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.1; }
        50% { transform: scale(1.2); opacity: 0.3; }
    }

    .impact-icon {
        font-size: 3rem;
        display: block;
        position: relative;
        transition: transform 0.3s ease;
    }

    .impact-card:hover .impact-icon {
        transform: scale(1.1) rotateY(10deg);
    }

    .impact-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: var(--spacing-sm);
        color: var(--color-white);
        position: relative;
        transition: color 0.3s ease;
    }

    .impact-card:hover .impact-title {
        color: var(--color-silver);
        text-shadow: 0 0 10px rgba(255,255,255,0.3);
    }

    .impact-description {
        font-size: 1rem;
        color: rgba(255,255,255,0.8);
        line-height: 1.6;
        flex-grow: 1;
        transition: color 0.3s ease;
    }

    .impact-card:hover .impact-description {
        color: rgba(255,255,255,0.9);
    }

    /* Hover Effects */
    .impact-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 
            0 25px 50px rgba(0,0,0,0.5),
            0 0 30px rgba(255,255,255,0.1);
    }

    .hover-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, 
            rgba(255,255,255,0.05) 0%, 
            rgba(192,192,192,0.1) 50%, 
            rgba(255,255,255,0.05) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
        border-radius: inherit;
    }

    .impact-card:hover .hover-overlay {
        opacity: 1;
    }

    /* Ripple Effect */
    .ripple-effect {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        overflow: hidden;
        z-index: 3;
        pointer-events: none;
    }

    .impact-card:hover .ripple-effect::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
    }

    @keyframes ripple {
        to {
            width: 400px;
            height: 400px;
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .impact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }
        
        .impact-card {
            min-height: 240px;
            padding: var(--spacing-sm);
        }
        
        .impact-icon {
            font-size: 2.5rem;
        }
        
        .impact-title {
            font-size: 1.3rem;
        }
        
        .impact-description {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .impact-section {
            padding: var(--spacing-lg) 0;
        }
        
        .container {
            padding: 0 var(--spacing-sm);
        }
    }
</style>