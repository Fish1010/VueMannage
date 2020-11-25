<template>
  <draggable  
    class="drag-from"
    :sort="false"
    :group="{name: 'special', pull: 'clone', put: false}" 
  >
    <h2 class="hello">大标题</h2>
  </Draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    draggable
  }
}
</script>

<style scoped>
.hello{
  padding: 10px 0;
  text-align: center;
}
.hello:hover{
  box-shadow: #eee 0 0 5px;
}
.drag-from:hover{
  cursor: pointer;
}
</style>
