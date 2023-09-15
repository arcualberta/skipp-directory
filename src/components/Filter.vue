<script setup lang="ts">
import { defineComponent, type PropType } from "vue";
import * as CatfishUI from 'applets'
import { useSearchStore } from '../stores/SearchStore'

const props = defineProps<{ 
  options: CatfishUI.Components.SolrQuery.ValueConstraint[]
  }>();
  const searchStore = useSearchStore();
  const toggleOption = (option: CatfishUI.Components.SolrQuery.ValueConstraint) => {
    option.selected = !option.selected;
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