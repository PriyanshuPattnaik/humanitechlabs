<script lang="ts">
    import { fade, fly, blur } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut, elasticOut } from 'svelte/easing';
    
    interface TeamMember {
        name: string;
        role: string;
        bio: string;
        img: string;
        social: {
            linkedin?: string;
            twitter?: string;
            portfolio?: string;
            github?: string;
        };
    }

    interface TeamCategory {
        title: string;
        description: string;
        members: TeamMember[];
    }

    let showTeam = false;
    let hoveredCard: number | null = null;
    let parallaxY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const teamCategories: TeamCategory[] = [
        {
            title: "Core Team",
            description: "The dreamers who turned vision into reality. Our core team brings together diverse expertise unified by a shared belief: technology can be a force for profound good.",
            members: [
                { name: 'Priyanshu Pattnaik', role: 'Founder & CEO', bio: 'I am a fulltime builder and a part time student. I am a high school student with a deep passion for artificial intelligence and a strong desire to make a positive impact on the world.', img: '/images/team/priyanshu.png', social: { linkedin: 'https://www.linkedin.com/in/priyanshu-humanitech/', twitter: '#', portfolio: '#' } },
                { name: 'Taniya Chandra', role: 'Human Resources ', bio: 'With a solid foundation in Psychology, I am fascinated by understanding human behaviour and the intricacies of the mind. Coupled with my love for language and literature, my English major fuels my creativity and sharpens my communication skills', img: '/images/team/marcus.jpg', social: { linkedin: '#', twitter: '#', portfolio: '#' } },
                { name: 'Priya Patel', role: 'Head of Impact', bio: 'Social impact strategist ensuring our tech creates real change in communities.', img: '/images/team/priya.jpg', social: { linkedin: '#', twitter: '#', portfolio: '#' } }
            ]
        },
        {
            title: "Interns",
            description: "The future of tech for good. Our interns aren't just learning—they're contributing, creating, and carrying forward the mission of human-centered innovation.",
            members: [
                { name: 'Alex Kim', role: 'AI Research Intern', bio: 'Exploring ethical AI applications in healthcare.', img: '/images/team/alex.jpg', social: { linkedin: '#', github: '#' } },
                { name: 'Maya Patel', role: 'UX Design Intern', bio: 'Creating accessible interfaces for social impact.', img: '/images/team/maya.jpg', social: { linkedin: '#', portfolio: '#' } }
            ]
        }
    ];

    onMount(() => {
        setTimeout(() => {
            showTeam = true;
        }, 2200);

        // Parallax effect
        const handleScroll = () => {
            parallaxY = window.scrollY * 0.5;
        };

        // Mouse tracking for dynamic effects
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<section class="team-section" id="team">
    <!-- Animated background elements -->
    <div class="bg-particles">
        {#each Array(15) as _, i}
            <div class="particle" style="--delay: {i * 0.3}s; --duration: {8 + i * 0.5}s;"></div>
        {/each}
    </div>
    
    <!-- Metallic mesh overlay -->
    <div class="metallic-mesh" style="transform: translate({mouseX * 10}px, {mouseY * 10}px)"></div>
    
    {#if showTeam}
        <div class="container">
            <!-- Hero section -->
            <div class="team-hero" in:blur={{ duration: 1200, delay: 300 }}>
                <h2 in:fly={{ y: 60, duration: 800, easing: elasticOut }}>
                    <span class="gradient-text">Meet Our</span>
                    <span class="metallic-text">Visionaries</span>
                </h2>
                <div class="hero-subtitle" in:fade={{ delay: 800, duration: 600 }}>
                    Where innovation meets humanity
                </div>
            </div>

            {#each teamCategories as category, categoryIndex}
                <div class="team-category" in:fade={{ delay: categoryIndex * 300 + 1000, duration: 1000 }}>
                    <div class="category-header">
                        <h3 class="category-title">{category.title}</h3>
                        <div class="category-line"></div>
                        <p class="category-description">{category.description}</p>
                    </div>
                    
                    <div class="team-grid">
                        {#each category.members as member, memberIndex}
                            <div 
                                class="team-card" 
                                class:hovered={hoveredCard === categoryIndex * 100 + memberIndex}
                                role="button"
                                tabindex="0"
                                in:fly={{ 
                                    y: 80, 
                                    duration: 800, 
                                    delay: memberIndex * 150 + 1200,
                                    easing: quintOut 
                                }}
                                on:mouseenter={() => hoveredCard = categoryIndex * 100 + memberIndex}
                                on:mouseleave={() => hoveredCard = null}
                            >
                                <!-- Glass morphism container -->
                                <div class="glass-container">
                                    <!-- Animated border -->
                                    <div class="animated-border"></div>
                                    
                                    <!-- Profile image with holographic effect -->
                                    <div class="profile-container">
                                        <div class="holographic-ring"></div>
                                        <div class="team-img">
                                            <div class="img-placeholder"></div>
                                            <div class="scan-line"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Content -->
                                    <div class="team-content">
                                        <h4 class="member-name">{member.name}</h4>
                                        <p class="member-role">{member.role}</p>
                                        
                                        <!-- Bio reveal on hover -->
                                        <div class="bio-section">
                                            <p class="member-bio">{member.bio}</p>
                                        </div>
                                        
                                        <!-- Social links with icons -->
                                        <div class="social-links">
                                            {#if member.social.linkedin}
                                                <a href={member.social.linkedin} class="social-link linkedin" target="_blank" rel="noopener">
                                                    <span class="link-glow"></span>
                                                    <span class="link-text">in</span>
                                                </a>
                                            {/if}
                                            {#if member.social.twitter}
                                                <a href={member.social.twitter} class="social-link twitter" target="_blank" rel="noopener">
                                                    <span class="link-glow"></span>
                                                    <span class="link-text">tw</span>
                                                </a>
                                            {/if}
                                            {#if member.social.portfolio}
                                                <a href={member.social.portfolio} class="social-link portfolio" target="_blank" rel="noopener">
                                                    <span class="link-glow"></span>
                                                    <span class="link-text">pf</span>
                                                </a>
                                            {/if}
                                            {#if member.social.github}
                                                <a href={member.social.github} class="social-link github" target="_blank" rel="noopener">
                                                    <span class="link-glow"></span>
                                                    <span class="link-text">gh</span>
                                                </a>
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</section>

<style>
    :root {
        --color-white: #ffffff;
        --color-black: #0a0a0a;
        --color-silver: #c0c0c0;
        --color-metallic: rgba(192, 192, 192, 0.3);
        --color-glass: rgba(255, 255, 255, 0.1);
        --gradient-primary: linear-gradient(135deg, #2a2a2a 0%, #000000 100%);
        --gradient-metallic: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 50%, #a8a8a8 100%);
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
        --shadow-soft: 0 10px 40px rgba(0, 0, 0, 0.1);
        --shadow-strong: 0 20px 60px rgba(0, 0, 0, 0.15);
        --border-radius: 24px;
    }

    .team-section {
        position: relative;
        min-height: 100vh;
        padding: var(--spacing-xl) 0;
        background: linear-gradient(135deg, 
            rgba(248, 250, 252, 1) 0%,
            rgba(241, 245, 249, 1) 25%,
            rgba(226, 232, 240, 1) 50%,
            rgba(203, 213, 225, 1) 75%,
            rgba(148, 163, 184, 1) 100%
        );
        overflow: hidden;
    }

    /* Animated background particles */
    .bg-particles {
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
        width: 2px;
        height: 2px;
        background: var(--gradient-metallic);
        border-radius: 50%;
        animation: float var(--duration, 8s) infinite ease-in-out;
        animation-delay: var(--delay, 0s);
        opacity: 0.6;
    }

    .particle:nth-child(odd) {
        left: calc(10% + var(--delay, 0s) * 10%);
        top: calc(20% + var(--delay, 0s) * 15%);
    }

    .particle:nth-child(even) {
        right: calc(15% + var(--delay, 0s) * 8%);
        bottom: calc(25% + var(--delay, 0s) * 12%);
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
        25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
        50% { transform: translateY(-40px) rotate(180deg); opacity: 0.6; }
        75% { transform: translateY(-20px) rotate(270deg); opacity: 0.9; }
    }

    /* Metallic mesh overlay */
    .metallic-mesh {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-image: 
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(192, 192, 192, 0.1) 2px,
                rgba(192, 192, 192, 0.1) 4px
            ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(192, 192, 192, 0.1) 2px,
                rgba(192, 192, 192, 0.1) 4px
            );
        pointer-events: none;
        z-index: 2;
        animation: meshShift 20s infinite ease-in-out;
    }

    @keyframes meshShift {
        0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
        33% { transform: translateX(10px) translateY(-10px) rotate(1deg); }
        66% { transform: translateX(-5px) translateY(15px) rotate(-1deg); }
    }

    .container {
        position: relative;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 var(--spacing-md);
        z-index: 10;
    }

    /* Team hero section */
    .team-hero {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-xl) 0;
    }

    .team-hero h2 {
        font-size: clamp(3rem, 8vw, 6rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: var(--spacing-md);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
        align-items: center;
    }

    .gradient-text {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
    }

    .metallic-text {
        background: var(--gradient-metallic);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        position: relative;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(10, 10, 10, 0.7);
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    /* Team category */
    .team-category {
        margin-bottom: 5rem;
    }

    .category-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
    }

    .category-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-black);
        margin-bottom: var(--spacing-md);
        position: relative;
        display: inline-block;
    }

    .category-line {
        width: 100px;
        height: 2px;
        background: var(--gradient-metallic);
        margin: var(--spacing-md) auto;
        position: relative;
        overflow: hidden;
    }

    .category-line::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }

    .category-description {
        max-width: 800px;
        margin: 0 auto;
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(10, 10, 10, 0.8);
        font-weight: 300;
    }

    /* Team grid */
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--spacing-lg);
        padding: var(--spacing-md) 0;
    }

    /* Team card */
    .team-card {
        position: relative;
        height: 500px;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .team-card:hover {
        transform: translateY(-20px) rotateX(5deg);
    }

    .glass-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
        border-radius: var(--border-radius);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: var(--shadow-soft);
        overflow: hidden;
        transition: all 0.4s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--spacing-lg);
    }

    .team-card.hovered .glass-container {
        background: rgba(255, 255, 255, 0.35);
        box-shadow: var(--shadow-strong);
        border-color: rgba(192, 192, 192, 0.5);
    }

    /* Animated border */
    .animated-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--border-radius);
        padding: 2px;
        background: linear-gradient(45deg, 
            transparent 0%, 
            rgba(192, 192, 192, 0.8) 25%, 
            transparent 50%, 
            rgba(192, 192, 192, 0.8) 75%, 
            transparent 100%
        );
        background-size: 200% 200%;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        animation: borderGlow 3s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .team-card.hovered .animated-border {
        opacity: 1;
    }

    @keyframes borderGlow {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
    }

    /* Profile container */
    .profile-container {
        position: relative;
        margin-bottom: var(--spacing-md);
    }

    .holographic-ring {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(192, 192, 192, 0.8) 90deg,
            transparent 180deg,
            rgba(192, 192, 192, 0.8) 270deg,
            transparent 360deg
        );
        animation: holographicSpin 4s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .team-card.hovered .holographic-ring {
        opacity: 1;
    }

    @keyframes holographicSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .team-img {
        position: relative;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        overflow: hidden;
        background: linear-gradient(135deg, #f0f0f0, #d0d0d0);
        border: 3px solid rgba(192, 192, 192, 0.5);
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .img-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #e0e0e0, #c8c8c8);
        position: relative;
        overflow: hidden;
    }

    .img-placeholder::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: rgba(192, 192, 192, 0.6);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }

    .scan-line {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent);
        animation: scan 2s infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .team-card.hovered .scan-line {
        opacity: 1;
    }

    @keyframes scan {
        0% { left: -100%; top: 0%; }
        25% { left: 100%; top: 50%; }
        50% { left: 100%; top: 100%; }
        75% { left: -100%; top: 50%; }
        100% { left: -100%; top: 0%; }
    }

    /* Team content */
    .team-content {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .member-name {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-black);
        margin-bottom: var(--spacing-xs);
        transition: all 0.3s ease;
    }

    .team-card.hovered .member-name {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .member-role {
        font-size: 0.95rem;
        color: rgba(10, 10, 10, 0.6);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: var(--spacing-md);
    }

    .bio-section {
        flex: 1;
        display: flex;
        align-items: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
        margin-bottom: var(--spacing-md);
    }

    .team-card.hovered .bio-section {
        opacity: 1;
        transform: translateY(0);
    }

    .member-bio {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(10, 10, 10, 0.7);
        font-weight: 300;
    }

    /* Social links */
    .social-links {
        display: flex;
        gap: var(--spacing-sm);
        justify-content: center;
        margin-top: auto;
    }

    .social-link {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(192, 192, 192, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--color-black);
        font-weight: 700;
        font-size: 0.8rem;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        overflow: hidden;
    }

    .social-link:hover {
        transform: translateY(-3px) scale(1.1);
        background: rgba(0, 0, 0, 0.2);
        border-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .link-glow {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
        transition: left 0.5s ease;
    }

    .social-link:hover .link-glow {
        left: 100%;
    }

    .link-text {
        position: relative;
        z-index: 2;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .team-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
        }
        
        .team-card {
            height: 450px;
        }
        
        .team-hero h2 {
            font-size: clamp(2rem, 6vw, 4rem);
        }
        
        .category-title {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 0 var(--spacing-sm);
        }
        
        .team-card {
            height: 400px;
        }
        
        .glass-container {
            padding: var(--spacing-md);
        }
        
        .team-img {
            width: 120px;
            height: 120px;
        }
    }
</style>