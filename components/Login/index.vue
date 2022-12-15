<!-- <template>
  <div class="login-wrap"> -->
    <!-- <div class="main"> -->
      <!-- <div class="titlebox"> -->
        <!-- <el-form label-position="left" :model="form" :rules="rules" ref="form" label-width="0px" class="demo-form login-container"></el-form>
        <h3 class="h1_title">用户登录</h3> -->
        <!-- <h3 class="h3_title">登录</h3> -->
        <!-- <el-form ref="form" :model="form" :rules="rules"> -->
          <!-- <el-form-item prop="userName">
            <div>用户名</div><el-input v-model="form.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <div>密码</div><el-input v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-row>
        <el-col :span="12">
          <el-form-item prop="code">
            <el-input type="text" v-model="form.code" auto-complete="off" placeholder="图形验证码" @keyup.enter.native="submitForm('form')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="code-box">
          <img :src="form.codeimg" alt="" class="codeimg" @click="getcode()">
        </el-col>
      </el-row>
      <el-checkbox class="remember" v-model="rememberpwd">记住密码</el-checkbox>
          <el-form-item>
            <div class="forget">
              <a @click="goForget" href="#">忘记密码？</a>
            </div>
          </el-form-item>
          <el-form-item>
<<<<<<< HEAD
            <el-button class="buttonClass" @click="onSubmit('form')" round type="primary" size="medium" center>登录</el-button>
          </el-form-item> -->
        <!-- </el-form> -->
    <!-- </div>
</template> -->
<template>
  <div class="login-wrap">
    <el-form label-position="left" :model="form" :rules="rules" ref="form" label-width="0px" class="demo-form login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="userName">
        <div>账号</div>
        <el-input type="userName" v-model="form.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div>密码</div>
        <el-input type="passWord" v-model="form.passWord" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="code">
            <el-input type="text" v-model="form.code" auto-complete="off" placeholder="图形验证码" @keyup.enter.native="submitForm('form')"></el-input>
=======
            <el-button class="buttonClass" @click="onSubmit('form')" round type="primary" size="medium"
              center>登录</el-button>
>>>>>>> 363f4be3c646d6b13ef9a6a1d8f9bef9e331507a
          </el-form-item>
        </el-col>
        <el-col :span="12" class="code-box">
          <img :src="form.codeimg" alt="" class="codeimg" @click="getcode()">
        </el-col>
      </el-row>
      <el-checkbox class="remember" v-model="rememberpwd">记住密码</el-checkbox>
      <!-- <el-checkbox class="forget" v-model="rememberpwd">忘记密码？</el-checkbox> -->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm('form')" :loading="logining">登录</el-button>
        <div class="forget">
              <a @click="goForget" href="#">忘记密码？</a>
            </div> 
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logining: false,
      // 记住密码
      rememberpwd: false,
      form: {
        userName: '',
        passWord: '',
        code: '',
        randomStr: '',
        codeimg: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    }
  },
  create() {

  },
  methods: {
    onSubmit(form) {
<<<<<<< HEAD
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form.userName,this.form.passWord);
            window.localStorage.setItem("token",'后端返回的token')
            var token = window.localStorage.getItem("token")
            console.log('token:',token);
            this.$nuxt.$loading.start()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
=======
      // this.$refs[form].validate((valid) => {
      //   if (valid) {
      //     console.log(this.form.userName,this.form.passWords);
      //     window.localStorage.setItem("token",'后端返回的token')
      //     var token = window.localStorage.getItem("token")
      //     console.log('token:',token);
      //     this.$nuxt.$loading.start()
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
      this.getdata();
    },
>>>>>>> 363f4be3c646d6b13ef9a6a1d8f9bef9e331507a
    goForget() {
      this.$alert('管理员电话：18111629666', '请联系管理员重置密码', {
        confirmButtonText: '确定',
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${ action }`
        //   });
        // }
      });
    },
    getdata() {
      console.log(11);
      let that = this;
      that.$axios.post('/api/login', { userName: "18781166142", password: "000000" }).then(res => {
        console.log('res', res);
      });
    }
  }
}

</script>
<style scoped>
.login-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 10%;
  background-image: url("../../static/2.jpg");
  /* background: transparent; */
  /* background-repeat: no-repeat; */
  background-position: center;
  background-size: cover;
  position:fixed;
}
.login-wrap .inputElement input{
    width: 100%;
    padding:10px 0;
    font-size:16px;
    color:#fff;
    letter-spacing: 1px;
    /*字符间的间距1px*/
    margin-bottom: 30px;
    border:none;
    border-bottom: 1px solid #fff;
    outline:none;
    /*outline用于绘制元素周围的线
    outline：none在这里用途是将输入框的边框的线条使其消失*/
    background: transparent;
    /*背景颜色为透明*/
  }
.login-container {
  border-radius: 10px;
  margin: 0px auto;
  width: 360px;
  padding: 30px 35px 15px 35px;
  background: #fdfcfc;
  border: 1px solid #fdfcfc;
  text-align: left;
  box-shadow: 0 0 10px 2px rgba(173, 30, 30, 0.1);
}
.code-box {
  text-align: right;
}
.title {
  margin: 0px auto 50px auto;
  text-align: center;
  color: #131212;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(35, 80, 154)
}

.main {
  width: 300px;
  height: 422px;
  border: 1px solid (7, 47, 80);
  border-radius: 3%;
  background-color: rgba(243, 246, 248, 0.9);
  padding: 0 10px;
}

/* .h1_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.h3_title {
  text-align: center;
} */
.remember {
  margin: 0px 0px 35px 0px;
}

.forget {
  float: right;
}

.buttonClass {
  width: 280px;
  /* height: 60px; */
  margin: 0px 10px;
}

a {
  color: rgba(255, 0, 0, .5);
  text-decoration: none;
}


</style>