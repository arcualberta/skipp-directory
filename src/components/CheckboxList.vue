<script setup lang="ts">
import { defineComponent, type PropType } from "vue";
import * as CatfishUI from 'applets'
import { useSearchStore } from './../stores/SearchStore'

const props = defineProps<{ 
  options: CatfishUI.Components.SolrQuery.ValueConstraint[]
  }>();
console.log("options",props.options)
  const searchStore = useSearchStore();
  const toggleOption = (option: CatfishUI.Components.SolrQuery.ValueConstraint) => {option.selected = !option.selected;
                searchStore.fetchData();}
</script>

<template>
  <input type="checkbox" value="Jack"/>
  
</template>

<style scoped>

</style>