<script >
    import {goto} from '$app/navigation'
    
    
</script>

<svelte:window on:load={goto('/home',{replaceState: true})}></svelte:window>