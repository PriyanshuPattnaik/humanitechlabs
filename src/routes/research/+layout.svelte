<script lang="ts">
    import Hero from './components/Hero.svelte';
    import ResearchIndex from './components/ResearchIndex.svelte';
    import CallToAction from './components/CallToAction.svelte';
</script>

<main>
    <Hero />
    <ResearchIndex />
    <CallToAction />
</main>

<style>
    main {
        overflow-x: hidden;
        background: #fff;
        color: #000;
    }

    :global(.container) {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    @media (max-width: 768px) {
        :global(.container) {
            padding: 0 1.5rem;
        }
    }
</style>
