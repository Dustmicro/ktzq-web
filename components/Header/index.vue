<template>
  <div>
    <el-container>
      <el-header class="flex">
        <HeadLogo></HeadLogo>
        <HeadMenu></HeadMenu>
        <HeadInfo></HeadInfo>
      </el-header>
    </el-container>
  </div>
</template>

<script>
  import HeadLogo from './HeadLogo'
  import HeadMenu from './HeadMenu';
  import HeadInfo from './HeadInfo';

  export default {
    name: 'Header',
    components: {
      HeadLogo,
      HeadMenu,
      HeadInfo
    }
  }
</script>

<style>

</style>