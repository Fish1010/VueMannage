import {
  // RECEIVE_ADDRESS,
  // RECEIVE_CATEGORYS,
  // RECEIVE_SHOPS,
  RECEIVE_TABMENU,
  RECEIVE_OPERATIONAL,
  RECEIVE_USEROPDETAIL,
} from './mutation-types'

import { 
  // reqAddress,
  // reqFoodCategorys,
  // reqShops,
  reqTabMenu,
  reqOperational,
  reqUserOpDetails,
} from '@/api/index'

export default {
  //异步获取视频tab
  async getTabMenu ({commit}) {
    const result = await reqTabMenu()
    if (result.code===0) {
      const tabmenu = result.tabmenu
      commit(RECEIVE_TABMENU, {tabmenu})
    }
  },

  //异步获取操作统计
  async getOperational ({commit}) {
    const result = await reqOperational()
    if (result.code===0) {
      const operational = result.data
      commit(RECEIVE_OPERATIONAL, {operational})
      return operational
    }
  },

  //异步获取操作详情
  async getOpDetail ({commit}) {
    const result = await reqUserOpDetails()
    if (result.code===0) {
      const userOpDetails = result.data
      commit(RECEIVE_USEROPDETAIL, {userOpDetails})
    }
  },

//   //异步获取地址
//   async getAddress ({commit, state}) {
//     //发送异步ajax请求
//     const geohash = state.latitude + ',' + state.longitude
//     const result = await reqAddress(geohash)
//     //提交一个mutation
//     if(result.code === 0){ //0表示请求成功 
//       //查看接口文档,查看返回数据
//       const address = result.data
//       commit(RECEIVE_ADDRESS, {address})
//     }
//   },

//   //异步获取食品分类
//   async getCategorys ({commit}) {
//     //发送异步ajax请求
//     const result = await reqFoodCategorys()
//     //提交一个mutation
//     if(result.code === 0){ //0表示请求成功 
//       //查看接口文档,查看返回数据
//       const categorys = result.data
//       commit(RECEIVE_CATEGORYS, {categorys})
//     }
//   },

//   //异步获取商家
//   async getShops ({commit, state}) {
//     //发送异步ajax请求
//     //取出经纬度参数
//     const {longitude, latitude} = state
//     const result = await reqShops(longitude, latitude)
//     //提交一个mutation
//     if(result.code === 0){ //0表示请求成功 
//       //查看接口文档,查看返回数据
//       const shops = result.data
//       commit(RECEIVE_SHOPS, {shops})
//     }
//   }

}