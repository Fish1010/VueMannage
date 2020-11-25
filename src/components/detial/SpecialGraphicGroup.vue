<template>
  <text-list :dataList="myArray"></text-list> 
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

export default {
  name: 'SpecialGraphicGroup',
  components: {
    TextList
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialGraphicOne',
          type: 'text',
          option: {
            style: {
              paddingTop: '5px',
              paddingBottom: '5px',
              paddingLeft: '15px',
              paddingRight: '5px',
              display: 'flex',
              minHeight: '100px',
              justifyContent: 'space-between'
            },
            text: `<div style="width: 45%">这是图文这是图文这是图文这是图文这是图文这是图文</div>
              <div style="width: 45%">
                <img style="width: 90%" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1173575399,1586172731&fm=26&gp=0.jpg"></img>
              </div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialGraphicTwo',
          type: 'text',
          option: {
            style: {
              paddingTop: '5px',
              paddingBottom: '5px',
              paddingLeft: '15px',
              paddingRight: '5px',
              display: 'flex',
              minHeight: '100px',
              justifyContent: 'space-between'
            },
            text: `
              <div style="width: 45%">
                <img style="width: 90%" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1173575399,1586172731&fm=26&gp=0.jpg"></img>
              </div>
              <div style="width: 45%">这是图文这是图文这是图文这是图文这是图文这是图文</div>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialGraphicThree',
          type: 'text',
          option: {
            style: {
              paddingTop: '5px',
              paddingBottom: '5px',
              paddingLeft: '15px',
              paddingRight: '5px',
              display: 'flex',
              minHeight: '10px',
              justifyContent: 'space-between'
            },
            text: `<div style="width: 28%">这是图文这是图文这是图文</div>
              <div style="width: 28%">
                <img style="width: 90%" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1173575399,1586172731&fm=26&gp=0.jpg"></img>
              </div>
              <div style="width: 28%">这是图文这是图文这是图文</div>`,
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
