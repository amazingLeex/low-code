<script setup lang="ts"></script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <components-source></components-source>
      <draw-continer></draw-continer>
      <components-editor></components-editor>
    </el-main>
  </el-container>
</template>
<style lang="less" scoped>
  .el-container {
    width: 100%;
    height: 100vh;
    background-color: #c6e2ff;
  }
  .el-header {
    background-color: #79bbff;
  }
  .el-main {
    display: flex;
    main {
      border-right: 1px solid #606266;
    }
  }
</style>
