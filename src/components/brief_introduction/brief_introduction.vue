<template>
	<div class="into_wrap">
	    <div class="idx_bannerbox">
	        <swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
			    <swiper-slide>
			    	<img src="http://11565939.s61i.faiusr.com/2/AD0I8-bBBRACGAAgraHkzQUorP2IgQcwgA84xgU.jpg" alt="">
		    	</swiper-slide>
			    <swiper-slide>
			    	<img src="http://14450088.s61i.faiusr.com/2/AD0IqPvxBhACGAAgoY2KzAUo0JzxnwEwgA847gU.jpg" alt="">
		    	</swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-button-prev ms-nav-prev" slot="button-prev"></div>
			    <div class="swiper-button-next ms-nav-next" slot="button-next"></div>
			</swiper>
	    </div>

	    <div class="idx-container">
	    	<div class="idx-content w1200">
	    		<div class="banner-text-out-wrap">
	    			<span class="banner-text-inner-wrap">
	    				<h3 class="title-wrap">优质产品，是走向世界的桥梁</h3>
	    				<p>
	    					MECHANICAL机械设备有限公司秉承“务实、诚信、拼搏、创新”的企业精神，经历了近二十年的历程取得了跨越式的发展。高起点才会有更高的品质，优雅的环境，先进的设备，高
效的团队，造就了一批批优质的产品。坚持质量、用户至上的宗旨，公司全面通过了ISO9001：2008国际质量体系认证，是制造冷热轧钢成套设备厂家之一。经悉心打造，已享有较高
的知名度，产品遍布，远销20多个地区，不断研发全新产品，满足消费者的需求。
	    				</p>
	    			</span>
	    		</div>
	    	</div>
	    </div>

	    <!-- 在售设备 -->
	    <div class="brief-intro-container">
	    	<div class="brief-intro-content w1200">
	    		<div class="brief-intro-text-wrap">
	    			<div class="brief-intro-title">
	    				<span></span>
	    				<h3>在售设备</h3>
	    			</div>
	    			<div class="brief-intro-nav">
	    				<ul class="fix">
	    					<li class="fl">
	    						<div class="nav-img">
	    							<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg7p_wzAUorsP81AQwpAI42AE.jpg" alt="">
	    						</div>
	    						<div class="nav-content-wrap">
    								<h4>搬运车地牛液压车</h4>
    								<p>这款新型破碎机零件引进德国高端技术，主要用于金属矿山、建筑砂石加工设备零件。</p>
	    						</div>
	    					</li>
	    					<li class="fl">
	    						<div class="nav-img">
	    							<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg7p_wzAUorsP81AQwpAI42AE.jpg" alt="">
	    						</div>
	    						<div class="nav-content-wrap">
    								<h4>搬运车地牛液压车</h4>
    								<p>这款新型破碎机零件引进德国高端技术，主要用于金属矿山、建筑砂石加工设备零件。</p>
	    						</div>
	    					</li>
	    					<li class="fl">
	    						<div class="nav-img">
	    							<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg7p_wzAUorsP81AQwpAI42AE.jpg" alt="">
	    						</div>
	    						<div class="nav-content-wrap">
    								<h4>搬运车地牛液压车</h4>
    								<p>这款新型破碎机零件引进德国高端技术，主要用于金属矿山、建筑砂石加工设备零件。</p>
	    						</div>
	    					</li>
	    				</ul>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- END 在售设备 -->

	    <!-- 公司介绍 -->
	    <div class="about-company-container">
	    	<div class="about-company-content fix">
	    		<div class="about-con-cont-wrap w1200">
	    			<div class="the-posi-wrap">
	    				<div class="about-con-text">
	    					<div class="brief-intro-title">
			    				<span></span>
			    				<h3>公司介绍</h3>
			    				<p class="text-wrap">30多年生产经验，产品贯穿每一个行业，覆盖每一个工业城市,我们生产的机械市场性价比最高，赢得广大客户嘉许。30多年生产经验，产品贯穿每一个行业，覆盖每一个工业城市,我们生产的机械市场性价比最高，赢得广大客户嘉许</p>
			    			</div>

			    			<div class="float-btn-box">
			    				<router-link to="/about">更多详情</router-link>
			    			</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div class="about-company-t fl">
	    			<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg952wzAUo0MeuwgYwgA849AM.jpg" alt="">
	    			<span class="ri-bg-w"></span>
	    		</div>
	    		<div class="about-company-t fr">
	    			<div class="ri-bg-f5"></div>
	    		</div>
	    	</div>
	    </div>
	    <!-- END 公司介绍 -->

      <!--合作客户-->
      <div class="cooperative-customers-container">
          <div class="cooperative-customers-content">
              <div class="cooperative-customers-wrap w1200">
                  <div class="brief-intro-title">
                    <span></span>
                    <h3>合作客户</h3>
                  </div>
                  <ul class="fix">
                    <li>
                        <img src="../../assets/images/brief/1.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/2.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/3.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/4.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/5.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/6.jpg" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/7.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/8.png" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/9.gif" alt="">
                    </li>
                    <li>
                      <img src="../../assets/images/brief/10.jpg" alt="">
                    </li>
                  </ul>
              </div>
          </div>
      </div>
      <!--END 合作客户-->
    </div>
</template>
<script>
	import '../../assets/css/swiper/swiper.min.css'
	import '../../assets/css/swiper/animate.min.css'
	export default {
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					autoplay: true,
					grabCursor : false,
					setWrapperSize :false,
					speed: 500,
					autoHeight: false,
					pagination : '.swiper-pagination',
					paginationClickable :true,
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					scrollbar:'.swiper-scrollbar',
					observeParents:true,
					loop: true,
					navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					},
					onTransitionStart(swiper){
						console.log(swiper)
					}
				}
			}
		},
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },

	    methods: {

	    },

		mounted() {

		}
	}
</script>
<style scoped>
	.idx_bannerbox {
	    position: relative;
	    left: 0;
	    top: 0;
	    width: 100%;
	    background-color: #fff;
	    z-index: 2;
	    min-width: 1200px;
	    overflow: hidden;
	    height: 500px !important;
	}

	.idx_bannerbox .swiper-container {
		height: 100%;
	}

	[class*="ms-nav-"] {
		opacity: 0;
		background: url("../../assets/images/sprit_img.png") no-repeat;
		width: 49px;
	    height: 53px;
	    margin-top: -12px;
	    transition: all 1s;
	    z-index: 10;
	}

	.ms-nav-prev {
		left: 0;
		background-position: -49px 0;
	}

	.ms-nav-next {
		right: 0;
		background-position: 0 0;
	}

	.idx_bannerbox .swiper-container:hover [class*="ms-nav-"] {
		opacity: 1;
	}

	.idx-content .banner-text-out-wrap {
		display: block;
	    padding: 145px 0 30px;
	    position: relative;
	    text-align: center;
	    overflow: hidden;
	    font-size: 0;
	    height: auto;
	    line-height: normal;
	}

	.banner-text-out-wrap .banner-text-inner-wrap {
		display: inline-block;
	    position: relative;
	    width: 100%;
	    height: auto;
	    line-height: normal;
	    vertical-align: middle;
	}

	.banner-text-inner-wrap h3 {
		color: #333;
		font-size: 26px;
	}

	.banner-text-inner-wrap p {
		font-size: 15px;
		color: #666;
		line-height: 1.8;
		text-align: center;
		margin-top: 48px;
	}

	.brief-intro-content {
		padding: 100px 0;
	}

	.brief-intro-content .brief-intro-text-wrap {
		position: relative;
		display: inline-block;
		width: 100%;
		height: auto;
	}

	.brief-intro-text-wrap .brief-intro-title {
		position: relative;
		text-align: center;
	}

	.brief-intro-title span {
		display: inline-block;
		margin-bottom: 10px;
		height: 1px;
		width: 105px;
		background-color: #2f82ff;
	}

	.brief-intro-title h3 {
		font-size: 26px;
		color: #333;
	}

	.brief-intro-nav ul {
		padding-top: 40px;
		width: 100%;
	}

	.brief-intro-nav ul li {
		position: relative;
		margin-right: 34.5px;
		width: 377px;
		height: 489px;
		background: #fff;
		box-shadow: 0 1px 2px #c5c5c5;
		cursor: pointer;
	}

	.brief-intro-nav ul li:last-child {
		margin-right: 0;
	}

	.brief-intro-nav ul .nav-img {
		height: 337px;
		overflow: hidden;
	}

	.nav-img img {
	    transition: .3s;
	    -moz-transition: .3s;
	    -webkit-transition: .3s;
	    -o-transition: .3s;
	}

	.nav-content-wrap {
		position: absolute;
		padding: 0 25px;
		height: 152px;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.nav-content-wrap h4 {
		padding: 25px 15px 0;
		height: 40px;
		line-height: 20px;
		color: #404040;
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		border-bottom: 1px solid rgba(221, 221, 221, 0.59);
	}

	.nav-content-wrap p {
		padding: 10px 15px 0;
		color: #999;
		max-height: 55px;
		overflow: hidden;
	}

	.brief-intro-nav ul li:hover {
		border-bottom: 2px solid #dae0e5\0/;
    	box-shadow: 0 2px 8px #bbb;
	}

	.brief-intro-nav ul li:hover img {
		transform: scale(1.2);
    	-webkit-transform: scale(1.2);
	}

	.about-company-container .about-company-content {
		width: 100%;
		height: auto;
    overflow: hidden;
		position: relative;
	}

	.about-company-content .about-con-cont-wrap {
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
    bottom: 50px;
		margin: 0 auto;
		color: #666;
		overflow: hidden;
		z-index: 10;
	}

	.about-con-cont-wrap .the-posi-wrap {
		position: relative;
	}

	.about-con-text {
		position: absolute;
		top: 80px;
		right: 0;
		width: 560px;
	}

	.about-con-text .float-btn-box {
		margin-top: 55px;
	}

	.float-btn-box a {
		display: inline-block;
		width: 190px;
		height: 50px;
		font-size: 14px;
		color: #666;
		text-align: center;
		line-height: 50px;
		border-radius: 3px;
		border: 1px solid #ddd;
		transition: all .3s;
	}

	.float-btn-box a:hover {
		color: #2f82ff;
		font-size: 16px;
		border: 1px solid #2f82ff;
	}

	.about-company-content .about-company-t {
		position: relative;
		width: 50%;
		height: 475px;
		background: #fff;
	}

	.about-company-t .ri-bg-w {
		position: absolute;
		right: 0;
		top: 50px;
		bottom: 50px;
		width: 82px;
		background: #f5f5f5;
	}

	.about-company-t .ri-bg-f5 {
		position: absolute;
		left: 0;
		right: 62px;
		top: 50px;
		bottom: 50px;
		background: #f5f5f5;
		box-shadow: 1px 1px 15px 0px rgba(245, 245, 245, 0.75);
	}

	.text-wrap {
		padding-top: 30px;
		line-height: 1.8;
		font-size: 14px;
	}

  .cooperative-customers-content {
      margin-top: 70px;
  }

  .cooperative-customers-wrap .brief-intro-title {
      position: relative;
      text-align: center;
  }

  .cooperative-customers-wrap ul {
      margin: 40px 0;
      width: 1214px;
  }

  .cooperative-customers-wrap ul li {
      width: 130px;
      height: 130px;
      line-height: 130px;
      text-align: center;
      margin-bottom: 4px;
      float: left;
      margin-right: 4px;
      background: #fff;
  }

  .cooperative-customers-wrap ul li img {
      width: auto;
      height: auto;
  }
</style>
