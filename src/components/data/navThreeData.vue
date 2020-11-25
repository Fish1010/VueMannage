<template>
  <div class="navThreeData">
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
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
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
  name: 'NavThreeData',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Header, Left, Footer
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
    }
  }
}
</script>

<style scoped>
</style>
