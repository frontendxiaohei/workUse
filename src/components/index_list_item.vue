<template lang="html">
  <li>
    <div class="am-cf inner_li inner_li_abtest">
      <span class="undefined mark h5_mark">{{data.tag}}</span>
      <router-link :to="{ name: 'detail', params: {id: data.id} }">
        <div class="img_box list-img-loaded">
          <div>
            <img alt="标题" class="load-img fade" :src="data|imgurl">
          </div>
          <span class=" undefined mark pc_mark">{{data.tag}}</span>
        </div>
        <div class="intro">
          <h3>{{data.title}}</h3>
          <div class="abstract">{{data.summary}}</div>
        </div>
      </router-link>
      <div class="info">
        <div class="info-list info-list-abtest">
          <div class="user-info">
            <a :href="data.author.href" class="name">{{data.author.title}}</a>
            <span class="oblique_line">·</span>
          </div>
          <div class="time-div">
            <span class="time" :title="data.time*1000|mktime">{{data.time*1000|mktime}}</span>
            <span class="time h5_time">{{data.time*1000|mktime}}</span>
          </div>
        </div>
        <div class="tags-list">
          <i class="icon-tag">
          </i>
          <span v-for="json,index in data.catalogs" :key="json.href">
            <a :href="json.href">{{json.name}}</a>
            <span v-if="index<data.catalogs.length-1">，</span>
          </span>
        </div>
        <div class="comments-list">
          <span class="comments"></span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import common from '@/libs/common'

export default {
  name: 'IndexListItem',
  data(){
    return {
      data: this.$attrs.data
    }
  },
  filters: {
    imgurl(data){
      return `http://localhost:8090/img?src=${data.src}`;
    },
    mktime: common.mktime
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
