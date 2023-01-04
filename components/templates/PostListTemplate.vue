<template>
  <ContentSection title="Posts">
    <v-lazy v-for="post in prop.data.posts" :key="post.id">
      <OGPCard class="ma-4" :data="post" />
    </v-lazy>
  </ContentSection>
</template>

<script lang="ts" setup>
import { PostData } from '~/types/Qiita/Api/v2/datas'
import OGPCard from '~/components/molecules/OGPCard.vue'
import ContentSection from '~/components/organisms/ContentSection.vue'

export interface PostListTemplateData {
  posts: PostData[];
}

const prop = defineProps<{data: PostListTemplateData}>()

</script>

<style>

</style>
