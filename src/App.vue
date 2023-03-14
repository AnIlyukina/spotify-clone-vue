<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import AppBar from './components/AppBar.vue'
import AppNavigation from './components/AppNavigation.vue'
import AppMain from './components/AppMain.vue'

import MusicPlayer from './components/MusicPlayer.vue'

import { useSongStore } from './stores/song'

import { storeToRefs } from 'pinia'
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})

</script>

<template>
  <app-bar/>

  <app-navigation/>

  <app-main>
    <RouterView/>
  </app-main>

  <music-player v-if="currentTrack"/>
</template>
