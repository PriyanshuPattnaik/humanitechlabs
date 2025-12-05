<script lang="ts">
    import Hero from './components/Hero.svelte';
    import Story from './components/Story.svelte';
    import Mission from './components/Mission.svelte';
    import Founder from './components/Founder.svelte';
    import Journey from './components/Journey.svelte';
</script>

<main>
    <Hero />
    <Story />
    <Mission />
    <Founder />
    <Journey />
</main>

<style>
    main {
        overflow-x: hidden;
    }

    :global(.container) {
        width: 100%;
        max-width: 1200px;
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

    @media (max-width: 768px) {
        :global(.section-title) {
            font-size: 2.5rem;
        }
    }
</style> 