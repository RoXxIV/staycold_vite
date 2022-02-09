<script setup>
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";
const { result, loading, error } = useQuery(gql`
  query getBaths {
    baths {
      data {
        id
        attributes {
          waterTemperature
          timeInWater
          weather
          date
        }
      }
    }
  }
`);
const baths = useResult(result, null, (data) => data.baths.data);
</script>

<template>
  <p>home</p>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ messages }}</div>
  <ul v-else-if="result && result.baths">
    <li v-for="bath of baths" :key="bath.id">
      {{ bath.attributes.waterTemperature }}
    </li>
  </ul>
</template>
<style lang="scss"></style>
