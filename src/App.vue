<template>
  <div class="h-screen w-screen flex flex-col pt-12">
    <TopBar />
    <button class="bg-green-600 h-12" @click="test">监听网络</button>
  </div>
</template>

<script setup>
import TopBar from '/~/components/layout/TopBar.vue'

const test = () => {
  console.log(window.require)
  if (window.require) {
    const ipc = window.require('electron').ipcRenderer
    ipc.send('perform', 'sss')
  }
}
</script>
