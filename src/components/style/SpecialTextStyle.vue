<template>
  <div class="SpecialTextStyle">
    <h4>页面设置</h4>
    <div style="padding: 0 20px">
      <el-form ref="form" :model="form" label-width="80px">
        <p>页面标题</p>
        <el-input v-model="form.name" placeholder="用户浏览时的头部标题"></el-input>
      </el-form>
      <div>
        <p>背景图片</p>
        <div class="left"><i class="el-icon-plus"></i></div>
        <div class="right">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            >
            <el-button id="change" size="small" type="primary"><i class="el-icon-picture"></i> 更换图片</el-button>
            <el-button id="change" size="small" type="primary"><i class="el-icon-picture"></i> 删除图片</el-button>
            <el-button id="change" size="small" type="primary"><i class="el-icon-picture"></i> 裁剪图片</el-button>
          </el-upload>
        </div>
      </div>

      <p>纯色背景</p>

      <p>背景音乐</p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
      >
        <el-button size="small" type="primary" id="music">+ 添加音乐</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialTextStyle',
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  components: {
  },
  props: {
    data: [Array]
  }

}
</script>

<style scoped>
  h4{
    margin: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #f9f9f9;
  }
  .left{
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px #ccc dashed;
    border-radius: 5px;
    background: #eee;
  }
  .left i{
    font-size: 26px;
    color: #777;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .right{
    position: absolute;
    right: 30px;
    top: 145px;
  }
  #change{
    background: #fff;
    color: #777;
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    display: block;
    margin-top: 5px;
    margin-left: 0;
  }
  #change:hover{
    background: #bedbff;
  }
  #music{
    background: #fff;
    color: #777;
    border: 1px solid #ccc;
    width: 200px;
  }
  #music:hover{
    background: #bedbff;
  }

  p{
    padding: 0;
    margin: 10px 0 3px 0;
    color: #222;
  }

</style>
