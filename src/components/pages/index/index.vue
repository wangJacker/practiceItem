<template>
    <div class="wrapper">
        <Header></Header>
        <section>
            <Carousel></Carousel>
            <ul class="nav">
                <li class="navItem">
                    <a href="javascript:void(0)"><img src="../../../base/images/jd.png"></a>
                    <span>京东</span>
                </li>
                <li class="navItem">
                    <a href="javascript:void(0)"><img src="../../../base/images/yx.png"></a>
                    <span>严选</span>
                </li>
                <li class="navItem">
                    <a href="javascript:void(0)"><img src="../../../base/images/autotrophy.png"></a>
                    <span>自营</span>
                </li>
                <li class="navItem">
                    <a href="jaascript(0)"><img src="../../../base/images/coupon.png"></a>
                    <span>优惠券</span>
                </li>
            </ul>
            <div class="goods_container">
                <h3 class="title">热销单品</h3>
                <ul class="goods_list">
                    <li class="goods_item">
                        <img src="https://via.placeholder.com/145x145">
                        <h3>超柔全棉双层带帽披风浴巾(单面纱单面绒)超柔全棉双层带帽披风浴巾(单面纱单面绒)</h3>
                        <b class="price">399.00</b>
                    </li>
                    <li class="goods_item">
                        <img src="https://via.placeholder.com/145x145">
                        <h3>超柔全棉双层带帽披风浴巾(单面纱单面绒)超柔全棉双层带帽披风浴巾(单面纱单面绒)</h3>
                        <b class="price">399.00</b>
                    </li>
                    <li class="goods_item">
                        <img src="https://via.placeholder.com/145x145">
                        <h3>超柔全棉超柔全风浴巾(单面纱单面绒)</h3>
                        <b class="price">399.00</b>
                    </li>
                    <li class="goods_item">
                        <img src="https://via.placeholder.com/145x145">
                        <h3>超柔全棉双层带帽披风浴巾(单面纱单面绒)超柔全棉双层带帽披风浴巾(单面纱单面绒)</h3>
                        <b class="price">399.00</b>
                    </li>
                    <li class="goods_item">
                        <img src="https://via.placeholder.com/145x145">
                        <h3>超柔全棉双层带帽披风浴巾(单面纱单面绒)超柔全棉双层带帽披风浴巾(单面纱单面绒)</h3>
                        <b class="price">399.00</b>
                    </li>
                </ul>
            </div>
        </section>
        <foot-bar :selectStore="true"></foot-bar>
    </div>
</template>
<script type="text/javascript">
import Header from "@/components/common/navbar";
import Carousel from "@/components/common/carousel";
import footBar from "@/components/common/footbar";
export default {
    name: "index",
    components: { Header, Carousel, footBar },
}

</script>
<style lang="less">
@images: "../../../base/images";
.wrapper {
    section {
        .nav {
            padding: 0 24px;
            background: #fff;
            height: 108px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8px;
            .navItem {
                a {
                    display: block;
                    img {
                        display: block;
                        width: 56px;
                        height: 56px;
                    }
                }
                span {
                    text-align: center;
                    font-size: @size14;
                    color: #351009;
                    display: block;
                    width: 100%;
                    line-height: 20px;
                }
            }
        }
        .goods_container {
            h3.title {
                font-size: 15px;
                color: 351009;
                font-weight: 700;
                margin: 24px 0 4px;
            }
            .goods_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .goods_item {
                    width: 169px;
                    height: 238px;
                    box-sizing: border-box;
                    padding: 12px 12px 16px;
                    margin-top: 12px;
                    background: #fff;
                    img {
                        display: block;
                        width: 145px;
                        height: 145px;
                    }
                    h3 {
                        font-size: 12px;
                        color: #9F8D89;
                        line-height: 17px;
                        height: 34px;
                        overflow: hidden;
                        margin-top: 16px;
                    }
                    .price {
                        color: #AE2309;
                        font-size: 14px;
                        font-weight: 700;
                        display: block;
                    }
                }
            }
        }
    }
}

</style>
