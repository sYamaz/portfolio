<template>
  <v-list style="padding:0px" aria-label="link-list">
    <v-list-item v-for="data in prop.datas" :key="data.name" class="pa-0">
      <LinkButton :link-data="data" />
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
import LinkButton, { type LinkData } from '../atoms/LinkButton.vue'

const prop = defineProps<{datas: LinkData[]}>()

</script>
