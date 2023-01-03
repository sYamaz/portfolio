<template>
  <v-table fixed-header>
    <tbody>
      <tr v-for="(item, i) in prop.records" :key="i">
        <td>
          {{ item.col1 }}
        </td>
        <td>{{ item.col2 }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>

export interface TwoColomnsRecord{
    col1: any
    col2: any
}

const prop = defineProps<{records: TwoColomnsRecord[]}>()

</script>
