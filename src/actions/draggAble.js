import * as types from '@/store/types'
import APT from '@/utils/api'
import {
  // reqAddress,
  // reqFoodCategorys,
  // reqShops,
  reqTabMenu,
  reqOperational,
  reqUserOpDetails,
  reqUserOpDetail,
} from '@/api'

const actions = {
  //异步获取视频tab
  async getTabMenu ({commit}) {
    const result = await reqTabMenu()
    if (result.code===0) {
      const tabmenu = result.tabmenu
      commit(types.RECEIVE_TABMENU, {tabmenu})
    }
  },

  //异步获取操作统计
  async getOperational ({commit}) {
    const result = await reqOperational()
    if (result.code===0) {
      const operational = result.data
      commit(types.RECEIVE_OPERATIONAL, {operational})
      return operational
    }
  },

  //异步获取菜单使用详情
  async getOpDetails ({commit}) {
    const result = await reqUserOpDetails()
    if (result.code===0) {
      const userOpDetails = result.data;
      commit(types.RECEIVE_USEROPDETAILS, {userOpDetails});
      return userOpDetails;
    }
  },

  //异步获取登陆详情
  async getOpDetail ({commit}) {
    const result = await reqUserOpDetail()
    if (result.code===0) {
      const userOpDetail = result.data;
      commit(types.RECEIVE_USEROPDETAIL, {userOpDetail});
      return userOpDetail;
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

export default actions