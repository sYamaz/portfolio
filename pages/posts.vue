<template>
  <PostListTemplate :data="data" />
</template>

<script lang="ts" setup>
import PostListTemplate, { PostListTemplateData } from '~/components/templates/PostListTemplate.vue'

const data = ref({
  posts: []
} as PostListTemplateData)

fetch('articles.json').then((o) => {
  return o.json()
}).then((json) => {
  data.value.posts = json.articles
})

</script>

<style>

</style>
