<template>
  <PageHeadline title="Posts" />
  <v-container>
    <v-lazy v-for="post in prop.data.posts" :key="post.id">
      <OGPCard class="ma-4" :data="post" />
    </v-lazy>
  </v-container>
</template>

<script lang="ts" setup>
import { PostData } from '~/types/Qiita/Api/v2/datas'
import OGPCard from '~/components/molecules/OGPCard.vue'
import PageHeadline from '~/components/atoms/PageHeadline.vue'

export interface PostListTemplateData {
  posts: PostData[];
}

const prop = defineProps<{data: PostListTemplateData}>()

</script>

<style>

</style>
