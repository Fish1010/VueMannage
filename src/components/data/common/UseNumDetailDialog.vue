<template>
  <div>
    <el-dialog class="dialog"
               title="菜单使用详情 (用户名)"
               @close="$emit('close')"
               :visible="dialogTableVisible">
      <!-- <el-cascader v-model="choseMenu"
                   :options="options"
                   @change="handleChange"></el-cascader> -->
      <el-select v-model="menuName" placeholder="全部">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-minus"></i>
      <el-select v-model="subMenuName" placeholder="全部" :disabled="menuName===''">
        <span v-for="option in options" :key="option.value">
          <el-option
            v-for="item in option.children"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </span>
      </el-select>
      <el-button type="primary"
                 class="query-button"
                 style="margin-left: 10px"
                 @click="handleQuery">查询</el-button>
      <el-table :data="userOpDetails"
                max-height="430"
                style="margin-top: 10px">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="menuName" label="一级菜单"></el-table-column>
        <el-table-column prop="subMenuName" label="二级菜单"></el-table-column>
        <el-table-column prop="requestTime" label="使用时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'use-num-detail-dialog',
  components: {
  },
  data () {
    return {
      dialogTableVisible: true,
      id: 0,
      menuName: '',
      subMenuName: '',
      // userOpDetails: [
      //   {
      //     id: '1',
      //     menuName: 'meizi',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '管理',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '营销资源',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '1231',
      //     subMenuName: '13214',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '驱蚊器',
      //     subMenuName: '全职',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '放热水中',
      //     subMenuName: '范德萨',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '营销资源管理',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: 'eqw',
      //     subMenuName: 'q123',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '312weq',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: 'asd',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }, {
      //     id: '1',
      //     menuName: '营销资源管理',
      //     subMenuName: '资源详情',
      //     requestTime: '2020-08-20'
      //   }
      // ],
      options: [
        {
          value: '1',
          label: '一级菜单1',
          children: [{
            value: '1-1',
            label: '二级菜单1',
          }]
        },
        {
          value: '2',
          label: '一级菜单2',
          children: [{
            value: '2-1',
            label: '二级菜单2',
          }]
        },
        {
          value: '3',
          label: '一级菜单3',
          children: [{
            value: '3-1',
            label: '二级菜单3',
          }]
        }
      ],
    }
  },
  methods: {
    ...mapActions([
      'getOpDetails'
    ]),
    handleChange (value) {
      // console.log(value);
    },
    handleQuery () {

    },
  },
  computed: {
    ...mapState({
      userOpDetails: ({draggAble}) => draggAble.userOpDetails,
    })
  },
  mounted () {
  },
  created () {
    this.getOpDetails()
  },
}
</script>
<style scoped>

</style>
