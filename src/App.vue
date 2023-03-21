
 * new page
 * @author: wh
 * @since: 2023-03-20
 * App.vue

<template>
  <div class="container">
      <wh :name="'fdfsgdfg'" @on-click="fatherHandle"></wh>
  </div>
</template>

<script setup lang="ts">
import {ref}  from 'vue'
import wh from './App'
const a = ref<number>(123)
const fatherHandle = (name:string)=>{
  console.log('父极输出',name);
  
}
</script>

<style scoped></style>
