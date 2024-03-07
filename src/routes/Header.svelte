<script contextmenu="module">
    import lightLogo from '$lib/images/logo_w.name_Light.png'
    import darkLogo from '$lib/images/logo_w.name_Dark.png'
    import tranLogo from'$lib/images/logo_w.name_Trans.png'
    import { onMount } from 'svelte';
    import {count} from './stores'
    import { setClearHeader} from './Header'
    import {toggleSidebar} from './Header'

    let isDark = false;
    let header;
    let windowX, windowY
    let isTransPage;
    let sideBar;

    const unSubscribe = count.subscribe(function(value){
        isTransPage = value;
    })

    onMount(function(){//on load
        header = document.querySelector('header');
        logoImg.src = (isDark? darkLogo : lightLogo);
        sideBar = document.querySelector('#sidebar');
        
    })
    
    

    function themeToggle(){
        window.document.body.classList.toggle('dark-mode');
        isDark = !isDark;
        logoImg.src = isDark? darkLogo : lightLogo;
    }
    
    

    function onScroll(){
        if(scrollY <= 100){
            setClearHeader(header);
            
        }else{
            setClearHeader(header,false)
            
        }
    }
    
    
</script>
<svelte:window bind:scrollX={windowX} bind:scrollY={windowY} on:scroll={onScroll}></svelte:window>
<header>
    <div id="top">
        <div class="logo">
            <img id="logoImg" src="{lightLogo}" alt="logo">
            <img id="logoTop" src="{tranLogo}" alt="logo-top">
        </div>
        <ul>
            <li><a id="homeAnchor" href="/home">home</a></li>
            <li><a id="aboutAnchor" href="/about">about</a></li>
            <li><a id="projectsAnchor" href="/projects">projects</a></li>

        </ul>
        <button id="darkThemeToggle" on:click={themeToggle}>D</button>
        <button id="sidePannelbtn" on:click={toggleSidebar(sideBar)}>=</button>

    </div>
</header>

<style>
    #top{
        display: flex;
        width: inherit;
        flex-direction: row;
        justify-content: space-between;
        width: calc(100vw - 20px);
        background-color: transparent;
        margin: 0 10px;
    }
    #darkThemeToggle{
        width: 30px;
        height: 30px;
        padding: 0;
        border: none;
        border-radius: 6px;
        background-color: #bbb;
        margin-top: 5px;
        z-index: 100;
    }

    
    header{
        width: calc(100vw + 20px);
        height: 40px;
        top: 0;
        left: -10px;
        margin: 0 0 0 0;
        position: fixed;
        z-index: 90;
        transition: all 0.5s;
        backdrop-filter: blur(20px);
    }
    header:not(.clear){
        background-color: rgba(var(--background-rgb), 0.8);
    }
    header:not(.clear) *{
        color: var(--text-color);
    }
    :global(.clear){
        background-color: rgba(var(--background-rgb),0);
    }
    header.clear ul li a{
        color: #ffffff;
    }
    header, header *{
        transition: all 0.5s;
    }
    header.clear #logoImg{
        opacity: 0;
    }
    header.clear #logoTop{
        opacity: 1;
    }

    header:not(.clear) #logoImg{
        opacity: 1;
    }
    header:not(.clear) #logoTop{
        opacity: 0;
    }
    
    @keyframes -global-header-down {
        from {
            background-color: rgba(var(--background-rgb), 0.8);
        }
        to {
            background-color: rgba(var(--background-rgb), 0);
        }
    }
    @keyframes -global-header-up {
        to {
            background-color: rgba(var(--background-rgb), 0.8);
        }
        from {
            background-color: rgba(var(--background-rgb), 0);
        }
    }
    .logo{
        width:30%;
        height: 40px;
        background-color: transparent;
    }
    .logo img{
        height: 100%;
        position: absolute;
    }
    ul{
        list-style: none;
        display: flex;
        width: calc(70% - 40px);
        margin: 0;
        justify-content: space-around;
        align-self: flex-end;
        background-color: transparent;
        position: absolute;
        top: 10px;
        left: 30vw;
    }
    header ul li{
        margin: 0;
        float: left;
        font-weight: 400;
        background-color: transparent;
    }
    a{
        text-decoration: none;
        font-size: 18px;
        background-color: transparent;

    }
    a:after{
        content: "";
            display: block;
            width: 0;
            height: 2px;
            margin: -3px 0 0 -5px;
            background: var(--main-color);
            transition: all 0.2s;
    }
    a:hover:after{
        content: "";
            display: block;
            width: calc(100% + 10px);
            height: 2px;
            margin: -3px 0 0 -5px;
            background: var(--main-color);
    }

    #sidePannelbtn{
        display: none;
    }

    @media(max-width: 720px){
        header{
            height: 30px;
            position: fixed;
        }
        .logo{
            height: 30px;
            border-radius: 6px;
        }
        
        header ul{
            display: none;
        }
        #darkThemeToggle{
            display: none;
        }
        #sidePannelbtn{
            width: 25px;
            height: 25px;
            padding: 0;
            border: none;
            border-radius: 6px;
            background-color: #bbb;
            margin-top: 5px;
            z-index: 100;
        }
        #sidePannelbtn:not(.hide){
            display: block;
        }
        #sidePannelbtn.hide{
            display: none;
        }
    }
    
    
    
    
</style>