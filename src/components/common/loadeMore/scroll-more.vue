<template>
    <div ref="wrapper" class="list-wrapper">
        <div class="scroll-content">
            <div ref="listWrapper">
                <slot>
                    <ul class="list-content">
                        <li @click="clickItem($event,item)" class="list-item" v-for="item in data">{{item.name}}</li>
                    </ul>
                </slot>
            </div>
            <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
                <div class="pullup-wrapper" v-if="pullUpLoad">
                    <div class="before-trigger" v-if="!isPullUpLoad">
                        <span>{{pullUpTxt}}</span>
                    </div>
                    <div class="after-trigger" v-else>
                        <loading></loading>
                    </div>
                </div>
            </slot>
        </div>
        <slot name="pulldown" :pullDownRefresh="pullDownRefresh" :pullDownStyle="pullDownStyle" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown" :bubbleY="bubbleY">
            <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
                <div class="before-trigger" v-if="beforePullDown">
                    <bubble :y="bubbleY"></bubble>
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="isPullingDown" class="loading">
                        <loading></loading>
                    </div>
                    <div v-else><span>{{refreshTxt}}</span></div>
                </div>
            </div>
        </slot>
    </div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll';
import Loading from '@/components/common/loadeMore/loading';
import Bubble from '@/components/common/loadeMore/bubble';
import { getRect } from '@/base/js/dom';
export default {
    name: "COMPONENT_NAME",
    props: {
        data: {
            type: Array,
            default: function() {
                return []
            }
        },
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        //是否监听滚动事件，可以触发事件
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        listenScrollEnd: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: "DIRECTION_V"
        },
        scrollbar: {
            type: null,
            default: false
        },
        pullDownRefresh: {
            type: null,
            default: false
        },
        pullUpLoad: {
            type: null,
            default: false
        },
        startY: {
            type: Number,
            default: 0
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        freeScroll: {
            type: Boolean,
            default: false
        },
        mouseWheel: {
            type: Boolean,
            default: false
        },
        bounce: {
            default: true
        },
        zoom: {
            default: false
        }
    },
    data() {
        return {
            beforePullDown: true,
            // 正在下拉过程中
            isRebounding: false,
            isPullingDown: false,
            isPullUpLoad: false,
            pullUpDirty: true,
            pullDownStyle: '',
            bubbleY: 0
        }
    },
    computed: {
        pullUpTxt() {
            const moreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) /*|| this.$i18n.t('scrollComponent.defaultLoadTxtMore')*/
            const noMoreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore) /*|| this.$i18n.t('scrollComponent.defaultLoadTxtNoMore')*/
            return this.pullUpDirty ? moreTxt : noMoreTxt
        },
        refreshTxt() {
            return (this.pullDownRefresh && this.pullDownRefresh.txt); /*|| this.$i18n.t('scrollComponent.defaultRefreshTxt')*/
        }
    },
    created() {
        this.pullDownInitTop = -50
    },
    mounted() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    },
    destroyed() {
        this.$refs.scroll && this.$refs.scroll.destroy()
    },
    methods: {
        initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
                this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
            }
            let options = {
                probeType: this.probeType,
                click: this.click,
                scrollY: this.freeScroll || this.direction === "DIRECTION_V",
                scrollX: this.freeScroll || this.direction === "DIRECTION_H",
                scrollbar: this.scrollbar,
                pullDownRefresh: this.pullDownRefresh,
                pullUpLoad: this.pullUpLoad,
                startY: this.startY,
                // 有些场景我们需要支持横向和纵向同时滚动，而不仅限制在某个方向，这个时候我们只要设置 freeScroll 为 true 即可
                freeScroll: this.freeScroll,
                // 这个配置用于 PC 端的鼠标滚轮，默认为 false，。当设置为 true 或者是一个 Object 的时候，可以开启鼠标滚轮
                mouseWheel: this.mouseWheel,
                // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
                bounce: this.bounce,
                // 这个配置用于对滚动内容的缩放，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启缩放，
                zoom: this.zoom
            }
            this.scroll = new BScroll(this.$refs.wrapper, options)
            // 监听滚动事件
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            }
            // 滚动结束后的事件
            if (this.listenScrollEnd) {
                this.scroll.on('scrollEnd', (pos) => {
                    this.$emit('scroll-end', pos)
                })
            }
            // 滚动之前的事件以及开始滚动执行的事件
            if (this.listenBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStart')
                })
                this.scroll.on('scrollStart', () => {
                    this.$emit('scroll-start')
                })
            }
            // 是否开启下拉刷新
            if (this.pullDownRefresh) {
                // 初始化下拉刷新的事件
                this._initPullDownRefresh()
            }
            // 是否开启下拉加载更多
            if (this.pullUpLoad) {
                this._initPullUpLoad()
            }
        },
        // 将better-scroll的API 转换为Vue的简写
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        // 点击每条例子执行的事件
        clickItem(e, item) {
            console.log(e)
            this.$emit('click', item)
        },
        destroy() {
            this.scroll.destroy()
        },
        // 数据更新
        forceUpdate(dirty) {
            // 下拉刷新并且正处在刷新中
            if (this.pullDownRefresh && this.isPullingDown) {
                this.isPullingDown = false
                this._reboundPullDown().then(() => {
                    this._afterPullDown()
                })
                // 下拉加载中并处于加载中的事件
            } else if (this.pullUpLoad && this.isPullUpLoad) {
                this.isPullUpLoad = false
                this.scroll.finishPullUp()
                this.pullUpDirty = dirty
                this.refresh()
            } else {
                this.refresh()
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.beforePullDown = false
                this.isPullingDown = true
                this.$emit('pullingDown')
            })
            this.scroll.on('scroll', (pos) => {
                if (!this.pullDownRefresh) {
                    return
                }
                if (this.beforePullDown) {
                    console.log("滚动之前")
                    this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
                    console.log(this.bubbleY)
                    this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
                } else {
                    this.bubbleY = 0
                    console.log("滚动结束")
                }
                if (this.isRebounding) {
                    console.log("滚动中")
                    this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
                }
            })
        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.isPullUpLoad = true
                this.$emit('pullingUp')
            })
        },
        _reboundPullDown() {
            const { stopTime = 600 } = this.pullDownRefresh;
            // console.log(pullDownRefresh);
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.isRebounding = true
                    this.scroll.finishPullDown()
                    resolve()
                }, stopTime)
            })
        },
        _afterPullDown() {
            setTimeout(() => {
                this.pullDownStyle = `top:${this.pullDownInitTop}px`
                this.beforePullDown = true
                this.isRebounding = false
                this.refresh()
            }, this.scroll.options.bounceTime)
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.forceUpdate(true)
            }, this.refreshDelay)
        }
    },
    components: {
        Loading,
        Bubble
    }
}

</script>
<style scope lang="less">
.list-wrapper {
    position: relative;
    height: 100%;
    /*position: absolute*/
    /*left: 0*/
    /*top: 0*/
    /*right: 0*/
    /*bottom: 0*/
    overflow: hidden;
    background: #fff;
    .scroll-content {
        position: relative;
        z-index: 1;
    }
    .list-content {
        position: relative;
        z-index: 10;
        background: #fff;
        .list-item {
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            padding-left: 20px;
            border-bottom: 1px solid #e5e5e5;
        }
    }
}

.pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    .after-trigger {
        margin-top: 10px;
    }
}

.pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
}

</style>
