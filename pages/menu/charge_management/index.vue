<template>
  <div class="h-full">
    <div class="h-full flex flex-col">
      <Header></Header>
      <div class="flex flex-1">
        <div class="h-full w-1/12">
          <AsideMenu></AsideMenu>
        </div>
        <div class="p-10 flex-1">
          <NuxtChild />
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  export default {
    // name: 'menu',

    // asyncData({redirect}) {
    //   redirect('/menu/index')
    // }
  }
</script>

<style>

</style>
