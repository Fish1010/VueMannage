<template>
  <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

export default {
  name: 'SpecialSwiperGroup',
  components: {
    TextList
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialTextBasic',
          type: 'text',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '20px',
              paddingRight: '20px',
            },
            text: `<p style="text-align: center;"><span style="font-size: 36px;color: #000000;font-weight: bolder">轮播图</span></p>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialTextBasic',
          type: 'text',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '20px',
              paddingRight: '20px',
            },
            text: `<p style="text-align: center;"><span style="font-size: 24px;color: #000000;">这是轮播图</span></p>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialTextOne',
          type: 'text',
          option: {
            style: {
              paddingTop: '15px',
              paddingBottom: '15px',
              paddingLeft: '15px',
              paddingRight: '15px',
            },
            text: `<p>这是轮播图这是轮播图这是轮播图这是轮播图这是轮播图这是轮播图这是轮播图这是轮播图</p>`,
            events: {
              click: {},
            },
          }
        },
      ]
    }
  }
}
</script>

<style>

</style>
