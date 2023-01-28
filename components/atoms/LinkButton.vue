<template>
  <v-btn elevation="0" class="info--text" style="text-transform:none;" :append-icon="prop.linkData.icon" :href="prop.linkData.url" variant="text">
    {{ prop.linkData.name }}
  </v-btn>
</template>

<script lang="ts" setup>

export interface LinkData{
    icon:any
    name:string
    url:string
}

const prop = defineProps<{linkData:LinkData}>()
</script>
