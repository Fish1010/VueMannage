<template>
  <div id="sideMenuBar">
    <ul>
      <li
        v-for="(item, index) in menuBar"
        :key="index"
        class="li"
        :class="{'active':active==index}"
        @click="handleClick(item, index)"
      >
        <span style="display: inline-block; margin-top: 15px;">
          <div><i class="el-icon-menu" style="font-size: 18px; margin-bottom: 5px;"></i></div>
          <!-- <i :class="item.icon"></i> -->
          {{item.label}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SideMenuBar',
  components: {
    
  },
  data () {
    return {
      menuBarActive: null
    }
  },
  // props: ['menuBar', 'active'],
  props: {
    menuBar: [Array],
    active: [String, Number]
  },
  methods: {
    handleClick(item, index) {
      this.menuBarActive = '' + item.value
      this.$emit('handleClick', item, index)
      // console.log(item)
    },
  }
}
</script>

<style scoped>
#sideMenuBar, ul, li{
  overflow-y: hidden;
}
.active{
  background-color: #549fff;
  color: #fff;
}
li{
  height: 70px;
  background-color: #fff;
  text-align: center;
  color: #666666;
  cursor: pointer;
  font-size: 13px;
}

</style>
