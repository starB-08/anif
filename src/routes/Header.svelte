<script>
    import lightLogo from '$lib/images/logo_w.name_Light.png'
    import darkLogo from '$lib/images/logo_w.name_Dark.png'
    

    var isDark = false;
    function themeToggle(){
        window.document.body.classList.toggle('dark-mode');
        isDark = !isDark;
        document.querySelector('#logoImg').src = isDark? darkLogo : lightLogo;
    }
    
</script>

<header>
    <div id="top">
        <div class="logo">
            <img id="logoImg" src="{lightLogo}" alt="light-logo" height="100%">
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
    }
    #darkThemeToggle{
        width: 30px;
        height: 30px;
    }
    header{
        width: calc(100vw - 20px);
        height: 40px;
        display: flex;
        top: 0;
        justify-content: space-between;
        background-color: var(--background-color);
        margin: 0 0 0 0;
    }
    .logo{
        width:30%;
        height: 100%;
    }
    ul{
        list-style: none;
        display: flex;
        width: calc(70% - 30px);
        margin: 0;
        justify-content: space-around;
        align-self: flex-end;
    }
    header ul li{
        margin: 0;
        float: left;
        font-weight: 400;

    }
    a{
        text-decoration: none;
        font-size: 18px;
    }
    
    *{
        background-color: var(--background-color);
    }
    
    
</style>