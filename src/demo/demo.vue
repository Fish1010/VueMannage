<template>
  <div class="out">
    <Scrollbar>
    
      <div v-for="(item, index) in 100" :key="index">{{item}}</div>
      <div>123</div>
      <div>qwe</div>
    </Scrollbar>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import Scrollbar from '@/components/common/Scrollbar'
export default {
  name: 'Demo',
  data () {
    return {
      arr: [["name", "age", "sex"], ["111", "222", "333"], ["aaa", "bbb", "ccc"]],
      array: []
    }
  },
  components: {
    Scrollbar
  },
  created(){
  },
  methods: {
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

<style>
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
</style>
