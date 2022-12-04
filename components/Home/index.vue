<template>
  <div class="h-full">
    <div class="h-full flex flex-col">
      <Header></Header>
      <div class="flex flex-1">
        <div class="h-full w-1/12">
          <AsideMenu></AsideMenu>
        </div>
        <div class="p-10 flex-1">
          <IndexContent></IndexContent>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from '../Header'
  import AsideMenu from '../AsideMenu'
  import IndexContent from '../IndexContent'
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