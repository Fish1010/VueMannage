<template>
  <div class="index">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Left></Left>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/view/header'
import Left from '@/components/view/left'
import Footer from '@/components/view/footer'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Header,
    Left,
    Footer
  },

}
</script>

<style scoped>
.el-header{
  padding: 0;
}
.el-aside{
  width: 230px !important;
}
.el-main{
  display: block;
  background: #fff;
  box-shadow: -1px 1px 10px 5px #ddd;
  margin: 20px;
  padding: 0px !important;
  overflow: hidden;
  box-sizing: border-box;
}
.el-footer{
  text-align: center;
  height: 150px !important;
}
</style>
