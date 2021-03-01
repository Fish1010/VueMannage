<template>
  
  <div class="left">
    <Scrollbar>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(66, 78, 101)"
            text-color="#fff"
            :unique-opened="true"
            active-text-color="#3399FF"
            router
          >
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span>用户资源管理</span>
            </el-menu-item>

            <el-menu-item index="/datadragg">
              <i class="el-icon-document"></i>
              <span slot="title">活动页面制作</span>
            </el-menu-item>

            <el-menu-item index="/jingdong">
              <i class="el-icon-data-line"></i>
              <span slot="title">京东商城制作</span>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>营销活动管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/activity">漏洞监控管理</el-menu-item>
                <el-menu-item index="/turn-picture">翻页照片审核</el-menu-item>
                <el-menu-item index="/picture">旋转照片审核</el-menu-item>
                <el-menu-item index="/navthree">营销素材管理</el-menu-item>
                <el-menu-item index="/navfour">营销模式管理</el-menu-item>
                <el-menu-item index="/demo">代码测试审核</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="/operation">
              <i class="el-icon-magic-stick"></i>
              <span slot="title">营销运营分析</span>
            </el-menu-item>

            <el-menu-item index="/recommend">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">推荐素材库</span>
            </el-menu-item>

            <el-menu-item index="/partner">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">合作商管理</span>
            </el-menu-item>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>测试代码组件</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/navtwo">活动页面制作</el-menu-item>
                <el-menu-item index="2-2">2</el-menu-item>
                <el-menu-item index="2-3">3</el-menu-item>
                <el-menu-item index="2-4">4</el-menu-item>
                <el-menu-item index="2-5">5</el-menu-item>
                <el-menu-item index="2-6">6</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </Scrollbar>
  </div>
 
</template>

<script>
import Scrollbar from '@/components/common/Scrollbar'
export default {
  name: 'Left',
  data () {
    return {
    }
  },
  components: {
    Scrollbar
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
.left{
  position: fixed;
  width: 230px;
  overflow: hidden;
}
.el-menu{
  height: calc(100vh - 60px);
  width: 100%;
}
.el-menu-item-group .el-menu-item{
  text-align: center;
}
</style>
