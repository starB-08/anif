<script>
	import { onMount } from 'svelte';
    import {count} from '../stores'
    import {setClearHeader} from '../Header.js'
    onMount(function(){
        count.update(n => false);
        setClearHeader(document.querySelector('header'))
    })
</script>
<svelte:head>
	<title>[anif] - About</title>
</svelte:head>
<h1>THIS IS ABOUT</h1>