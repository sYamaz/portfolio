<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="12" class="d-flex justify-center" style="min-width:fit-content;">
        <v-avatar alt="sYamaz" size="84" class="my-1">
          <img :src="prop.avatarSrc" width="84" height="84" alt="syamas-avatar">
        </v-avatar>
      </v-col>
      <v-col>
        <p>{{ prop.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

const prop = defineProps<{ headline: string, description: string, avatarSrc: any }>()
</script>
