<template>
  <div>
    <el-row>
      <el-col :span="20">
        <el-input placeholder="请输入关键词搜索" v-model="input" clearable>
        </el-input>
      </el-col>
      
      <el-col :span="4">
        <el-button type="primary">搜索</el-button>
        <el-button type="warning">添加</el-button>
      </el-col>
      <el-col :span="24">
      <el-table :data="tableData" border style="width: 90%" >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  create() {

  },
  methods: {

  }
}

</script>
<style scoped>

</style>