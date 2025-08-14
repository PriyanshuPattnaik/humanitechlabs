<script lang="ts">
    import { onMount } from 'svelte';
    import { Home, Info, Zap, Target, Settings, Users, Play, Mail } from 'lucide-svelte';
    
    let sections = [
        { id: 'hero', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: Info },
        { id: 'research', label: 'Research', icon: Zap },
        { id: 'impact', label: 'Impact', icon: Target },
        { id: 'solutions', label: 'Solutions', icon: Settings },
        { id: 'collaboration', label: 'Collaboration', icon: Users },
        { id: 'cta', label: 'Get Started', icon: Play },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];
    
    let activeSection = 'hero';
    let isVisible = false;
    let hoveredIndex = -1;

    onMount(() => {
        // Staggered entrance animation
        setTimeout(() => {
            isVisible = true;
        }, 800);

        // Intersection Observer to track active section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, { threshold: 0.5 });

        // Observe all sections
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    });

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<nav class="side-nav" class:visible={isVisible}>
    <!-- Background glow effect -->
    <div class="nav-glow"></div>
    
    <!-- Main navigation container -->
    <div class="nav-container">
        <!-- Progress line -->
        <div class="progress-line">
            <div class="progress-fill" style="height: {(sections.findIndex(s => s.id === activeSection) + 1) / sections.length * 100}%"></div>
        </div>
        
        <!-- Navigation dots -->
        <div class="nav-dots">
            {#each sections as section, index}
                <button 
                    class="nav-dot" 
                    class:active={activeSection === section.id}
                    class:hovered={hoveredIndex === index}
                    on:click={() => scrollToSection(section.id)}
                    on:mouseenter={() => hoveredIndex = index}
                    on:mouseleave={() => hoveredIndex = -1}
                    aria-label={`Go to ${section.label} section`}
                    style="animation-delay: {index * 0.1}s"
                >
                    <!-- Pulse rings for active state -->
                    {#if activeSection === section.id}
                        <div class="pulse-ring pulse-ring-1"></div>
                        <div class="pulse-ring pulse-ring-2"></div>
                    {/if}
                    
                    <!-- Main dot with icon -->
                    <span class="dot">
                        <svelte:component this={section.icon} class="dot-icon" size={10} />
                        <span class="dot-core"></span>
                    </span>
                    
                    <!-- Enhanced label with glassmorphism -->
                    <span class="section-label">
                        <span class="label-text">{section.label}</span>
                        <span class="label-accent"></span>
                    </span>
                </button>
            {/each}
        </div>
        
        <!-- Bottom accent -->
        <div class="nav-accent"></div>
    </div>
</nav>

<style>
    .side-nav {
        position: fixed;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-50%) translateX(50px);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .side-nav.visible {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
    }

    .nav-glow {
        position: absolute;
        top: -20px;
        right: -10px;
        bottom: -20px;
        left: -30px;
        background: radial-gradient(ellipse at center, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(200, 200, 200, 0.05) 40%,
            transparent 70%);
        border-radius: 50px;
        filter: blur(10px);
        opacity: 0.6;
    }

    .nav-container {
        position: relative;
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(200, 200, 200, 0.1) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        padding: 1.5rem 0.8rem;
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .progress-line {
        position: absolute;
        left: 1.2rem;
        top: 1.5rem;
        bottom: 1.5rem;
        width: 2px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 1px;
        overflow: hidden;
    }

    .progress-fill {
        width: 100%;
        background: linear-gradient(180deg, 
            #333 0%,
            #666 50%,
            #999 100%);
        border-radius: 1px;
        transition: height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .nav-dots {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        align-items: center;
        position: relative;
        z-index: 2;
    }

    .nav-dot {
        position: relative;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        opacity: 0;
        animation: slideInDot 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    @keyframes slideInDot {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .pulse-ring {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        animation: pulse 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    .pulse-ring-1 {
        width: 24px;
        height: 24px;
        animation-delay: 0s;
    }

    .pulse-ring-2 {
        width: 32px;
        height: 32px;
        animation-delay: 0.5s;
    }

    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
        }
    }

    .dot {
        position: relative;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .dot-core {
        position: absolute;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, 
            rgba(100, 100, 100, 0.8) 0%,
            rgba(200, 200, 200, 0.6) 50%,
            rgba(50, 50, 50, 0.9) 100%);
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    :global(.dot-icon) {
        position: absolute;
        color: rgba(0, 0, 0, 0.6);
        z-index: 2;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        opacity: 0;
    }

    .nav-dot:hover .dot,
    .nav-dot.active .dot {
        transform: scale(1.3);
    }

    .nav-dot:hover .dot-core,
    .nav-dot.active .dot-core {
        background: linear-gradient(135deg, 
            #000 0%,
            #333 50%,
            #666 100%);
        width: 12px;
        height: 12px;
        box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .nav-dot:hover :global(.dot-icon),
    .nav-dot.active :global(.dot-icon) {
        opacity: 1;
        color: rgba(255, 255, 255, 0.9);
        transform: scale(1.1);
    }

    .section-label {
        position: absolute;
        right: 100%;
        margin-right: 1.5rem;
        opacity: 0;
        transform: translateX(20px) scale(0.9);
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        pointer-events: none;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .label-text {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%,
            rgba(240, 240, 240, 0.9) 100%);
        backdrop-filter: blur(15px);
        color: #1a1a1a;
        padding: 0.6rem 1.2rem;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 500;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.15),
            0 4px 10px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        letter-spacing: 0.02em;
    }

    .label-accent {
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #333, #666);
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .nav-dot:hover .section-label,
    .nav-dot.hovered .section-label {
        opacity: 1;
        transform: translateX(0) scale(1);
    }

    .nav-accent {
        position: absolute;
        bottom: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background: linear-gradient(90deg, 
            transparent 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%);
        border-radius: 1px;
    }

    /* Enhanced responsive design */
    @media (max-width: 1024px) {
        .side-nav {
            right: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .side-nav {
            right: 1rem;
            transform: translateY(-50%) scale(0.9);
        }
        
        .side-nav.visible {
            transform: translateY(-50%) scale(0.9);
        }

        .nav-container {
            padding: 1.2rem 0.6rem;
        }

        .nav-dots {
            gap: 1.5rem;
        }

        .dot-core {
            width: 6px;
            height: 6px;
        }

        .dot-icon {
            font-size: 8px;
        }

        .label-text {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
        }
    }

    @media (max-width: 480px) {
        .side-nav {
            right: 0.5rem;
        }
        
        .section-label {
            margin-right: 1rem;
        }
    }

    /* Dark mode alternative */
    @media (prefers-color-scheme: dark) {
        .nav-container {
            background: linear-gradient(135deg, 
                rgba(0, 0, 0, 0.3) 0%,
                rgba(20, 20, 20, 0.2) 50%,
                rgba(40, 40, 40, 0.3) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .label-text {
            background: linear-gradient(135deg, 
                rgba(0, 0, 0, 0.85) 0%,
                rgba(20, 20, 20, 0.9) 100%);
            color: #e0e0e0;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    }
</style>