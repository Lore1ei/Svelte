<script>
    import {afterNavigate, beforeNavigate, goto} from "$app/navigation";

    const handleClick = () => {
        goto('/products/')
    }

    beforeNavigate((navigation) => {
        console.log({before: navigation})
    })
    afterNavigate((navigation) => {
        console.log({after: navigation})
    })
</script>

<h1>Welcome Home</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place order</button>