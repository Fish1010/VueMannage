<template>
    <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

import draggable from 'vuedraggable'

export default {
  name: 'SpecialLayoutGroup',
  components: {
    TextList,
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialLayoutOne',
          type: 'text',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              // paddingLeft: '20px',
              // paddingRight: '20px',
            },
            text: `<div style="width: 100%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialLayoutTwo',
          type: 'text',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              display: 'flex'
            },
            text: `
              <div style="width: 50%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>
              <div style="width: 50%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialLayoutThree',
          type: 'text',
          option: {
            style: {
              paddingTop: '0',
              paddingBottom: '0',
              display: 'flex'
            },
            text: `
              <div style="width: 25%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>
              <div style="width: 25%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>
              <div style="width: 25%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>
              <div style="width: 25%; min-height: 60px; box-shadow: 1px 1px 5px  #ccc inset"></div>`,
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
