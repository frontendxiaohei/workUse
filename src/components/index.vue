<template lang="html">
  <div class="">
    <Header/>
    <div class="index_36kr">
      <div class="pagewrap">
        <div class="mainlib_flex_wapper">
          <IndexMain/>
          <IndexSide/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './inc/header'
import Footer from './inc/footer'
import IndexMain from './index_main'
import IndexSide from './index_side'

export default {
  name: 'index',
  components: {Header, Footer, IndexMain, IndexSide}
}
</script>

<style lang="css">
</style>
