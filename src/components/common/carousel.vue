<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgArray" :key="item.key">
            <img :src="item.src">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    name: "carousel",
    components: { swiper, swiperSlide },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true,
                autoplay: true
            }
        }
    },
    props: {
        imgArray: {
            type: Array,
            default: function() {
                return [{ src: "http://static.ydcss.com/uploads/ydui/3.jpg", key: "1" }, { src: "http://static.ydcss.com/uploads/ydui/2.jpg", key: "2" }, { src: "http://static.ydcss.com/uploads/ydui/1.jpg", key: "3" }]
            }
        }
    }
}

</script>
<style lang="less">
.swiper-container {
    .swiper-slide {
        img {
            display: block;
            width: 100%;
            height: 206px;
        }
    }
    .swiper-pagination-bullets {
        bottom: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        .swiper-pagination-bullet {
            width: 24px;
            height: 2px;
            display: block;
            background: #9F8D89;
        }
        .swiper-pagination-bullet-active {
            background: #AE2309;
        }
    }
}

</style>
