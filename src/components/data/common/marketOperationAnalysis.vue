<template>
  <div class="marketActivityManagement">
    <div class="header">
      <div class="left">
        <div class="img">
          <img src="../../../assets/logo_cmcc.c03d330a.png" style="width: 42px; height: 42px;"><img>
        </div>
        <p class="p">湖南视频内容运营平台</p>
      </div>
      <div class="right"><p>yebo</p></div>
    </div>
    <div class="main">
      <div>
        <el-row class="tac">
          <el-col :span="4">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="rgb(66, 78, 101)"
              text-color="#fff"
              active-text-color="#549fff"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <div class="main-right">
              <el-container>
                <el-header>
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
                    <el-breadcrumb-item>资源批量补发</el-breadcrumb-item>
                  </el-breadcrumb>

                </el-header>
                <el-main>
                  
                </el-main>
              </el-container>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: ''
      },
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {

    }
  }
}
</script>

<style scoped>
.header{
  background: #334054;
  width: 100%;
  height: 58px;
  color: #fff;
}
.left{
  float: left;
}
.left .img{
  width: 58px;
  height: 58px;
  float: left;
}
.left .img img{
  margin-top: 8px;
  margin-left: 10px;
}
.left .img:hover{
  background: rgb(66, 78, 101);
  cursor: pointer;
}
.left .p{
  margin: 0;
  padding: 0;
  float: left;
  line-height: 58px;
}
.right{
  float: right;
  height: 100%;
  border-left: #eee;
}
.right p{
  margin-right: 20px;
  /* line-height: 58px; */
}
.main-right{
  background: #e9edf1;
  padding: 20px;
}
.el-header{
  background-color: #f9f9f9;
  color: #000;
  height: 60px;
  /* line-height: 60px; */
}
.el-header .el-breadcrumb{
  height: 100%;
  line-height: 60px;
}
.el-menu{
  height: calc(100vh - 100px);
}
.el-main {
  background-color: #fff;
  color: #000;
  font-size: 14px;
}
.el-form{
  height: 60px;
}
.el-table-column{
  padding: 0 10px;
}
.el-table{
  min-height: 350px;
}

</style>
