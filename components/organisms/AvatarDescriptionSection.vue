<template>
  <v-container>
    <div class="d-flex justify-center" style="min-height: 84px;">
      <v-avatar alt="sYamaz" size="84" class="my-1">
        <img :src="prop.avatarSrc" width="84" height="84" alt="syamas-avatar">
      </v-avatar>
    </div>
    <p style="min-height: 72px;">
      {{ prop.description }}
    </p>
  </v-container>
</template>

<script lang="ts" setup>

const prop = defineProps<{ headline: string, description: string, avatarSrc: any }>()
</script>
