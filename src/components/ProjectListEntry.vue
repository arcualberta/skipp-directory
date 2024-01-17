<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';
import * as itemHelper from '../helpers/itemHelper';
    const props = defineProps<{ 
        model: SolrResultEntry
    }>();

    const title = computed(() => itemHelper.getProjectTitle(props.model as SolrResultEntry));
    const description = computed(() => itemHelper.getProjectDescription(props.model as SolrResultEntry));
    const initiation = computed(() => itemHelper.getProjectInitiation(props.model as SolrResultEntry));
    const role = computed(() => itemHelper.getProjectRole(props.model as SolrResultEntry));
    const index = computed(() => itemHelper.getProjectIndex(props.model as SolrResultEntry)) as unknown as number;
    
    function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

</script>

<template>
    <div v-bind:class="(checkOddEven(index)==='Even')?'research-projects-background':''">
        <div class="container project-list-entry">
        <div class="project-list"><span class="project-list-headers">Project Title : </span> {{ title }}</div>
        <div class="project-list"><span class="project-list-headers">Project Description : </span> {{ description }}</div>
        <div class="project-list"><span class="project-list-headers">Research Initiated By : </span> {{ initiation }}</div>
        <div class="project-list"><span class="project-list-headers">Role Played By Community In Project : </span>{{ role }}</div>
    </div>
    </div>
    
</template>
<style>
.project-list-entry{
    padding-top: 50px;
    padding-left: 80px;
}
.project-list-headers{
    font-weight: 700;
}
.project-list{
    padding-bottom: 30px ;
}
.research-projects-background{
  background-color: #EFF7F4;
  min-height: 200px;
}
</style>