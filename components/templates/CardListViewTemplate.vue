<template>
  <PageHeadline :title="prop.data.pageTitle" />
  <v-container>
    <WorkCard v-for="work in prop.data.works" :key="work.name" class="my-4" :work="work" />
  </v-container>
</template>

<script lang="ts" setup>
import WorkCard, { type Work } from '~/components/organisms/WorkCard.vue'
import PageHeadline from '~/components/atoms/PageHeadline.vue'

export interface CardListViewTemplateData {
  pageTitle: string
  works: Work[]
}

const prop = defineProps<{data: CardListViewTemplateData}>()
</script>
