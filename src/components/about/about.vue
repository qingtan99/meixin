<template>
    <div class="about-wrap">
        <div class="aboutus-container">
            <div class="a-container w1200 fix">
                <ul class="other-left fl">
                    <li v-for="(item,i) in listdata" :class="[{'active': i === nowIndex}]">
                        <router-link :to="item.link" @click="change(i)">{{item.text}}</router-link>
                    </li>
                </ul>
                <div class="other-right wow animated bounceInRight" data-wow-duration="1s" data-wow-delay=".6s">
                    <div class="other-right-wrap">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
          nowIndex:-1,
          listdata: [
              {"link": "/about", "text": "关于我们"},
              {"link": "/join", "text": "加入我们"},
              {"link": "/contact_mc", "text": "联系我们"},
              {"link": "/friendlink", "text": "友情链接"}
          ]
      }
    },
    methods: {
        change (i) {
            this.nowIndex = i;
        }
    }
  }
</script>
<style scoped>
  .aboutus-container .a-container {
      padding: 20px 0;
  }

  .other-left {
      width: 220px;
      padding: 0 20px;
      overflow: visible;
      background-color: #fff;
      -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.1);
      -moz-box-shadow: 0 2px 4px rgba(0,0,0,.1);
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
      list-style-type: none;
  }

  .other-left li {
      position: relative;
      height: 60px;
      overflow: visible;
      border-bottom: 1px solid #edf1f2;
  }

  .other-left li a {
      position: relative;
      display: block;
      padding: 0 10px 0 30px;
      margin-left: -20px;
      height: 60px;
      line-height: 60px;
      text-decoration: none;
      font-size: 14px;
      color: #787d82;
  }

  .router-link-active:before,
  .other-left li.active a:before {
      content: " ";
      position: absolute;
      top: 0;
      width: 2px;
      height: 60px;
      background-color: #2f82ff;
      left: 0px;
  }

  .other-right {
      margin-left: 280px;
      -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.1);
      -moz-box-shadow: 0 2px 4px rgba(0,0,0,.1);
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
      background: #fff;
      overflow: hidden;
  }

  .other-right-wrap {
      position: relative;
      min-height: 855px;
  }
</style>
