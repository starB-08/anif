<script>
    import logo from '$lib/images/logo_w.name_Light.png'
    
</script>

<header>
    <div id="top">
        <div class="logo">
            <img src="{logo}" alt="logo" height="100%">
        </div>
        <ul>
            <li><a id="homeAnchor" href="/">home</a></li>
            <li><a id="aboutAnchor" href="/about">about</a></li>
            <li><a id="projectsAnchor" href="/projects">projects</a></li>

        </ul>
    </div>
</header>

<style>
    #top{
        display: flex;
        flex-direction: row;
    }
    header{
        width: calc(100vw - 20px);
        height: 40px;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
    }
    .logo{
        width:30vw;
        height: 100%;
    }
    ul{
        list-style: none;
        display: flex;
        width: 70vw;
        justify-content: space-around;
        margin: 20px 0 0 0;
        transform: translateY(-50%);
        align-self: flex-end;
    }
    header ul li{
        margin: 0;
        float: left;
        font-weight: 400;

    }
    a{
        text-decoration: none;
        color: #222222;
        font-size: 18px;
    }
    
    
</style>