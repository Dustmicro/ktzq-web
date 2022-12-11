<template>
  <div>
    <div class="ss">
      <el-row :gutter="20">
        <el-col :span="24">
          <h1 class="title">查询条件</h1>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-input placeholder="请输入关键词搜索" v-model="input" clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入关键词搜索" v-model="input" clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入关键词搜索" v-model="input" clearable>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索</el-button>
          <el-button type="warning">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <item></item>
    </div>
  </div>
</template>
<!-- 这里发送请求，并将获得的数据传到item -->
<script>
import item from "./item.vue"
export default {
  components: {
    item
  },
  data() {
    return {
      input: '',
    }
  },
  create() {

  },
  methods: {

  }
}

</script>
<style scoped>

.title
{
  font-size: 20px;
  font-weight: 400;
}
.ss{
  margin:20px 0 20px 80px;
  /* background-color: red; */
  background-color: rgba(200, 200, 200, 0.253);
  border-radius: 15px;
  box-shadow: 20px;
  height: 160px;
  width: 90%;

}
</style>