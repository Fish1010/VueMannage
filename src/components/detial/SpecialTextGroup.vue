<template>
    <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

import draggable from 'vuedraggable'

export default {
  name: 'SpecialTextGroup',
  components: {
    TextList,
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialTextBasic',
          type: 'bigtitle',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '15px',
              paddingRight: '15px',
              boxSizing: 'border-box'
            },
            text: `<p style="text-align: center;"><span style="font-size: 36px;color: #000000;">大标题</span></p>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialTextOne',
          type: 'bigtitle',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '20px',
              paddingRight: '20px',
            },
            text: `<p style="text-align: center;"><span style="font-size: 24px;color: #000000;">正文内容</span></p>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialTextTwo',
          type: 'bigtitle',
          option: {
            style: {
              paddingTop: '5px',
              paddingBottom: '15px',
              paddingLeft: '15px',
              paddingRight: '15px',
            },
            text: `<p>这是文本信息这是文本信息这是本信息这是文本信息这是文本信这是文本信息这是文本信息这是</p>`,
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
