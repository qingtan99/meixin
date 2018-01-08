<template>
	<!--<div class="contact-wrap">-->
		<!--<div class="top-section">-->
			<!--<div class="contact-introbox w1200">-->
          <!--<h1 class="pagetitle-move">和您一起发现潜在机遇</h1>-->
          <!--<div class="contact-introcontent">-->
              <!--<h1><br>即刻与我们取得联络</h1>-->
              <!--<br>-->
              <!--<p>一个电话或许正是成就一个共赢合作的开始。欢迎致电我们或发送合作邮件至：<span>meichang202@126.com</span></p>-->
              <!--<br>-->
              <!--<h2>0769-85323589</h2>-->
              <!--<h1>更多咨询服务即请致电，美畅电子</h1>-->
              <!--<h3>广东</h3>-->
              <!--<p>-->
                  <!--地址: 东莞市长安镇涌头村东黎街21号（涌头幼儿园旁边）<br>-->
                  <!--E-mail: meichang202@126.com-->
              <!--</p>-->
          <!--</div>-->
          <!--<div class="map-top">-->
              <!--<p>-->
                  <!--我们期望与你共享这十余年的行业与设计经验，减少试错成本<br>我们坚信商业逻辑在产品的完美呈现才能提升效率，创造增益，为用户和您提供充分的想象空间-->

              <!--</p>-->
              <!--<h2>好的设计才能促成好的生意</h2>-->
          <!--</div>-->
        <!--</div>-->
		<!--</div>-->
		<!--<map-temp></map-temp>-->
	<!--</div>-->
  <div class="pjax-container">
    <div class="others">
      <h1>联系我们</h1>
    </div>
  </div>
</template>
<script>
	import mapTemp from './map.vue'

	export default {
		components: {
		    mapTemp
	    },
	    methods: {

	  	}
	}
</script>
<style scoped>
	h1,h1,h3,h4,h5,h6 { font-weight: 100; font-weight: inherit;}
	.contact-wrap {
		position: relative;
		z-index: 2;
	}

	.contact-sectionbg {
	    background: #000 url(http://www.reenoo.com/img/news/n1.jpg) center no-repeat;
	    background-size: cover;
	}

	.top-section > .w1200 {
	    position: relative;
	    z-index: 2;
	}

	.contact-introbox {
	    position: relative;
	    height: 100%;
	}

	.contact-introcontent h1 {
		font-size: 20px;
		color: #7b7b7b;
	}

	.contact-introcontent h3 {
	    color: #7b7b7b;
	    font-size: 20px;
	    margin-top: 15px;
	    margin-bottom: 8px;
	}

	.contact-introcontent p span {
	    color: #0099ff;
	}

	.contact-introcontent p {
	    color: #7b7b7b;
	    line-height: 22px;
	}

	.contact-introbox > .pagetitle-move {
	    position: absolute;
	    right: 0;
	    top: 292px;
	    color: #fff;
	    font-size: 36px;
	    z-index: 2;
	    -webkit-transition: all 1s;
	    transition: all 1s;
	}

	.contact-introcontent h2 {
	    color: #0099ff;
	    font-size: 30px;
	    letter-spacing: -1px;
	    line-height: 36px;
	}

	.pagetitle-move {
	    -webkit-animation: pagetitle-move 1s forwards;
	    animation: pagetitle-move 1s forwards;
	}

	.contact-introcontent {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    z-index: 10;
	    padding: 19px 0;
	    height: 262px;
	    width: 100%;
	    background-color: #fff;
	    text-align: center;
	}

	.map-top {
	    width: 1200px;
	    height: 142px;
	    background: #a0cfb6;
	    position: absolute;
	    left: 0;
	    bottom: -172px;
	    z-index: 1;
	    text-align: center;
	    padding-top: 50px;
	    transition: all .3s;
	}

	.map-top p {
	    color: #486f5a;
	    font-size: 13px;
	}

	.map-top h2 {
	    font-size: 30px;
	    color: #486f5a;
	    padding-top: 10px;
	}

	.bm-view {
		width: 100%;
		height: 300px;
	}
</style>
