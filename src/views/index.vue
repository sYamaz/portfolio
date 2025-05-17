<template>
  <section title="about me" class="about-me-section">
    <h1>about me</h1>
    <img src="../assets/sYamaz.jpeg" class="rounded-full">
    <p>山﨑 駿（Shun Yamazaki）。1990年生まれ。</p>
    <p>東京理科大学理工学部卒業後、オリエンタルモーター(株)にてWindowsアプリの開発経験を経て、現在は(株)Z会にてWebサービスの開発に携わっている。</p>
    <p>主なスキルはvue, golang, aws</p>
  </section>

  <section title="web">
    <h1>web</h1>
    <ul>
      <li v-for="(link, i) in webLinks" :key="i">
        <a :href="link.url" >{{ link.name }}</a>
      </li>
    </ul>
  </section>

  <section title="個人開発">
    <h1>個人開発</h1>
    <div class="works-container">
      <div class="work-item" v-for="(work, i) in works" :key="i">
        <h3>{{ work.name }}</h3>
        <img v-if="work.img !== ''" :src="work.img" class="work-image rounded">
        <dev v-else class="work-image" style="aspect-ratio: 16/9;">
          no image
        </dev>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import RoutineTreePng from '../assets/RoutineTree.png'
import Youtube2SpeechPng from '../assets/youtube2speech.png'
import TaberunPng from '../assets/taberun.png'
import CanvasDiagramGif from '../assets/canvas-diagram.gif'
const webLinks = [
  {
    name: 'Twitter(@ShunYamazaki5)',
    url: 'https://twitter.com/ShunYamazaki5'
  },
  {
    name: 'GitHub(sYamaz)',
    url: 'https://github.com/sYamaz'
  },
  {
    name: 'Qiita(sYamaz)',
    url: 'https://qiita.com/sYamaz'
  }
]

const works = [
  {
    name: "taberun",
    img: TaberunPng,
  },
  {
    name: "@syamaz/catmull-rom-spline(npm)",
    img: "",
  },
  {
    name: "canvas-diagram",
    img: CanvasDiagramGif
  },
  {
    name: "Youtube-to-speech",
    img: Youtube2SpeechPng
  },
  {
    name: "RoutineTree(iOS)",
    img: RoutineTreePng
  }
]

</script>
<style lang="scss" scoped>
section {
  margin-bottom: 72px;
}

.about-me-section > p {
  margin-left: 10%;
  margin-right: 10%;
}

.works-container {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;

  .work-item {
    padding: 8px;
    .work-image {
      box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.12%);
      width: 100%;
      color: white;
      background-color: #a0a0a0;
      display: block;
    }
  }
}

.rounded-full{
  border-radius: calc(infinity * 1px);
}

.rounded {
  border-radius: 8px;
}

@media (max-width: 639px) {
  .works-container {
    grid-template-columns: 1fr;
  }
}
</style>
