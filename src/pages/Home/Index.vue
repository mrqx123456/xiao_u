<template>
    <div class="indexBox">
        <header class="header">
            <div class="logo">
                <img src="../../assets/img/index_images/logo.jpg" alt="">
            </div>
            <div class="search">
                <input type="text" placeholder="寻找商品">
            </div>
            
            
            <div class="dot">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <main>首页内容</main>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style lang="stylus" scoped>

.indexBox{
        width 7.5rem;
        header{
            display:flex
            justify-content :space-around;
            align-items :center
            width:7.5rem;
            height : 0.9rem;
            background-color:red;
            .logo{
                
                margin-left: 0.2rem;
                width: 1.47rem;
                height: 0.33rem;
                img{
                    width:100%;
                    heght:100%;
                }
            }
            .search {
                flex:1;
                margin-left 0.5rem
                input {
                    border : 1px solid #cccccc
                    text-align center
                    background-color #cccccc
                }
            }
            .dot{
                margin-right 0.2rem
                span {
                    width 0.2rem
                    height 0.2rem
                    display inline-block
                    background-color #000000
                    border-radius 50%
                }
            }
        }
    }
</style>