<template>
  <div>
    <quill-editor v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <div style="width：40px">
      ————————————————————————————————————————————————————————————————
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
  
export default {
  data () {
    return{
      content:'这是文本编辑器',
      editorOption:{}
    }
  },
  methods:{
    onEditorBlur(editor){//失去焦点事件 
    },
    onEditorFocus(editor){//获得焦点事件
    },
    onEditorChange({editor,html,text}){//编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
    // console.log(this.content);
    }
  }
}
</script>

<style scoped>

</style>
