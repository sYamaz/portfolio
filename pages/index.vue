<template>
  <AboutTemplate :data="data" />
</template>
<script lang="ts" setup>
import { mdiTwitter, mdiGithub } from '@mdi/js'
import AboutTemplate, {
  AboutTemplateData
} from '~/components/templates/AboutTemplate.vue'

const data = ref({
  pageTitle: 'Shun Yamazaki',
  introAvatar: 'sYamaz.jpeg',
  introHeadline: 'Corporate developer',
  introDescription:
      'Shun is a developer based in Shizuoka in Japan. He is focusing on daily development and improving his skills to achieve his goal of becoming a full-stack engineer.',
  bioTitle: 'Biography',
  bioRecords: [],
  worksLink: '/works',
  hobbyTitle: 'Hobby',
  hobbyItems: ['Music🎵', ' Guitar🎸', 'Ramen🍜', 'Travel🛫'],
  webTitle: 'Web',
  webLinks: [
    {
      icon: mdiTwitter,
      name: 'Twitter(@ShunYamazaki5)',
      url: 'https://twitter.com/ShunYamazaki5'
    },
    {
      icon: mdiGithub,
      name: 'GitHub(sYamaz)',
      url: 'https://github.com/sYamaz'
    },
    {
      icon: '',
      name: 'Qiita(sYamaz)',
      url: 'https://qiita.com/sYamaz'
    }
  ]
} as AboutTemplateData)

onMounted(() => {
  fetch('bios.json').then((res) => {
    return res.json()
  }).then((json) => {
    data.value.bioRecords = json.bioRecords
  })
})
</script>
