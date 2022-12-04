<template>
  <div>
    <div class="h-full">
      <Header></Header>
      <div class="h-full">
        <el-aside width="200px">
          <AsideMenu></AsideMenu>
        </el-aside>
        <div>
          <div>Main</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../Header'
  import AsideMenu from '../AsideMenu'
  import Footer from '../Footer'

  export default {
    name: 'Home',
    components: {
      Header,
      AsideMenu,
    }
  }
</script>

<style>

</style>