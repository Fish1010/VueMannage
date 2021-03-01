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
                    <el-breadcrumb-item>用户资源管理</el-breadcrumb-item>
                  </el-breadcrumb>
                </header>
                <main class="main-main">
                  <el-form :inline="true" :model="newTableData" class="demo-form-inline">
                    <el-form-item>
                      <el-input v-model="newTableData.name" placeholder="请输入姓名搜索"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" class="primary" @click="onSubmit">查询</el-button>
                      <el-button type="primary" class="primary" @click="reset">重置</el-button>
                    </el-form-item>
                    <FilterFrame :tableList="propTable" :getSelect="getFilterTable"></FilterFrame>
                    <el-form-item class="addBtn">
                      <!-- <el-button type="primary" class="primary" @click="$router.push({path:'/addUser'})"><i class="el-icon-plus"></i> 添加用户资源</el-button> -->
                      <el-button @click="clickAddUser" type="primary" class="primary"><i class="el-icon-plus"></i> 添加用户资源</el-button>
                    </el-form-item>
                  </el-form>
                  <div class="data-body">
                    <el-table
                      :data="tableDataList||[]"
                      stripe
                      style="width: 100%"
                    >
                      <el-table-column v-for="(item, index) in filterTableHeader" :key="index" :label="item.name" min-width="140">
                        <span slot-scope="scope">
                          <div v-if="item.status === 1 && item.prop !== 'option' && item.prop !== 'sex' && item.prop !== 'isMarry'">
                            {{scope.row[item.prop]}}
                          </div>
                          <div v-if="item.status === 1 && item.prop === 'sex'">
                            {{scope.row[item.prop]===1?'男':(scope.row[item.prop]===0?'女':'未知')}}
                          </div>
                          <div v-if="item.status === 1 && item.prop === 'isMarry'">
                            {{scope.row[item.prop]===1?'已婚':(scope.row[item.prop]===0?'未婚':'不婚')}}
                          </div>
                          <div v-if="item.status === 1 && item.prop === 'option'">
                            <el-button type="primary" class="primary" icon="el-icon-edit" circle @click="editUser(scope.row, scope.$index)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="deleteUser(scope.$index)"></el-button>
                          </div>
                        </span>
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
                    <el-form-item label="公司">
                      <el-input v-model="editData.company"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
              </el-dialog>
              <el-dialog
                title="添加用户资源"
                :visible.sync="addUserDialog"
                width="60%"
                center>
                <div class="add_user">
                  <el-form ref="addData" :rules="rules" :model="addData" label-width="80px">
                    <el-form-item label="姓名" width="40%" prop="name">
                      <el-input v-model="addData.name" width="50%"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                      <el-input v-model="addData.age"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="addData.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                      <el-input v-model="addData.address"></el-input>
                    </el-form-item>
                    <el-form-item label="公司" prop="company">
                      <el-input v-model="addData.company"></el-input>
                    </el-form-item>
                    <el-form-item label="简介" prop="introduction">
                      <el-input type="textarea" v-model="addData.introduction"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <span style="margin-left: 30%; ">
                        <el-button @click="addUserDialog = false">取 消</el-button>
                        <el-button type="primary" @click="isAddUserDialog('addData')">添 加</el-button>
                      </span>
                    </el-form-item>
                  </el-form>
                </div>
              </el-dialog>
            </div>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <dialog-add-user v-if="true"></dialog-add-user>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/view/header'
import Left from '@/components/view/left'
import Footer from '@/components/view/footer'
import FilterFrame from '@/components/common/filterFrame'
import { TABLEHEADERLIST } from '@/utils/staticFiles.js'
import { mapState, mapMutations, mapActions } from 'vuex'
import DialogAddUser from './common/dialogAddUser.vue'

export default {
  name: 'NavOneData',
  data () {
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字'));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      tableDataList: [],
      currentPage: 1,
      pageSize: 10,
      tolNum: 0,
      isShow: false,
      newTableData: {
        name: "",
      },
      dialogVisible: false,
      editData: {
        name: '',
        age: '',
        phone: '',
        address: '',
        company: ''
      },
      addData: {
        name: '',
        age: '',
        phone: '',
        address: '',
        company: '',
        introduction: '',
      },
      userIdx: 0,
      tableHeaderList: [],
      filterTableHeader: [],
      propTable: [],
      addUserDialog: false,
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          // { required: true, message: '请输入电话', trigger: 'blur' },
          // { type: 'number', message: '电话必须为数字', trigger: 'blur' }
          { validator: checkNumber, trigger: 'blur' },
        ],
        age: [
          { validator: checkNumber, trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
      }
    }
  },
  props: {
    // tableData: [Array]
  },
  components: {
    Header, Left, Footer, FilterFrame, DialogAddUser
  },
  methods: {
    ...mapActions([
      'getAddUser'
    ]),
    ...mapMutations({
      addUser: 'ADD_USER',
    }),
    handleSizeChange(val) {
      this.pageSize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTable()
    },
    reset () {
      this.newTableData = {
        name: '',
      }
    },
    editUser (item, idx) {
      this.userIdx = idx
      this.editData = {
        name: item.name,
        age: item.age,
        phone: item.phone,
        address: item.address,
        company: item.company
      }
      this.dialogVisible = true
    },
    deleteUser (id) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.tableData.splice(id, 1);
          this.tolNum = this.tableData.length;
          this.getTable();
        })
        .catch(_ => {});
    },
    handleClose () {
      this.dialogVisible = false
    },
    confirm () {
      if(!this.editData.name || !this.editData.age || !this.editData.phone){
          this.$message({
            message: '请输入必填信息',
            type: 'warning'
          });

        } else {
          this.dialogVisible = false
          Vue.set(this.tableDataList, this.userIdx, this.editData)
        }
    },
    onSubmit() {
      const newTableData = this.newTableData;
      const search = newTableData.name;
      if(search){
        this.tableDataList.filter(data => {
          Object.keys(data).some(key => {
            String(data[key]).toLowerCase().indexOf(search) > -1
          })
          return data;
        })
      }
    },
    getTable() {
      this.tableDataList = this.tableData.slice((this.currentPage-1)*this.pageSize, (this.currentPage)*this.pageSize)
    },
    getFilterTable(parm) {
      this.tableHeaderList = parm;
      this.filterTableHeader = this.tableHeaderList.filter(value => {
        if (value.status === 1) {
          return value;
        }
      })
    },
    clickAddUser () {
      this.addUserDialog = true;
      this.addData = {};
    },
    isAddUserDialog (addData) {
      this.$refs[addData].validate((valid) => {
        if(valid) {
          this.addUserDialog = false;
          this.tableData.push(this.addData);
          this.tolNum = this.tableData.length;
          this.addUser(this.tableData);
          this.getTable();
        }
      })
    }
  },
  computed: {
    ...mapState({
      tableData: ({addUser}) => addUser.tableData,
    }),
  },
  created () {
    this.tolNum = this.tableData.length
    this.getTable()
    this.tableHeaderList = TABLEHEADERLIST
    this.filterTableHeader = this.tableHeaderList.filter(value => {
      if (value.status === 1) {
        return value
      }
    })
    this.propTable = JSON.parse(JSON.stringify(this.tableHeaderList))
  },
  updated () {
  },
  mounted () {
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
  min-height: 600px;
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
.add_user >>> .el-input__inner {
  width: 60%;
}
</style>
