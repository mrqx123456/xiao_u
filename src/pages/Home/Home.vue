<template>
    <div class="home">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="span">首页</router-link>
            <router-link to="/home/cart" tag="span">购物车</router-link>
            <router-link to="/home/index" tag="span">我的</router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        main{
            flex:1
        }
        footer{
            display: flex;
            height: 0.5rem;
            justify-content: space-around;
            align-items: center;
            line-height: 0.5rem;
            background-color: brown;
        }
    
    }

</style>