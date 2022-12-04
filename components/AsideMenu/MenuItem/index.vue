<template>
  <div class="h-10 pl-8 leading-10 cursor-pointer">
    <span>{{item.icon}}</span>
    <span>{{item.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['item']
}
</script>

<style>

</style>