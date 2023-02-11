<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar style="backdrop-filter: blur(10px);" :color="isDark() ? '#FFFFFF00' : '#FFFFFF10'">
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="changeTheme(isDark() ? 'light' : 'dark')">
        <v-icon v-if="isDark()" icon="mdi-white-balance-sunny" />
        <v-icon v-else icon="mdi-weather-night" />
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon :href="sourceUrl">
        <v-icon icon="mdi-github" />
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container style="max-width:800px;">
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <v-spacer />
      <span class="text-disabled text-caption">&copy; {{ new Date().getFullYear() }} Shun Yamazaki. All Rights Reserved.</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>
<script lang="ts" setup>
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
const drawer = ref(false)
const isDark = () => theme.value === 'dark'
const changeTheme = (mode: Mode) => { theme.value = mode }
</script>
<script lang="ts">
type Mode = 'dark' | 'light'
export default defineComponent({
  name: 'DefaultLayout'
})
</script>
