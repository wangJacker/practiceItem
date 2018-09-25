<template>
    <div class="wrappers" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import Bscroll from "better-scroll";
export default {
    name: "scroll",
    props: {
        /**
         * 1 滚动的时候会派发scroll事件，会截流。
         * 2 滚动的时候实时派发scroll事件，不会截流。
         * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
         */
        probeType: {
            type: Number,
            default: 1
        },
        // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
        click: {
            type: Boolean,
            default: true
        },
        // 是否派发滚动事件
        listenScroll: {
            type: Boolean,
            default: false
        },
        // 列表的数据
        data: {
            type: Array,
            default: null
        },
        // 开启滚动条
        scrollbar:{
            type:Boolean,
            default:false
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.init())
        })
    },
    methods: {
        init() {
            this.scroll = new Bscroll(this.$refs.wrapper, {
                probeType: this.probeType,
                scrollbar:this.scrollbar
            })
            console.log(Bscroll)
        }
    }
}

</script>
<style scope lang="less">
    .wrappers{
        height: 100%;
    }

</style>
