import Vue from 'vue'
import Router from 'vue-router'
import NavOneData from '@/components/data/navOneData'
import NavTwoData from '@/components/data/navTwoData'
import NavThreeData from '@/components/data/navThreeData'
import NavFourData from '@/components/data/navFourData'
import DataDraggAble from '@/components/data/dataDraggAble'
import MarketActivityManagement from '@/components/data/common/marketActivityManagement'
import MarketOperationAnalysis from '@/components/data/common/marketOperationAnalysis'
import PartnerManagement from '@/components/data/common/partnerManagement'
import RecommendMaterialLibrary from '@/components/data/common/recommendMaterialLibrary'
import Picture from '@/demo/Picture'
import TurnPicture from '@/demo/TurnPicture'
import JingDong from '@/demo/JingDong'
import Demo from '@/demo/demo'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', name: 'DataClass', component: DataClass },
    { path: '/', name: 'NavOneData', component: NavOneData },
    { path: '/navtwo', name: 'NavTwoData', component: NavTwoData },
    { path: '/navfour', name: 'NavFourData', component: NavFourData },
    { path: '/picture', name: 'Picture', component: Picture},
    { path: '/turn-picture', name: 'TurnPicture', component: TurnPicture},
    { path: '/jingdong', name: 'JingDong', component: JingDong},
    { path: '/demo', name: 'Demo', component: Demo},

    { path: '/navthree', 
      name: 'NavThreeData', 
      component: NavThreeData,
      // children: [
      //   { path: 'activity',
      //     name: 'MarketActivityManagement',
      //     component: 'MarketActivityManagement'
      //   },{
      //     path: 'operation',
      //     name: 'MarketOperationAnalysis',
      //     component: 'MarketOperationAnalysis'
      //   }
      // ]
    },


    { path: '/datadragg', name: 'DataDraggAble', component: DataDraggAble },
    { path: '/activity', name: 'MarketActivityManagement', component: MarketActivityManagement },
    { path: '/operation', name: 'MarketOperationAnalysis', component: MarketOperationAnalysis },
    { path: '/partner', name: 'PartnerManagement', component: PartnerManagement },
    { path: '/recommend', name: 'RecommendMaterialLibrary', component: RecommendMaterialLibrary },
  ],
  mode: "history"
})
