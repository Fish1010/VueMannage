<template>
  <div class="navTwoData">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="250px"><Left></Left></el-aside>
        <el-main>
          <h3>
            <span class="le">营销素材管理</span> 
            <span class="ri">
              <router-link to="/datadragg" target="_blank">
                <i class="el-icon-plus"></i> 
                新建活动
              </router-link>
            </span>
          </h3>
          <div class="data-body">
            <el-table
              :data="activeData"
              stripe
              height="500px"
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
      </el-container>
    </el-container>
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

  h3{
    background-color: #ddd;
    padding: 10px 30px;
    margin: 0;
    position: fixed;
    width: 100%;
  }

  h3 .le{
    border-left: 5px solid #3399ff;
    padding: 0 15px;
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  h3 .ri{
    right: 70px;
    float: right;
    font-weight: 100;
    background: #2793ff;
    font-size: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    cursor: pointer;
    position: fixed;
    z-index: 100;
  }

  h3 .ri:hover{
    background: #4fadff;
  }

  .el-header{
   padding: 0;
 }

  .el-main{
   padding: 15px;
 }
</style>
