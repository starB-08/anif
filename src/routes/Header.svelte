<header>
    <div>
        <ul>
            <li><a id="homeAnchor" href="/">home</a></li>
            <li><a id="aboutAnchor" href="/about">about</a></li>
            <li><a id="projectsAnchor" href="/projects">projects</a></li>

        </ul>
    </div>
</header>

<style>
    header{
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: space-between;
        background-color: #123456;
    }
    ul{
        list-style: none;
        display: flex;
        width: 100vw;
        justify-content: space-around;
        margin: 20px 0 0 0;
        transform: translateY(-50%);
    }
    header ul li{
        margin: 0;
        float: left;
        font-weight: 300;

    }
    a{
        text-decoration: none;
        color: white;
        font-size: 18px;
    }
</style>