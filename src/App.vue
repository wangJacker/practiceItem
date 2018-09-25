<template>
    <div id="app" v-wechat-title="$route.meta.title" img-set="@/base/images/favicon.ico">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App'
}

</script>
<style lang="less">
html,
body {
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
    background: #FBF8F7;
    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        section {
            flex: 1;
            padding: 0 12px;
            overflow: hidden;
            padding-bottom: 20px;
        }
    }
}

</style>
