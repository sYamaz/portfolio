<template>
  <v-table fixed-header>
    <tbody>
      <tr v-for="(item, i) in prop.records" :key="i">
        <td>
          {{ item.year }}
        </td>
        <td>{{ item.summary }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>

export interface TwoColomnsRecord{
    year: any
    summary: any
}

const prop = defineProps<{records: TwoColomnsRecord[]}>()

</script>
