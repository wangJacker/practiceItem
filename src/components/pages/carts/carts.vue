<template>
    <div class="carts">
        <Header></Header>
        <section>
            <load-more :data="listData" :pullDownRefresh="txts" @pullingDown="pullingDown"></load-more>
        </section>
        <foot-bar :selectCarts="true"></foot-bar>
    </div>
</template>
<script type="text/javascript">
import loadMore from '@/components/common/loadeMore/scroll-more';
import Header from "@/components/common/navbar";
import footBar from "@/components/common/footbar";
import { listData } from "@/mock/mockData";
import axios from "axios";
export default {
    name: "carts",
    components: { loadMore, Header, footBar },
    data() {
        return {
            listData: listData.list,
            txts:{
                txt:"刷新成功"
            }
        }
    },
    mounted() {
        // this.listData = listData.list;
    },
    methods: {
        pullingDown() {
            // console.log(33333)
            axios.get("/gets/listData").then((data) => {
                this.listData.length = 0;
                this.listData = data.data.list;
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}

</script>
<style scope lang="less">
.carts {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    section {
        flex: 1;
        overflow: hidden;
    }
}

</style>
