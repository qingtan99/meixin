<template>
  <div>
      <div class="ivu-modal-wrap">
          <div class="ivu-modal-mask" v-model="cancelBtn" @click="cancelHandle"></div>
          <div class="modal w">
            <div class="modal-header">
              <h4>{{ modalTitle }}</h4>
              <i class="icon iconfont icon-guanbi" title="关闭" v-model="cancelBtn" @click="cancelHandle"></i>
            </div>
            <slot name="sContent">

            </slot>
            <div class="modal-footer fix">
                <div class="fl">上一篇
                    <span>1</span>
                </div>
              <div class="fr">下一篇
                    <span>2</span>
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
          modal:{
            show: false,
            content: this.modalContent
          },
        }
    },
    name : 'modal',
    //通过props来接受从父组件传递过来的值
    props: {
      modalTitle: {
        type: String,
        default: '标题区域'
      },
      okBtn: {
        type: String,
        default: '确认'
      },
      cancelBtn: {
        type: String,
        default: '取消'
      },
      modalContent: {
          type: Object
      }
    },
    methods : {
      cancelHandle () {
        this.$emit("on-cancel");
      },
      mask() {
        this.$emit('close');
      }
    }
  }
</script>
<style scoped>
  .ivu-modal-wrap {
      position: fixed;
      overflow: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      -webkit-overflow-scrolling: touch;
      outline: 0;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .ivu-modal-wrap .ivu-modal-mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(55,55,55,.6);
      height: 100%;
  }

  .modal {
    position: relative;
    min-height: 535px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
    z-index: 1001;
  }

  .modal.w {
    width: 890px;
  }

  .modal-header {
    position: relative;
    color: #495060;
    background: #fff;
    border-radius: 6px 6px 0 0;
    padding: 15px;
    border-bottom: 1px solid #e9eaec;
  }

  .modal-header .icon-guanbi {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }

  .modal-header .icon-guanbi:hover {
      color: #17b1f7;
  }

  .modal-content-wrap {
      padding: 15px 10px 59px 10px;
      height: 410px;
  }

  .modal-content-wrap .modal-img,
  .modal-content-wrap .modal-right {
      position: relative;
      width: 50%;
      height: 100%;
  }

  .modal-right h3 {
      font-weight: 400;
      font-size: 24px;
      line-height: .9;
  }

  .modal-right h3 small {
      display: block;
      margin-bottom: 30px;
      margin-top: 7px;
      font-size: 65%;
      color: #777;
  }

  .modal-right h4.featured {
      width: 50px;
      padding: 2px 5px;
      color: #0991CE;
      text-align: center;
      font-size: 14px;
      background: rgba(9,145,206,0.1);
  }

  .modal-right a {
      position: absolute;
      bottom: 48px;
      left: 0;
      display: inline-block;
      padding: 0px 20px 0px 20px;
      line-height: 32px;
      color: #fff;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      background: #17b1f7;
      border: 1px solid #17b1f7;
  }

  .modal-right ul {
      margin: 10px 0;
      max-height: 232px;
      overflow: hidden;
  }

  .modal-right ul li {
      position: relative;
      padding: 5px 0px 5px 25px;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  .modal-right ul li i {
      position: absolute;
      top: 0;
      left:0;
      display: block;
      width: 29px;
      height: 29px;
      background: url("../../assets/images/product/feature-tick.png") no-repeat left center;
      background-size: 50%;
  }

  .modal-content-wrap .modal-img .a-img {
      display: block;
      width: 400px;
      height: 360px;
      border: 1px solid rgba(0,0,0,.05);
  }

  .modal-img p {
      padding: 15px 5px;
  }

  .modal-img p span {
    color: #333;
    font-style: italic;
    margin-left: 10px;
    font-weight: 600;
  }

  .modal-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
  }

  .modal-footer div {
      cursor: pointer;
  }

  .modal-footer div:hover {
    color: #17b1f7;
  }

  .btn {
    border: 1px solid #d7dde4;
    border-radius: 3px;
    background-color: #f7f7f7;
    height: 28px;
    padding: 0 20px;
    cursor: pointer;
    line-height: 28px;
    display: inline-block;
    color: #666666;
    margin-right: 5px;
    outline: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: color .2s linear,background-color .2s linear,border .2s linear;
  }

  .btn:hover{
    color: #5cadff;
    background-color: #fff;
    border-color: #5cadff;
  }
</style>
