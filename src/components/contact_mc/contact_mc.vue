<template>
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
                      <div class="form-group">
                          <input ref="userName" class="form-control" type="text" placeholder="姓名（必填）">
                      </div>
                      <div class="form-group">
                          <input ref="userPhone" class="form-control" type="text" placeholder="电话（必填）">
                      </div>
                      <div class="form-group">
                          <input ref="email" class="form-control" type="text" placeholder="邮箱">
                      </div>
                      <div class="form-group">
                          <textarea ref="message" class="form-control ly" type="text" placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）"></textarea>
                      </div>
                    <div class="form-group">
                          <button type="button" @click="role">发送</button>
                    </div>
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
                        邮箱：<a class="mail" href="Mailto:meichang202@126.com">meixin202@126.com</a>
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
//	import mapTemp from './map.vue'
	export default {
	    methods: {
		      role () {
		          const parm = {
                  userName: this.$refs.userName.value,   //用户名
                  userPhone: this.$refs.userPhone.value, //电话
                  email: this.$refs.email.value, //邮箱
                  message: this.$refs.message.value //留言内容
              };
              if(!parm.userName) {
                  alert("请输入用户名！");
                  return false;
              }
              else if(!parm.userPhone){
                  alert("请输入电话号码！");
                  return false;
              }
              else if(!parm.message) {
                  alert("请输入留言内容！");
                  return false;
              }else {
                  this.postMessage(parm);
              }
          },
          postMessage (parm) {
              let url = 'http://39.108.118.8:81/index/api/message';
              this.$http.post(url, {name: parm.userName, phone: parm.userPhone, email: parm.email, content: parm.message}).then(({data}) => {
                  if(data.code === 0) {
                      this.$refs.userName.value = "";
                      this.$refs.userPhone.value = "";
                      this.$refs.email.value = "";
                      this.$refs.message.value = "";
                      alert("留言成功！我们将尽快与您取得联系...");
                  }
              });
          }
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
