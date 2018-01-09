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
              <h3 class="active">我们通过专业的流程与丰富的经验实现了在用户体验设计创新的承诺。数年间，数十个领域，百余国内外企业的成功合作验证了我们设计的价值。</h3>
          </div>
      </div>
  </div>
</template>
<script></script>
<style scoped>
    .service-box {
        position: relative;
        height: 420px;
        background: url("http://www.reenoo.com/img/about/as2_dbg.jpg") no-repeat center center;
    }

    .service-box .w1200 {
        position: relative;
    }

    .service-box h1 {
      position: absolute;
      left: -50px;
      left: 0 \9;
      top: 292px;
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
        background: #a0cfb6;
        height: 410px;
        padding-top: 70px;
    }

    .service_section1 h2 {
        color: #485149;
        text-align: center;
        font-size: 30px;
        margin-bottom: 68px;
    }
</style>
