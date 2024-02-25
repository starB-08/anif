<script>
	import Header from './Header.svelte'
</script>
<style>
	@import './styles.css';
	
	section :global(> :first-child){
		margin-top: 40px;
	}
</style>
<Header />
<section>
	<slot ></slot>
</section>
