<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgArray" :key="item.id">
            <img :src="item.img">
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
            default: []
        }
    }
}

</script>
<style lang="less">
.swiper-container {
    height: 206px;
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
