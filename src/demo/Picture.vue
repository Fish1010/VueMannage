<template>
  <div class="big">
    <div id="photo">
      <img src="../assets/15.jpg">
      <img src="../assets/1.jpg">
      <img src="../assets/6.jpg">
      <img src="../assets/19.jpg">
      <img src="../assets/9.jpg">
      <img src="../assets/18.jpg">
      <img src="../assets/16.jpg">
      <img src="../assets/17.jpg">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Picture',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    init () {
      var photo = document.getElementById('photo')
      var images = document.getElementsByTagName('img')
        // console.log(images[4])
        //获取图片数量
      var len = images.length
      //计算每张图片按Y轴旋转的角度 
      var deg = Math.floor(360 / len)
      for(var i = 0; i < len;i++){
        images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(380px)'
      }
      var x = 0
      setInterval(function(){
        photo.style.transform = "rotateX(-12deg) rotateY("+ (x++) * 0.2 +"deg)"
      }, 30);
    }
  },
  mounted() {
    this.init()
  }
}

</script>

<style scoped>
.big{
  width: 100%;
  height: calc(100vh);
  position: absolute;
  background-image: url(../assets/15.jpg);
  background-size: cover;
  overflow: hidden;
}

#photo{
  width: 110px;
  height: 180px;
  margin: 150px auto;
  transform: rotateY(0deg);
  transform-style: preserve-3d;/*设置3d环境*/
  perspective: 800px;		/*设置景深为800px*/
  transform: rotateX(-12deg);
}

#photo img{
  width:100%;
	height:100%;
	position:absolute;
	box-shadow:0 0 8px #eaeaea;
	box-shadow: 1px -1px 6px #666;
	border-radius:4px;
	-webkit-box-reflect:below 3px -webkit-linear-gradient(top,rgba(0,0,0,0) 40%,rgba(0,0,0,0.5));
	cursor:pointer;
}

#photo div{
	width:1200px;
	height:1200px;
	border-radius:50%;
	position:absolute;
	top:102%;
	left:50%;
	margin-left:-600px;
	margin-top:-600px;
	transform:rotateX(90deg);
	background:-webkit-radial-gradient(center center,600px 600px,rgba(158,158,222,0.5),rgba(0,0,0,0));
}
</style>
