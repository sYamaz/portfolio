<template>
  <CardListViewTemplate :data="data" />
</template>

<script lang="ts" setup>
import CardListViewTemplate, {
  CardListViewTemplateData
} from '../components/templates/CardListViewTemplate.vue'

const data = ref({
  pageTitle: 'Works',
  works: [
  ]
} as CardListViewTemplateData)

fetch('works.json').then((res) => {
  return res.json()
}).then((json) => {
  data.value.works = json.works
})

</script>
