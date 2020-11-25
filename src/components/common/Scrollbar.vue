 	<template>
    <div class="hd-scroll scrollbox" ref="box" 
      @mousewheel.stop.prevent="handleMouseWheel" 
      @mouseenter="handleMouseEnter" 
      @mouseleave="handleMouseLeave">
      <transition name="fade">
        <div 
          class="scrollbar"
          :class="{ force: force }" 
          ref="bar" 
          v-show="show" 
          :style="{ 'height': barHeight + 'px'}" 
          @mousedown="handleMouseDown">
        </div>
      </transition>
      <slot></slot>
    </div>
  </template>
 
<script>
  export default {
      name: 'Scrollbar',
      data() {
          return {
              box: undefined, // 自定义滚动条盒子
              bar: undefined, // 滚动条
              barHeight: 100, // 滚动条高度
              force: false,   // 滚动条是否被按住
              ratio: 1,       // 滚动条偏移率
              hover: false,   // 鼠标光标是否悬停在盒子上
              show: false     // 是否显示滚动条
          }
      },
      mounted() {
          this.box = this.$refs.box
            this.bar = this.$refs.bar
            // 滚动条全局可拖动
            document.addEventListener('mouseup', this.handleMouseUp)
            document.addEventListener('mousemove', this.handleMouseMove)
        },
        methods: {
            /**
             * 鼠标滚轮事件
             * @param {object} e 事件
             */
            handleMouseWheel(e) {
                this.box.scrollTop -= e.wheelDelta / 2
                this.bar.style.transform = 'translateY(' + (this.box.scrollTop + this.box.scrollTop / this.ratio) + 'px)'
            },
            /**
             * 鼠标按下
             * @param {object} e 事件
             */
            handleMouseDown(e) {
                if (e.target === this.bar) {
                    this.box.prevY = e.pageY
                    this.force = true
                }
            },
            /**
             * 鼠标按键释放
            */
          handleMouseUp() {
              this.force = false
              this.box.prevY = null
              if (!this.hover) {
                  this.show = false
              }
          },
          /**
            * 鼠标移动
            * @param {object} e 事件
            */
          handleMouseMove(e) {
              if (this.force) {
                  // 阻止默认选中事件(IE下无效)
                  e.preventDefault()
                  this.box.scrollTop += (e.pageY - this.box.prevY) * this.ratio
                  this.bar.style.transform = 'translateY(' + (this.box.scrollTop + this.box.scrollTop / this.ratio) + 'px)'
                  this.box.prevY = e.pageY
              }
          },
          /**
            * 鼠标光标进入盒子范围
            */
          handleMouseEnter() {
              this.hover = true
              if (this.box.scrollHeight > this.box.offsetHeight) {
                  // 修正进度条高度和位置(建议通过事件触发)
                  this.barHeight = this.box.offsetHeight ** 2 / this.box.scrollHeight
                  this.ratio = (this.box.scrollHeight - this.box.offsetHeight) / (this.box.offsetHeight - this.barHeight)
                  this.bar.style.transform = 'translateY(' + (this.box.scrollTop + this.box.scrollTop / this.ratio) + 'px)'
                  // 显示滚动条
                  this.$nextTick(() => this.show = true)
              }
          },
          /**
            * 鼠标光标离开盒子范围
            */
          handleMouseLeave() {
              this.hover = false
              if (!this.force) {
                  this.show = false
              }
          }
      }
  }
</script>
 
<style scoped>
  .scrollbox {
    width: 100%;
    height: 100%;
    position: relative;
    padding-right: 8px;
    overflow-y: hidden;
  }
  .scrollbar {
    width: 8px;
    height: 100%;
    background-color: #aaa;
    position: absolute;
    right: 10px;
    border-radius: 4px;
  }
  .force{
    background-color: #888;
  }
  .scrollbar:hover{
    background-color: #888;
  }

  /* Vue进入离开动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
 </style>