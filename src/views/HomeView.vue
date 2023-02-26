<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <div class="p-8">
    <button
      type="buttom"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Podcasts to make you smaster
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <home-card
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        image="https://picsum.photos/id/31/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="md:block hidden"
        image="https://picsum.photos/id/32/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="lg:block hidden"
        image="https://picsum.photos/id/33/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="xl:block hidden"
        image="https://picsum.photos/id/34/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
    </div>
  </div>

  <div class="p-8">
    <button
      type="buttom"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended Radio
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <home-card
        image="https://picsum.photos/id/35/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        image="https://picsum.photos/id/36/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="md:block hidden"
        image="https://picsum.photos/id/37/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="lg:block hidden"
        image="https://picsum.photos/id/38/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="xl:block hidden"
        image="https://picsum.photos/id/39/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
    </div>
  </div>

  <div class="p-8">
    <button
      type="buttom"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended Songs
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <home-card
        image="https://picsum.photos/id/40/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        image="https://picsum.photos/id/41/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="md:block hidden"
        image="https://picsum.photos/id/42/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="lg:block hidden"
        image="https://picsum.photos/id/43/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
      <home-card
        class="xl:block hidden"
        image="https://picsum.photos/id/44/300/300"
        title="Title is here"
        sub-title="SubTitle is here"
      />
    </div>
  </div>


</template>
