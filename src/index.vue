<template>
  <div class="index">
    <router-view></router-view>
    <!-- <el-container>
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
    </el-container> -->
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
.primary{
  background: #549fff;
}
</style>
