<template>
  <div class="SpecialBigtitleStyle">
    <el-tabs type="border-card" stretch id="none">
      <el-tab-pane label="样式">
        <p>文本内容</p>
        <quill-editor v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
        <p>内容样板</p>
        <!-- <input type="textarea"> -->
        <!-- <span class="module">{{content}}</span> -->
        <span class="module">{{data[0]}}</span>
      </el-tab-pane>
      <el-tab-pane label="事件">事件</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { fontFamilyList, fontSizeList } from '@/utils/constants.js'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'SpecialBigtitleStyle',
  data () {
    return {
      content:'',
      // infoList: data[0],
      fontFamilyList: fontFamilyList,
      fontSizeList: fontSizeList,
      editorOption: {
        theme: 'snow',    //引入编辑主题
        modules: {        //引入自定义工具栏
          toolbar: [
            [{'font': []}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'color': []}, {'background': []}],
            ['bold', 'italic', 'underline', 'strike'],
            [{'align': []}]
          ]
        }
      },
    }
  },
  methods: {
    onEditorBlur(editor){//失去焦点事件 
    },
    onEditorFocus(editor){//获得焦点事件
      this.content = this.data[0]
    },
    onEditorChange({editor,html,text}){//编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      this.content = this.data[0]
    },
    getContent() {
      this.content = this.data[0]
    }
  },
  components: {
    // getContent() {
    //   this.content = 'now'
    //   console.log(this.content);
    // }
  },
  created() {
    this.getContent()
  },
  updated() {
    this.getContent()
  },
  mounted() {
    // getContent()
    // console.log(this.content);
  },
  props: {
    data: [Array]
  }

  }
  </script>

<style scoped>
  #none{
    border: none;
    height: 100%;
    box-shadow: none;
  }
  .el-tab-pane{
    padding: 10px 15px;
  }

  .module{
    border: 1px solid #ccc;
    padding: 5px 10px;
    height: 150px;
    display: block;
  }
  p{
    margin: 20px 0 6px 0;
    padding: 0;
  }
  /* .quill-editor {
    height: 150px;
  } */
  /* .ql-blank{
    background: #3399ff;
  } */
  /* .quill-container {
    height: 200px;
  }
  .ql-container .quill-editor {
    height: 200px;
  } */
  /* .text{
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
  }
  .text::after{
    content: "";
    clear: both;
    display: block;
  }
  .content{
    padding: 1px 17px 20px 17px;
    height: 100px;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  li{
    float: left;
    margin: 0 10px 10px 0;
  }
  li:hover{
    color: #3399ff;
    cursor: pointer;
  }
  .ql-font{
    border: none;
  }
  .ql-font:hover{
    color: #3399ff;
    cursor: pointer;
  } */
</style>
