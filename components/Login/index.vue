<template>
  <div class="box">
    <div class="main">
      <div class="titlebox">
        <h1 class="h1_title">开拓足球</h1>
        <h3 class="h3_title">登录</h3>
      </div>
      <div class="formbox">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="userName">
            <div>用户名</div><el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item prop="passWords">
            <div>密码</div><el-input v-model="form.passWords"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="forget">
              <a @click="goForget" href="#">忘记密码？</a>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="buttonClass" @click="onSubmit('form')" round type="primary" size="medium"
              center>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        passWords: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWords: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    }
  },
  create() {

  },
  methods: {
    onSubmit(form) {
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
  background-color: rgba(7, 47, 80, .9);
  padding: 0 10px;
}

.h1_title,
.h3_title {
  text-align: center;
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