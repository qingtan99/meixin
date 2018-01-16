<template>
	<div class="product-wrap">
		<div class="product-main-wrap w1200 fix">
			<div class="vertical-nav fl">
				<div class="sidemenu">
					<div class="current-menu">
						<div class="pro-name">产品分类</div>
					</div>
					<div class="current-menu-content">
						<div class="content-item">
							<div class="page" v-for="(item, i) in sidemenu">
								<div :class="['page-link', {'active': hideIndex[i]==true}, 'fix']">
									<a href="javascript:;" @click="showAnchors(i)">{{item.sidename}}</a>
									<i
									:class="['icon iconfont', 'icon-down-trangle', {'icon-up-trangle': hideIndex[i]==true}]"
									@click="showAnchors(i)"></i>
								</div>
								<div :class="['anchors-box',{'active': hideIndex[i]==true}]">
									<div class="anchors" v-for="(value, j) in item.anchors">
										<div :class="['anchor-item', {'active':activeIndex==10*(i+1)+(j+1)}]">
											<span class="dot"></span>
											<a href="javascript:;" @click="toggleItem(i+1,j+1)">{{value.name}}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sidemenu">
					<div class="current-menu">
						<div class="pro-name">联系我们</div>
					</div>
					<div class="contact-us-wrap">
						<p class="contact-note">欢迎您来电咨询产品信息，请确认咨询时间，以免耽误。</p>
						<div class="contact-infor">
							<p><i class="icon-tele"></i><span>0769-85323589</span></p>
							<p><i class="icon-qq"></i><span>1141030009</span></p>
							<p><i class="icon iconfont icon-wroktime"></i><span>9:00-18:00</span></p>
							<p class="time-note">（星期天/国家公休日 休息）</p>
							<p><i class="icon-weixin"></i><span>关注微信公众号：</span></p>
							<p class="weixin-box">
								<img src="../../assets/images/mcwx.jpg">
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="product-wrap-class">
				<div class="product-head">
					<div class="product-head-search">
						<input type="text" placeholder="请输入要搜索的内容...">
						<i class="icon iconfont icon-search btn-search" title="搜索"></i>
					</div>
				</div>
				<!-- 产品展示 -->
				<div class="product-wrap-list">
					<div class="product-class-nav">
						<ul class="fix">
							<li class="fl" v-for="item in product"  @click="productDetails(item)">
								<div class="course-list-img">
									<div class="img-see"></div>
									<img v-bind:src="item.thumimg" alt="">
								</div>
								<h4>{{item.model}} - {{item.name}}</h4>
							</li>
						</ul>
					</div>
					<div class="pagination-wrap">
						<v-pagination
						:page-index="currentPage"
			            :total="count"
			            :page-size="pageSize"
			            @change="pageChange"></v-pagination>
					</div>
				</div>
				<!-- END 产品展示 -->

				<!-- 搜索产品部分 -->
				<div class="search-product-wrap active">
					<p>下文为您展示"asdasd"的搜索结果</p>
					<!-- 有结果 -->
					<div class="have-product active">
						<div class="product-class-nav">
							<ul class="fix">
								<li class="fl">
									<div class="course-list-img">
										<div class="img-see"></div>
										<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg8J_wzAUo7Ka1qQYwpAI42AE.jpg" alt="">
									</div>
									<h4>切割机</h4>
								</li>
								<li class="fl">
									<div class="course-list-img">
										<div class="img-see"></div>
										<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg8J_wzAUo7Ka1qQYwpAI42AE.jpg" alt="">
									</div>
									<h4>切割机</h4>
								</li>
								<li class="fl">
									<div class="course-list-img">
										<div class="img-see"></div>
										<img src="http://14507334.s61i.faiusr.com/2/AD0Ixrr1BhACGAAg8J_wzAUo7Ka1qQYwpAI42AE.jpg" alt="">
									</div>
									<h4>切割机</h4>
								</li>
							</ul>
						</div>
					</div>
					<!-- END 有结果 -->

					<!-- 无结果 -->
					<div class="no-product active">
						<p class="note-data">什么都没有</p>
					</div>
					<!-- END 无结果 -->
				</div>
				<!-- END 搜索产品部分 -->

			</div>
      <v-modal
         v-if="isHide"
         :modal-content="modalText"
         modal-title="产品详情"
         ok-btn="确定"
         cancel-btn="取消"
         @on-ok="ok"
         @on-cancel="cancel"
         @close="modal.show = false"
       >
      <div slot="sContent" class="modal-content-wrap fix">
        <div class="modal-img fl">
          <a class="a-img" href="">
            <img v-bind:src="modalText.thumimg" alt="">
          </a>
          <p>尺寸：<span>{{modalText.size}}</span>（宽深高）</p>
        </div>
        <div class="modal-right fr">
            <h3 class="title">{{modalText.model}}<small>{{modalText.name}}</small></h3>
            <h4 class="featured">特色</h4>
            <ul>
                <li v-for="value in modalText.explain"><i></i>{{value.chara}}</li>
            </ul>
            <router-link to="/contact_mc" target="_blank">立即咨询</router-link>
        </div>
      </div>
      </v-modal>
		</div>
	</div>
</template>
<script>
	import pagination from '@/components/others/pagination'
  import modal from '@/components/others/modal'

	export default{
	    data () {
            return {
                pageSize : 20 , //每页显示20条数据
                currentPage : 1, //当前页码
                count : 150, //总记录数
                items : [],
                showUpTrangle: false,
                sidemenu: null,
                product: null,
                hideIndex:[],
                activeIndex: 10,
                open: false,
                isHide: false,
                modalText: null
            }
        },
        methods : {
            //获取数据
            getMenu () {
            	// 模拟数据
            	let url = '../../../static/product/sideMenu.json';
            	this.$http.get(url).then(({data}) => {
        			this.sidemenu = data.result;
            	})
                // //模拟
                // let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
                // this.$http.get(url)
                // .then(({body}) => {

                //     //子组件监听到count变化会自动更新DOM
                //     this.count = body.count
                //     this.items = body.list
                // })
            },

            //从page组件传递过来的当前page
            pageChange (page) {
                this.currentPage = page
                this.getList()
            },

            //获取列表数据
            getList() {
                // 模拟数据
                let url = '../../../static/product/productList.json';
                this.$http.get(url).then(({data}) => {
                    this.product = data.result;
                })
            },

            showAnchors (i) {
        		  //因为 JavaScript 的限制，Vue.js 不能直接对索引操作
              //数组变动
              if(this.hideIndex[i]) {
                this.$set(this.hideIndex, i, false);
              }else {
                this.$set(this.hideIndex ,i, true);
              }
            },

            toggleItem(i,j) {
        		  i=i||0;
	            j=j||0;
	            this.activeIndex=i*10+j;
            },
            productDetails (e) {
                this.isHide = !this.isHide;
                this.modalText = e;
            },
            ok () {
              alert("欢迎您购买本产品");
            },
            cancel () {
              this.isHide = !this.isHide;
            },
            init () {
              //请求第一页数据
              this.getMenu()

              //获取列表数据
              this.getList()

            }
        },
        mounted() {
          this.$nextTick(function() {
            this.init()
          })
        },
		  components: {
	      	'v-pagination': pagination,
          'v-modal': modal
	    }
	}
</script>
<style scoped>
	.product-main-wrap {
		margin-top: 50px;
		margin-bottom: 50px;
		position: relative;
	}

	.product-main-wrap .vertical-nav {
		position: relative;
	}

	.vertical-nav .sidemenu {
		width: 100%;
	    background-color: #fff;
	    border-radius: 4px;
	    letter-spacing: 0;
		width: 230px;
		box-shadow: 0 2px 8px 0 rgba(7,17,27,.06);
	    overflow: hidden;
	}

	.vertical-nav .sidemenu:nth-child(2) {
		margin-top: 35px;
	}

	.sidemenu .current-menu {
	    padding: 10px 13px;
	    position: relative;
	    font-size: 16px;
	    background: #2f82ff;
	    color: #fff;
	    border-bottom: 1px solid #f2f2f2;
	}

	.sidemenu .current-menu-content,
	.anchors .anchor-item {
	    padding: 10px 0;
	}

	.anchors.active {
		display: block;
	}

	.page .page-link {
		padding: 8px 0;
	}

	.page-link i {
		float: right;
    	margin-right: 13px;
    	color: #666;
		cursor: pointer;
	}

	.page-link.active a,
	.page-link a:hover,
	.anchor-item a:hover {
		color: #2f82ff;
	}

	.page .page-link a {
		margin-left: 13px;
	}

	.page .anchors-box {
		display: none;
	}

	.page .anchors-box.active {
		display: block;
	}

	.current-menu-content .anchor-item {
	    padding-right: 10px;
	    font-size: 12px;
	}

	.anchor-item a {
	    word-break: break-all;
	    padding-left: 45px;
	    border-left: 2px solid #fff;
		font-size: 12px;
	}

	.current-menu-content .anchor-item.active .dot {
		display: inline-block;
	    position: absolute;
	    width: 1px;
	    background-color: #18f;
	    height: 1px;
	    left: 29px;
	    margin-top: 7px;
	    border: 2px solid #18f;
	    border-radius: 50%;
	}

	.anchor-item.active span,
	.anchor-item.active a {
		color: #2f82ff;
	}

	.product-main-wrap .product-wrap-class {
		margin-left: 252px;
	}

	.product-wrap-class .product-head {
		margin: 0 0 20px 10px;
		height: 42px;
		width: calc(100% - 20px);
		border-radius: 4px;
	}

	.product-head .product-head-search {
		position: relative;
		height: 100%;
		width: 300px;
		background: #fff;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 2px 8px 0 rgba(7,17,27,.06);
	}

	.product-head .product-head-search input {
		margin: 8px 0;
	    width: 242px;
	    border: 0;
	    background: none;
	    outline: none;
	    font-size: 14px;
	    letter-spacing: 1.2px;
	    color: #555;
	    padding: 6px 44px 4px 10px;
	}

	.product-head .product-head-search .btn-search {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 44px;
		color: #fff;
		text-align: center;
		line-height: 42px;
		font-size: 22px;
		background: #2f82ff;
		cursor: pointer;
	}

	.product-class-nav ul li {
		margin: 0 10px 20px 10px;
		width: 296px;
		border-radius: 4px;
		background: #fff;
	    box-shadow: 0 1px 2px #c5c5c5;
	    overflow: hidden;
	    cursor: pointer;
	}

	.product-class-nav ul li .course-list-img {
		position: relative;
		height: 160px;
		overflow: hidden;
	}

	.course-list-img .img-see {
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.4);
		transition: .6s;
	    -moz-transition: .6s;
	    -webkit-transition: .6s;
	    -o-transition: .6s;
		z-index: 10;
	}

	.product-class-nav li h4 {
		padding: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.product-class-nav ul li:hover {
		border-bottom: 2px solid #dae0e5\0/;
    	box-shadow: 0 2px 8px #bbb;
	}

	.course-list-img img {
		transition: .3s;
	    -moz-transition: .3s;
	    -webkit-transition: .3s;
	    -o-transition: .3s;
	}

	.product-class-nav ul li:hover img {
		transform: scale(1.2);
    	-webkit-transform: scale(1.2);
	}

	.product-class-nav ul li:hover .img-see {
		display: block;
	}

	.pagination-wrap {
		text-align: center;
	}

	/*搜索部分样式*/
	.search-product-wrap p {
		padding: 0 0 20px 10px;
	}

	.product-wrap-list.active,
	.have-product.active,
	.no-product.active,
	.search-product-wrap.active {
		display: none;
	}

	.no-product .note-data {
		margin: 140px 0 180px;
		color: #bbb;
		text-align: center;
		font-size: 30px;
	}

	/*联系我们*/
	.contact-us-wrap .contact-note {
		margin: 10px 10px 0 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #f0f0f0;
	}

	.contact-us-wrap .contact-infor p {
		padding: 5px 10px;
	}

	.weixin-box {
		width: 92px;
		height: 92px;
		overflow: hidden;
	}

	.contact-infor .time-note {
		padding: 0 10px;
	}

	.contact-infor p i {
		display: inline-block;
		width: 22px;
		height: 22px;
		overflow: hidden;
		vertical-align: middle;
	}

	.icon-tele {
		background: url(../../assets/images/product/icon-tele.png) no-repeat center center;
		background-size: 100%;
	}

	.icon-qq {
		background: url(../../assets/images/product/icon-qq.png) no-repeat center center;
		background-size: 100%;
	}

	.icon-weixin {
		background: url(../../assets/images/product/icon-weixin.png) no-repeat center center;
		background-size: 100%;
	}

	.contact-infor p i.icon-wroktime {
		text-align: center;
		font-weight: 600;
		font-size: 20px;
	}

	.contact-infor p span {
		padding-left: 10px;
		vertical-align: middle;
	}

	.weixin-box {
		width: calc(100% - 20px);
	    height: 140px;
	    overflow: hidden;
	    text-align: center;
	}

	.weixin-box img {
		width: 140px;
	}
</style>
