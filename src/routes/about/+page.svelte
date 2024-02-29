<script>
	import { onMount } from 'svelte';
    import {count} from '../stores'
    onMount(function(){
        count.update(n => true)
    })
</script>
<svelte:head>
	<title>[anif] - About</title>
</svelte:head>
<h1>THIS IS ABOUT</h1>