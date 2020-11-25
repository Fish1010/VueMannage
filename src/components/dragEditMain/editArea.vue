<template>
  <div 
    class="draggable-head"
    >
    <div class="draggable">
      <Draggable  
        class="aimdrag"
        :list="menuList || []"
        :group="{name: 'special'}"
        @change="handleChange"
        ref="getStyle"
        >
        <div 
          class="act"
          v-for="(ele, index) in menuList" 
          :key="index+1" 
          @click="addActive(ele, index)"
        >
          <div v-if="ele" :is="ele.name" v-bind="ele.option"></div>
        </div>
      </Draggable>
      <!-- <div 
        class="special-tab-group"
        v-for="(ele, index) in newList"
        style="position: absolute; top: 0; left: 0; z-index: 10; background: red"
        :key="index"
        >
        <div 
          :is="ele.name"
          >
        </div>
      </div> -->
    </div>
    <div 
      class="style" 
      :is="styleComponentsName"
      :data="contentList"
    ></div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
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
import SpecialTextStyle from '@/components/style/SpecialTextStyle'
import SpecialBigtitleStyle from '@/components/style/SpecialBigtitleStyle'
import SpecialButtonStyle from '@/components/style/SpecialButtonStyle'
import { mapState, mapMutations } from 'vuex'

// import DialogComponent from '@components/common/DialogComponent'
// import { mapMutations } from 'vuex'
export default {
  name: 'EditArea',
  data () {
    return {
      newList: [],
      styleComponentsName: SpecialTextStyle,
      contentList: [],
      num: null,
      tabFlag: true,
      flag: false
    }
  },
  components: {
    Draggable,
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
    SpecialPictureThree,
    SpecialTextStyle,
    SpecialButtonStyle,
    SpecialBigtitleStyle,
    // DialogComponent
  },
  methods: {
    addActive (ele, ind) {
      this.contentList = []
      var List = document.getElementsByClassName('act')
      for(let i = 0; i < List.length; i++){
        List[i].style.backgroundColor = 'white';
      }
      List[ind].style.backgroundColor = '#eee';
      let mi = ele.type
      this.styleComponentsName = `special-${mi}-style`
      this.contentList.push(List[ind].textContent)
    },
    handleChange (arr) {
      this.saveMenulist(arr)
      // console.log(this.menuList)
    },
    ...mapMutations({
      saveMenulist: 'SAVE_MENULIST',
    })
  },
  watch: {
    newList () {
      // if (!this.tabFlag) {
      //   this.newList.filter(item => {
      //     if (item.type === 'tabGroup') {
      //       this.flag = true
      //     }
      //   })
      //   if (flag) {
      //     this.$message({
      //       message: 'tab组件已添加!',
      //       type: 'warning'
      //     });
      //   }
      // }
      if (this.tabFlag) {
        this.newList.filter(item => {
          if (item.type === 'tabGroup') {
            this.tabFlag = false
          }
        })
      }
    }
  },
  computed: {
    ...mapState(['menuList'])
  },
  mounted() {
  },
 
}
</script>

<style scoped>
  .draggable-head{
    position: relative;
    height: 100%;
    justify-content: space-between;
  }
  .draggable{
    position: relative;
    top: 50px;
    height: 550px;
    left: 220px;
  }
  .aimdrag{
    position: relative;
    overflow-y: hidden;
    /* top: 50px; */
    width: 320px;
    height: 550px;
    /* left: 350px; */
    background: #fff;
    box-shadow: #111 0 0 10px;
  }
  .act{
    cursor: pointer;
  }
  .style{
    position: absolute;
    width: 320px;
    top: 0;
    height: 100%;
    right: 0;
    background: #fff;
    border-left: 1px solid #ccc;
  }
 
 
</style>
