<template>
  <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

export default {
  name: 'SpecialButtonGroup',
  components: {
    TextList
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialButtonThree',
          type: 'button',
          option: {
            style: {
              borderRadius: '100px',
              width: '45px',
              height: '45px',
              background: '#3399ff',
              color: '#fff',
              textAlign: 'center',
              lineHeight: '45px',
              margin: '0 auto'
            },
            text: ` <div>编辑</div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialButtonOne',
          type: 'button',
          option: {
            style: {
              borderRadius: '8px',
              width: '80px',
              height: '40px',
              background: '#3399ff',
              color: '#fff',
              textAlign: 'center',
              lineHeight: '40px',
              margin: '0 auto'
            },
            text: ` <div>主要按钮</div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialButtonTwo',
          type: 'button',
          option: {
            style: {
              borderRadius: '8px',
              width: '100%',
              height: '40px',
              background: '#3399ff',
              color: '#fff',
              textAlign: 'center',
              lineHeight: '40px',
              margin: '0 auto'
            },
            text: ` <div>主要按钮</div>`,
            events: {
              click: {},
            },
          }
        }
      ]
    }
  }
}
</script>

<style>
div{
}
</style>
