<template>
  <draggable 
    :list="newList"
    group="text" 
    class="dragto"
  >
    <div 
      v-for="(ele, index) in newList"
      :key="index"
      class="active"
    >
      {{ele.name}}
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragTo',
  data () {
    return {
      newList: []
    }
  },
  components: {
    draggable,
  },

}
</script>

<style scoped>
.dragto{
  height: 400px;
  background: #fff;
}
.active{
  padding: 5px 20px;
  background: #eee;
  margin-bottom: 10px;
  width: 200px;
  text-align: center;
}
</style>
