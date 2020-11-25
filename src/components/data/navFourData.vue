r<template>
  <div class="navFourData">
    <div>
      <el-container>
        <el-header>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
            <el-breadcrumb-item>资源批量补发</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <section>
            <div class="query-form">
              <!-- 用户操作查询 -->
              <el-date-picker
                class="query-item_input"
                type="month"
                v-model="month"
                placeholder="选择月"></el-date-picker>
              <el-input
                class="query-item_input"
                v-model="loginName"
                placeholder="登录账户" />
              <el-input
                class="query-item_input"
                v-model="userName"
                placeholder="用户姓名"
                maxlength="20" />
              <el-cascader
                placeholder="城市/区县"
                v-model="organizeCode"
                :options="cityCountyTree"
                class="query-item_input"></el-cascader>
              <el-button
                type="primary"
                class="query-button"
                @click="handleQuery">查询</el-button>
              <el-button
                class="query-button"
                @click="handleReset">重置</el-button>
            </div>
          </section>
          <el-table :data="operational"
                    stripe
                    :default-sort = "{prop: 'menuUseCount', order: 'descending'}"
                    style="width: 100%">
            <el-table-column prop="loginName"
                              label="登录账户">
            </el-table-column>
            <el-table-column prop="userName"
                              label="用户姓名">
            </el-table-column>
            <el-table-column prop="companyName"
                              label="归属公司">
            </el-table-column>
            <el-table-column prop="deptName"
                              label="归属部门">
            </el-table-column>
            <el-table-column prop="sex"
                              label="性别">
            </el-table-column>
            <el-table-column prop="loginCount"
                              sortable
                              label="登录次数">
              <template slot-scope="scope">
                <div style="color: #549fff" @click="toLogDetail(scope.row)">{{scope.row.loginCount}}</div>
              </template>
            </el-table-column>
            <el-table-column prop="menuUseCount"
                              sortable
                              label="菜单使用次数">
              <template slot-scope="scope">
                <div style="color: #549fff" @click="toUseDetail(scope.row)">{{scope.row.menuUseCount}}</div>
              </template>
            </el-table-column>
          </el-table>
          <UseNumDetailDialog v-if="isUseNumDialogVisble"
                              @close="closeDetailDialog" />
          <LogNumDetailDialog v-if="isLogNumDialogVisble"
                              @close="closeDetailDialog" />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LogNumDetailDialog from './common/LogNumDetailDialog.vue'
import UseNumDetailDialog from './common/UseNumDetailDialog.vue'

export default {
  name: 'navFourData',
  data () {
    return {
      form: { name: '' },
      month: new Date(),
      loginName: '',
      userName: '',
      organizeCode: [],
      cityCountyTree: [],
      isUseNumDialogVisble: false,
      isLogNumDialogVisble: false,
    }
  },
  components: {
    LogNumDetailDialog,
    UseNumDetailDialog
  },
  methods: {
    init () {
      this.getOperational().then( (res) => {
        // console.log(res)
      })
    },
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    },
    handleQuery () {
      this.getOperational()
    },
    handleReset () {
      this.month = new Date()
      this.loginName = ''
      this.userName = ''
      this.organizeCode = []
    },
    toLogDetail (row) {
      this.isLogNumDialogVisble = true
    },
    toUseDetail (row) {
      this.getOpDetail()
      this.isUseNumDialogVisble = true
    },
    closeDetailDialog () {
      this.isLogNumDialogVisble = false
      this.isUseNumDialogVisble = false
    },
    ...mapActions(['getOperational', 'getOpDetail']),
  },
  computed: {
    ...mapState(['operational'])
  },
  mounted () {
    this.init()
    // console.log(this.operational)
    // this.$store.dispatch('getOperational')
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
.query-item_input{
  display: inline-block;
  width: 200px;
  margin-right: 10px;
}

</style>
