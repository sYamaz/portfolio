<template>
  <v-card elevation="0" class="pa-6">
    <PageHeadline :title="prop.data.pageTitle" />
    <AvatarDescriptionSection
      :avatar-src="prop.data.introAvatar"
      :headline="prop.data.introHeadline"
      :description="prop.data.introDescription"
    />

    <!--Biography-->
    <ContentSection :title="prop.data.bioTitle">
      <TwoColomnsTable :records="prop.data.bioRecords" />
    </ContentSection>
    <v-row no-gutters>
      <v-btn class="mx-auto" :to="prop.data.worksLink">
        works
        <v-icon>{{ mdiChevronRight }}</v-icon>
      </v-btn>
    </v-row>
    <!--Hobby-->
    <ContentSection :title="prop.data.hobbyTitle">
      <JoinedText :text-array="prop.data.hobbyItems" class="ml-4" />
    </ContentSection>
    <!--Web-->
    <ContentSection :title="prop.data.webTitle">
      <LinkButtonStack :datas="prop.data.webLinks" />
    </ContentSection>
  </v-card>
</template>

<script lang="ts" setup>
import { mdiChevronRight } from '@mdi/js'
import LinkButtonStack from '../molecules/LinkButtonStack.vue'
import type { LinkData } from '../atoms/LinkButton.vue'
import PageHeadline from '~/components/atoms/PageHeadline.vue'
import AvatarDescriptionSection from '~/components/organisms/AvatarDescriptionSection.vue'
import ContentSection from '~/components/organisms/ContentSection.vue'
import TwoColomnsTable, { type TwoColomnsRecord } from '~/components/atoms/TwoColomnsTable.vue'
import JoinedText from '~/components/atoms/JoinedText.vue'
export interface AboutTemplateData {
  pageTitle: string
  introAvatar: string
  introHeadline: string
  introDescription: string

  bioTitle: string,
  bioRecords: TwoColomnsRecord[]

  worksLink: string,

  hobbyTitle: string,
  hobbyItems: string[]

  webTitle: string
  webLinks: LinkData[]
}

const prop = defineProps<{data: AboutTemplateData}>()

</script>
