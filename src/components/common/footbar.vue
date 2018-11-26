<template>
    <footer>
        <ul class="foot">
            <li :class="{selected:selectStore}">
                <router-link to="/">
                    <span class="store"></span>
                    <b>优礼商城</b>
                </router-link>
            </li>
            <li :class="{selected:selectClassify}">
                <router-link to="/classify">
                    <span class="classify"></span>
                    <b>分类</b>
                </router-link>
            </li>
            <li :class="{selected:selectCarts}">
                <router-link to='/carts'>
                    <span class="carts"></span>
                    <b>购物车</b>
                </router-link>
            </li>
            <li :class="{selected:selectCenter}">
                <span class="myCenter"></span>
                <b>个人中心</b>
            </li>
        </ul>
    </footer>
</template>
<script type="text/javascript">
export default {
    name: "footBar",
    props: {
        selectStore: {
            type: Boolean,
            default: false
        },
        selectClassify: {
            type: Boolean,
            default: false
        },
        selectCarts: {
            type: Boolean,
            default: false
        },
        selectCenter: {
            type: Boolean,
            default: false
        }
    }
}

</script>
<style lang="less">
@images: "../../base/images";
footer {
    height: 49px;
    background: #fff;
    .foot {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: inherit;
        li {
            height: inherit;
            width: 57px;
            .store {
                background: url("@{images}/store.png") center no-repeat;
                background-size: 28px 24px;
            }
            .classify {
                background: url("@{images}/classify.png") center no-repeat;
                background-size: 20px;
            }
            .carts {
                background: url("@{images}/cart.png") center no-repeat;
                background-size: 25px 23px;
            }
            .myCenter {
                background: url("@{images}/myCenter.png") center no-repeat;
                background-size: 20px 23px;
            }
            span {
                margin: 7px auto 2px;
                display: block;
                width: 28px;
                height: 24px;
            }
            b {
                font-size: 10px;
                color: #9F8D89;
                line-height: 14px;
                display: block;
                text-align: center;
            }
        }
        .selected {
            b {
                color: #351009;
            }
            .store {
                background: url("@{images}/store_selected.png") center no-repeat;
                background-size: 20px 22px;
            }
            .classify {
                background: url("@{images}/classify_selected.png") center no-repeat;
                background-size: 28px 24px;
            }
            .carts {
                background: url("@{images}/cart_selected.png") center no-repeat;
                background-size: 28px 24px;
            }
            .myCenter {
                background: url("@{images}/myCenter_selected.png") center no-repeat;
                background-size: 28px 24px;
            }
        }
    }
}

</style>
