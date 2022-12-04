<template>
  <div>
    <!-- <div v-if="$route.params.tab === 'IndexContent'">
      <IndexContent></IndexContent>
    </div> -->
    <!-- <div>
      {{componentsMap.has($route.params.tab) ? componentsMap.get($route.params.tab) : ''}}
    </div> -->
    <div>
      {{componentsObj[$route.params.tab]}}
    </div>
  </div>
</template>

<script>
  import IndexContent from '../../../components/IndexContent'
  export default {
    data() {
      return {
        // componentsMap: new Map([
        //   ['IndexContent', <IndexContent></IndexContent>]
        // ]),
        componentsObj: {
          test: <IndexContent></IndexContent>
        }
      }
    }
  }
</script>

<style>

</style>