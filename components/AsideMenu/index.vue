<template>
  <div class="h-full bg-gray-300">
    <ul>
      <li 
        @click="menuItemClick(item)" 
        :class="[menuActiveItem===item.id ? 'bg-white text-green-400' : '', 'hover:bg-white hover:text-green-400']" 
        v-for="item in menuList" 
        :key="item.id"
      >
        <MenuItem :item=item></MenuItem>
      </li>
    </ul>
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
      menuActiveItem: 0,
      menuList: [
        {
          id: 0,
          title: '首页',
          icon: 'a',
          url: 'index'
        },
        {
          id: 1,
          title: '基础设置',
          icon: 'a',
          url: 'basicSetting'
        },
        {
          id: 2,
          title: '组织管理',
          icon: 'b',
          url: 'orgMang'
        },
        {
          id: 3,
          title: '收费管理',
          icon: 'c',
          url: 'costMang'
        },
      ]
    }
  },

  methods: {
    menuItemClick: function(item) {
      this.menuActiveItem = item.id
      this.$router.push(item.url)
    }
  }
}
</script>

<style>

</style>