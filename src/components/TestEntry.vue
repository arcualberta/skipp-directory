<script setup lang="ts">
import { computed } from 'vue';
import * as CatfishUI from 'applets'
import * as itemHelper from '../helpers/itemHelper';
import { useSearchStore } from './../stores/SearchStore'

const props = defineProps<{ 
  model: CatfishUI.Components.ResultItem | null
  }>();
console.log("options",props.model)
  const searchStore = useSearchStore();
  const name = computed(() => itemHelper.getName(props.model))
  const position = computed(() => itemHelper.getPosition(props.model))
  const email = computed(() => itemHelper.getEmail(props.model) as string)
  console.log("name-"+name+"| position-"+position+"| email-"+email)
</script>
<template>
    <div class="results">
        test data
    </div>
    
</template>