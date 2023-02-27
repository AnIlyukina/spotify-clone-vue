<script setup>

import { RouterLink } from 'vue-router'
import MenuItem from '../components/MenuItem.vue'

</script>

<template>
  <div
    id="SideNav"
    class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
    <RouterLink to="/">
      <img
        alt=""
        width="125"
        src="/images/icons/spotify-logo.png">
    </RouterLink>
    <div class="my-8"></div>
    <ul>
      <RouterLink to="/">
        <menu-item
          class="ml-[1px]"
          :icon-size="23"
          name="Главная"
          icon-string="home"
          page-url="/"
        />
      </RouterLink>
      <RouterLink to="/search">
        <menu-item
          class="ml-[1px]"
          :icon-size="24"
          name="Поиск"
          icon-string="search"
          page-url="/search"
        />
      </RouterLink>
      <RouterLink to="/library">
        <menu-item
          class="ml-[2px]"
          :icon-size="23"
          name="Библиотека"
          icon-string="library"
          page-url="/library"
        />
      </RouterLink>
      <div class="py-3.5"></div>
      <menu-item
        :icon-size="24"
        name="Создать плейлист"
        icon-string="playlist"
        page-url="/playlist"
      />
      <menu-item
        class="ml-[1px]"
        :icon-size="27"
        name="Нравится"
        icon-string="liked"
        page-url="/liked"
      />
    </ul>
    <div class="border-b border-b-gray-700"></div>
    <ul>
      <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Мой плейлист #1</li>
      <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Мой плейлист #2</li>
      <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Мой плейлист #3</li>
      <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Мой плейлист #4</li>
    </ul>
  </div>
</template>
