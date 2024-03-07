<script>
	import Header from './Header.svelte'
	import SideBar from './SideBar.svelte';
</script>
<style>
	@import './styles.css';
	
	
	section :global(> :first-child){
		margin-top: 40px;
	}

	@media(max-width:720px){
		section :global(> :first-child){
		margin-top: 30px;
	}
	}
</style>
<Header />
<SideBar />
<section>
	<slot ></slot>
</section>
