<template>
    <div class="wrapper">
        <Header></Header>
        <section class="section">
            <div class="container" ref="scrolls">
                <ul class="menu_l">
                    <template v-for="(item, index) in data">
                        <li @click="handleClick(index,$event)" :class="{select:index === current}"><span>{{item}}</span></li>
                    </template>
                </ul>
            </div>
            <div class="content_r">
            </div>
        </section>
        <foot-bar :selectClassify="true"></foot-bar>
    </div>
</template>
<script type="text/javascript">
import Header from "@/components/common/navbar";
import footBar from "@/components/common/footbar";
import BScroll from "better-scroll";
export default {
    name: "classify",
    components: { Header, footBar },
    data() {
        return {
            data: ["电子礼品", "电子礼品办公临平办公临平", "办公临平", "创意促销", "创意促销电子礼品", "商务礼品", "企业定制", "企业定制生活电器生活电器", "生活电器", "顶级标签", "电子礼品", "电子礼品办公临平办公临平", "办公临平", "创意促销", "创意促销电子礼品", "商务礼品", "企业定制", "企业定制生活电器生活电器", "生活电器", "顶级标签"],
            current: 0,
            scroll: "",
            scrollContainer: "",
            maxScrollY: ""
        }
    },
    mounted() {
        // 这里的 this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.scrolls, {
                click: true,
                probeType: 2,
            });
            this.scrollContainer = this.$refs.scrolls.clientHeight;
            this.maxScrollY = this.scroll.maxScrollY;
        })
    },
    computed: {
        maxHeight() {
            return -this.maxScrollY + this.scrollContainer / 2;
        }
    },
    methods: {
        handleClick(index, e) {
            this.current = index;
            let $this = e.currentTarget;
            // 获取当前元素距离容器顶部的距离
            let slideTop = $this.offsetTop;
            // 获取当前元素的高度
            let slideHeight = $this.clientHeight;
            // 中间位置
            let slideCenter = slideTop + slideHeight / 2;
            // 判断位置
            if (slideCenter < this.scrollContainer / 2) {
                // 滚动为0；
                this.scroll.scrollTo(0, 0, 500);
            } else if (slideCenter > this.maxHeight) {
                // 滚动到最大位置
                this.scroll.scrollTo(0, this.maxScrollY, 500);
            } else {
                this.scroll.scrollTo(0, -(slideCenter - this.scrollContainer / 2), 500);
            }
        }
    }
}

</script>
<style lang="less">
#app {
    .wrapper {
        .section {
            padding: 8px 0 0 0;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            .menu_l {
                width: 80px;
                overflow: hidden;
                li {
                    width: inherit;
                    height: 40px;
                    background: #fff;
                    overflow: hidden;
                    position: relative;
                    margin-top: 2px;
                    span {
                        position: relative;
                        left: 50%;
                        top: 50%;
                        display: block;
                        width: 48px;
                        transform: translate(-50%, -50%);
                        font-size: 12px;
                        color: #9F8D89;
                        line-height: 17px;
                        max-height: 34px;
                        overflow: hidden;
                    }
                }
                .select {
                    background: #AE2309;
                    span {
                        color: #fff;
                    }
                }
            }
            li:first-child {
                margin-top: 0;
            }
        }
    }
}

</style>
