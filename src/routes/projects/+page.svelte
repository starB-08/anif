<svelte:head>
	<title>[anif] - Projects</title>
</svelte:head>
<script>
    import Project from './Project.svelte'
    import welcomeImg from '$lib/images/welcome/project.png'
    import arrDown from '$lib/images/icons/icon-arrDown.png'
    import { onMount } from 'svelte';
    import {count} from '../stores'
    import {setClearHeader} from '../Header.js'

    onMount(function(){
        count.update(n => true);
        setClearHeader(document.querySelector('header'))
    })
</script>
<div class="welcome">
    <a href="#projects" id="showMore">
        <span>show more</span>
        <img src="{arrDown}" alt="arrDown" id="arrDown">
    </a>
    <img src="{welcomeImg}" alt="welcome">
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
        <Project class="prj" title="PROJECT12" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT13" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT14" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT15" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT16" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT17" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT18" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT19" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT20" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT21" subtitle="this is example"></Project>
        <Project class="prj" title="PROJECT22" subtitle="this is example"></Project>


    </div>
</div>
<style>
    
    #arrDown{
        width: 40px;
        height: 40px;
        position: absolute;
        left: 50%;
        top: calc(85vh + 30px);
        transform: translate(-50%,0);
        margin: 0;
        padding: 0;
        filter: brightness(0) invert();
    }
    #showMore span{
        position: absolute;
        z-index: 0;
        text-decoration: none;
        font-size: 24px;
        left: 50%;
        top: 85vh;
        transform: translate(-50%,0);
        color: #ffffff;
    }
    #projects{
        margin-top: calc(100vh + 10px);
        display: flex;
        justify-content: center;
    }
    .prjList{
        width: max-content;
        display: flex;
        flex-wrap: wrap;
        
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
    @media(max-width: 720px){
        .welcome{
            display: none;
        }
        #projects{
            margin-top: 20px;
        }
        
    }
</style>