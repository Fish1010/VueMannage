<template>
  <div>
    <el-dialog width="40%"
               title="登录详情 (用户名)"
               @close="$emit('close')"
               :visible="dialogTableVisible">
      <el-table :data="userOpDetail"
                max-height="430">
        <el-table-column property="id" label="序号" width="250"></el-table-column>
        <el-table-column property="logTime" label="登录时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'log-num-detail-dialog',
  components: {
  },
  data () {
    return {
      dialogTableVisible: true,
    }
  },
  computed: {
    ...mapState({
      userOpDetail: ({draggAble}) => draggAble.userOpDetail,
    })
  },
  methods: {
    ...mapActions([
      'getOpDetail'
    ]),
  },
  created () {
    this.getOpDetail();
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
