<template>
    <text-list :dataList="myArray"></text-list>
</template>

<script>
import TextList from '@/components/dragEditMain/textList'

import draggable from 'vuedraggable'

export default {
  name: 'SpecialMenuGroup',
  components: {
    TextList,
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: 'SpecialTextBasic',
          type: 'menuGroup',
          option: {
            style: {
              width: '100%',
              height: '50px',
              // lineHeight: '50px',
              background: '#336666',
              color: '#fff',
              borderTop: '1px solid #ddd',
              // paddingTop: '0',
              // paddingBottom: '0',
              // paddingLeft: '20px',
              // paddingRight: '20px',
            },
            text: 
                `<ul>
                    <li style="float: left; width: 18%; text-align: center">
                      <i class="el-icon-s-home"></i>
                      <p style="margin: 0; padding: 0">推荐</p>
                    </li>
                    <li style="float: left; width: 28%; text-align: center">
                      <i class="el-icon-camera-solid"></i>
                      <p style="margin: 0; padding: 0">随刻视频</p>
                    </li>
                    <li style="float: left; width: 18%; text-align: center">
                      <i class="el-icon-s-promotion"></i>
                      <p style="margin: 0; padding: 0">会员</p>
                    </li>
                    <li style="float: left; width: 18%; text-align: center">
                      <i class="el-icon-s-claim"></i>
                      <p style="margin: 0; padding: 0">发现</p>
                    </li>
                    <li style="float: left; width: 18%; text-align: center">
                      <i class="el-icon-s-custom"></i>
                      <p style="margin: 0; padding: 0">我的</p>
                    </li>
                </ul>`,
            events: {
              click: {},
            },
          }
        },
        // {
        //   name: 'SpecialTextOne',
        //   type: 'bigtitle',
        //   option: {
        //     style: {
        //       paddingTop: '0',
        //       paddingBottom: '0',
        //       paddingLeft: '20px',
        //       paddingRight: '20px',
        //     },
        //     text: `<p style="text-align: center;"><span style="font-size: 24px;color: #000000;">这是视频菜单</span></p>`,
        //     events: {
        //       click: {},
        //     },
        //   }
        // },
        // {
        //   name: 'SpecialTextTwo',
        //   type: 'bigtitle',
        //   option: {
        //     style: {
        //       paddingTop: '5px',
        //       paddingBottom: '15px',
        //       paddingLeft: '15px',
        //       paddingRight: '15px',
        //     },
        //     text: `<p>这是视频菜单这是视频菜单这是视频菜单这是视频菜单这是视频菜单这是视频菜单这是视频菜单</p>`,
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
