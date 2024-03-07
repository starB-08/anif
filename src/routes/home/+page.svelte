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
	<title>[anif] - Home</title>
</svelte:head>
<h1>THIS IS HOME PAGE</h1>

<h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br><h1>1</h1><br>