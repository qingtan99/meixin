<template>
  <div>
      <div class="ivu-modal-wrap">
          <div class="ivu-modal-mask" @click="mask"></div>
          <div class="modal w">
            <div class="modal-header">
              <h4>{{ modalTitle }}</h4>
            </div>
            <div class="modal-content-wrap fix">
                <div class="modal-img">
                    <a class="a-img" href=""></a>
                    <ul class="fix">
                      <li class="fl">
                          <a href="javascript:;"></a>
                      </li>
                      <li class="fl">
                          <a href="javascript:;"></a>
                      </li>
                      <li class="fl">
                          <a href="javascript:;"></a>
                      </li>
                      <li class="fl">
                          <a href="javascript:;"></a>
                      </li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
              <input class="btn" type="button" v-model="cancelBtn" @click="cancelHandle" />
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
          type: String,
          default: "默认文本"
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
    min-height: 600px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
    z-index: 1001;
  }

  .modal.w {
    width: 1200px;
  }

  .modal-header {
    color: #495060;
    background: #fff;
    border-radius: 6px 6px 0 0;
    padding: 15px;
    border-bottom: 1px solid #e9eaec;
  }
  .modal-content-wrap {
      padding: 15px 10px 59px 10px;
  }

  .modal-content-wrap .modal-img {
      width: 50%;
      height: 485px;
  }

  .modal-content-wrap .modal-img .a-img {
      display: block;
      width: 400px;
      height: 395px;
      border: 1px solid rgba(0,0,0,.05);
  }

  .modal-img ul li {
      display: inline-block;
      margin: 0 0 0 25px;
      padding-top: 12px;
  }

  .modal-img ul li a {
      display: inline-block;
      border: 2px solid rgba(0,0,0,0);
      width: 63px;
      height: 63px;
  }

  .modal-img ul li a:hover {
      border: 2px solid #000;
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
