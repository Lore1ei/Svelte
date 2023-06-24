<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<Header />
<div class="app">
    <slot />
</div>
<Footer />

<style>

    :global(body){
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    :global(html){
        height: 100%;
    }
    .app{
        flex: 1 0 auto
    }
</style>