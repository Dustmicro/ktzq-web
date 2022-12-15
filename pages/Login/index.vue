<template>
  <div>
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login/index.vue"
export default {
  name: "ktzq_login",
  components: {
    Login
  },
  data() {
    return {

    }
  },
  create() {
    this.getdata();

  },
  methods: {
    getdata() {
      console.log(11);
      let that = this;
      that.$axios.get("/api/index.html").then(res => {
        alert(res.data.code);
      });
    }
  }
}

</script>
<style scoped>

</style>