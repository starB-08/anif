
<style>
    .prjBox{
        margin-top: 10px;
        padding: 20px;
        width: 200px;
        aspect-ratio: 3/4;
        border-radius: 0 0 6px 6px;

    }
    .prjBox:hover{
        background-color: var(--prjBox-hover-color);
    }
    
    .prjImg{
        background-color: transparent;
        width: 200px;
        aspect-ratio: 1;        
    }
    .prjTitle{
        font-size: 22px;
        color: var(--text-color);
    }
    .prjSubTitle{
        color: #bbb;
        font-weight: 300;
        font-size: 16px;
    }
    .prjThumbnail{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
<script>
    export let title;
    export let subtitle;
    export let src;
    import exampleSrc from '$lib/images/prj_imgs/example1.jpeg'
</script>
<div class="prjBox">
    <div class="prjImg">
        <img src="{src? src : exampleSrc}" alt="thumbnail" class="prjThumbnail">
    </div>
    <div class="prjData">
        <span class="prjTitle">{title}</span><br/>
        <span class="prjSubTitle">{subtitle}</span>
    </div>
</div>