
<style>
    .prjBox{
        margin-top: 10px;
        padding: 20px;
        width: calc(20% - 40px);
        aspect-ratio: 3/4;
        border-radius: 0 0 6px 6px;
    }
    .prjBox:hover{
        background-color: var(--prjBox-hover-color);
    }
    
    
    .prjImg/*div(img size) */{
        background-color: transparent;
        width: 100%;
        aspect-ratio: 1;        
    }
    .prjThumbnail/*real img*/{
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    .prjBox:hover .prjSubTitle{
        color: #888;
    }

    @media(max-width : 720px){
        .prjBox{
            margin-top: 10px;
            padding: 5px 20px;
            width: calc(100% - 40px);
            height: 40px;
            border-radius: 6px;
            display: flex;
            position: relative;
        }
        .prjBox:hover{
            background-color: var(--prjBox-hover-color);
        }
        
        
        .prjImg/*div(img size) */{
            background-color: transparent;
            width: 40px;
            aspect-ratio: 1;        
            margin-right: 5px;
        }
        .prjThumbnail/*real img*/{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prjTitle{
            font-size: 18px;
            position: absolute;
            top: 5px;
        }
        .prjSubTitle{
            position: absolute;
            bottom: 5px;
        }

        
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