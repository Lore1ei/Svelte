<script>
    import {page} from "$app/stores";

    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }

    const {lang = 'en'} = $page.params;
    const greeting = greetings[lang]
    console.log(greeting)
</script>

<h1>{greeting}</h1>