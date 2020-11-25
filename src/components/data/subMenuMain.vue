<template>
  <div id="subMenuMain">
    <ul>
      <li
        v-for="(element,index) in menuMain" 
        :key="index" 
        :class="{'active':active==index}"
        @click="()=>handleClickTwo(element,index)"
        >
        <span>{{element.label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SubMenuMain',
  components: {
    
  },
  // props: ['menuMain', 'active'],
  props: {
    menuMain: [Array],
    active: [String, Number]
  },
  data () {
    return {
      menuMainActive: null,
    }
  },
  methods: {
    handleClickTwo (element, index) {
      // console.log(111, index)
      this.menuMainActive = '' + element.value
      this.$emit('handleClickTwo', element, index)
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
ul{
  background: red;
}
ul li{
  float: left;
  margin: 10px 18px 5px 18px;
  cursor: pointer;
}
.active span{
  padding: 2px;
  border-bottom:1px solid #3399ff;
}

</style>
