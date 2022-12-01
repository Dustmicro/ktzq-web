<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      label-width="120px"
      ref="mainForm"
    >
      <el-form-item>
        <div class="top">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="limitSize"
            accept=".xls, .xlsx"
          >
            <el-button size="small" type="primary">导入</el-button>
          </el-upload>
          <download-excel
            class="export-excel-wrapper"
            :data="DetailsForm"
            :fields="json_fields"
            :header="title"
            name="未命名.xls"
          >
            <el-button size="small" type="success" @click="exportToExcel"
              >导出</el-button
            >
          </download-excel>
        </div>
      </el-form-item>
    </el-form>
    <div class="table-wrap">
      <el-table
        :data="tableDatas"
        style="width: 100%"
        v-loading="loading"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
        @selection-change="handleSelectionChange"
        :height="tableHeight"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column
          prop="orderCode"
          label="单据编号"
          width="150"
          show-overflow-tooltip
        >
        </el-table-column>

        <el-table-column
          prop="mainTopic"
          label="主题"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="factoryCodeText"
          label="部门"
          width="120"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="createName"
          label="创建人"
          width="120"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="createDate"
          label="创建时间"
          width="180"
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import JsonExcel from "vue-json-excel"
Vue.component("downloadExcel", JsonExcel)
export default {
  data () {
    return {
      formInline: {
        creatorText: "我",
        creatDate: "11：11",
        partCodeText: "支部",
        orderCode: "12123131",
      },
      tableDatas: [
        {
          orderCode: "123",
          mainTopic: "主题",
          factoryCodeText: "信息技术学院",
          createName: " 是是是",
          createDate: "11:11"
        },
        {
          orderCode: "24",
          mainTopic: "发个话费",
          factoryCodeText: "机械学院",
          createName: " 格瑞特",
          createDate: "19：05"
        },
        {
          orderCode: "0900-9",
          mainTopic: "fgrt",
          factoryCodeText: "土木学院",
          createName: " 哥哥哥",
          createDate: "9:11"
        },
        {
          orderCode: "08089",
          mainTopic: "和加官进爵",
          factoryCodeText: "西昌学院",
          createName: " 东方红",
          createDate: "11:45"
        }
      ],
      myfileList: "",
      title: "",
      json_fields: {},
      DetailsForm: [],
    }
  },
  methods: {
    handleSuccess (file) {
      //上传成功
      if (file.Code == -1) {
        ElMessage({
          showClose: true,
          message: file.Msg,
          type: "error",
          duration: 5000,
        })
      } else if (file.Code == 1) {

        this.$message({
          type: 'success',
          message: '上传成功!',
        })
        dialogImport.value = false
      } else {
        this.$message({
          type: 'error',
          message: '上传失败!',
        })

      }
    },
    limitSize (file) {
      //限制文件大小
      const size = file.size / 1024 / 1024
      if (size > 10) {
        this.$message({
          type: 'error',
          message: '文件大小不能超过10M！',
        })
        return false
      }
    },
    // ----------以下为导出Excel数据功能--------------
    exportToExcel () {
      //excel数据导出
      this.title = "基本信息",
        this.json_fields = {
          "单据编号": "orderCode",
          "主题": "mainTopic",
          "部门": "factoryCodeText",
          "创建人": "createName",
          "创建时间": "createDate",
        },
        this.DetailsForm = this.tableDatas
    },
  },

}

</script>
<style scoped>
.top {
  display: flex;
}
.el-button {
  margin: 10px;
}
</style>