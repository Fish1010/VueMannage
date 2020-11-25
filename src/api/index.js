/**
 * 包含多个接口请求函数的模块
 * 函数的返回值: promise对象
 */
import ajax from './ajax'

// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'   //这里需要配置代理,解决跨域问题

//根据经纬度获取位置详情
// export const reqAddress = (geohash) => ajax(`${BASE_URL}/psition/${geohash}`)

//获取食品分类列表
// export const reqFoodCategorys = () => ajax(BASE_URL + `/index_category`)
//根据经纬度获取商家列表
// export const reqShops = (longitude, latitude) => ajax(BASE_URL + `/shops`, {longitude, latitude})

//请求tab标签
export const reqTabMenu = () => ajax('/tabmenu')

//请求用户操作统计
export const reqOperational = () => ajax('/operational')

//请求用户操作详情
export const reqUserOpDetails = () => ajax('/userOpDetails')