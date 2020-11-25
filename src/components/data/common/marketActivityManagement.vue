<template>
  <div class="marketActivityManagement">
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
            <div class="main-right">
              <header class="main-header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
                  <el-breadcrumb-item>资源批量补发</el-breadcrumb-item>
                </el-breadcrumb>
              </header>
              <main class="main-main">
                <el-form :inline="true" :model="form" class="demo-form-inline">
                  <el-form-item>
                    <el-input v-model="form.name" placeholder="文件名称"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="form.name" placeholder="资源编码/名称"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="id"
                    label="批充ID"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="file"
                    label="批充文件"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="code"
                    label="批充资源编码/名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="people"
                    label="创建人"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="result"
                    label="文件处理结果"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="生成订单总数"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    prop="recharge"
                    label="订单充值结果"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    prop="operation"
                    label="操作">
                  </el-table-column>
                </el-table>
              </main>
            </div>
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
  name: 'MarketActivityManagement',
  data () {
    return {
      form: {
        name: ''
      },
      tableData: [
        {
        id: '1',
        file: '秦时明月',
        code: '123456',
        people: '王小虎',
        result: '好看',
        number: '1000',
        recharge: '充值成功',
        operation: '查看详情'
        },
        {
        id: '2',
        file: '秦时明月',
        code: '123456',
        people: '王小虎',
        result: '好看',
        number: '1000',
        recharge: '充值成功',
        operation: '查看详情'
        },
        {
        id: '3',
        file: '秦时明月',
        code: '123456',
        people: '王小虎',
        result: '好看',
        number: '1000',
        recharge: '充值成功',
        operation: '查看详情'
        },
        {
        id: '4',
        file: '秦时明月',
        code: '123456',
        people: '王小虎',
        result: '好看',
        number: '1000',
        recharge: '充值成功',
        operation: '查看详情'
        },
        {
        id: '5',
        file: '秦时明月',
        code: '123456',
        people: '王小虎',
        result: '好看',
        number: '1000',
        recharge: '充值成功',
        operation: '查看详情'
        }
      ]
    }
  },
  components: {
    Header, Left, Footer
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
.main-header{
  background-color: #f9f9f9;
  color: #000;
  height: 60px;
  padding-left: 20px;
}
.main-header .el-breadcrumb{
  height: 100%;
  line-height: 60px;
}
.el-menu{
  height: calc(100vh - 100px);
}
.main-main {
  background-color: #fff;
  color: #000;
  font-size: 14px;
  padding: 20px;
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
