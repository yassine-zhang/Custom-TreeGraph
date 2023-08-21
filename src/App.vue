<template>
  <Tree :data="datas" :direction="[TreeGroupDir.horizontal]"></Tree>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Tree from '@/components/tree/tree.vue'
import { TreeGroupDir } from '@/components/tree/types'
import testData from '@/testData.json'

const datas = ref(testData)
</script>