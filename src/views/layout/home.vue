<template>
  <div class="home">
    <!-- 导航条 -->
    <van-nav-bar title="智慧商城" fixed />

    <!-- 搜索框 -->
    <van-search readonly shape="round" background="#f1f1f2" placeholder="请在此输入搜索关键词" @click="$router.push('/search')" />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imgUrl">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item v-for="item in navList" :key="item.imgUrl" :icon="item.imgUrl" :text="item.text"
        @click="$router.push('/category')" />
    </van-grid>

    <!-- 主会场 -->
    <div class="main">
      <img src="@/assets/main.png" alt="">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>

      <div class="goods-list">
        <GoodsItem v-for="item in proList" :item="item" :key="item.goods_id"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
// import { getHomeData } from '@/api/home'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'HomePage',
  components: {
    GoodsItem
  },
  data () {
    return {
      bannerList: [
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/6f223308f33c4f3f83552f2f418d5366.jpg' },
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/b6f53a8cc475419593e3f45d4c831393.jpg' }
      ],
      navList: [
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/0b02074f63f545089a836559a8d54b83.png', text: '新品首发' },
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/0b02074f63f545089a836559a8d54b83.png', text: '新品首发' },
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/0b02074f63f545089a836559a8d54b83.png', text: '新品首发' },
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/0b02074f63f545089a836559a8d54b83.png', text: '新品首发' },
        { imgUrl: 'http://cba.itlike.com/public/uploads/10001/20230321/0b02074f63f545089a836559a8d54b83.png', text: '新品首发' }
      ],
      proList: [
        { goods_id: 1, goods_image: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png', goods_name: '商品1', goods_price_min: '100', goods_price_max: '200' },
        { goods_id: 2, goods_image: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png', goods_name: '商品2', goods_price_min: '100', goods_price_max: '200' }
      ]
    }
  },
  async created () {
    // const { data: { pageData } } = await getHomeData()
    // this.bannerList = pageData.items.find(item => item.name === 'banner').data
    // this.navList = pageData.items.find(item => item.name === 'nav').data
    // this.proList = pageData.items.find(item => item.name === 'new').data
  }
}
</script>

<style lang="less" scoped>
// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分类导航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
