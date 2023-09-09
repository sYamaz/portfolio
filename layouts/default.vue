<template>
  <v-app :theme="theme">
    <v-app-bar style="backdrop-filter: blur(10px);" :style="{backgroundColor: isDark() ? '#FFFFFF00' : '#FFFFFF10'}" class="d-flex justify-center">
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="d-none d-sm-flex"
      >
        {{ item.title }}
      </v-btn>
      <v-app-bar-nav-icon aria-label="theme-color" @click.stop="changeTheme(isDark() ? 'light' : 'dark')">
        <v-icon v-if="isDark()" :icon="mdiWhiteBalanceSunny" />
        <v-icon v-else :icon="mdiWeatherNight" />
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon :href="sourceUrl" sm aria-label="toGithub">
        <v-icon :icon="mdiGithub" />
      </v-app-bar-nav-icon>
      <v-menu>
        <template #activator="{props}">
          <v-app-bar-nav-icon class="d-sm-none" v-bind="props" />
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container style="max-width:640px;">
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <v-spacer />
      <span class="">&copy; {{ new Date().getFullYear() }} Shun Yamazaki. All Rights Reserved.</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>
<script lang="ts" setup>
import { mdiWhiteBalanceSunny, mdiWeatherNight, mdiGithub } from '@mdi/js'
const title = 'Shun Yamazaki'
const sourceUrl = 'https://github.com/sYamaz/portfolio'
const items = [
  {
    title: 'About',
    to: '/'
  },
  {
    title: 'Works',
    to: '/works'
  },
  {
    title: 'Posts',
    to: '/posts'
  }
]
const theme = ref('dark')
const isDark = () => theme.value === 'dark'
const changeTheme = (mode: Mode) => { theme.value = mode }
</script>
<script lang="ts">
type Mode = 'dark' | 'light'
export default defineComponent({
  name: 'DefaultLayout'
})
</script>
