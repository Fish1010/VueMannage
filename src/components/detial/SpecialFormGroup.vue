<template>
  <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

export default {
  name: 'SpecialFormGroup',
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
              paddingTop: '5px',
              paddingBottom: '5px',
              paddingLeft: '5px',
              paddingRight: '5px',
            },
            text: `<input style="outline: none; box-sizing: border-box; border: 1px solid #ccc; width: 100%; padding: 4px 10px" />`,
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
              paddingTop: '5px',
              paddingBottom: '5px',
              paddingLeft: '5px',
              paddingRight: '5px',
            },
            text: `输入表单: <input style="outline: none; box-sizing: border-box; font-size:22px; border: 1px solid #ccc; border-radius: 5px; width: 70%; padding: 5px 10px" />`,
            events: {
              click: {},
            },
          }
        },
        // {
        //   name: 'SpecialTextOne',
        //   type: 'text',
        //   option: {
        //     style: {
        //       paddingTop: '15px',
        //       paddingBottom: '15px',
        //       paddingLeft: '15px',
        //       paddingRight: '15px',
        //     },
        //     text: ``,
        //     events: {
        //       click: {},
        //     },
        //   }
        // },
      ]
    }
  }
}
</script>

<style>

</style>
