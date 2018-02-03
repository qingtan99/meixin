<template>
	<div id="home">
        <transition name="fade">
    		<div class="head" v-if="!isShow" ref="head">
    	        <div class="w1200 fix">
    	            <a class="logo fl" href="/">
    	            	<img src="../../assets/logo.png" alt="美畅logo">
    	            </a>
    	            <ul class="nav fr fix">
    	                <li class="fl">
    	                	<router-link to="/">首页</router-link>
                    	</li>
    	                <li class="fl">
    	                	<router-link to="/product">产品</router-link>
                    	</li>
    	                <li class="fl">
    	                	<router-link to="/about">关于</router-link>
                    	</li>
    	                <li class="fl">
    	                	<router-link to="/service">服务</router-link>
                    	</li>
    	                <li class="fl">
    	                	<router-link to="/contact_mc">联系美芯</router-link>
                    	</li>
                    	<li class="lang-pre fl">
                    		<a href="javascript:;">中/EN</a>
                    		<div class="nav-lang-box">
                    			<span>中文简体</span>
                    			<span>English</span>
                    		</div>
                		</li>
    	            </ul>
    	        </div>
    	    </div>
        </transition>
	    <div class="main-content">
	    	<router-view></router-view>
	    	<div class="scroll-top">
          <a class="ele" href="http://wpa.qq.com/msgrd?v=3&uin=2281157930&site=qq&menu=yes" target="_blank">
              <i class="icon iconfont icon-QQ"></i>
              <span>QQ咨询</span>
          </a>
	    		<a class="ele" href="javascript:;">
	    			<i class="icon iconfont icon-wxgzh"></i>
	    			<span>官方微信</span>
	    			<div class="weixin-box">
	    				<p>扫描二维码</p>
	    				<p>关注美畅微信公众号</p>
	    				<img src="../../assets/images/mcwx.jpg" alt="">
	    			</div>
	    		</a>
	    		<a class="to-top" v-bind:class="{hide: toTopShow}" v-on:click="goToTop()" href="javascript:;">
	    			<i class="icon iconfont icon-up"></i>
	    			<span>返回顶部</span>
	    		</a>
	    	</div>
	    </div>

	    <div class="footer">
	    	<div class="footer-content">
	    		<nav>
	    			<router-link to="/">首页</router-link><i>|</i>
					<router-link to="/about">关于我们</router-link><i>|</i>
					<router-link to="/join">加入我们</router-link><i>|</i>
					<router-link to="/contact_mc">联系我们</router-link><i>|</i>
					<router-link to="/friendlink">友情链接</router-link>
	    		</nav>
	    		<div class="copyright">Copyright © 2018 mx-semi.cn All Rights Reserved</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isShow: false,
				toTopShow: true
			}
		},
		methods: {
			  showHiHead(wint) {
	    		  if(wint >99){
                this.isShow = true;
                this.toTopShow = false;
            }else{
                this.isShow = false;
                this.toTopShow = true;
            };
	    	},

	    	//返回顶部
	    	goToTop() {
                //仅仅设置 document.body 可能会有兼容性问题
	    		  document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
	    	}
		},
		mounted() {
			this.$nextTick(function() {
				var _this = this;
				window.addEventListener("scroll",function(e){
					var wint = document.documentElement.scrollTop||document.body.scrollTop;
					_this.showHiHead(wint)
				});
			})
		}
	}
</script>
<style scoped>
/*过渡动画*/
.fade-enter-active, .fade-leave-active {
  transition: all .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-80px);
}
/*END 过渡动画*/
.nav li {
	position: relative;
}

.input-search {
	  margin-left: 10px;
}

.lang-pre {
	  margin-left: 16px;
}

.input-search input {
    outline: none;
    margin-top: -8px;
    font-size: 14px;
    color: #666666;
    float: left;
    width: 0px;
    height: 30px;
    padding-left: 8px;
    border: 1px #9c9292 solid;
    opacity: 0;
    filter: Alpha(opacity=0);
    border-radius: 5px;
    vertical-align: middle;
    transition: all .5s;
}

.input-search i {
    padding: 3px 0 0 5px;
    display: block;
    float: left;
    cursor: pointer;
}

.input-search:hover input {
	opacity: 1;
	width: 150px;
}

.nav-lang-box {
    width: 121px;
    height: 50px;
    padding: 0 15px;
    position: absolute;
    top: 49px;
    right: 0px;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    opacity: 0;
    transition: all .3s;
    z-index: 1;
}

.nav-lang-box span {
	display: block;
	float: left;
	margin: 0 8px;
	font-size: 12px;
	color: #c8cdd2;
	line-height: 50px;
	transition: all .5s;
	cursor: pointer;
}

.nav-lang-box span:hover {
	color: #fff;
}

.lang-pre:hover .nav-lang-box {
	opacity: 1;
}

/*返回顶部*/
.scroll-top {
    position: fixed;
    padding: 0 16px;
    bottom: 40px;
    margin-top: -140px;
    right: 0;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgba(7,17,27,.1);
    z-index: 899;
}

.scroll-top a {
    position: relative;
    display: block;
    width: 26px;
    padding: 16px 0;
    font-size: 22px;
    line-height: 20px;
    color: #b5b9bc;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #edf1f2;
}

.scroll-top a i {
    font-size: 20px;
    font-weight: 500;
}

.scroll-top span {
    display: none;
    font-size: 12px;
    color: #07111b;
    line-height: 12px;
}

.scroll-top .weixin-box {
    position: absolute;
    padding-top: 10px;
    display: none;
    width: 172px;
    height: 212px;
    bottom: 0px;
    right: 42px;
    -webkit-transition: opacity .25s,transform .3s;
    -moz-transition: opacity .25s,transform .3s;
    transition: opacity .25s,transform .3s;
    opacity: 0;
    filter: alpha(opacity=0);
    max-width: 0;
    -webkit-transform: scale(.01);
    -ms-transform: scale(.01);
    transform: scale(.01);
    -webkit-transform-origin: 100% 95%;
    -ms-transform-origin: 100% 95%;
    transform-origin: 100% 95%;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 4px 12px 0 rgba(7,17,27,.1);
}

.weixin-box p {
    font-size: 12px;
    line-height: 18px;
}

.weixin-box img {
    width: 172px;
    height: 172px;
}

.scroll-top a:hover i {
    display: none;
}

.scroll-top a:hover span {
    display: block;
}

.scroll-top .ele:hover .weixin-box {
    display: block;
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100);
    max-width: none;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.scroll-top .ele .icon-dianhua {
    font-size: 26px;
}

.to-top.hide {
	display: none;
}
/*END 返回顶部*/

/*底部*/
.footer {
    position: relative;
    font-size: 12px;
    background: #fff;
    box-sizing: border-box;
    border-top: 1px solid #e4e4e4;
}

.footer .footer-content {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.footer nav {
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 0px 10px 0px;
}

.footer nav a {
    padding: 4px 10px;
    color: #666;
    text-decoration: none;
}

.footer nav a:hover{
	color: #2f82ff;
}

.footer nav i {
    color: #E4E4E4;
    font-style: normal;
}

.footer .copyright {
    color: #999;
    padding: 10px 0;
}
/*END底部*/
</style>
