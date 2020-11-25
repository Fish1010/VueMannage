<template>
  <div class="body">
    <div class="big">
      <div id="left" @click="turn">
        <div class="prev"></div>
        <div class="next"></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TurnPicture',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    turn() {
      let left = document.getElementById('left')
      var x = 0
      var timer = setInterval(function(){
        left.style.transform = "rotateY("+ (x--) * 2 +"deg)"
        if( x == (-90) ){
          console.log(1)
          clearInterval(timer)
        }
      }, 30);
      
    }
  }
}

</script>

<style scoped>
.body{
  overflow: hidden;
}
.big{
  position: relative;
  width: 960px;
  height: 600px;
  margin: 50px auto;
  background-image: url(../assets/1.jpg);
  perspective: 1000px;  /* 设置景深*/
}
#left{
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  z-index: 2;
  transform: rotateY(0deg);
  transform-origin: left;  /* 改变旋转中心*/
  transform-style: preserve-3d;
}
.prev{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/1.jpg) top right;
}
.next{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/9.jpg) top left;
  transform: translateZ(-1px) scale(-1, 1); /*z轴往屏幕里移动1px 水平垂直变化比例*/
}
.right{
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  background: url(../assets/9.jpg) top right;
}
</style>
