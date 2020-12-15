<template>
  <div class="marketActivityManagement">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Left></Left>
        </el-aside>
        <el-container>
          <el-main>
            <div class="top">
              <div class="left">
                <div class="left-title">
                  <div class="left-desk">
                    <i class="el-icon-s-help" style="color: #71ecf7"></i> 预警工作台
                    <el-tooltip class="item" effect="light" content="预警工作台" placement="bottom">
                      <i class="el-icon-warning-outline" 
                        style="color: #71ecf7; margin-left: 6px; opacity: 0.6; cursor: pointer">
                      </i> 预警工作台
                    </el-tooltip>
                  </div>
                  <div class="left-select">
                    <el-select v-model="value" placeholder="累计" :popper-append-to-body="false">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="left-ul">
                  <div class="li">
                    <p class="p">预警总数</p>
                    <p class="p size" style="margin-top: 10px">10000</p>
                  </div>
                  <div class="li">
                    <span class="p">待审阅</span>
                    <p class="p size">10</p>
                    <div class="p box">已逾期<span>10</span></div>
                  </div>
                  <div class="li">
                    <span class="p">待解决</span>
                    <p class="p size">100</p>
                    <div class="p box">已逾期<span>300</span></div>
                  </div>
                  <div class="li">
                    <span class="p">待确认</span>
                    <p class="p size">1000</p>
                    <div class="p box">已逾期<span>4000</span></div>
                  </div>
                  <div class="li">
                    <span class="p">处理中</span>
                    <p class="p size">10000</p>
                    <div class="p box">已逾期<span>50000</span></div>
                  </div>
                </div>
              </div>
              <div class="right">
                <p style="text-align: center; line-height: 40px; "><i class="el-icon-s-help" style="color: #71ecf7; margin-right: 5px"></i>安全组件部署状态</p>
                <el-carousel :interval="3000" arrow="always" height="130px">
                  <el-carousel-item v-for="item in list" :key="item">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import Header from '@/components/view/header'
import Left from '@/components/view/left'
import Footer from '@/components/view/footer'
export default {
  name: 'MarketActivityManagement',
  data () {
    return {
      data: [
        {name: 'aaa'},
        {name: 'aaa'},
        {name: 'aaa'},
        {name: 'aaa'},
        {name: 'aaa'}
      ],
      options: [{
        value: '选项1',
        label: '2020'
      }, {
        value: '选项2',
        label: '2019'
      }, {
        value: '选项3',
        label: '2018'
      }],
      value: '',
      list: ['机房一安全', '机房二安全', '机房三危险']
    }
  },
  components: {
    Header, Left, Footer
  },
  methods: {
  }
}
</script>

<style scoped>
.el-header{
  padding: 0;
}
.el-aside{
  width: 230px !important;
}
.el-container{
  background: #011724;
}
.el-main{
  background: url('../../../assets/background.jpg') #373737 no-repeat left top;
  background-size: cover;
  display: block;
  margin: 20px;
  padding: 0px !important;
  overflow: hidden;
  box-sizing: border-box;
}
.el-main .top{
  background: rgba(32, 60, 82, 0.35);
  width: 100%;
  color: #ffffff;
}
.el-main .top .left{
  width: 80%;
  float: left;
}
.el-main .top .left-title{
  box-sizing: border-box;
  padding-left: 25px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  background: linear-gradient(180deg, #2f91d3 18%, rgba(0, 140, 199, 0.37) 100%);
}
.el-main .top .left-title .left-desk{
  float: left;
}
.el-main .top .left-title .left-select{
  float: right;
  width: 80px;
  margin-right: 20px;
}
.el-main .top .left-title .left-select >>> .el-select-dropdown{
  color: #d0e9f7;
  border: solid 1px #387b8a;
  background: rgba(28, 57, 76, 0.97);
  border-radius: 4px;
  top: 25px !important;
}

.el-main .top .left-title .left-select >>> .el-select-dropdown .el-select-dropdown__item{
  color: #b2dbee;
}
.el-main .top .left-title .left-select >>> .el-select-dropdown .hover{
  color: #71ecf7;
  background: rgba(51, 101, 134, 0.97);
}
.el-main .top .left-title .left-select >>> .el-select-dropdown .popper__arrow{
  display: none;
}
.el-main .top .left-title >>> .el-input__inner{
  height: 30px;
  line-height: 30px;
  color: #b2dcee;
  border: solid 1px #387b8a;
  background: rgba(28, 57, 76, 0.97);
  border-radius: 4px;
}
.el-main .top .left .left-ul{
  background: rgba(0, 140, 199, 0.37);
  width: 100%;
  height: 130px;
  padding: 10px;
  color: #ffffff;
  box-sizing: border-box;
  display: flex;
  border-top: solid 1px rgba(1, 34, 48, 0.37);
}
.el-main .top .left .left-ul .li{
  width: 20%;
  height: 110px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 15px;
  border-left: 1px solid rgba(177, 218, 238, 0.5);
}
.el-main .top .left .left-ul .li:first-child{
  border: none;
  padding-top: 18px;
}
.el-main .top .left .left-ul .li .p{
  line-height: 25px;
}
.el-main .top .left .left-ul .li .size{
  font-size: 18px;
  font-weight: 700;
}
.el-main .top .left .left-ul .li .box{
  padding: 0 1px;
  margin: 10px auto;
  width: 100px;
  background: #fd5b5b;
}
.top .right{
  width: 230px;
  height: 170px;
  float: right;
  background: rgba(0, 140, 199, 0.37);
}
.top .right .el-carousel__item{
  background: rgba(0, 140, 199, 0.37);
  text-align: center;
  width: 230px;
  height: 130px;
}
.top .right >>> .el-carousel__arrow--left{
  left: 0;
}
.top .right >>> .el-carousel__arrow--right{
  right: 0;
}


.el-footer{
  text-align: center;
  height: 150px !important;
  color: #ffffff;
}

</style>
