<template>
  <header>
    <a href="javascript:void(0)" class="goBack"></a>
    <h3>{{$route.meta.title}}</h3>
    <a href="javascript:void(0)" class="search"></a>
  </header>
</template>
<script type="text/javascript">
export default {
  name: "navbar"
}

</script>
<style scope lang="less">
header {
  display: flex;
  padding: 0 12px;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  a {
    display: block;
    width: 20px;
    height: 20px;
  }
  h3 {
    font-size: @size14;
    color: #351009;
  }
  .goBack {
    background: url("@{images}/goback.png") center no-repeat;
    background-size: 20px;
  }
  .search {
    background: url("@{images}/search.png") center no-repeat;
    background-size: 20px;
  }
}

</style>
