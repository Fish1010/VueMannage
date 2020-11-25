<template>
  <div id="leftMenuCon">
    <el-container>
      <el-aside style="width: 70px; border-right: 1px solid #ccc;">
        <SideMenuBar 
          :active="menuBarActive"
          @handleClick="menuBarClick"
          :menuBar="textList"
        >
        </SideMenuBar>
      </el-aside>
      <el-main>
        <SubMenuMain 
          v-if="menuMainList"
          :active="menuMainActive"
          @handleClickTwo="menuMainClick"
          :menuMain="menuMainList">
        </SubMenuMain>
        <el-scrollbar  style="height: calc(100vh - 100px); width: 100%; margin: 0 auto;">
          <!-- <div :is="componentName" style="margin: 20px;">ccc</div> -->
          <div :is="componentName" style="margin: 10px;"></div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideMenuBar from './sideMenuBar'
import SubMenuMain from './subMenuMain'
// import HelloWorld from '@/components/HelloWorld'
// import SpecialTextGroup from '../detial/SpecialTextGroup'
import SpecialTextGroup from '@/components/detial/SpecialTextGroup'
import SpecialGraphicGroup from '@/components/detial/SpecialGraphicGroup'
import SpecialButtonGroup from '@/components/detial/SpecialButtonGroup'
import SpecialLayoutGroup from '@/components/detial/SpecialLayoutGroup'
import SpecialPictureGroup from '@/components/detial/SpecialPictureGroup'
import SpecialFormGroup from '@/components/detial/SpecialFormGroup'
import SpecialSubmitGroup from '@/components/detial/SpecialSubmitGroup'
import SpecialSwiperGroup from '@/components/detial/SpecialSwiperGroup'
import SpecialTabGroup from '@/components/detial/SpecialTabGroup'
import SpecialMenuGroup from '@/components/detial/SpecialMenuGroup'

export default {
  name: 'LeftMenuCon',
  components: {
    SideMenuBar,
    SubMenuMain,
    SpecialButtonGroup,
    SpecialTextGroup,
    SpecialLayoutGroup,
    SpecialGraphicGroup,
    SpecialPictureGroup,
    SpecialFormGroup,
    SpecialSubmitGroup,
    SpecialSwiperGroup,
    SpecialMenuGroup,
    SpecialTabGroup
  },
  // props: ['textList'],
  props: {
    textList: [Array]
  },
  data () {
    return {
      menuBarActive: '0',
      menuMainActive: '0',
      componentName: 'SpecialTextGroup'
    }
  },
  computed: {
    menuMainList () {
      // console.log(this.menuMainActive)
      return this.textList[this.menuBarActive].subMenuList
    }
  },
  methods: {
    menuBarClick (itme, index) {
      this.menuBarActive = index
      this.menuMainActive = '0'
      this.componentName = this.menuMainList[0].value
      // console.log(index)
    },
    menuMainClick (itme, index) {
      this.menuMainActive = index
      this.componentName = this.menuMainList[index].value
      // console.log(this.componentName)
    }
  }
}
</script>

<style>
.el-main{
  padding: 0;
}
.el-container{
  height: 100%;
}
.el-aside{
  height: calc(100vh - 70px);
  overflow: hidden;
}
.el-scrollbar__wrap {
  overflow: hidden;
  width: 90%; 
  padding: 15px;
}

</style>
