<template>
  <div>
    <div class="demo" style="display: flex">
      <div class="box">
        <div class="out">
          <Scrollbar>
            <div v-for="(item, index) in 100" :key="index">{{item}}</div>
            <div>123</div>
            <div>qwe</div>
          </Scrollbar>
        </div>
      </div>
      <div class="box">
        <button @click="handle">按钮</button>
      </div>
      <div class="box">
        <div class="div">
          <table cellspacing="0" border="0" cellpadding="0">
            <thead>
              <tr>
                <th>111</th>
                <th>222</th>
                <th>333</th>
                <th>444</th>
                <th>555</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
              <tr>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
                <td>bbb</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div style="width: 400px; background: #ff5400; height: 20px; padding: 10px">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="progress"></el-progress>
        </div>
      </div>
      <div class="box">
        <div v-for="item in 5" :key="item">{{item}}</div>
      </div>
      <div class="box">
        <div style="width: 250px; height:350px; border: solid 1px #333; margin: 20px">
          <el-scrollbar style="height:100%">
            <div style="width: 400px; height: 150px; background: yellow" >
              <div style="display: inline-block" v-for="item in 100" :key="item">{{item}}-</div>
            </div>
            <div style="width: 400px; height: 150px; background: pink" >
              <div style="display: inline-block" v-for="item in 100" :key="item">{{item}}-</div>
            </div>
            <div style="width: 400px; height: 150px; background: skyblue" >
              <div style="display: inline-block" v-for="item in 100" :key="item">{{item }}-</div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <div style="display: flex">
      <div class="box">
        <editor v-model="content" @contentData="change($event)"></editor>
      </div>
      <!-- <slot name="footer"></slot> -->
      <!-- <div style="white-space: normal; display: flex; width: 800px; border: 1px solid #5499ff; overflow-x: auto; position: relative">
        <div style="position: absolute; top: 0; left: 0;">
          <table border="1">
            <thead>
              <tr>
                <th>aaabbbbbbbbbb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bbbbbbbbbbbbb</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="width: 80%; ">
          <table border="1">
            <thead>
              <tr>
                <th>11111111111111111111111111111111111</th>
                <th>111111111111111111111111111111</th>
                <th>111111111111111111111111111</th>
                <th>111</th>
                <th>111</th>
                <th>111</th>
                <th>111</th>
                <th>111</th>
                <th>111</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>222</td>
                <td>222</td>
                <td class="big" @click="click">aaaa
                  <p slot="footer" v-if="isShow" class="small">我是name为footer的slot</p>
                </td>
                <td>222</td>
                <td>222</td>
              </tr>
              <tr>
                <td>444</td>
                <td>444</td>
                <td>444</td>
                <td>444</td>
                <td>444</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
    </div>
  </div>
  
</template>

<script>
import Scrollbar from '@/components/common/Scrollbar'
import Editor from '@/components/common/editor'

export default {
  name: 'Demo',
  data () {
    return {
      arr: [["name", "age", "sex"], ["111", "222", "333"], ["aaa", "bbb", "ccc"]],
      array: [],
      isShow: false,
      progress: 40,
      content: '这是富文本编辑器'
    }
  },
  components: {
    Scrollbar,
    Editor,
  },
  created(){
  },
  methods: {
    click () {
      this.isShow = !this.isShow
    },
    handle () {
      this.tojson(this.arr)
    },
    tojson(arr){
      if(!arr.length) return null;
      var i = 0;
      let len = arr.length;
      for(;i<len;i++){
        this.array.push({"projectname":arr[i][0], "projectnumber":arr[i][1], "projectnumber":arr[i][2]});
      }
      return JSON.stringify(this.array);
    },
    change () {
      console.log(111);
    },
  }
}
</script>

<style scoped>
  *{
    margin: 0 ;
    padding: 0;
  }
  .out{
    width: 100px;
    height: 300px;
    background: skyblue;
  }
  .div{
    overflow-x:auto;
    width:400px;
    border:1px solid gray;
    border-bottom: 0;
    border-right: 0;
  }
  td, th {
    border-right :1px solid gray;
    border-bottom :1px solid gray;
    width:100px;
    height:30px;
    box-sizing: border-box;
  }
  th {
    background-color:lightblue;
  }
  table {
    border-collapse:separate;
    table-layout: fixed;
    width: 100%;

  }
  td:first-child, th:first-child {
    position:sticky;
    left:0;
    z-index:1;
    background-color:lightpink;
  }

  thead tr th {
    position:sticky;
    top:0;
  }

  th:first-child{
    z-index:2;
    background-color:lightblue;
  }
  .el-progress >>> .el-progress-bar__innerText{
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .demo >>> .el-scrollbar__wrap{
    overflow: hidden;
  }
  .box{
    margin: 20px;
  }
</style>
