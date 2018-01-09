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
        <div class="others-content">
            <div class="others-content-note">
                <p>您可以发送电子邮件至：meichang202@126.com。</p>
                <p>我们很想听到您的声音！或者直接填写下面的表格</p>
            </div>

            <div class="others-content-row fix">
                <div class="others-content-left fl">
                  <form action="">
                      <div class="form-group">
                          <input class="form-control" type="text" placeholder="姓名（必填）">
                      </div>
                      <div class="form-group">
                          <input class="form-control" type="text" placeholder="电话（必填）">
                      </div>
                      <div class="form-group">
                          <input class="form-control" type="text" placeholder="邮箱">
                      </div>
                      <div class="form-group">
                          <textarea class="form-control ly" type="text" placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）"></textarea>
                      </div>
                    <div class="form-group">
                          <button type="button">发送</button>
                    </div>
                  </form>
                </div>
                <div class="others-content-right fr">
                    <p>
                        <b>联系方式</b>
                    </p>
                    <p>
                        电话：0769-85323589
                    </p>
                    <p>
                        QQ：1141030009
                    </p>
                    <p>
                        邮箱：<a class="mail" href="Mailto:meichang202@126.com">meichang202@126.com</a>
                    </p>
                    <p>
                        <b>办公地点</b>
                    </p>
                    <p>地址：东莞市长安镇涌头村东黎街21号（涌头幼儿园旁边）</p>
                </div>
            </div>
        </div>
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
  .others-content-note {
    font-size: 14px;
    color: #787d82;
    line-height: 1.9;
  }

  .others-content-left,
  .others-content-right {
    width: calc(50% - 60px);
  }

  .others-content-left form {
      margin-top: 1em;
  }

  .others-content-left .form-group {
      margin-bottom: 1em;
  }

  .form-group .form-control {
      width: calc(100% - 42px );
      border-color: #ebebeb;
      border-radius: 2px;
      color: #b5b9bf;
      line-height: inherit;
      -webkit-transition: 0.2s linear;
      transition: 0.2s linear;
      line-height: 32px;
      font-size: 14px;
      padding: 7px 20px;
      border: 1px solid rgba(0, 0, 0, .15);
      resize: none;
      outline: none;
  }

  .form-group .form-control:focus {
    border-color: #8ab5f7;
    color: #616771;
  }

  .form-group .form-control.ly {
      min-height: 144px;
  }

  .form-group button {
      width: 100%;
      height: 40px;
      border-radius: 3px;
      background: #2f82ff;
      color: #fff;
      cursor: pointer;
      border: none;
      outline: none;
  }

  .others-content-right {
      margin: 1em 0;
      padding: 15px;
      background: url("../../assets/images/about/deco-quote.png") 40px 40px no-repeat #f5f6f7;
      border-radius: 3px;
      overflow: hidden;
  }

  .others-content-right p {
      margin-bottom: 1em;
  }

  .others-content-right p .mail {
      color: #0099ff;
  }

  .others-content-right p .mail:hover {
      text-decoration: underline;
  }
</style>
