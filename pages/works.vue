<template>
  <CardListViewTemplate :data="data" />
</template>

<script lang="ts" setup>
import CardListViewTemplate, {
  CardListViewTemplateData
} from '../components/templates/CardListViewTemplate.vue'

const config = useRuntimeConfig()

const data: CardListViewTemplateData = {
  pageTitle: 'Works',
  works: [
    {
      name: 'doc-web',
      img: 'doc-web.png',
      text: 'markdown editor. (frontend and backend)',
      platform: ['Web'],
      status: 'Private',
      url: '',
      outerurl: '',
      buttonName: ''
    },
    {
      name: 'Youtube-to-speech',
      img: 'youtube2speech.png',
      text: 'youtube-live comment reader. (Web speech API)',
      platform: ['Web'],
      status: 'Private',
      url: '',
      outerurl: '',
      buttonName: ''
    },
    {
      name: 'RoutineTree',
      img: 'RoutineTree.png',
      text: 'Task management application that helps you accomplish your daily routine tasks.',
      platform: ['iOS'],
      status: 'Released',
      url: '',
      outerurl: 'https://syamaz.github.io/RoutineTree/',
      buttonName: 'Read more'
    },
    {
      name: 'My homepage',
      img: 'MyHomepage.png',
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
