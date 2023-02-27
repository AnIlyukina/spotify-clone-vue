<script setup>
  import { toRefs, ref } from 'vue'
  import { RouterLink } from 'vue-router';

  import uniqolor from 'uniqolor'

  defineProps({
    category:String,
    image:String,
  })

  let randColor = ref('')
  randColor.value = uniqolor.random()


</script>

<template>
  <RouterLink to="library">
    <div
      v-if="randColor.color"
      :style="`background-color: ${randColor.color}`"
      class="
        contract-[2]
        brightness-[0.87]
        rounded-xl
        aspect-square
        relative
        overflow-hidden
      "
    >
      <div class="text-white pt-3 pl-4 font-semibold text-[23px]">
        {{ category }}
      </div>
      <img
        class="
          absolute
          contract-[0.55]
          -right-3.5
          bottom-0
          max-w-[100px]
          rotate-[20deg]
        "
        :src="image || ''"
      >
    </div>
  </RouterLink>
</template>
