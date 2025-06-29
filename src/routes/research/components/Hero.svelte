<script lang="ts">
    import { onMount } from 'svelte';
    
    let scrollY: number = 0;
    let mouseX: number = 0;
    let mouseY: number = 0;
    let isVisible: boolean = false;
    let innerWidth: number = 0;
    let innerHeight: number = 0;

    // Throttle helpers
    let lastMouseMove = 0;
    let lastScroll = 0;
    const THROTTLE_MS = 16; // ~60fps

    function handleScroll(): void {
        const now = Date.now();
        if (now - lastScroll > THROTTLE_MS) {
            scrollY = window.scrollY;
            lastScroll = now;
        }
    }

    function handleMouseMove(event: MouseEvent): void {
        const now = Date.now();
        if (now - lastMouseMove > THROTTLE_MS) {
            mouseX = (event.clientX / window.innerWidth) * 100;
            mouseY = (event.clientY / window.innerHeight) * 100;
            lastMouseMove = now;
        }
    }

    // Animation frame for transforms
    let rafId: number;
    function updateTransforms() {
        scrollY = window.scrollY;
        rafId = requestAnimationFrame(updateTransforms);
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        rafId = requestAnimationFrame(updateTransforms);
        
        // Trigger entrance animation
        setTimeout(() => {
            isVisible = true;
        }, 300);
        
        // Enhanced neural network with glassmorphic effects
        const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement | null;
        // Skip canvas animation on mobile or prefers-reduced-motion
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (canvas && !isMobile && !prefersReducedMotion) {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            const resize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            resize();
            
            const nodes: any[] = [];
            const nodeCount = 40; // Reduced from 80 for performance
            
            // Create enhanced nodes with glassmorphic properties
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.6 + 0.2,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.02 + Math.random() * 0.03
                });
            }
            
            function animate() {
                if (!canvas || !ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Update and draw enhanced nodes
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;
                    node.pulse += node.pulseSpeed;
                    
                    // Bounce off edges with damping
                    if (node.x < 0 || node.x > canvas.width) {
                        node.vx *= -0.8;
                        node.x = Math.max(0, Math.min(canvas.width, node.x));
                    }
                    if (node.y < 0 || node.y > canvas.height) {
                        node.vy *= -0.8;
                        node.y = Math.max(0, Math.min(canvas.height, node.y));
                    }
                    
                    // Draw glassmorphic node with glow
                    const pulseSize = node.size + Math.sin(node.pulse) * 0.5;
                    const pulseOpacity = node.opacity + Math.sin(node.pulse) * 0.2;
                    
                    // Outer glow
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 3);
                    gradient.addColorStop(0, `rgba(128, 128, 128, ${pulseOpacity * 0.1})`);
                    gradient.addColorStop(0.5, `rgba(128, 128, 128, ${pulseOpacity * 0.05})`);
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = gradient;
                    ctx.fill();
                    
                    // Core node
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(128, 128, 128, ${pulseOpacity * 0.8})`;
                    ctx.fill();
                    
                    // Inner highlight
                    ctx.beginPath();
                    ctx.arc(node.x - pulseSize * 0.3, node.y - pulseSize * 0.3, pulseSize * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.6})`;
                    ctx.fill();
                });
                
                // Draw enhanced connections with glassmorphic effects
                nodes.forEach((node, i) => {
                    nodes.slice(i + 1).forEach(otherNode => {
                        const distance = Math.sqrt(
                            Math.pow(node.x - otherNode.x, 2) + 
                            Math.pow(node.y - otherNode.y, 2)
                        );
                        
                        if (distance < 150) {
                            const opacity = (1 - distance / 150) * 0.4;
                            
                            // Main connection line
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(otherNode.x, otherNode.y);
                            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            
                            // Glow effect
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(otherNode.x, otherNode.y);
                            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity * 0.3})`;
                            ctx.lineWidth = 3;
                            ctx.stroke();
                        }
                    });
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
            
            window.addEventListener('resize', resize);
            
            return () => {
                window.removeEventListener('resize', resize);
            };
        }
        
        // Enhanced particle system
        const createFloatingElements = () => {
            const container = document.querySelector('.floating-elements');
            if (!container) return;
            
            for (let i = 0; i < 20; i++) {
                const element = document.createElement('div');
                element.className = 'floating-glass-particle';
                element.style.left = Math.random() * 100 + '%';
                element.style.top = Math.random() * 100 + '%';
                element.style.animationDelay = Math.random() * 10 + 's';
                element.style.animationDuration = (15 + Math.random() * 10) + 's';
                container.appendChild(element);
            }
        };
        
        createFloatingElements();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    });
</script>

<svelte:window bind:scrollY bind:innerWidth bind:innerHeight />

<section class="hero">
    <!-- Enhanced glassmorphic background -->
    <div class="glass-background">
        <div class="glass-layer layer-1" style="transform: translateY({scrollY * 0.1}px) translateX({mouseX * 0.02}px)"></div>
        <div class="glass-layer layer-2" style="transform: translateY({scrollY * 0.15}px) translateX({-mouseX * 0.03}px)"></div>
        <div class="glass-layer layer-3" style="transform: translateY({scrollY * 0.08}px) translateX({mouseY * 0.02}px)"></div>
    </div>
    
    <!-- Neural network canvas -->
    <div class="neural-background">
        <canvas id="neural-canvas"></canvas>
    </div>
    
    <!-- Floating glass elements -->
    <div class="floating-elements"></div>
    
    <!-- Premium gradient orbs -->
    <div class="gradient-orbs">
        <div class="orb orb-1" style="transform: translate({mouseX * 0.05}px, {mouseY * 0.03}px) translateY({scrollY * 0.1}px)"></div>
        <div class="orb orb-2" style="transform: translate({-mouseX * 0.03}px, {-mouseY * 0.05}px) translateY({scrollY * 0.05}px)"></div>
        <div class="orb orb-3" style="transform: translate({mouseX * 0.02}px, {mouseY * 0.04}px) translateY({scrollY * 0.08}px)"></div>
    </div>
    
    <!-- Metallic geometric elements -->
    <div class="metallic-elements">
        <div class="metallic-ring ring-1" style="transform: rotate({scrollY * 0.1}deg) translateY({scrollY * -0.05}px)"></div>
        <div class="metallic-ring ring-2" style="transform: rotate({-scrollY * 0.15}deg) translateY({scrollY * -0.08}px)"></div>
        <div class="holographic-grid" style="transform: translateY({scrollY * 0.12}px) rotateX({mouseY * 0.1}deg) rotateY({mouseX * 0.1}deg)"></div>
    </div>
    
    <div class="container">
        <div class="hero-content" class:visible={isVisible}>
            <!-- Premium glass badge -->
            <div class="glass-badge" style="transform: translateY({scrollY * -0.03}px)">
                <div class="badge-shimmer"></div>
                <div class="badge-content">
                    <div class="badge-icon">
                        <div class="icon-core"></div>
                        <div class="icon-pulse"></div>
                    </div>
                    <span class="badge-text">RESEARCH AT THE FRONTIER</span>
                    <div class="badge-dot">
                        <div class="dot-core"></div>
                        <div class="dot-glow"></div>
                    </div>
                </div>
            </div>
            
            <!-- Glassmorphic title with enhanced effects -->
            <h1 class="hero-title">
                <div class="title-container">
                    <span class="title-line">
                        <span class="word" data-text="Advancing">Advancing</span>
                    </span>
                    <span class="title-line">
                        <span class="word highlight-word" data-text="Human-Centered">Human-Centered</span>
                    </span>
                    <span class="title-line">
                        <span class="word" data-text="Technology">Technology</span>
                    </span>
                    <div class="title-effects">
                        <div class="holographic-underline"></div>
                        <div class="text-reflection"></div>
                    </div>
                </div>
            </h1>
            
            <!-- Enhanced subtitle with glass effect -->
            <div class="subtitle-container">
                <p class="hero-subtitle">
                    We develop cutting-edge AI systems and research solutions that prioritize safety, 
                    reliability, and positive societal impact. Our work spans from fundamental research 
                    to practical applications that benefit humanity.
                </p>
                <div class="subtitle-glow"></div>
            </div>
            
            <!-- Premium glassmorphic stats -->
            <div class="hero-stats">
                {#each [
                    { number: '50+', label: 'Research Papers', delay: '0.8s' },
                    { number: '25+', label: 'Active Projects', delay: '1s' },
                    { number: '100+', label: 'Researchers', delay: '1.2s' }
                ] as stat, i}
                    <div class="stat-card" style="animation-delay: {stat.delay};">
                        <div class="stat-glass"></div>
                        <div class="stat-content">
                            <div class="stat-number">
                                <span class="number-glow">{stat.number.replace('+', '')}</span>
                                <span class="plus-symbol">+</span>
                            </div>
                            <div class="stat-label">{stat.label}</div>
                        </div>
                        <div class="stat-shimmer"></div>
                    </div>
                {/each}
            </div>
            
            <!-- Ultra-premium action buttons -->
            <div class="hero-actions">
                <button class="btn-primary glass-btn" on:click={() => console.log('Explore Research clicked')}>
                    <div class="btn-glass-layer"></div>
                    <div class="btn-content">
                        <span class="btn-text">Explore Our Research</span>
                        <div class="btn-icon">
                            <div class="arrow-line"></div>
                            <div class="arrow-head"></div>
                        </div>
                    </div>
                    <div class="btn-shimmer"></div>
                    <div class="btn-particles-effect"></div>
                </button>
                
                <button class="btn-secondary glass-btn" on:click={() => console.log('Join Team clicked')}>
                    <div class="btn-glass-border"></div>
                    <div class="btn-content">
                        <span class="btn-text">Join Our Team</span>
                        <div class="btn-icon secondary">
                            <div class="plus-h"></div>
                            <div class="plus-v"></div>
                        </div>
                    </div>
                    <div class="btn-hologram"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Enhanced scroll indicator -->
    <div class="scroll-indicator">
        <div class="scroll-container">
            <div class="scroll-track"></div>
            <div class="scroll-thumb"></div>
            <div class="scroll-glow"></div>
        </div>
        <div class="scroll-text">SCROLL</div>
    </div>
</section>
<style>
    /* ===== GLOBAL VARIABLES ===== */
:root {
    --glass-primary: rgba(128, 128, 128, 0.05);
    --glass-secondary: rgba(128, 128, 128, 0.02);
    --glass-border: rgba(128, 128, 128, 0.1);
    --glass-highlight: rgba(128, 128, 128, 0.15);
        --metallic-light: rgba(192, 192, 192, 0.8);
        --metallic-dark: rgba(64, 64, 64, 0.9);
    --accent-blue: rgba(0, 0, 0, 0.6);
    --accent-purple: rgba(64, 64, 64, 0.5);
    --text-primary: #ffffff;
    --text-secondary: #ffffff;
    --text-muted: #ffffff;
    }
    
    /* ===== HERO SECTION BASE ===== */
.hero {
    min-height: 120vh;
    background: #fff;
    color: #000;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 10rem 2rem 8rem;
    }
    
    .container {
        position: relative;
        z-index: 10;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    
    /* ===== GLASSMORPHIC BACKGROUND LAYERS ===== */
    .glass-background {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    
    .glass-layer {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, var(--glass-primary) 0%, transparent 70%);
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
    }
    
    .layer-1 {
        background: radial-gradient(ellipse 80% 60% at 20% 30%, var(--glass-primary) 0%, transparent 60%);
        animation: float-1 20s ease-in-out infinite;
    }
    
    .layer-2 {
        background: radial-gradient(ellipse 60% 80% at 80% 70%, var(--glass-secondary) 0%, transparent 60%);
        animation: float-2 25s ease-in-out infinite reverse;
    }
    
    .layer-3 {
        background: radial-gradient(ellipse 70% 50% at 50% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
        animation: float-3 30s ease-in-out infinite;
    }
    
    /* ===== NEURAL NETWORK CANVAS ===== */
    .neural-background {
        position: absolute;
        inset: 0;
        opacity: 0.6;
        pointer-events: none;
    }
    
    #neural-canvas {
        display: block;
        filter: blur(0.5px);
    }
    
    /* ===== FLOATING GLASS ELEMENTS ===== */
    .floating-elements {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
    }
    
    .floating-glass-particle {
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--glass-highlight);
        border: 1px solid var(--glass-border);
        border-radius: 50%;
        animation: float-particle 20s linear infinite;
        box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.2),
            inset 0 0 6px rgba(255, 255, 255, 0.1);
    }
    
    .floating-glass-particle:nth-child(odd) {
        animation-direction: reverse;
        transform: scale(0.7);
    }
    
    /* ===== GRADIENT ORBS ===== */
    .gradient-orbs {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    
    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        animation: pulse-orb 8s ease-in-out infinite;
    }
    
    .orb-1 {
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, var(--accent-blue) 0%, transparent 70%);
        top: 10%;
        left: 10%;
        animation-delay: 0s;
    }
    
    .orb-2 {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, var(--accent-purple) 0%, transparent 70%);
        bottom: 20%;
        right: 15%;
        animation-delay: 2s;
    }
    
    .orb-3 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 4s;
    }
    
    /* ===== METALLIC ELEMENTS ===== */
    .metallic-elements {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    
    .metallic-ring {
        position: absolute;
        border: 2px solid;
        border-image: linear-gradient(45deg, var(--metallic-light), transparent, var(--metallic-dark)) 1;
        border-radius: 50%;
        opacity: 0.3;
    }
    
    .ring-1 {
        width: 200px;
        height: 200px;
        top: 20%;
        right: 20%;
        animation: rotate-slow 40s linear infinite;
    }
    
    .ring-2 {
        width: 150px;
        height: 150px;
        bottom: 30%;
        left: 15%;
        animation: rotate-slow 60s linear infinite reverse;
    }
    
    .holographic-grid {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 600px;
        height: 600px;
        transform: translate(-50%, -50%);
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 50px 50px;
        opacity: 0.2;
        animation: grid-shift 20s ease-in-out infinite;
    }
    
    /* ===== HERO CONTENT ===== */
    .hero-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 3rem 2rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .hero-content.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* ===== GLASS BADGE ===== */
    .glass-badge {
        position: relative;
        display: inline-block;
        margin-bottom: 2rem;
        padding: 12px 24px;
        background: var(--glass-primary);
        border: 1px solid var(--glass-border);
        border-radius: 50px;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        overflow: hidden;
        animation: badge-entrance 1s ease-out 0.5s both;
    }
    
    .badge-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: shimmer 3s linear infinite;
    }
    
    .badge-content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--text-secondary);
        text-transform: uppercase;
    }
    
    .badge-icon {
        position: relative;
        width: 16px;
        height: 16px;
    }
    
    .icon-core {
        width: 8px;
        height: 8px;
        background: var(--accent-blue);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 8px var(--accent-blue);
    }
    
    .icon-pulse {
        position: absolute;
        inset: 0;
        border: 1px solid var(--accent-blue);
        border-radius: 50%;
        animation: pulse-ring 2s ease-out infinite;
    }
    
    .badge-dot {
        position: relative;
        width: 6px;
        height: 6px;
    }
    
    .dot-core {
        width: 4px;
        height: 4px;
        background: #10b981;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .dot-glow {
        position: absolute;
        inset: -2px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        animation: pulse-glow 2s ease-in-out infinite;
    }
    
    /* ===== HERO TITLE ===== */
    .hero-title {
        position: relative;
        margin-bottom: 3rem;
        animation: title-entrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s both;
    }
    
    .title-container {
        position: relative;
    }
    
    .title-line {
        display: block;
        overflow: hidden;
    }
    
    .word {
        position: relative;
        display: inline-block;
        font-size: clamp(2.5rem, 8vw, 5rem);
        font-weight: 700;
        line-height: 1.1;
        color: #ffffff;
        background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        animation: word-slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    
    .word:nth-child(1) { animation-delay: 1s; }
    .word:nth-child(2) { animation-delay: 1.2s; }
    .word:nth-child(3) { animation-delay: 1.4s; }
    
    .highlight-word {
        background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        position: relative;
    }
    
    .highlight-word::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
        border-radius: 2px;
        opacity: 0.6;
        animation: underline-expand 1s ease-out 2s both;
    }
    
    .title-effects {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    
    .holographic-underline {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--glass-highlight), transparent);
        animation: hologram-pulse 4s ease-in-out infinite;
    }
    
    .text-reflection {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
        transform: scaleY(-1);
        opacity: 0.1;
        filter: blur(1px);
    }
    
    /* ===== SUBTITLE ===== */
    .subtitle-container {
        position: relative;
        margin-bottom: 5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-subtitle {
        font-size: 1.125rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin: 0;
        opacity: 0;
        animation: fade-in-up 1s ease-out 1.5s both;
    }
    
    .subtitle-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
        pointer-events: none;
        animation: glow-pulse 6s ease-in-out infinite;
    }
    
    /* ===== HERO STATS ===== */
    .hero-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 5rem;
        flex-wrap: wrap;
    }
    
    .stat-card {
        position: relative;
        padding: 1.5rem 2rem;
        background: var(--glass-primary);
        border: 1px solid var(--glass-border);
        border-radius: 16px;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        text-align: center;
        min-width: 140px;
        opacity: 0;
        transform: translateY(20px);
        animation: stat-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        overflow: hidden;
    }
    
    .stat-glass {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, var(--glass-highlight) 0%, transparent 50%);
        opacity: 0.1;
    }
    
    .stat-content {
        position: relative;
        z-index: 2;
    }
    
    .stat-number {
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin-bottom: 0.5rem;
    }
    
    .number-glow {
        font-size: 2rem;
        font-weight: 700;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    
    .plus-symbol {
        font-size: 1.2rem;
        color: var(--accent-blue);
        margin-left: 2px;
        animation: plus-glow 2s ease-in-out infinite;
    }
    
    .stat-label {
        font-size: 0.875rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
    }
    
    .stat-shimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: stat-shimmer 4s linear infinite;
    }
    
    /* ===== HERO ACTIONS ===== */
    .hero-actions {
        display: flex;
        gap: 3rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    
    .glass-btn {
        position: relative;
        padding: 16px 32px;
        border: none;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateY(0);
        opacity: 0;
        animation: btn-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.2s both;
    }
    
    .btn-primary {
        background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
        border: 1px solid var(--glass-border);
        color: #ffffff;
        box-shadow: 
            0 8px 32px rgba(59, 130, 246, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 
            0 12px 40px rgba(59, 130, 246, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .btn-secondary {
        background: var(--glass-primary);
        border: 1px solid var(--glass-border);
        color: #ffffff;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        animation-delay: 2.4s;
    }
    
    .btn-secondary:hover {
        background: var(--glass-secondary);
        border-color: var(--glass-highlight);
        transform: translateY(-2px);
    }
    
    .btn-glass-layer, .btn-glass-border {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
    }
    
    .btn-glass-layer {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    }
    
    .btn-glass-border {
        border: 1px solid transparent;
        background: linear-gradient(135deg, var(--glass-border) 0%, transparent 50%) border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
    }
    
    .btn-content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 2;
    }
    
    .btn-icon {
        position: relative;
        width: 16px;
        height: 16px;
    }
    
    .arrow-line {
        position: absolute;
        top: 50%;
        left: 0;
        width: 12px;
        height: 1px;
        background: currentColor;
        transform: translateY(-50%);
        transition: transform 0.3s ease;
    }
    
    .arrow-head {
        position: absolute;
        top: 50%;
        right: 0;
        width: 0;
        height: 0;
        border-left: 4px solid currentColor;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        transform: translateY(-50%);
        transition: transform 0.3s ease;
    }
    
    .glass-btn:hover .arrow-line {
        transform: translateY(-50%) translateX(2px);
    }
    
    .glass-btn:hover .arrow-head {
        transform: translateY(-50%) translateX(2px);
    }
    
    .btn-icon.secondary .plus-h,
    .btn-icon.secondary .plus-v {
        position: absolute;
        background: currentColor;
        top: 50%;
        left: 50%;
        border-radius: 1px;
    }
    
    .plus-h {
        width: 12px;
        height: 1px;
        transform: translate(-50%, -50%);
    }
    
    .plus-v {
        width: 1px;
        height: 12px;
        transform: translate(-50%, -50%);
    }
    
    .btn-shimmer, .btn-particles-effect, .btn-hologram {
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
    }
    
    .btn-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transform: translateX(-100%);
    }
    
    .glass-btn:hover .btn-shimmer {
        animation: btn-shimmer 0.8s ease-out;
    }
    
    .btn-particles-effect {
        opacity: 0;
        background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    }
    
    .glass-btn:active .btn-particles-effect {
        animation: btn-particles 0.6s ease-out;
    }
    
    .btn-hologram {
        background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%);
        animation: hologram-sweep 4s linear infinite;
    }
    
    /* ===== SCROLL INDICATOR ===== */
    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        opacity: 0;
        animation: scroll-entrance 1s ease-out 3s both;
    }
    
    .scroll-container {
        position: relative;
        width: 2px;
        height: 40px;
        background: var(--glass-border);
        border-radius: 1px;
        overflow: hidden;
    }
    
    .scroll-track {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent 0%, var(--glass-highlight) 50%, transparent 100%);
        animation: scroll-track 2s ease-in-out infinite;
    }
    
    .scroll-thumb {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 8px;
        background: #ffffff;
        border-radius: 1px;
        animation: scroll-thumb 2s ease-in-out infinite;
    }
    
    .scroll-glow {
        position: absolute;
        inset: -4px;
        background: radial-gradient(ellipse, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        animation: scroll-glow 2s ease-in-out infinite;
    }
    
    .scroll-text {
        font-size: 0.75rem;
        color: #ffffff;
        letter-spacing: 0.2em;
        font-weight: 500;
    }
    
    /* ===== ANIMATIONS ===== */
    @keyframes float-1 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -30px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
    }
    
    @keyframes float-2 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(-40px, -20px) rotate(180deg); }
    }
    
    @keyframes float-3 {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -40px); }
        50% { transform: translate(-30px, -10px); }
        75% { transform: translate(10px, 30px); }
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse-orb {
        0%, 100% { transform: scale(1); opacity: 0.4; }
        50% { transform: scale(1.1); opacity: 0.6; }
    }
    
    @keyframes rotate-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes grid-shift {
        0%, 100% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg); }
        25% { transform: translate(-50%, -50%) rotateX(5deg) rotateY(5deg); }
        50% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(10deg); }
        75% { transform: translate(-50%, -50%) rotateX(-5deg) rotateY(5deg); }
    }
    
    @keyframes badge-entrance {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    @keyframes pulse-ring {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    @keyframes pulse-glow {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.8; }
    }
    
    @keyframes title-entrance {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes word-slide-up {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes underline-expand {
        0% {
            width: 0;
            left: 50%;
        }
        100% {
            width: 100%;
            left: 0;
        }
    }
    
    @keyframes hologram-pulse {
        0%, 100% { opacity: 0.3; width: 200px; }
        50% { opacity: 0.8; width: 300px; }
    }
    
    @keyframes fade-in-up {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes glow-pulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
    }
    
    @keyframes stat-entrance {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes plus-glow {
        0%, 100% { text-shadow: 0 0 5px var(--accent-blue); }
        50% { text-shadow: 0 0 15px var(--accent-blue), 0 0 25px var(--accent-blue); }
    }
    
    @keyframes stat-shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    @keyframes btn-entrance {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes btn-shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    @keyframes btn-particles {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }
    
    @keyframes hologram-sweep {
        0% { transform: translateX(-100%) skewX(-15deg); }
        100% { transform: translateX(200%) skewX(-15deg); }
    }
    
    @keyframes scroll-entrance {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes scroll-track {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
    }
    
    @keyframes scroll-thumb {
        0% { transform: translateY(0); }
        50% { transform: translateY(32px); }
        100% { transform: translateY(0); }
    }
    
    @keyframes scroll-glow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.6; }
    }
    
    /* ===== RESPONSIVE DESIGN ===== */
    @media (max-width: 900px) {
        .hero {
            padding: 6rem 1rem 4rem;
        }
        .hero-content {
            padding: 2rem 0.5rem;
        }
        .hero-actions {
            gap: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .word {
            font-size: clamp(2rem, 10vw, 3.5rem);
        }
        
        .hero-subtitle {
            font-size: 1rem;
            line-height: 1.6;
        }
        
        .badge-content {
            font-size: 0.7rem;
            gap: 8px;
        }
        
        .stat-card {
            min-width: 100px;
            padding: 0.75rem 1rem;
        }
        
        .number-glow {
            font-size: 1.5rem;
        }
        
        .stat-label {
            font-size: 0.75rem;
        }
        
        .glass-btn {
            padding: 14px 24px;
            font-size: 0.9rem;
        }
        
        .floating-glass-particle {
            width: 4px;
            height: 4px;
        }
    }
    
    /* ===== PERFORMANCE OPTIMIZATIONS ===== */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .floating-glass-particle {
            animation: none;
        }
        
        .orb {
            animation: none;
        }
        
        .metallic-ring {
            animation: none;
        }
    }
    
    /* ===== HIGH CONTRAST MODE ===== */
    @media (prefers-contrast: high) {
        :root {
            --glass-primary: rgba(255, 255, 255, 0.1);
            --glass-secondary: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.2);
            --glass-highlight: rgba(255, 255, 255, 0.3);
            --text-primary: rgba(255, 255, 255, 1);
            --text-secondary: rgba(255, 255, 255, 0.9);
            --text-muted: rgba(255, 255, 255, 0.7);
        }
        
        .glass-btn {
            border-width: 2px;
        }
        
        .stat-card {
            border-width: 2px;
        }
        
        .glass-badge {
            border-width: 2px;
        }
    }
    
    /* ===== DARK MODE ENHANCEMENT ===== */
    @media (prefers-color-scheme: dark) {
        .hero {
            background: linear-gradient(135deg, #000000 0%, #0f0f0f 25%, #050505 50%, #0a0a0a 75%, #000000 100%);
        }
        
        .glass-layer {
            backdrop-filter: blur(60px);
            -webkit-backdrop-filter: blur(60px);
        }
        
        .word {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
        }
        
        .number-glow {
            text-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
        }
    }
    
    /* ===== FOCUS STATES FOR ACCESSIBILITY ===== */
    .glass-btn:focus-visible {
        outline: 2px solid var(--accent-blue);
        outline-offset: 2px;
        box-shadow: 
            0 0 0 4px rgba(59, 130, 246, 0.2),
            0 8px 32px rgba(59, 130, 246, 0.15);
    }
    
    .glass-btn:focus-visible.btn-secondary {
        outline-color: var(--glass-highlight);
        box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.1),
            0 8px 32px rgba(255, 255, 255, 0.05);
    }
    
    /* ===== TOUCH DEVICE OPTIMIZATIONS ===== */
    @media (hover: none) and (pointer: coarse) {
        .glass-btn {
            padding: 18px 36px;
            font-size: 1.1rem;
        }
        
        .glass-btn:active {
            transform: translateY(0) scale(0.98);
        }
        
        .stat-card {
            padding: 2rem;
        }
        
        .floating-glass-particle {
            display: none;
        }
        
        .neural-background {
            opacity: 0.3;
        }
    }
    
    /* ===== PRINT STYLES ===== */
    @media print {
        .hero {
            background: white;
            color: black;
            min-height: auto;
        }
        
        .glass-background,
        .neural-background,
        .floating-elements,
        .gradient-orbs,
        .metallic-elements,
        .scroll-indicator {
            display: none;
        }
        
        .hero-content {
            opacity: 1;
            transform: none;
        }
        
        .word {
            color: black;
            background: none;
            -webkit-text-fill-color: initial;
        }
        
        .glass-btn {
            border: 2px solid black;
            background: white;
            color: black;
        }
    }
    
    /* ===== LOADING STATE ===== */
    .hero.loading {
        overflow: hidden;
    }
    
    .hero.loading .hero-content {
        opacity: 0;
        pointer-events: none;
    }
    
    .hero.loading::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid var(--glass-border);
        border-top: 2px solid var(--text-primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: loading-spin 1s linear infinite;
    }
    
    @keyframes loading-spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    
    /* ===== WEBKIT SPECIFIC OPTIMIZATIONS ===== */
    @supports (-webkit-backdrop-filter: blur(20px)) {
        .glass-badge,
        .stat-card,
        .btn-secondary {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
        }
        
        .glass-layer {
            -webkit-backdrop-filter: blur(50px);
            backdrop-filter: blur(50px);
        }
    }
    
    /* ===== FIREFOX SPECIFIC OPTIMIZATIONS ===== */
    @-moz-document url-prefix() {
        .glass-layer {
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
        }
        
        .glass-badge,
        .stat-card {
            background: rgba(255, 255, 255, 0.08);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.06);
        }
    }
    
    .highlight-text {
        background: linear-gradient(135deg, #000 0%, #444 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
    }
    </style>