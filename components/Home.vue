<template>
  <div>
    <el-container>
      <Header></Header>
      <el-container>
        <el-aside width="200px">
          <AsideMenu></AsideMenu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from './Header'
  import AsideMenu from './AsideMenu'

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