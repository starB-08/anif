<script>
    import { onMount } from "svelte";
    import {toggleSidebar} from './Header'
    let sideBar;
    onMount(function(){
        sideBar = document.querySelector('#sidebar');
    })
    
</script>

<div id="sidebar" class="hide">
    <button id="sideClose" on:click={toggleSidebar(sideBar)}></button>

    <ul>
        <li><a id="homeAnchor" href="/home" on:click={toggleSidebar(sideBar)}>home</a></li>
        <li><a id="aboutAnchor" href="/about" on:click={toggleSidebar(sideBar)}>about</a></li>
        <li><a id="projectsAnchor" href="/projects" on:click={toggleSidebar(sideBar)}>projects</a></li>

    </ul>
<!-- //TODO(" a -> on:click -> toggle sidebar ") -->
</div>

<style>
    
    #sidebar{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        
        position: absolute;
        z-index: 95;
        top: 0;
        transition: all 0.3s;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    #sideClose{
        background-color: #ffffff;
        width: 25px;
        height: 25px;
        right: 0;
        border: none;
        border-radius: 6px;
        position: absolute;
        top: 5px;
        right: 10px;
    }
    #sidebar:not(.hide){
        display: block;
        animation: sidebar-appear 0.3s linear forwards;

    }
    .hide{
        right: -100%;
        display: none;
    }
    a{
        color: #ffffff;
        font-size: 24px;
        text-decoration: none;
        position: absolute;
    }
    ul{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
        margin-top: 30px;
    }
    li{
        margin-bottom: 30px;
        list-style-type: none;

    }
    @media(min-width: 721px){
        #sidebar{
            display: none;
        }
    }
    
    @keyframes -global-sidebar-appear{
        from {
            right: -100%;
        }
        to{
            right: 0;
        }
    }

</style>