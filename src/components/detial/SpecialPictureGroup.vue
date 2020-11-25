<template>
    <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

import draggable from 'vuedraggable'

export default {
  name: 'SpecialPictureGroup',
  components: {
    TextList,
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialPictureOne',
          type: 'text',
          option: {
            style: {
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
            },
            text: `<img style="width: 100%" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3686890258,2648883990&fm=15&gp=0.jpg"></img>`,
            events: {
              click: {},
            },
          }
        },
        {
          name: 'SpecialPictureTwo',
          type: 'text',
          option: {
            style: {
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              display: 'flex'
            },
            text: 
              `<img style="width: 50%" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3686890258,2648883990&fm=15&gp=0.jpg"></img>
              <img style="width: 50%" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3686890258,2648883990&fm=15&gp=0.jpg"></img>`,
            events: {
              click: {},
            },
          }
        },
        // {
        //   name: 'SpecialPictureThree',
        //   type: 'text',
        //   option: {
        //     style: {
        //       paddingTop: '5px',
        //       paddingBottom: '15px',
        //       paddingLeft: '15px',
        //       paddingRight: '15px',
        //     },
        //     text: `<p>这是图片这是图片这是图片这是图片这是图片这是图片这是图片这是图片这是图片这是图片这是图片</p>`,
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
