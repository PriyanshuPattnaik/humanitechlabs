<script>
    import { page } from '$app/stores';
    
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <meta name="keywords" content={data.keywords} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={data.ogImage} />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={data.title} />
    <meta property="twitter:description" content={data.description} />
    <meta property="twitter:image" content={data.ogImage} />
</svelte:head>

<!-- The layout file will handle all the content -->
