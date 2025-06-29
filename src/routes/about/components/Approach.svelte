<script lang="ts">
    import { fly, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { cubicOut } from 'svelte/easing';
    
    let showApproach = false;
    let intersectionRef: HTMLElement;
    let stepRefs: HTMLElement[] = [];
    
    onMount(() => {
        // Enhanced intersection observer for smoother animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        showApproach = true;
                    }
                });
            },
            { threshold: 0.3 }
        );
        
        if (intersectionRef) {
            observer.observe(intersectionRef);
        }
        
        // Parallax effect for step numbers
        const handleScroll = () => {
            stepRefs.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const scrolled = window.scrollY;
                    const rate = scrolled * -0.5;
                    const numberEl = ref.querySelector('.step-number') as HTMLElement;
                    if (numberEl) {
                        numberEl.style.transform = `translateY(${rate * 0.1}px) rotateY(${rate * 0.05}deg)`;
                    }
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<section class="approach-section" id="approach" bind:this={intersectionRef}>
    <div class="metallic-background"></div>
    <div class="gradient-overlay"></div>
    
    {#if showApproach}
        <div class="container">
            <div class="section-header">
                <h2 in:fly={{ y: 50, duration: 800, easing: cubicOut }}>
                    <span class="main-title">How We Turn Ideas</span>
                    <span class="accent-title">Into Impact</span>
                </h2>
                <div class="title-line" in:scale={{ duration: 1000, delay: 400 }}></div>
            </div>
            
            <div class="approach-grid">
                {#each [
                    { number: '01', title: 'Listen First', desc: 'Before we write a single line of code, we listen. To communities, to challenges, to the voices often unheard in tech spaces.' },
                    { number: '02', title: 'Design with Purpose', desc: 'Every feature serves a human need. Every interface considers accessibility. Every algorithm reflects our values.' },
                    { number: '03', title: 'Build Transparently', desc: 'Open source isn\'t just our preference—it\'s our promise. Every solution we create belongs to the community it serves.' },
                    { number: '04', title: 'Test with Heart', desc: 'We don\'t just test functionality; we test impact. Does it actually help? Does it feel human? Does it create the change we promised?' },
                    { number: '05', title: 'Scale Responsibly', desc: 'Growth without purpose is just noise. We scale solutions that prove their worth in improving lives, not just metrics.' }
                ] as step, i}
                    <div 
                        class="step-card" 
                        bind:this={stepRefs[i]}
                        in:fly={{ x: -60, y: 30, duration: 700, delay: i * 150, easing: cubicOut }}
                    >
                        <div class="step-content">
                            <div class="step-number">
                                <span class="number-text">{step.number}</span>
                                <div class="number-glow"></div>
                            </div>
                            <div class="step-text">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                        <div class="card-shine"></div>
                        <div class="card-border"></div>
                    </div>
                {/each}
            </div>
            
            <div class="process-visualization">
                <div class="flow-line" in:scale={{ duration: 1200, delay: 800 }}></div>
                <div class="flow-dots">
                    {#each Array(5) as _, i}
                        <div 
                            class="flow-dot" 
                            in:scale={{ duration: 400, delay: 1000 + i * 100 }}
                        ></div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</section>

<style>
    .approach-section {
        position: relative;
        padding: 120px 0;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    
    .metallic-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 30%, rgba(192, 192, 192, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(169, 169, 169, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(211, 211, 211, 0.05) 50%, transparent 60%);
        z-index: 1;
    }
    
    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(248, 249, 250, 0.8) 50%,
            rgba(233, 236, 239, 0.9) 100%
        );
        z-index: 2;
    }
    
    .container {
        position: relative;
        z-index: 3;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    
    .section-header {
        text-align: center;
        margin-bottom: 80px;
    }
    
    .section-header h2 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        margin: 0;
        line-height: 1.1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .main-title {
        color: #1a1a1a;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .accent-title {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #95a5a6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        position: relative;
    }
    
    .title-line {
        width: 100px;
        height: 4px;
        background: linear-gradient(90deg, #2c3e50, #95a5a6, #2c3e50);
        margin: 2rem auto 0;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);
    }
    
    .approach-grid {
        display: grid;
        gap: 2rem;
        margin-bottom: 4rem;
    }
    
    .step-card {
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2.5rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        overflow: hidden;
        border: 1px solid rgba(169, 169, 169, 0.2);
    }
    
    .step-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(192, 192, 192, 0.1) 0%, transparent 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }
    
    .step-card:hover::before {
        opacity: 1;
    }
    
    .step-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 8px 16px rgba(44, 62, 80, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        border-color: rgba(149, 165, 166, 0.4);
    }
    
    .step-content {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem;
        align-items: center;
    }
    
    .step-number {
        position: relative;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        border-radius: 50%;
        box-shadow: 
            0 8px 20px rgba(44, 62, 80, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        overflow: hidden;
    }
    
    .step-number::before {
        content: '';
        position: absolute;
        top: 10%;
        left: 10%;
        right: 10%;
        bottom: 10%;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        border-radius: 50%;
    }
    
    .number-text {
        font-size: 1.5rem;
        font-weight: 800;
        color: white;
        position: relative;
        z-index: 2;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
    
    .number-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        background: radial-gradient(circle, rgba(149, 165, 166, 0.3) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .step-card:hover .number-glow {
        opacity: 1;
        animation: pulse 2s infinite;
    }
    
    .step-text h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 1rem 0;
        line-height: 1.3;
    }
    
    .step-text p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #4a5568;
        margin: 0;
    }
    
    .card-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        transition: left 0.6s ease;
        z-index: 1;
    }
    
    .step-card:hover .card-shine {
        left: 100%;
    }
    
    .card-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(149, 165, 166, 0.5), transparent, rgba(192, 192, 192, 0.5));
        padding: 1px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .card-border::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 19px;
    }
    
    .step-card:hover .card-border {
        opacity: 1;
    }
    
    .process-visualization {
        position: relative;
        height: 60px;
        margin-top: 3rem;
    }
    
    .flow-line {
        position: absolute;
        top: 50%;
        left: 10%;
        right: 10%;
        height: 2px;
        background: linear-gradient(90deg, #2c3e50, #95a5a6, #2c3e50);
        transform: translateY(-50%);
        border-radius: 1px;
    }
    
    .flow-dots {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        transform: translateY(-50%);
    }
    
    .flow-dot {
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #2c3e50, #95a5a6);
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);
        animation: float 3s ease-in-out infinite;
    }
    
    .flow-dot:nth-child(2) { animation-delay: 0.5s; }
    .flow-dot:nth-child(3) { animation-delay: 1s; }
    .flow-dot:nth-child(4) { animation-delay: 1.5s; }
    .flow-dot:nth-child(5) { animation-delay: 2s; }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }
    
    @media (max-width: 768px) {
        .approach-section {
            padding: 80px 0;
        }
        
        .container {
            padding: 0 1rem;
        }
        
        .section-header {
            margin-bottom: 3rem;
        }
        
        .step-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
        }
        
        .step-number {
            margin: 0 auto;
            width: 60px;
            height: 60px;
        }
        
        .number-text {
            font-size: 1.2rem;
        }
        
        .step-text h3 {
            font-size: 1.3rem;
        }
        
        .step-text p {
            font-size: 1rem;
        }
        
        .step-card {
            padding: 2rem;
        }
        
        .process-visualization {
            display: none;
        }
    }
    
    @media (max-width: 480px) {
        .step-card {
            padding: 1.5rem;
        }
        
        .step-content {
            gap: 1rem;
        }
        
        .step-number {
            width: 50px;
            height: 50px;
        }
        
        .number-text {
            font-size: 1rem;
        }
    }
</style>