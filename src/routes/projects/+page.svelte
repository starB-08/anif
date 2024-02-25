<svelte:head>
	<title>[anif] - Projects</title>
</svelte:head>
<script>
    import Project from './Project.svelte'
    import welcomeImg from '$lib/images/welcome/project.png'
</script>
<div class="welcome">
    <a href="#projects" id="showMore">hi</a>
    <img src="{welcomeImg}" alt="">
</div>
<div id="projects">
    <div class="prjList">
        <Project class="prj" title="PROJECT1" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT2" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT3" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT4" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT5" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT6" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT7" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT8" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT9" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT10" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT11" subtitle="this is example"></Project>

    </div>
</div>
<style>
    #projects{
        margin-top: calc(100vh + 10px);
    }
    #showMore{
        position: absolute;
        z-index: 0;
        text-decoration: none;
        font-size: 24px;
        left: 50%;
        top: 85vh;
        transform: translate(-50% 0 0);
    }
    .prjList{
        width: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .prj{
        position: relative;
        display: inline-block;
    }
    .welcome{
        position: absolute;
        top: -40px;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .welcome img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>