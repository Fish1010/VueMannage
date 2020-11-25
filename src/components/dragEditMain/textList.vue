<template>
  <!-- <div class="textList"> -->
    <!-- <h4>文本</h4> -->
  <draggable  
    class="drag-from"
    :list="dataList"
    :group="{name: 'special', pull: 'clone', put: false}" 
  >
    <div 
      class="special-drag-relative"
      v-for="(element, index) in dataList" 
      :key="index+1"
    >
      <div :is="element.name" v-bind="element.option" :dataList="element.dataList"></div>
      <!-- <div v-if="element.comment" class="comment" style="text-align:center;margin-top: 5px;">{{element.comment}}</div> -->
      <!-- <div style="display: none" class="special-drag-absolute"></div> -->
    </div>
  </Draggable>
</template>

<script>
import draggable from 'vuedraggable'
import SpecialTextBasic from '@/components/specialComponent/SpecialTextBasic'
import SpecialTextOne from '@/components/specialComponent/SpecialTextOne'
import SpecialTextTwo from '@/components/specialComponent/SpecialTextTwo'
import SpecialButtonOne from '@/components/specialComponent/SpecialButtonOne'
import SpecialButtonTwo from '@/components/specialComponent/SpecialButtonTwo'
import SpecialButtonThree from '@/components/specialComponent/SpecialButtonThree'
import SpecialGraphicOne from '@/components/specialComponent/SpecialGraphicOne'
import SpecialGraphicTwo from '@/components/specialComponent/SpecialGraphicTwo'
import SpecialGraphicThree from '@/components/specialComponent/SpecialGraphicThree'
import SpecialLayoutOne from '@/components/specialComponent/SpecialLayoutOne'
import SpecialLayoutTwo from '@/components/specialComponent/SpecialLayoutTwo'
import SpecialLayoutThree from '@/components/specialComponent/SpecialLayoutThree'
import SpecialPictureOne from '@/components/specialComponent/SpecialPictureOne'
import SpecialPictureTwo from '@/components/specialComponent/SpecialPictureTwo'
import SpecialPictureThree from '@/components/specialComponent/SpecialPictureThree'

// import { mapState } from 'vuex'
export default {
  name: 'text-list',
  data () {
    return {
 
    }
  },
  components: {
    draggable,
    SpecialTextBasic,
    SpecialTextOne,
    SpecialTextTwo,
    SpecialButtonOne,
    SpecialButtonTwo,
    SpecialButtonThree,
    SpecialGraphicOne,
    SpecialGraphicTwo,
    SpecialGraphicThree,
    SpecialLayoutOne,
    SpecialLayoutTwo,
    SpecialLayoutThree,
    SpecialPictureOne,
    SpecialPictureTwo,
    SpecialPictureThree
  },
  props: {
    dataList: [Array]
  },
  mounted () {
  }
}
</script>

<style scoped>
 .special-drag-relative{
  /* padding: 1px 1px; */
  margin-bottom: 10px;
}
.special-drag-relative:hover{
  box-shadow: #ccc 0 0 5px;
}
.drag-from:hover{
  cursor: pointer;
}

</style>
