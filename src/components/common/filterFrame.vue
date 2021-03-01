<template>
  <div class="filterFrame">
    <div class="outFrame" tabindex="-1" @focus="changeDown(true)" @blur="changeDown(false)">
      <i class="el-icon-s-operation licon" title="筛选表头"></i>
      <ul v-if="isShow" class="down">
        <li>
          <span style="display: inline-block">已选<span>{{selectLength}}</span>/{{tableData.length}}</span>
          <span class="toDefaule" @click="getDefault()">恢复默认</span>
        </li>
        <ol style="overflow-y: auto; max-height: 180px">
          <li class="li-body" v-for="(item, index) in tableData" :key="index" @click="toggle(item, index)">
            {{item.name}}
            <i style="float: right; line-height: 35px; margin-right: 10px" :class="{'el-icon-check': item.status===1}"></i>
          </li>
        </ol>
      </ul>
    </div>
  </div>
</template>

<script>
import Scrollbar from '@/components/common/Scrollbar'
export default {
  name: 'filterFrame',
  data () {
    return {
      isShow: false,
      tableData: [],
      selectLength: 0,
    }
  },
  props: {
    tableList: [Array],
    getSelect: {
      type: Function,
      default: null,
    }
  },
  components: {
    Scrollbar,
  },
  methods: {
    changeDown(ele) {
      this.isShow = ele
    },
    getSelectLength() {
      this.selectLength = this.tableData.filter(v => v.status===1).length
    },
    getDefault() {
      this.tableData = JSON.parse(JSON.stringify(this.tableList))
      this.getSelect(this.tableData)
      this.getSelectLength()
    },
    toggle(item, index) {
      this.tableData.forEach((value, i) => {
        if(i === index) {
          value.status = value.status ? 0 : 1
        }
      })
      this.getSelectLength()
      this.getSelect(this.tableData)
    }
  },
  created() {
    this.tableData = JSON.parse(JSON.stringify(this.tableList))
    this.getSelectLength()
  }
}
</script>

<style scoped>
.filterFrame{
  display: inline-block;
  margin-top: 2px;
}
.outFrame{
  border: 1px solid #aaaaaa;
  width: 45px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
}
.outFrame:hover{
  cursor: pointer;
  border-color: #409eff;
}
.outFrame:focus{
  outline: none;
}
.licon{
  font-size: 18px;
  color: #666666;
}
.outFrame:hover .licon{
  color: #409eff;
}
.outFrame .down{
  position: absolute;
  top: 50px;
  left: -150%;
  width: 180px;
  padding: 8px 12px;
  background: #ffffff;
  box-sizing: border-box;
  max-height: 250px;
  box-shadow: 0px 0px 4px 0px #aaaaaa;
  z-index: 10;
}
.outFrame .down::after,
.outFrame .down::before{
  content: "";
  position: absolute;
  top: -20px;
  right: 84px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
  border-left: 10px solid transparent;
  z-index: 1;
}
.outFrame .down::after{
  border-bottom: 10px solid #666666;
  z-index: 0;
}
.outFrame .down li{
  border-bottom: 1px solid #aaaaaa;
  padding: 0 5px;
  text-align: left;
  min-height: 35px;
}
.outFrame .down ol li:hover{
  background: #eeeeee;
}
.outFrame .down li .li-body{
  width: 80%;
}
.outFrame .down .toDefaule{
  display: block;
  float: right;
}
.outFrame .down .toDefaule:hover{
  color: #409eff;
}
</style>
