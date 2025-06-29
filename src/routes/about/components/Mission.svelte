<script lang="ts">
    import { onMount } from 'svelte';
    
    let showMission = false;
    let showVision = false;
    let showValues = false;
    let mounted = false;
    
    // Intersection Observer for scroll animations
    let missionRef: HTMLElement;
    let visionRef: HTMLElement;
    let valuesRef: HTMLElement;
    
    onMount(() => {
        mounted = true;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === missionRef) {
                        setTimeout(() => showMission = true, 200);
                    } else if (entry.target === visionRef) {
                        setTimeout(() => showVision = true, 400);
                    } else if (entry.target === valuesRef) {
                        setTimeout(() => showValues = true, 600);
                    }
                }
            });
        }, { threshold: 0.2 });
        
        if (missionRef) observer.observe(missionRef);
        if (visionRef) observer.observe(visionRef);
        if (valuesRef) observer.observe(valuesRef);
        
        return () => observer.disconnect();
    });
</script>

<section class="mission-vision" id="mission">
    <!-- Animated Background Elements -->
    <div class="bg-elements">
        <div class="floating-orb orb-1"></div>
        <div class="floating-orb orb-2"></div>
        <div class="floating-orb orb-3"></div>
        <div class="grid-overlay"></div>
    </div>
    
    <div class="container">
        <!-- Mission Block -->
        <div class="content-block mission-block" bind:this={missionRef}>
            <div class="block-inner" class:visible={showMission}>
                <div class="icon-wrapper">
                    <div class="mission-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                <h2 class="section-title">Our Mission</h2>
                <p class="section-description">To harness the transformative power of technology as a bridge—connecting communities to opportunities, problems to solutions, and today's challenges to tomorrow's possibilities. We don't just build products; we build pathways to a more equitable, sustainable, and hopeful future.</p>
                <div class="glow-line"></div>
            </div>
        </div>
        
        <!-- Vision Block -->
        <div class="content-block vision-block" bind:this={visionRef}>
            <div class="block-inner" class:visible={showVision}>
                <div class="icon-wrapper">
                    <div class="vision-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </div>
                </div>
                <h2 class="section-title">Our Vision</h2>
                <p class="section-description">A world where technology feels inherently human—where innovation serves every community, where digital solutions heal rather than divide, and where the next breakthrough isn't just smarter, but kinder.</p>
                <div class="glow-line"></div>
            </div>
        </div>
        
        <!-- Values Grid -->
        <div class="values-section" bind:this={valuesRef}>
            <div class="values-header" class:visible={showValues}>
                <h3 class="values-title">Core Values</h3>
                <div class="values-subtitle">The principles that guide our innovation</div>
            </div>
            
            <div class="values-grid" class:visible={showValues}>
                <div class="value-card" style="--delay: 0.1s">
                    <div class="card-glow"></div>
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </div>
                    <h4>Human-First Innovation</h4>
                    <p>Technology that amplifies human potential</p>
                </div>
                
                <div class="value-card" style="--delay: 0.2s">
                    <div class="card-glow"></div>
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h4>Sustainable Impact</h4>
                    <p>Building for the long-term future</p>
                </div>
                
                <div class="value-card" style="--delay: 0.3s">
                    <div class="card-glow"></div>
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                    </div>
                    <h4>Open Source Everything</h4>
                    <p>Transparency and collaboration first</p>
                </div>
                
                <div class="value-card" style="--delay: 0.4s">
                    <div class="card-glow"></div>
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                        </svg>
                    </div>
                    <h4>Ethical Technology</h4>
                    <p>Responsible innovation for all</p>
                </div>
                
                <div class="value-card" style="--delay: 0.5s">
                    <div class="card-glow"></div>
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                    <h4>Community Growth</h4>
                    <p>Nurturing ecosystems of innovation</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .mission-vision {
        position: relative;
        background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(10, 10, 10, 0.9) 50%, 
            rgba(0, 0, 0, 0.95) 100%);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 120px 0;
        overflow: hidden;
        color: white;
    }
    
    /* Animated Background Elements */
    .bg-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    
    .floating-orb {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        animation: float 8s ease-in-out infinite;
    }
    
    .orb-1 {
        width: 200px;
        height: 200px;
        top: 10%;
        left: 10%;
        animation-delay: 0s;
    }
    
    .orb-2 {
        width: 150px;
        height: 150px;
        top: 60%;
        right: 15%;
        animation-delay: -3s;
    }
    
    .orb-3 {
        width: 100px;
        height: 100px;
        bottom: 20%;
        left: 70%;
        animation-delay: -6s;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(120deg); }
        66% { transform: translateY(10px) rotate(240deg); }
    }
    
    .grid-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-move 20s linear infinite;
    }
    
    @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        position: relative;
        z-index: 1;
    }
    
    /* Content Blocks */
    .content-block {
        margin-bottom: 80px;
        perspective: 1000px;
    }
    
    .block-inner {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 60px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 24px;
        position: relative;
        transform: translateY(60px) rotateX(15deg);
        opacity: 0;
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .block-inner.visible {
        transform: translateY(0) rotateX(0deg);
        opacity: 1;
    }
    
    .block-inner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(255, 255, 255, 0.1) 100%);
        border-radius: 24px;
        z-index: -1;
    }
    
    .icon-wrapper {
        margin-bottom: 30px;
    }
    
    .mission-icon, .vision-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
    
    .mission-icon::before, .vision-icon::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        animation: shine 3s ease-in-out infinite;
    }
    
    @keyframes shine {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    }
    
    .mission-icon svg, .vision-icon svg {
        width: 40px;
        height: 40px;
        color: white;
        z-index: 1;
    }
    
    .section-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 30px;
        background: linear-gradient(135deg, #ffffff, #cccccc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    
    .section-description {
        font-size: 1.25rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
    }
    
    .glow-line {
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        margin: 0 auto;
        position: relative;
    }
    
    .glow-line::after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        filter: blur(2px);
    }
    
    /* Values Section */
    .values-section {
        margin-top: 120px;
    }
    
    .values-header {
        text-align: center;
        margin-bottom: 60px;
        transform: translateY(30px);
        opacity: 0;
        transition: all 0.8s ease-out;
    }
    
    .values-header.visible {
        transform: translateY(0);
        opacity: 1;
    }
    
    .values-title {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 15px;
        background: linear-gradient(135deg, #ffffff, #999999);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .values-subtitle {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.7);
    }
    
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        opacity: 0;
        transition: opacity 1s ease-out 0.3s;
    }
    
    .values-grid.visible {
        opacity: 1;
    }
    
    .value-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 40px 30px;
        text-align: center;
        position: relative;
        overflow: hidden;
        transform: translateY(40px) scale(0.9);
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-delay: var(--delay, 0s);
    }
    
    .values-grid.visible .value-card {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    
    .value-card:hover {
        transform: translateY(-10px) scale(1.05);
        border-color: rgba(255, 255, 255, 0.3);
    }
    
    .card-glow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .value-card:hover .card-glow {
        opacity: 1;
    }
    
    .value-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .value-card:hover .value-icon {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
        border-color: rgba(255, 255, 255, 0.4);
    }
    
    .value-icon svg {
        width: 30px;
        height: 30px;
        color: white;
    }
    
    .value-card h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 15px;
        color: white;
    }
    
    .value-card p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .mission-vision {
            padding: 80px 0;
        }
        
        .container {
            padding: 0 15px;
        }
        
        .block-inner {
            padding: 40px 25px;
        }
        
        .section-title {
            font-size: 2.2rem;
        }
        
        .section-description {
            font-size: 1.1rem;
        }
        
        .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .value-card {
            padding: 30px 20px;
        }
        
        .values-title {
            font-size: 2rem;
        }
        
        .orb-1, .orb-2, .orb-3 {
            display: none;
        }
    }
    
    @media (max-width: 480px) {
        .section-title {
            font-size: 1.8rem;
        }
        
        .section-description {
            font-size: 1rem;
        }
        
        .values-title {
            font-size: 1.6rem;
        }
    }   
</style>