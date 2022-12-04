<template>
  <div>
    <el-container>
      <el-header class="flex justify-between items-center py-1 bg-gray-300">
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

<style scoped>
  .el-header {
    padding: 1rem 2rem;
  }
</style>