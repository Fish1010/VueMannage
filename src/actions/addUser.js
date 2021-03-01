import * as types from '@/store/types'
import APT from '@/utils/api'
import {
  // reqAddress,
  // reqFoodCategorys,
  // reqShops,
  reqTabMenu,
  reqOperational,
  reqUserOpDetails,
} from '@/api'

const actions = {
  getAddUser ({commit}, params) {
    commit(types.ADD_USER, {params})
    return true
  },
}

export default actions