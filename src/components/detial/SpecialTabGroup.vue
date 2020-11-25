<template>
    <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'
import draggable from 'vuedraggable'

import {mapActions} from 'vuex'

export default {
  name: 'SpecialTabGroup',
  components: {
    TextList,
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialTextBasic',
          type: 'tabGroup',
          option: {
            style: {
              height: '40px',
              lineHeight: '40px',
              color: '#006666',
            },
            text: 
                `<ul>
                  <li style="float: left; width: 16%; text-align: center">直播</li>
                  <li style="float: left; width: 16%; text-align: center">推荐</li>
                  <li style="float: left; width: 20%; text-align: center">电视剧</li>
                  <li style="float: left; width: 16%; text-align: center">电影</li>
                  <li style="float: left; width: 16%; text-align: center">综艺</li>
                  <li style="float: left; width: 16%; text-align: center">动漫</li>
                </ul>`,
            events: {
              click: {},
            },
          }
        },
      ]
    }
  },
  methods: {
    ...mapActions['getTabMenu']
  },
  mounted () {
    // this.$store.dispatch('getTabMenu')
    console.log(this.getTabMenu)
  },
}
</script>

<style>

</style>
