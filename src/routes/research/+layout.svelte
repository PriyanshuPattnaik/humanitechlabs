<script lang="ts">
    import Hero from './components/Hero.svelte';
    import ResearchTabs from './components/ResearchTabs.svelte';
    import ResearchIndex from './components/ResearchIndex.svelte';
    import ResearchOverview from './components/ResearchOverview.svelte';
    import ResearchLab from './components/ResearchLab.svelte';
    import ResearchAreas from './components/ResearchAreas.svelte';
    import Publications from './components/Publications.svelte';
    import Team from './components/Team.svelte';
    import Collaboration from './components/Collaboration.svelte';
    import Contact from './components/Contact.svelte';
    import { onMount } from 'svelte';

    let activeTab = 'index';
    let isMobile = false;

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    });
</script>

<main>
    <Hero />
    
    <!-- Research Content with Sidebar Layout -->
    <section class="research-content-section">
        <div class="container">
            <div class="research-layout" class:mobile={isMobile}>
                <!-- Left Sidebar with Tabs (Desktop Only) -->
                {#if !isMobile}
                    <aside class="research-sidebar">
                        <ResearchTabs bind:activeTab on:change={e => activeTab = e.detail} />
                    </aside>
                {/if}
                
                <!-- Main Content Area -->
                <main class="research-main-content">
                    {#if activeTab === 'index'}
                        <ResearchIndex />
                    {:else if activeTab === 'overview'}
                        <ResearchOverview />
                    {:else if activeTab === 'lab'}
                        <ResearchLab />
                    {/if}
                </main>
            </div>
        </div>
    </section>
    
    <ResearchAreas />
    <Publications />
    <Team />
    <Collaboration />
    <Contact />
    
    <!-- Mobile Bottom Navigation -->
    {#if isMobile}
        <nav class="mobile-bottom-nav">
            <ResearchTabs bind:activeTab on:change={e => activeTab = e.detail} {isMobile} />
        </nav>
    {/if}
</main>

<style>
    main {
        overflow-x: hidden;
        background: #fff;
        color: #000;
        padding-bottom: 80px; /* Space for mobile bottom nav */
    }

    .research-content-section {
        padding: 4rem 0;
        background: #fff;
    }

    .research-layout {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 3rem;
        align-items: start;
        max-width: 1400px;
        margin: 0 auto;
    }

    .research-layout.mobile {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .research-sidebar {
        position: sticky;
        top: 2rem;
        height: fit-content;
    }

    .research-main-content {
        min-height: 500px;
    }

    /* Mobile Bottom Navigation */
    .mobile-bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 1000;
        padding: 0.5rem 1rem 1rem;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    }

    :global(.container) {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 var(--spacing-md);
    }

    :global(.section-title) {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: var(--spacing-lg);
        color: var(--color-black);
    }

    :global(.slide-up) {
        opacity: 0;
        transform: translateY(30px);
        animation: slideUp 0.8s ease forwards;
    }

    :global(.fade-in) {
        opacity: 0;
        animation: fadeIn 0.8s ease forwards;
    }

    @keyframes slideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    @media (max-width: 1024px) {
        .research-layout {
            grid-template-columns: 240px 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        main {
            padding-bottom: 100px;
        }

        .research-content-section {
            padding: 3rem 0;
        }

        .research-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .research-sidebar {
            display: none;
        }

        .research-main-content {
            order: 1;
        }

        .mobile-bottom-nav {
            padding: 0.75rem 1rem 1.25rem;
        }

        :global(.section-title) {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 480px) {
        main {
            padding-bottom: 90px;
        }

        .research-content-section {
            padding: 2rem 0;
        }

        .research-layout {
            gap: 1.5rem;
        }

        .mobile-bottom-nav {
            padding: 0.5rem 0.75rem 1rem;
        }
    }

    /* Safe area support for devices with home indicators */
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
        .mobile-bottom-nav {
            padding-bottom: calc(1rem + env(safe-area-inset-bottom));
        }
        
        main {
            padding-bottom: calc(80px + env(safe-area-inset-bottom));
        }
    }
</style> 