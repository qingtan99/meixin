<template>
  <div class="contact-wrap">
      <div class="top-section service-box">
          <div class="w1200">
              <h1 class="pagetitle_move">专业服务，随时在您身边</h1>
          </div>
      </div>
      <div class="contact-introbox w1200">
          <div class="service_section1">
              <h2 class="active">提供的服务</h2>
              <div class="service-info">
                <ul class="fix">
                  <li class="fl" v-for="(item, i) in list">
                      <a href="javascript:void(0)" @click="goAnchor('#md-'+i)">
                        <img v-bind:src="item.icon" v-bind:alt="item.serviceName">
                        <h3>{{item.serviceName}}</h3>
                      </a>
                  </li>
                </ul>
              </div>
              <span></span>
          </div>
          <div class="align-items-wrap" v-for="(item, i) in list">
              <template v-if="i%2 === 0">
                  <div :id="'md-'+i" class="align-items-center fix">
                      <div class="text-center fl">
                          <p class="opacity-20">0{{i+1}}</p>
                          <h3>{{item.serviceName}}</h3>
                          <p>{{item.text}}</p>
                      </div>
                      <div class="text-md offset-ml fr">
                        <p>
                            <img v-bind:src="item.img" alt="item.serviceName">
                        </p>
                      </div>
                  </div>
              </template>
              <template v-else>
                <div :id="'md-'+i" class="align-items-center fix">
                  <div class="text-md offset-ml fl">
                    <p>
                      <img v-bind:src="item.img" alt="item.serviceName">
                    </p>
                  </div>
                  <div class="text-center offset-tr fr">
                    <p class="opacity-20">0{{i+1}}</p>
                    <h3>{{item.serviceName}}</h3>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </template>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
          list: null
      }
    },
    methods : {
      //获取数据
      getList () {
        // 模拟数据
        let url = '../../../static/service/service.json';
        this.$http.get(url).then(({data}) => {
          this.list = data.result;
        })
      },

//      锚点定位
      goAnchor(selector) {
          let md = this.$el.querySelector(selector)
          document.body.scrollTop = md.offsetTop;
          document.documentElement.scrollTop = md.offsetTop
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.getList()
      })
    }
  }
</script>
<style scoped>
    .service-box {
        position: relative;
        height: 150px;
        background: url("http://www.reenoo.com/img/about/as2_dbg.jpg") no-repeat center center;
        background-size: cover;
    }

    .service-box .w1200 {
        position: relative;
    }

    .service-box h1 {
      position: absolute;
      left: -50px;
      left: 0 \9;
      top: 85px;
      color: #e9e9f2;
      font-size: 36px;
      z-index: 2;
      opacity: 0;
      -webkit-transition: all 1s;
      transition: all 1s;
    }

    .pagetitle_move{
      -webkit-animation: pagetitle_move 1s forwards;
       animation: pagetitle_move 1s forwards;
    }

    @-webkit-keyframes pagetitle_move{
        0%{ left: -50px; opacity: 0;}
        100%{ left: 0; opacity: 1;}
    }

    @keyframes pagetitle_move{
        0%{ left: -50px; opacity: 0;}
        100%{ left: 0; opacity: 1;}
    }

    .contact-introbox .service_section1 {
        position: relative;
        z-index: 3;
        padding-top: 70px;
        padding-bottom: 30px;
    }

    .service_section1 h2 {
        color: #485149;
        text-align: center;
        font-size: 30px;
        margin-bottom: 68px;
    }

    .service_section1 span {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: block;
        height: 1px;
        width: 300px;
        border-bottom: 1px solid rgba(221, 221, 221, 0.63);
    }

    .service-info ul li {
        margin: 0 10px 10px 0;
        width: 162.8px;
        height: 158px;
        text-align: center;
        background: #fff;
        vertical-align: middle;
    }

    .service-info ul li:nth-child(7n) {
        margin-right: 0;
    }

    .service-info ul li:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    }

    .service-info li img {
        display: inline-block;
        margin-top: 20px;
        height: 80px;
        width: 80px;
    }

    .service-info li h3 {
        color: #555;
        height: 40px;
        line-height: 40px;
    }

    .align-items-wrap {
        margin-top: 80px;
    }

    .align-items-wrap .offset-ml {
        padding: 15px;
        margin-left: 120px;
        width: calc(50% - 90px);
    }

    .align-items-wrap .align-items-center {
        margin-bottom: 90px;
    }

    .align-items-wrap .text-center,
    .text-md.offset-ml {
      padding: 15px 0;
      width: calc(50% - 80px);
    }

    .text-md.offset-ml {
        margin-left: 0;
    }

    .text-center p {
        margin-bottom: 10px;
        line-height: 1.9;
        color: #616771;
        font-size: 14px;
    }

    .opacity-20 {
        margin-bottom: 15px;
        opacity: .2;
        font-size: 60px !important;
        line-height: 1.2;
        font-weight: 900 !important;
    }

    .text-center h3 {
        margin-bottom: 10px;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.6;
        font-size: 22px;
    }
</style>
