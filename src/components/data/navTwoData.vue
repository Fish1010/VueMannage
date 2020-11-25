<template>
  <div class="navTwoData">
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动页面制作</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="ri">
        <a href="http://localhost:8081/datadragg">新建活动</a>
        
      </span>
    </el-header>
    <el-main>
      <div class="data-body">
        <el-table
          :data="activeData"
          stripe
          style="width: 100%">
          <el-table-column prop="name" label="姓名" width="200"></el-table-column>
          <el-table-column prop="age" label="年龄" width="200"></el-table-column>
          <el-table-column prop="phone" label="电话" width="200"></el-table-column>
          <el-table-column prop="address" label="地址" width="200"></el-table-column>
          <el-table-column prop="" label="操作">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </div>
</template>

<script>
import Header from '@/components/view/header'
import Left from '@/components/view/left'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavTwoData',
  data () {
    return {
      // activeData: []
    }
  },
  components: {
    Header, Left
  },
  props: ['tableData'],
  computed: {
    ...mapState({
      tableDatas: (state) => state.tableData
    }),
  },
  methods: {
    // ...mapMutations(['updataTableData']),
  },
  created () {
    this.activeData = this.tableDatas
    // this.activeData = this.updataTableData
    // console.log(this.updataTableData)
    // this.$http.get('http://localhost:3000/users')
    //     .then(function(data){
    //       // console.log(data)
    //       this.activeData = data.body
    //     })
  },


}
</script>

<style scoped>

  .data-body{
    padding: 20px 50px;
    margin-top: 50px;
  }
  .le{
    border-left: 5px solid #3399ff;
    padding: 0 15px;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  .ri{
    right: 70px;
    float: right;
    font-weight: 100;
    background: #2793ff;
    font-size: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    z-index: 100;
  }
  .ri:hover{
    background: #4fadff;
  }

  .el-header{
   padding: 0;
 }

  .el-main{
   padding: 15px;
 }
</style>
