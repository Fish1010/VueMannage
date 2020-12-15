<template>
  <div class="out">
    <Scrollbar>
    
      <div v-for="(item, index) in 100" :key="index">{{item}}</div>
      <div>123</div>
      <div>qwe</div>
    </Scrollbar>
    <button @click="handle">按钮</button>
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
</template>

<script>
import Scrollbar from '@/components/common/Scrollbar'
export default {
  name: 'Demo',
  data () {
    return {
      arr: [["name", "age", "sex"], ["111", "222", "333"], ["aaa", "bbb", "ccc"]],
      array: [],
      isShow: false
    }
  },
  components: {
    Scrollbar
  },
  created(){
  },
  methods: {
    click () {
      this.isShow = !this.isShow
    },
    handle () {
      this.tojson(this.arr)
      console.log(this.tojson(this.arr))
    },
    tojson(arr){
      if(!arr.length) return null;
      var i = 0;
      let len = arr.length;
      for(;i<len;i++){
        this.array.push({"projectname":arr[i][0], "projectnumber":arr[i][1], "projectnumber":arr[i][2]});
      }
      return JSON.stringify(this.array);
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0 ;
    padding: 0;
  }
  .out{
    width: 400px;
    height: 400px;
    background: skyblue;
    /* border: 1px solid orange; */
    /* overflow: auto; */
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
</style>
