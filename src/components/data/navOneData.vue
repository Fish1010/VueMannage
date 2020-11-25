<template>
  <div>
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
            <div class="navOneData">
              <div>
                <header class="main-header">
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
                  </el-breadcrumb>
                </header>
                <main class="main-main">
                  <el-form :inline="true" :model="newTableData" class="demo-form-inline">
                    <el-form-item>
                      <el-input v-model="newTableData.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary">查询</el-button>
                      <el-button type="primary" @click="reset">重置</el-button>
                    </el-form-item>
                    <el-form-item class="addBtn">
                      <el-button type="primary"><i class="el-icon-plus"></i>添加用户资源</el-button>
                    </el-form-item>
                  </el-form>
                  <div class="data-body">
                    <el-table
                      :data="(onSubmit || []).slice((currentPage-1)*pageSize, (currentPage)*pageSize)"
                      stripe
                      style="width: 100%"
                    >
                      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
                      <el-table-column prop="age" label="年龄" width="200"></el-table-column>
                      <el-table-column prop="phone" label="电话" width="200"></el-table-column>
                      <el-table-column prop="address" label="地址" width="200"></el-table-column>
                      <el-table-column prop="" label="操作">
                        <template slot-scope="scope">
                          <el-button type="primary" icon="el-icon-edit" circle @click="editUser(scope.row, scope.$index)"></el-button>
                          <el-button type="danger" icon="el-icon-delete" circle @click="deleteUser(scope.$index)"></el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      background
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="tolNum">
                    </el-pagination>
                  </div>
                </main>
              </div>
              <el-dialog
                title="编辑用户信息"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <div>
                  <el-form ref="form" :model="editData" label-width="80px">
                    <el-form-item label="姓名">
                      <el-input v-model="editData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                      <el-input v-model="editData.age"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                      <el-input v-model="editData.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                      <el-input v-model="editData.address"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
              </el-dialog>
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
import Vue from 'vue'
import Header from '@/components/view/header'
import Left from '@/components/view/left'
import Footer from '@/components/view/footer'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavOneData',
  data () {
    return {
      tableDataList: [],
      currentPage: 1,
      pageSize: 10,
      tolNum: 0,
      newTableData: {
        name: "",
        address: ""
      },
      dialogVisible: false,
      editData: {
        name: '',
        age: '',
        phone: '',
        address: ''
      },
      userIdx: 0,
      // newAddData: {

      // }
    }
  },
  props: {
    tableData: [Array]
  },
  components: {
    Header, Left, Footer
  },
  methods: {
    // ...mapMutations(['updataTableData']),
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }, 
    reset () {
      this.newTableData = {
        name: '',
        address: ''
      }
    },
    editUser (item, idx) {
      this.userIdx = idx
      // console.log(idx)
      this.editData = {
        name: item.name,
        age: item.age,
        phone: item.phone,
        address: item.address
      }
      this.dialogVisible = true
    },
    deleteUser (id) {
      this.$confirm('确认删除？')
          .then(_ => {
            // console.log(id)
            this.tableDataList.splice(id, 1)
          })
          .catch(_ => {});
    },
    handleClose () {
      this.dialogVisible = false
    },
    confirm () {
      // this.tableData[this.userIdx] = this.editData  //不可行,无法渲染
      // console.log(this.tableData[this.userIdx])

      if(!this.editData.name || !this.editData.age || !this.editData.phone){
          this.$message({
            message: '请输入必填信息',
            type: 'warning'
          });

        } else {
          this.dialogVisible = false
          Vue.set(this.tableDataList, this.userIdx, this.editData)
        }
    }
  },
  computed: {
    onSubmit() {
      // console.log('submit!');
      const newTableData = this.newTableData
      const search = newTableData.name
      // const search1 = newTableData.address
      if(search){
        return this.tableDataList.filter(data => {
          return Object.keys(data).some(key => {
            return String(data[key]).toLowerCase().indexOf(search) > -1
          })
        })  
      }
      return this.tableDataList
    },

    ...mapState({
      tableDataLists: (state) => state.tableData
    }),
  },
  created () {
    this.tableDataList = this.tableDataLists
    // console.log( this.tableDataLists )
    this.tolNum = this.tableDataList.length

  },
  updated () {
    // this.updateData()
  },
  mounted () {
    // setTimeout(()=>{
    //   this.tolNum = this.tableDataList.length
    // }, 2000)
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
.navOneData .main-header{
  background-color: #f9f9f9;
  color: #000;
  height: 60px;
  padding-left: 20px;
}
.navOneData .main-header .el-breadcrumb{
  height: 100%;
  line-height: 60px;
}
.navOneData .data-body{
  padding: 0 50px;
}
.navOneData .addBtn{
  float: right;
}
.navOneData .demo-form-inline{
  margin-top: 20px;
  margin-left: 55px;
  height: 50px;
  width: 90%;
}
.el-pagination{
  text-align: right;
  padding: 10px;
}
</style>
