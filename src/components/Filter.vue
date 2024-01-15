<script setup lang="ts">
import { defineComponent, type PropType } from "vue";
import { useSearchStore } from '../stores/SearchStore'
import type { SolrQuery } from "@arc/arc-foundation/lib/solr/models/solrQuery";

const props = defineProps<{ 
  options: SolrQuery.ValueConstraint[]
  }>();
  const searchStore = useSearchStore();
  const toggleOption = (option: SolrQuery.ValueConstraint) => {
    option.selected = !option.selected;
    searchStore.offset = 0;
    searchStore.fetchData();
    }
</script>

<template>
  <div class="filter">
    <div class="dropdown-content">
            <div v-for="(option, index) in options" :key="index">
                <input @click="toggleOption(option)" type="checkbox" /> {{option.value}}
            </div>
        </div>
  </div>
  
</template>

<style scoped>

</style>