import * as types from '../types'

const state = {
  tableData: [
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "lili",
      sex: 0,
      age: "24",
      phone: "123-456-789",
      isMarry: 1,
      address: "南京",
      company: "百度"
    },
    {
      name: "xixi",
      sex: 0,
      age: "18",
      phone: "253-826-179",
      isMarry: 2,
      address: "成都",
      company: "平安"
    },
    {
      name: "nana",
      sex: 1,
      age: "34",
      phone: "312-432-231",
      isMarry: 0,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 1,
      age: "18",
      phone: "123-867-832",
      isMarry: 2,
      address: "上海",
      company: "腾讯"
    },
    {
      name: "hehe",
      sex: 2,
      age: "28",
      phone: "521-664-666",
      isMarry: 0,
      address: "广州",
      company: "华为"
    },
    {
      name: "shasha",
      sex: 2,
      age: "16",
      phone: "111-222-333",
      isMarry: 1,
      address: "北京",
      company: "字节"
    },
    {
      name: "mimi",
      sex: 0,
      age: "36",
      phone: "222-333-444",
      isMarry: 0,
      address: "深圳",
      company: "网易"
    },
    {
      name: "didi",
      sex: 1,
      age: "31",
      phone: "444-333-222",
      isMarry: 1,
      address: "杭州",
      company: "京东"
    },
    {
      name: "mama",
      sex: 2,
      age: "15",
      phone: "555-666-777",
      isMarry: 2,
      address: "武汉",
      company: "滴滴"
    },
    {
      name: "baba",
      sex: 2,
      age: "98",
      phone: "888-444-333",
      isMarry: 0,
      address: "苏州",
      company: "asiainfo"
    },
    {
      name: "yeye",
      sex: 1,
      age: "25",
      phone: "555-777-888",
      isMarry: 2,
      address: "无锡",
      company: "美团"
    },
    {
      name: "lili",
      sex: 1,
      age: "24",
      phone: "123-456-789",
      isMarry: 0,
      address: "南京",
      company: "百度"
    },
    {
      name: "nana",
      sex: 2,
      age: "34",
      phone: "312-432-231",
      isMarry: 1,
      address: "杭州",
      company: "阿里"
    },
    {
      name: "huahua",
      sex: 0,
      age: "18",
      phone: "123-867-832",
      isMarry: 1,
      address: "上海",
      company: "腾讯"
    },
  ],
};

const mutations = {
  [types.ADD_USER] (state, {data}) {
    if (data) {
      state.tableData = data;
    }
  }
};

const getters = {

}

export default {
  state,
  mutations,
  getters,
}