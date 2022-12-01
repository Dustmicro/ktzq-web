<template>
  <div>
    <div v-for="item in menuList" :key="item.id">
      <MenuItem :item=item></MenuItem>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'AsideMenu',
  components: {
    MenuItem
  },
  data() {
    return {
      menuList: [
        {
          id: 1,
          title: '基础设置',
          icon: 'a',
          code: 1
        },
        {
          id: 2,
          title: '组织管理',
          icon: 'b',
          code: 2
        },
        {
          id: 3,
          title: '收费管理',
          icon: 'c',
          code: 3
        },
      ]
    }
  },
}
</script>

<style>

</style>