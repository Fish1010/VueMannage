<template>
  <div style="width: 100%; overflow-x: hidden">
    <div style="width: 100%">
      <div class="header" style="width: 100%; height: 30px; background: #ddd; color: #999">
        <div class="head" style="width: 1200px; height: 100%; margin: 0 auto; font-size: 12px">
          <div class="he-le">
            <p style="line-height: 30px">
              <span><i class="el-icon-location" style="color: #f00; font-size: 16px"></i></span> 
              江苏
            </p>
          </div>
          <div class="he-ri">
            <ul>
              <li>手机京东</li>
              <li>|</li>
              <li>网址导航</li>
              <li>|</li>
              <li>客户服务</li>
              <li>|</li>
              <li  class="chose">企业采购</li>
              <li>|</li>
              <li>京东会员</li>
              <li>|</li>
              <li>我的京东</li>
              <li>|</li>
              <li>我的订单</li>
              <li>|</li>
              <li><a href=""  class="chose">免费注册</a></li>
              <li><a href="">你好,请登录</a></li>
            </ul>
          </div>
        </div>
      </div>
      <header class="nav">
        <div style="width: 1200px; margin: 0 auto;">
          <div class="logo"></div>
          <div style="width: 800px; height: 140px; margin: 0 auto; float: left">
            <input type="text" class="input" placeholder="花花拉链裤">
            <div class="seach pointer"><i class="el-icon-search"></i></div>
            <button class="nv-but pointer"><span><i class="el-icon-shopping-cart-2"></i></span> 我的购物车</button>
            <div class="span">
              <span class="chose">男士护肤品&nbsp;&nbsp;</span>
              <span>锦绣黄桃&nbsp;&nbsp;</span>
              <span>品质家纺&nbsp;&nbsp;</span>
              <span>小米10&nbsp;&nbsp;</span>
              <span>车主福利&nbsp;&nbsp;</span>
              <span>手机&nbsp;&nbsp;</span>
              <span>每100-50&nbsp;&nbsp;</span>
              <span>补水面膜&nbsp;&nbsp;</span>
              <span>京东整机</span>
            </div>
            <div class="nav-li">
              <ul>
                <li class="chose">秒杀</li>
                <li class="chose">优惠券</li>
                <li>PLUS会员</li>
                <li>品牌闪购</li>
                <li>拍卖</li>
                <li>京东家电</li>
                <li>京东超市</li>
                <li>京东生鲜</li>
                <li>京东国际</li>
                <li>京东金融</li>
              </ul>
            </div>
          </div>
          <div class="down pointer"></div>
        </div>
      </header>
      <main class="main">
        <div class="ma-le">
          <ul>
            <li><span>家用电器</span></li>
            <li><span>手机</span>/<span>运营商</span>/<span>数码</span></li>
            <li><span>电脑</span>/<span>办公</span></li>
            <li><span>家居</span>/<span>家具</span>/<span>家装</span>/<span>厨具</span></li>
            <li><span>家用电器</span></li>
            <li><span>手机</span>/<span>运营商</span>/<span>数码</span></li>
            <li><span>电脑</span>/<span>办公</span></li>
            <li><span>家居</span>/<span>家具</span>/<span>家装</span>/<span>厨具</span></li>
            <li><span>家用电器</span></li>
            <li><span>手机</span>/<span>运营商</span>/<span>数码</span></li>
            <li><span>电脑</span>/<span>办公</span></li>
            <li><span>家居</span>/<span>家具</span>/<span>家装</span>/<span>厨具</span></li>
            <li><span>家用电器</span></li>
            <li><span>手机</span>/<span>运营商</span>/<span>数码</span></li>
            <li><span>电脑</span>/<span>办公</span></li>
            <li><span>家居</span>/<span>家具</span>/<span>家装</span>/<span>厨具</span></li>
            <li><span>电脑</span>/<span>办公</span></li>
            <li><span>家居</span>/<span>家具</span>/<span>家装</span>/<span>厨具</span></li>
          </ul>
        </div>
        <div class="ma-cen">
          <div class="block">
            <el-carousel trigger="click" height="470px">
              <el-carousel-item v-for="(item, index) in 7" :key="index">
                <h3 class="small"></h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="ma-cen-ri">
          <div class="block">
            <el-carousel trigger="click" height="470px" indicator-position="none">
              <el-carousel-item v-for="(item, index) in 3" :key="index">
                <div v-if="item == 1">
                  <div><img src="../assets/jd/8.jpg" width="190px"></div>
                  <div><img src="../assets/jd/9.jpg" width="190px" style="margin: 10px 0"></div>
                  <div><img src="../assets/jd/10.jpg" width="190px"></div>
                </div>
                <div v-if="item == 2">
                  <div><img src="../assets/jd/11.jpg" width="190px"></div>
                  <div><img src="../assets/jd/12.jpg" width="190px" style="margin: 10px 0"></div>
                  <div><img src="../assets/jd/13.jpg" width="190px"></div>
                </div>
                <div v-if="item == 3">
                  <div><img src="../assets/jd/14.jpg" width="190px"></div>
                  <div><img src="../assets/jd/15.jpg" width="190px" style="margin: 10px 0"></div>
                  <div><img src="../assets/jd/16.jpg" width="190px"></div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="ma-ri">
          <div class="ri-top">
            <div style="height: 62px">
              <div class="ri-logo pointer"><img src="../assets/jd/logo.png" width="40px"></div>
              <div class="ri-hi">
                <p class="hi pointer">Hi~欢迎逛京东!</p>
                <p><span class="pointer">登陆</span> | <span class="pointer">注册</span></p>
              </div>
            </div>
            <div class="ri-but">
              <el-button type="primary" round>新人福利</el-button>
              <el-button type="primary" round>PLUS会员</el-button>
            </div>
          </div>
        </div>
      </main>
      <footer class="foo">
        <div class="seckill">
          <div class="elevator" id="ele">
            <ul>
              <li>京东秒杀</li>
              <li>特色优选</li>
              <li>频道广场</li>
              <li>为你推荐</li>
              <li>
                <p><i class="el-icon-phone-outline"></i></p>
                <p>客服</p>
              </li>
              <li>
                <p><i class="el-icon-edit"></i></p>
                <p>反馈</p>
              </li>
              <li v-if="visible" @click="backTop" id="color">
                <p><i class="el-icon-arrow-up"></i></p>
                <p>顶部</p>
              </li>
            </ul>
          </div>
          <div class="sec-one">
            <h2 class="h">京东秒杀</h2>
            <p class="time"><span>12小时</span> 秒杀 倒计时</p>
            <div class="back-time">
              <li class="li">{{hour}}</li>
              <li>:</li>
              <li class="li">{{minutes}}</li>
              <li>:</li>
              <li class="li">{{seconds}}</li>
            </div>
          </div>
          <div class="sec-two">
            <el-carousel 
              trigger="click" 
              height="260px" 
              indicator-position = "none"
              :autoplay="false"
            >
              <el-carousel-item v-for="item in 5" :key="item">
                <div v-if="item == 1" class="container">
                  <div class="list list-1">
                    <img src="../assets/jd/19.jpg">
                    <p class="title">连尼亚手表</p>
                    <p class="price"><span>¥1148.00</span> <del>¥1399.00</del></p>
                  </div>
                  <div class="list list-2">
                    <img src="../assets/jd/20.jpg">
                    <p class="title">禧天龙收纳柜</p>
                    <p class="price"><span>¥399.00</span> <del>¥489.00</del></p>
                  </div>
                  <div class="list list-3">
                    <img src="../assets/jd/21.jpg">
                    <p class="title">森海塞尔</p>
                    <p class="price"><span>¥899.00</span> <del>¥1499.00</del></p>
                  </div>
                  <div class="list list-4">
                    <img src="../assets/jd/22.jpg">
                    <p class="title">暇步士手包</p>
                    <p class="price"><span>¥499.00</span> <del>¥1288.00</del></p>
                  </div>
                </div>
                <div v-if="item == 2" class="container">
                  <div class="list list-1">
                    <img src="../assets/jd/19.jpg">
                    <p class="title">连尼亚手表</p>
                    <p class="price"><span>¥1148.00</span> <del>¥1399.00</del></p>
                  </div>
                  <div class="list list-2">
                    <img src="../assets/jd/20.jpg">
                    <p class="title">禧天龙收纳柜</p>
                    <p class="price"><span>¥399.00</span> <del>¥489.00</del></p>
                  </div>
                  <div class="list list-3">
                    <img src="../assets/jd/21.jpg">
                    <p class="title">森海塞尔</p>
                    <p class="price"><span>¥899.00</span> <del>¥1499.00</del></p>
                  </div>
                  <div class="list list-4">
                    <img src="../assets/jd/22.jpg">
                    <p class="title">暇步士手包</p>
                    <p class="price"><span>¥499.00</span> <del>¥1288.00</del></p>
                  </div>
                </div>
                <div v-if="item == 3" class="container">
                  <div class="list list-1">
                    <img src="../assets/jd/19.jpg">
                    <p class="title">连尼亚手表</p>
                    <p class="price"><span>¥1148.00</span> <del>¥1399.00</del></p>
                  </div>
                  <div class="list list-2">
                    <img src="../assets/jd/20.jpg">
                    <p class="title">禧天龙收纳柜</p>
                    <p class="price"><span>¥399.00</span> <del>¥489.00</del></p>
                  </div>
                  <div class="list list-3">
                    <img src="../assets/jd/21.jpg">
                    <p class="title">森海塞尔</p>
                    <p class="price"><span>¥899.00</span> <del>¥1499.00</del></p>
                  </div>
                  <div class="list list-4">
                    <img src="../assets/jd/22.jpg">
                    <p class="title">暇步士手包</p>
                    <p class="price"><span>¥499.00</span> <del>¥1288.00</del></p>
                  </div>
                </div>
                <div v-if="item == 4" class="container">
                  <div class="list list-1">
                    <img src="../assets/jd/19.jpg">
                    <p class="title">连尼亚手表</p>
                    <p class="price"><span>¥1148.00</span> <del>¥1399.00</del></p>
                  </div>
                  <div class="list list-2">
                    <img src="../assets/jd/20.jpg">
                    <p class="title">禧天龙收纳柜</p>
                    <p class="price"><span>¥399.00</span> <del>¥489.00</del></p>
                  </div>
                  <div class="list list-3">
                    <img src="../assets/jd/21.jpg">
                    <p class="title">森海塞尔</p>
                    <p class="price"><span>¥899.00</span> <del>¥1499.00</del></p>
                  </div>
                  <div class="list list-4">
                    <img src="../assets/jd/22.jpg">
                    <p class="title">暇步士手包</p>
                    <p class="price"><span>¥499.00</span> <del>¥1288.00</del></p>
                  </div>
                </div>
                <div v-if="item == 5" class="container">
                  <div class="list list-1">
                    <img src="../assets/jd/19.jpg">
                    <p class="title">连尼亚手表</p>
                    <p class="price"><span>¥1148.00</span> <del>¥1399.00</del></p>
                  </div>
                  <div class="list list-2">
                    <img src="../assets/jd/20.jpg">
                    <p class="title">禧天龙收纳柜</p>
                    <p class="price"><span>¥399.00</span> <del>¥489.00</del></p>
                  </div>
                  <div class="list list-3">
                    <img src="../assets/jd/21.jpg">
                    <p class="title">森海塞尔</p>
                    <p class="price"><span>¥899.00</span> <del>¥1499.00</del></p>
                  </div>
                  <div class="list list-4">
                    <img src="../assets/jd/22.jpg">
                    <p class="title">暇步士手包</p>
                    <p class="price"><span>¥499.00</span> <del>¥1288.00</del></p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="sec-three">
            <div class="block">
              <el-carousel trigger="click" height="260px">
                <el-carousel-item v-for="item in 2" :key="item">
                  <div v-if="item == 1">
                    <img src="../assets/jd/18.jpg" width="130px">
                    <p class="p1">平板电脑秒杀专场</p>
                    <p class="p2">爆款平板699起</p>
                    <p class="p3"><span>品类秒杀 ></span></p>
                  </div>
                  <div v-if="item == 2">
                    <img src="../assets/jd/17.jpg" width="130px">
                    <p class="p1">三星手机秒杀专场</p>
                    <p class="p2">全场最高立省1000元</p>
                    <p class="p3"><span>大牌闪购 ></span></p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="bargin-price">
          <div class="b-pri"></div>
          <div class="brand"></div>
        </div>
        <div class="find">
          <div class="f-video">
            <div class="v-search">
              <p class="pointer">探索新生活<i class="el-icon-right"></i></p>
            </div>
          </div>
          <div class="f-transporter" @mouseenter="stop" @mouseleave="start">
            <div class="con pointer">
              <div class="item item1">
                <img src="../assets/jd/27.jpg">
                <p>OB 小雏菊英伦风 腕表</p>
              </div>
              <div class="item item2">
                <p>西铁城小牛皮腕表</p>
                <img src="../assets/jd/28.jpg">
              </div>
              <div class="item item3">
                <img src="../assets/jd/29.jpg">
                <p>爱宝时 男士机械手表</p>
              </div>
              <div class="item item4">
                <p>TIMBUK2 休闲 斜挎包</p>
                <img src="../assets/jd/30.jpg">
              </div>
              <div class="item item5">
                <img src="../assets/jd/31.jpg">
                <p>蜜蜂 圆盘 女士腕表</p>
              </div>
              <div class="item item6">
                <img src="../assets/jd/32.jpg">
                <p>卓尼沙 钨金水钻 指环</p>
              </div>
              <div class="item item5">
                <img src="../assets/jd/33.jpg">
                <p>禾目玉阁 冰种翡翠 手镯</p>
              </div>
              <div class="item item6">
                <img src="../assets/jd/34.jpg">
                <p>满天星 女表</p>
              </div>
              <div class="item item1">
                <img src="../assets/jd/27.jpg">
                <p>OB 小雏菊英伦风 腕表</p>
              </div>
              <div class="item item2">
                <p>西铁城小牛皮腕表</p>
                <img src="../assets/jd/28.jpg">
              </div>
              <div class="item item3">
                <img src="../assets/jd/29.jpg">
                <p>爱宝时 男士机械手表</p>
              </div>
              <div class="item item4">
                <p>TIMBUK2 休闲 斜挎包</p>
                <img src="../assets/jd/30.jpg">
              </div>
              <div class="item item5">
                <img src="../assets/jd/31.jpg">
                <p>蜜蜂 圆盘 女士腕表</p>
              </div>
            
            </div>
            <div class="tp">
              <div class="tip pointer">
                <div id="move" @mousedown="dragStop"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="new">
          <div class="n-list">
            <h2 class="pointer">新品发布 <span><i class="el-icon-arrow-right"></i></span></h2>
            <div class="card" style="border: 1px solid red;">
              <el-carousel :interval="2000" indicator-position="none" type="card" height="250px" :autoplay="false">
                <el-carousel-item v-for="item in 4" :key="item">
                  <div v-if="item == 1">111</div>
                  <div v-if="item == 2">222</div>
                  <div v-if="item == 3">333</div>
                  <div v-if="item == 4">444</div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="n-list">
            <h2 class="pointer">排行榜 <span><i class="el-icon-arrow-right"></i></span></h2>
            <div></div>
          </div>
          <div class="n-list">
            <h2 class="pointer">逛好店 <span><i class="el-icon-arrow-right"></i></span></h2>
            <div></div>
          </div>
          <div class="n-list">
            <h2 class="pointer">领券中心 <span><i class="el-icon-arrow-right"></i></span></h2>
            <div></div>
          </div>
        </div>

      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'JingDong',
  data () {
    return {
      input: '',
      visible: true,
      hour: 12,
      minutes: 0,
      seconds: 0,
      cease: 1, //是否暂停进度条位移
    }
  },
  components: {
  },
  computed: {
    ...mapState([ 'num' ])
  },
  methods: {
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
      console.log(that.scrollTop)
    },
    scrollToTop() {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      let ele = document.getElementById('ele')
      let color = ele.getElementsByTagName('li')
      if(that.scrollTop > 3000){
        for(let j = 0; j < 4; j++){
          color[j].style.color = '#000'
        }
        color[3].style.color = 'red'
      }else if(that.scrollTop > 2000){
        for(let j = 0; j < 4; j++){
          color[j].style.color = '#000'
        }
        color[2].style.color = 'red'
      }else if(that.scrollTop > 1300){
        for(let j = 0; j < 4; j++){
          color[j].style.color = '#000'
        }
        color[1].style.color = 'red'
      }else if(that.scrollTop > 600){
        that.visible = true
        for(let j = 0; j < 4; j++){
          color[j].style.color = '#000'
        }
        color[0].style.color = 'red'
        ele.style.position = 'fixed'
        ele.style.top = '75px'
        ele.style.right = '79px'
      } else {
        that.visible = false
        color[0].style.color = '#000'
        ele.style.position = 'absolute'
        ele.style.top = '0'
        ele.style.right = '-80px'
      }
    },
    secKill() {
      var _this = this
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59
          _this.minutes -= 1
        }else if (_this.minutes === 0 && _this.seconds === 0 && _this.hour !== 0) {
          _this.seconds = 59
          _this.minutes = 59
          _this.hour -= 1
        }else if(_this.minutes === 0 && _this.seconds === 0 && _this.hour !== 0){
          _this.seconds = _this.minutes = _this.hour = 0
          window.clearInterval(time)
        }else{
          _this.seconds -= 1
        }
      }, 1000)
    },
    roll(cease) {
      var move = document.getElementById('move')
      var con = document.getElementsByClassName('con')
      if(this.cease == 1) {
        let a = this.num
        let b = this.num
        var ttimer = setInterval(function () {
          a++
          b += 2 
          if(b == 1600){
            a = 0
            b = 0
          }
          // move.style.transform = "translateX(" + a + "px)"
          // con[0].style.transform = "translateX(-" + b + "px)"
          this.num = a
        }, 40)
      }else{
        // console.log(this.num)
        clearInterval(ttimer)
      }
      // console.log(this.num)
    },
    stop(cease) {
    },
    start(cease) {
    },
    dragStop() {
    }
  },
  update () {
    // this.roll(cease)
  },
  mounted () {
    this.roll(1)
    this.secKill()
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () { //页面销毁时,取消监听
    window.removeEventListener('scroll', this.scrollToTop)
  },
  watch: {
  }
  
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .pointer{
    cursor: pointer;
  }
  .chose{
    color: #f00;
  }
  a{
    text-decoration: none;
    color: #999;
  }
  .he-le{
    float: left;
  }
  .he-ri{
    width: 900px;
    float: right;
  }
  .he-ri ul{
  }
  .he-ri ul li{
    float: right;
    margin-right: 10px;
    line-height: 30px;
    text-align: center;
  }
  .he-ri ul li:hover, a:hover{
    cursor: pointer;
    color: #ff0000;
  }
  .nav{
    width: 100%;
    height: 140px;
    background: #fff;
  }
  .logo{
    width: 230px;
    height: 140px;
    float: left;
    background-image: url(../assets/JD/sprite.png);
    background-size: cover; 
  }
  .input{
    width: 490px;
    height: 36px;
    outline: 2px solid #f00;
    border: none;
    margin: 25px 0 5px;
    float: left;
    padding: 0 20px;
  }
  .seach{
    width: 50px;
    height: 40px;
    background: #f00;
    float: left;
    margin: 23px 0 5px;
    display: flex;
  }
  .seach:hover{
    background: rgb(223, 2, 2);
  }
  .seach .el-icon-search{
    color: #fff;
    font-size: 22px;
    margin: auto;
  }
  .nv-but{
    height: 38px;
    width: 130px;
    background: #fff;
    border: 1px solid #ddd;
    margin: 24px 20px 5px;
    color: #f00;
    font-size: 12px;
  }
  .nv-but:hover{
    border: 1px solid #f00;
  }
  .nv-but i{
    font-size: 16px;
  }
  .span{
    font-size: 12px;
    margin: 5px 0;
    color: #999;
  }
  .span span:hover{
    color: #f00;
    cursor: pointer;
  }
  .nav-li li{
    margin-top: 20px;
    float: left;
    margin-right: 18px;
  }
  .nav-li li:hover{
    color: #f00;
    cursor: pointer;
  }
  .down{
    width: 66px;
    height: 66px;
    margin: 10px;
    float: right;
    background-image: url(../assets/JD/下载.png);
  }
  .down:hover{
    box-shadow: 0 0 5px 1px #ddd;
  }

  .main{
    width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
  .main .ma-le, .ma-cen, .ma-cen-ri, .ma-ri{
    height: 470px;
  }
  .main .ma-le{
    width: 190px;
    margin-right: 10px;
    background: #fff;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .main .ma-le li{
    padding-left: 20px;
    margin-top: 4px;
  }
  .main .ma-le li:hover{
    background: #ddd;
  }
  .main .ma-le span:hover{
    color: #f00;
    cursor: pointer;
  }
  .main .ma-cen{
    width: 590px;
    background: #fff;
    margin-right: 10px;
  }
  .main .ma-cen-ri{
    width: 190px;
    background: #fff;
    margin-right: 10px;
  }
  .main .ma-ri{
    width: 190px;
    background: #fff;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .ma-cen .el-carousel__item:nth-of-type(n) {
     background-size: cover;
  }
  .ma-cen .el-carousel__item:nth-of-type(1) {
     background-image: url(../assets/jd/1.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(2) {
    background-image: url(../assets/jd/2.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(3) {
     background-image: url(../assets/jd/3.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(4) {
    background-image: url(../assets/jd/4.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(5) {
     background-image: url(../assets/jd/5.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(6) {
    background-image: url(../assets/jd/6.jpg);
  }
  .ma-cen .el-carousel__item:nth-of-type(7) {
     background-image: url(../assets/jd/7.jpg);
  }

  .ma-ri{
    box-sizing: border-box;
    padding: 20px;
  }
  .ri-top{
    border-bottom: 1px solid #eee;
    height: 100px;
  }
  .ri-logo{
    width: 40px;
    height: 40px;
    float: left;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 100px;
    box-shadow: 0 0 15px 1px #eee;
  }
  .ri-hi{
    float: left;
    margin-left: 15px;
  }
  .ri-hi .hi:hover{
    color: #f00;
  }
  .ri-hi p{
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }
  .ri-hi p span{
    margin-top: 10px;
    font-size: 13px;
    color: #333;
  }
  .ri-hi p span:hover{
    color: #f00;
  }
  .el-button{
    width: 68px;
    height: 25px;
    margin-top: 0;
    padding: 0;
    font-size: 12px;
    border: none;
  }
  .el-button:nth-of-type(1){
    background: #e1251b;
    float: left;
  }
  .el-button:nth-of-type(n):hover{
    background: #c92118;
  }
  .el-button:nth-of-type(2){
    float: right;
    background: #363634;
    color: #e5d790;
  }
  .el-button:nth-of-type(2):hover{
    color: #fff;
  }

  .foo{
    margin-top: 20px;
    width: 1200px;
    margin: 20px auto;
    min-height: 2500px;
    background: #eee;
  }
  .seckill{
    width: 100%;
    height: 260px;
    background: #fff;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .elevator{
    position: absolute;
    right: -80px;
    top: 0;
    width: 60px;
    background: #fff;
  }
  .elevator li{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .elevator li:hover{
    background: rgb(250, 200, 200);
    cursor: pointer;
  }
  #color{
    color: #f00;
  }
  .sec-one{
    width: 190px;
    background-image: url(../assets/jd/1.png);
  }
  .sec-one .h{
    text-align: center;
    color: #fff;
    margin-top: 30px;
    font-size: 34px;
  }
  .sec-one .time{
    color: #fff;
    text-align: center;
    margin-top: 95px;
  }
  .sec-one .time span{
    font-weight: bold;
    font-size: 17px;
  }
  .back-time{
    margin-top: 15px;
    justify-content: center;
    font-size: 22px;
    display: flex;
    color: #fff;
  }
  .back-time li{
    text-align: center;
    margin: 0 2px;
  }
  .back-time .li{
    width: 32px;
    height: 32px;
    background: #222;
  }
  .sec-two{
    width: 820px;
  }
  .sec-two .container{
    display: flex;
  }
  .sec-two .list{
    margin-top: 20px;
    width: 200px;
    height: 200px;
    border-right: 1px solid #eee;
    flex: 1;
  }
  .sec-two img{
    width: 140px;
    height: 140px;
    margin-left: 30px;
  }
  .list .title{
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 15px;
  }
  .list .price{
    width: 160px;
    height: 30px;
    margin: 5px auto;
    padding: 0;
  }
  .price span,del{
    width: 47%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    float: left;
    border: 1px solid #f00;
    display: block;
  }
  .price span{
    background: #f00;
    color: #fff;
    font-weight: bold;
  }
  .price del{
    color: #999;
    font-size: 12px;
  }
  .sec-three{
    width: 190px;
  }
  .sec-three .block img{
    margin-top: 20px;
    margin-left: 30px;
  }
  .sec-three .p1, .p2, .p3{
    text-align: center;
    margin-bottom: 3px;
  }
  .sec-three .p1{
    margin-top: 7px;
    color: #999;
  }
  .sec-three .p2{
    font-weight: bold;
    font-size: 17px;
  }
  .sec-three .p3 span{
    color: #f00;
    padding: 1px 5px;
    font-size: 14px;
    border: 1px solid #f00;
    border-radius: 100px;
  }
  .bargin-price{
    width: 100%;
    height: 340px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .b-pri, .brand{
    width: 595px;
    height: 100%;
    background: #fff;
  }
  .find{
    width: 100%;
    height: 260px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .find .f-video, .f-transporter{
    height: 260px;
    background: #fff;
  }
  .find .f-video{
    width: 190px;
    background-image: url(../assets/jd/2.png);
  }
  .v-search{
    width: 160px;
    height: 90px;
    margin: 15px auto;
    background-image: url(../assets/jd/3.png);
  }
  .v-search p{
    color: #fff;
    text-align: center;
    line-height: 140px;
  }

  .find .f-transporter{
    width: 1000px;
    overflow: hidden;
    position: relative;
  }
  .con{
    height: 260px;
    width: 2600px;
    /* display: flex; */
    /* justify-content: left; */
    position: relative;
  }
  .con .item{
    width: 200px;
    margin-top: 25px;
    float: left;
  }
  .con .item img{
    width: 150px;
    margin-top: 10px;
    margin-left: 25px;
  }
  .con .item p{
    text-align: center;
    margin-top: 15px;
  }
  .con .item p:hover{
    cursor: pointer;
    color: #f00;
  }
  .f-transporter .tp{
    position: absolute;
    width: 900px;
    height: 10px;
    overflow-x: hidden;
    /* background: #eee; */
    bottom: 15px;
    border-radius: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  .f-transporter .tip{
    position: absolute;
    width: 3600px;
    top: 3px;
    height: 4px;
    background: #eee;
    /* bottom: 15px; */
    border-radius: 100px;
    left: 0;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    /* display: none; */
  }
  .f-transporter:hover .tp{
    display: block;
  }
  .tip #move{
    position: absolute;
    width: 100px;
    height: 8px;
    background: #ddd;
    border-radius: 100px;
    top: -2px;
  }
  .new{
    margin-top: 20px;
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-between;
  }
  .new .n-list{
    width: 290px;
    height: 340px;
    background: #fff;
  }
  .new h2{
    line-height: 60px;
    height: 60px;
    margin-left: 20px;
  }
  .new h2:hover span{
    background: #f00;
  }
  .new h2:hover i{
    color: #fff;
  }
  .new .n-list i{
    font-size: 13px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f00;
  }
  .new .n-list span{
    width: 17px;
    height: 17px;
    display: inline-block;
    border: 1px solid #f00;
    border-radius: 100%;
    position: relative;
    top: 5px;
  }
  


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  

</style>
