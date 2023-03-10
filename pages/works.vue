<template>
  <CardListViewTemplate :data="data" />
</template>

<script lang="ts" setup>
import CardListViewTemplate, {
  CardListViewTemplateData
} from '../components/templates/CardListViewTemplate.vue'

const getStaticImageUrl = (name:any) => {
  return new URL(`../static/${name}`, import.meta.url).href
}

const config = useRuntimeConfig()

const data: CardListViewTemplateData = {
  pageTitle: 'Works',
  works: [
    {
      name: 'Youtube-to-speech',
      img: getStaticImageUrl('youtube2speech.png'),
      text: 'youtube-live comment reader. (Web speech API)',
      platform: ['Web'],
      status: 'Private',
      url: '',
      outerurl: '',
      buttonName: ''
    },
    {
      name: 'RoutineTree',
      img: getStaticImageUrl('RoutineTree.png'),
      text: 'Task management application that helps you accomplish your daily routine tasks.',
      platform: ['iOS'],
      status: 'Released',
      url: '',
      outerurl: 'https://syamaz.github.io/RoutineTree/',
      buttonName: 'Read more'
    },
    {
      name: 'My homepage',
      img: getStaticImageUrl('MyHomepage.png'),
      text: 'This website.',
      platform: ['Web'],
      status: 'Released',
      url: config.app.baseURL,
      outerurl: '',
      buttonName: 'Top page'
    }
  ]
}

</script>
