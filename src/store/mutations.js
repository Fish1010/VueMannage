import {
//   RECEIVE_ADDRESS,
//   RECEIVE_CATEGORYS,
//   RECEIVE_SHOPS,
  RECEIVE_TABMENU,
  RECEIVE_OPERATIONAL,
  RECEIVE_USEROPDETAIL,
  SAVE_MENULIST,
} from './mutation-types'

import cloneDeep from 'lodash/cloneDeep'

export default {
//   [RECEIVE_ADDRESS] (state, {address}) {
//     state.address = address
//   },
//   [RECEIVE_CATEGORYS] (state, {categorys}) {
//     state.categorys = categorys
//   },
//   [RECEIVE_SHOPS] (state, {shops}) {
//     state.shops = shops
//   }

  // 视频tab标签
  [RECEIVE_TABMENU] (state, {tabmenu}) {
    state.tabmenu = tabmenu
  },

  // 用户操作统计
  [RECEIVE_OPERATIONAL] (state, {operational}) {
    state.operational = operational
  },

  // 用户操作详情
  [RECEIVE_USEROPDETAIL] (state, {userOpDetails}) {
    state.userOpDetails = userOpDetails
  },

  // 更新编辑区域存储组件
  [SAVE_MENULIST] (state, {data}) {
    // state.menuList = cloneDeep(data)
    if (data) {
      state.menuList.push(data)
    }
  }
}