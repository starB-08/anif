<script>
	import { onMount } from 'svelte';
    import {count} from './stores'
    onMount(function(){
        count.update(n => false)
    })
</script>

<svelte:head>
	<title>[anif] - Home</title>
</svelte:head>
<h1>THIS IS HOME PAGE</h1>