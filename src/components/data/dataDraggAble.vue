<template>
  <div class="dataDraggAble">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动页面制作</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form" style="height: 50px">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="专题名称 :">
            <el-input v-model="form.name" placeholder="未命名专题" width="20px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-button slot="reference" class="fi">存为我的模板</el-button>
        <el-button type="primary"><i class="el-icon-camera"></i> 保存并预览</el-button>
        <el-button type="primary"><i class="el-icon-s-promotion"></i> 提申发布</el-button>
      </div>
    </div>
    <el-row>
      <el-col :span="6" id="one">
        <div class="grid-content bg-purple-dark">
          <LeftMenuCon :textList="sideMenuList" />
        </div>
      </el-col>

      <el-col :span="18" id="two">
        <div class="grid-content bg-purple-dark">
          <!-- <EditArea :editArea="sideMenuList" /> -->
          <EditArea />
        </div>
      </el-col>

      <!-- <el-col :span="5">
        <div class="grid-content bg-purple-dark">
          <TitleStyle />
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import EditArea from '../dragEditmain/editArea'
import TitleStyle from '../style/titleStyle'
import LeftMenuCon from './leftMenuCon'
import { mapState } from 'vuex'

import { sideMenuList } from '@/utils/constants.js'

export default {
  name: 'dataDraggAble',
  data () {
    return {
      sideMenuList: sideMenuList,
      form: {
        name: ''
      }
    }
  },
  components: {
    Draggable, EditArea, TitleStyle, LeftMenuCon
  },
  computed: {
    ...mapState({
      // textList: (state) => state.textList,
      // editArea: (state) => state.editArea,
    })
  //  ...mapState(['textList', 'editArea'])
  },


}
</script>

<style scoped>
  .header{
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .el-breadcrumb{
    height: 100%;
    line-height: 60px;
    margin-left: 40px;
    float: left;
  }
  .form{
    float: left;
    /* line-height: 60px; */
    margin-left: 40px;
  }
  .el-form{
    margin-top: 10px;
    height: 50px;
  }
  .navTwoData{
    width: 100%;
    /* height: calc(100vh - 108px); */
    background-color: #fff;
  }
  .right{
    float: right;
    margin-right: 30px;
    line-height: 60px;
  }
  .fi{
    color: #3399ff;
    border: solid 1px #3399ff;
  }
  .fi:hover{
    background: #3399ff;
    color: #fff;
  }
  #one, #two{
    border-right: #ccc 1px solid;
  }
  #two{
    background: #f6f6f6;
    overflow: hidden;
  }
  .el-col {
    background: #fff;
  }
  .grid-content {
    /* height: 600px; */
    height: calc(100vh - 70px);
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header{
   padding: 0;
 }

</style>
