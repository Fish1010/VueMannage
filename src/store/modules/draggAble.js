import * as types from '../types'
  
import cloneDeep from 'lodash/cloneDeep'

const state = {
  latitude: 100, //纬度
  longitude: 100, //经度
  address: {}, //地址
  categorys: [], //食品分类数组
  shops: [], //商家数组
  tabmenu: [], //视频tab标签
  operational: [], //用户操作统计
  userOpDetails: [], //用户操作菜单使用详情
  userOpDetail: [], //用户操作登陆详情
  menuList: [],
}

const mutations = {
  //   [types.RECEIVE_ADDRESS] (state, {address}) {
  //     state.address = address
  //   },
  //   [types.RECEIVE_CATEGORYS] (state, {categorys}) {
  //     state.categorys = categorys
  //   },
  //   [types.RECEIVE_SHOPS] (state, {shops}) {
  //     state.shops = shops
  //   }

  // 视频tab标签
  [types.RECEIVE_TABMENU] (state, {tabmenu}) {
    state.tabmenu = tabmenu
  },

  // 用户操作统计
  [types.RECEIVE_OPERATIONAL] (state, {operational}) {
    state.operational = operational
  },

  // 用户操作菜单使用详情
  [types.RECEIVE_USEROPDETAILS] (state, {userOpDetails}) {
    state.userOpDetails = userOpDetails
  },

  // 用户操作登陆详情
  [types.RECEIVE_USEROPDETAIL] (state, {userOpDetail}) {
    state.userOpDetail = userOpDetail
  },

  // 更新编辑区域存储组件
  [types.SAVE_MENULIST] (state, {menuList}) {
    // state.menuList = cloneDeep(data)
    if (menuList) {
      // state.menuList.push(data)
      state.menuList = menuList;
    }
  },
};

const getters = {

};

export default {
  state,
  mutations,
  getters,
}
