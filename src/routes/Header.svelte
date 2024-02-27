<script>
    import lightLogo from '$lib/images/logo_w.name_Light.png'
    import darkLogo from '$lib/images/logo_w.name_Dark.png'
    import { onMount } from 'svelte';

    var isDark = false;
    function themeToggle(){
        window.document.body.classList.toggle('dark-mode');
        isDark = !isDark;
        document.querySelector('#logoImg').src = isDark? darkLogo : lightLogo;
    }
    let windowX, windowY
    
    let header;
    onMount(function(){
        header = document.querySelector('header');

    })
    let isTop = true;
    function onScroll(){
        if(scrollY <= 100){
            header.classList.add('clearHead');
        }else{
            // header.style.animation = 'header-up 1s linear forwards'

        }
    }
    function onload(){
        // onscroll();
    }
</script>
<svelte:window bind:scrollX={windowX} bind:scrollY={windowY} on:scroll={onScroll} on:load={onload()}></svelte:window>
<header>
    <div id="top">
        <div class="logo">
            <img id="logoImg" src="{lightLogo}" alt="light-logo">
        </div>
        <ul>
            <li><a id="homeAnchor" href="/">home</a></li>
            <li><a id="aboutAnchor" href="/about">about</a></li>
            <li><a id="projectsAnchor" href="/projects">projects</a></li>

        </ul>
        <button id="darkThemeToggle" on:click={themeToggle}>D</button>
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
        opacity: 1;

    }
    header{
        width: calc(100vw + 20px);
        height: 40px;
        top: 0;
        left: -10px;
        background-color: rgba(var(--background-rgb), 0.8);
        margin: 0 0 0 0;
        position: fixed;
        z-index: 99;
        transition: all 0.5s;
    }
    .clearHead{
        animation: header-down 1s linear forwards;
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
    }
    ul{
        list-style: none;
        display: flex;
        width: calc(70% - 30px);
        margin: 0;
        justify-content: space-around;
        align-self: flex-end;
        background-color: transparent;
        position: absolute;
        top: 15px;
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
    a:hover:after{
        content: "";
            display: block;
            width: calc(100% + 10px);
            height: 2px;
            margin: -3px 0 0 -5px;
            background: var(--main-color);
    }
    
    
    
    
    
</style>