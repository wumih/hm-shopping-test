//这个界面的代码现在是用来模拟分类页面所需的后端的数据的。因为我目前没有写分类页面所需的后端代码。
<template>
  <div class="category">
    <!-- 分类 -->
    <van-nav-bar title="商品分类" fixed />

    <div class="search-wrap">
      <van-search shape="round" background="#f1f1f2" placeholder="请输入搜索关键词" />
    </div>

    <div class="category-wrap">
      <div class="left-wrap">
        <van-sidebar v-model="active" @change="onChange">
          <van-sidebar-item v-for="item in list" :key="item.category_id" :title="item.name" />
        </van-sidebar>
      </div>

      <div class="right-wrap">
        <div @click="$router.push(`/searchlist?categoryId=${item.category_id}`)" v-for="item in activeChildren"
          :key="item.category_id" class="cate-goods">
          <img :src="item.image.file_path" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 模拟的分类数据
const mockCategoryData = [
  {
    category_id: 1,
    name: '居家生活',
    children: [
      { category_id: 11, name: '床品件套', image: { file_path: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png' } },
      { category_id: 12, name: '被子', image: { file_path: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png' } }
    ]
  },
  {
    category_id: 2,
    name: '服饰鞋包',
    children: [
      { category_id: 21, name: 'T恤', image: { file_path: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png' } },
      { category_id: 22, name: '休闲裤', image: { file_path: 'http://cba.itlike.com/public/uploads/10001/20230321/a8b2697193415d1163a431a3af3d4a25.png' } }
    ]
  }
]

export default {
  name: 'CategoryPage',
  data () {
    return {
      list: [],
      active: 0
    }
  },
  computed: {
    activeChildren () {
      if (this.list[this.active]) {
        return this.list[this.active].children
      }
      return []
    }
  },
  created () {
    this.getCategoryList()
  },
  methods: {
    async getCategoryList () {
      // 使用模拟数据，而不是发起真实API请求
      this.list = mockCategoryData
    },
    onChange (index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>
/* 此处省略了样式代码，你可以根据需要添加 */
.category-wrap {
  display: flex;
}

.left-wrap {
  width: 85px;
}

.right-wrap {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.cate-goods {
  width: 33.3%;
  text-align: center;
  margin-bottom: 10px;
}

.cate-goods img {
  width: 70px;
  height: 70px;
}

.cate-goods p {
  font-size: 12px;
}
</style>
