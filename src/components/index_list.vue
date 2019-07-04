<template lang="html">
  <div class="list_con">
    <span v-if="loading">加载中..........</span>
    <div class="kr_tab">
      <div class="kr_tab_box">
        <div class="kr_tab_wapper" style="width: auto; position: relative; left: 0px;">
          <div class="new-channel-tab-bg">
          </div>
          <div class="new-channel-tab new-channel-tab-hover">
            <div class="tab-pop-up-pc">
              <span class="img">
              </span>
              <span class="arrow">
              </span>
              <span class="text">
                频道即将换新 敬请期待!
              </span>
            </div>
          </div>
          <ul class="am-cf stealth-scroll-bar">
            <li class="kr_active">
              <h2 class="seo_h2">
                <span>最新文章</span>
              </h2>
            </li>
            <li class="">
              <span>大公司</span>
            </li>
            <li class="">
              <span>消费</span>
            </li>
            <li class="">
              <span>娱乐</span>
            </li>
            <li class="">
              <span>前沿技术</span>
            </li>
            <li class="">
              <span>汽车交通</span>
            </li>
            <li class="">
              <span>区块链</span>
            </li>
            <li class="">
              <span>技能Get</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="">
        <div>
          <div class="kr_article_list">
            <div>
              <ul class="feed_ul">
                <IndexListItem v-for="data in items" :data="data" :key="data.id" />
              </ul>
            </div>
          </div>
          <div class="loading_more" @click="loadMore">
            {{loadingMore?'正在加载...':'加载更多'}}
            <span class="icon-arrow-right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexListItem from './index_list_item'

export default {
  name: 'IndexList',
  data(){
    return {};
  },
  methods: {
    loadMore(){
      this.$store.dispatch('loadOneMorePage');
    }
  },
  components: {IndexListItem},
  computed: {
    loadingMore(){
      return this.$store.state.loading_more;
    },
    items(){
      return this.$store.getters.list_data;
    },
    loading(){
      return this.$store.state.loading;
    }
  }
}
</script>

<style lang="css">
</style>
