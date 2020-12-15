<template>
  <draggable 
    id="dragFrom"
    :list="dataLists"
    :group="{name: 'text', pull: 'clone', put: false}" 
  >
    <div
      v-for="(item, ind) in dataLists"
      :key="ind"
      class="active"
    >
      {{item.name}}
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragFrom',
  data () {
    return {
      dataLists: [
        {name: '1'},
        {name: '2'},
        {name: '3'}
      ],
    }
  },
  components: {
    draggable,
  },

}
</script>

<style scoped>
.active{
  padding: 5px 20px;
  background: #eee;
  margin-bottom: 10px;
  width: 200px;
  text-align: center;
}
</style>
