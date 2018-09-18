<template>
  <div class="wrapper">
    <Header></Header>
    <section>
      <swiper :options="swiperOption">
        <swiper-slide><img src="http://static.ydcss.com/uploads/ydui/1.jpg"></swiper-slide>
        <swiper-slide><img src="http://static.ydcss.com/uploads/ydui/2.jpg"></swiper-slide>
        <swiper-slide><img src="http://static.ydcss.com/uploads/ydui/3.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </div>
</template>
<script type="text/javascript">
import Header from "@/components/common/navbar";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: "index",
  components: { Header, swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: true
      }
    }
  },
  created() {
    console.log(22222)
  }
}

</script>
<style lang="less">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  section {
    flex: 1;
    padding: 0 12px;
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
  }
}

</style>
