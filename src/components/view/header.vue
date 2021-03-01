<template>
  <div class="header">
    <!-- <div class="line"></div> -->
    <div>
      <div class="header-left">
        <div class="left">
          <div class="img">
            <router-link to='/'>
              <img src="../../assets/logo_cmcc.c03d330a.png" style="width: 42px; height: 42px;"><img>
            </router-link>
          </div>
          <p class="p">小二郎酷炫的个人平台</p>
        </div>
      </div>
      <div class="header-right">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#334054"
          text-color="#fff"
          active-text-color="#3399FF">
          <el-menu-item index="1">菜单中心</el-menu-item>
          <el-menu-item index="2">管理中心</el-menu-item>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .header{
    position: fixed;
    z-index: 11;
    width: 100%;
  }
  .header-left{
    position: fixed;
    left: 0;
    background: #334054;
    width: 100%;
    height: 61px;
    color: #fff;
  }
  .el-menu--horizontal{
    border-bottom: solid 1px rgb(51, 64, 84) !important;
  }
  .left{
    float: left;
  }
  .left .p{
    margin: 0;
    padding: 0;
    float: left;
    line-height: 61px;
  }
  .left .img{
    width: 61px;
    height: 61px;
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
  .header-right{
    width: 23%;
    float: right;
  }
</style>
