import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/tabmenu', {code: 0, data: data.tabmenu})
Mock.mock('/operational', {code: 0, data: data.operational})
Mock.mock('/userOpDetails', {code: 0, data: data.userOpDetails})
Mock.mock('/userOpDetail', {code: 0, data: data.userOpDetail})