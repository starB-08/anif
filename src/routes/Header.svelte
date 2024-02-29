<script>
    import lightLogo from '$lib/images/logo_w.name_Light.png'
    import darkLogo from '$lib/images/logo_w.name_Dark.png'
    import tranLogo from'$lib/images/logo_w.name_Trans.png'
    import { onMount } from 'svelte';
    
    let isDark = false;
    let header;
    let logoImg;
    let logoTop;
    onMount(function(){
        header = document.querySelector('header');
        logoImg = document.querySelector('#logoImg');
        logoTop = document.querySelector('#logoTop');
        logoImg.src = (isDark? darkLogo : lightLogo);

    })

    function themeToggle(){
        window.document.body.classList.toggle('dark-mode');
        isDark = !isDark;
        logoImg.src = isDark? darkLogo : lightLogo;
    }
    let windowX, windowY
    
    

    function scroll(){
        if(scrollY <= 100){
            header.classList.add('clear');
            logoImg.style.opacity = 0;
            logoTop.style.opacity = 1;

        }else{
            header.classList.remove('clear');
            logoImg.style.opacity = 1;
            logoTop.style.opacity = 0;
        }
    }
    
</script>
<svelte:window bind:scrollX={windowX} bind:scrollY={windowY} on:scroll={scroll}></svelte:window>
<header class="clear">
    <div id="top">
        <div class="logo">
            <img id="logoImg" src="{lightLogo}" alt="logo">
            <img id="logoTop" src="{tranLogo}" alt="logo-top">
        </div>
        <ul>
            <li><a id="homeAnchor" href="/">home</a></li>
            <li><a id="aboutAnchor" href="/about">about</a></li>
            <li><a id="projectsAnchor" href="/projects">projects</a></li>

        </ul>
        <button id="darkThemeToggle" on:click={themeToggle}>D</button>
        <button id="sidePannel">=</button>

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
        z-index: 99;
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
    .clear *{
        color: #ffffff;
    }
    header, header *{
        transition: all 0.5s;
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

    #sidePannel{
        display: none;
    }

    @media(max-width: 720px){
        header{
            height: 30px;
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
        #sidePannel{
        display: block;
        width: 30px;
        height: 30px;
        padding: 0;
        border: none;
        border-radius: 6px;
        background-color: #bbb;
        margin-top: 5px;
        z-index: 100;
    }
    }
    
    
    
    
</style>