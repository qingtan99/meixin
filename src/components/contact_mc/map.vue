<template>
	<div id="mapContainer" style="width: 100%; height: 630px;"></div>
</template>
<script>
	import {MP} from './../../assets/js/map.js'
	export default {
		data() {
			return {
				ak: 'e1dq7RU1GlptkZDy5wpsLFkrAystixLh',
				lon: '113.833696',	//经度
				lat: '22.807777'	//纬度
			}
		},

		mounted () {
			MP(this.ak).then( BMap => {
				this.$nextTick(function() {
					this.createMap()
				})
			})
    	},

    	methods: {
    		createMap() {
    			let map = new BMap.Map("mapContainer");//在百度地图容器中创建一个地图
		        let point = new BMap.Point(this.lon,this.lat);//定义一个中心点坐标
	        	let myIcon = new BMap.Icon("http://maps.gstatic.cn/mapfiles/api-3/images/spotlight-poi.png", new BMap.Size(22,40));	//自定义图标
	        	let marker = new BMap.Marker(point,{icon: myIcon}); // 创建点
	        	let opts = {
					width : 260,     // 信息窗口宽度
					height: 35,     // 信息窗口高度
					title : "美畅电子有限公司" , // 信息窗口标题
					enableMessage: false,//设置允许信息窗发送短息
					message:""
				};
	      		let vMsg = "地址：东莞市长安镇涌头村东黎街21号（涌头幼儿园旁边）";
	      		let infoWindow = new BMap.InfoWindow(vMsg, opts);  // 创建信息窗口对象
		        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
		        map.disableDragging();     //禁止拖拽
	        	map.addOverlay(marker);
				map.openInfoWindow(infoWindow,point); //开启信息窗口
    		}
    	},
    	watch: {
		    data () {
		      this.$nextTick(() => {
		        this.createMap.update()
		      })
		    }
		  }
	}
</script>
<style scoped>
</style>