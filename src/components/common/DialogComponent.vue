<template>
  <div>
    111
    <!-- <el-dialog
      title="标题"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>{{content}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>>

<script>
export default {
  props: ['content', 'centerDialogVisible'],
  data () {
    return {
      centerDialogVisible: false
    }
  }
  
}
</script>

<style lang="">
  
</style>