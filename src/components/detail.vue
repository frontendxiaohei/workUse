<template lang="html">
  <div class="">
    <Header/>
    <div class="pagewrap pagewrap-full">
      <div class="article-detail">
        <div class="post-wrapper">
          <div class="post-detail-con-box full-reading mainlib_flex_wapper">
            <ArticleMain :data="article_data"/>
            <ArticleRight :data="article_data"/>
          </div>
        </div>
      </div>
      <DetailShare/>
      <ArticleDetail/>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Footer from './inc/footer'

import ArticleMain from './article_main'
import ArticleRight from './article_right'
import ArticleDetail from './article_detail'
import DetailShare from './detail_share'

export default {
  name: 'index',
  //components: {Header, Footer, ArticleMain, ArticleRight, ArticleDetail, DetailShare},
  components: {
    Header: import './inc/header',
    Footer, ArticleMain, ArticleRight, ArticleDetail, DetailShare
  },
  mounted(){
    let id=this.$route.params.id;

    this.$store.dispatch('loadArticle', id);
  },
  computed: {
    article_data(){
      return this.$store.state.article_data;
    }
  }
}
</script>

<style lang="css">
</style>
