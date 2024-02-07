<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';
import * as itemHelper from '../helpers/itemHelper';
    const props = defineProps<{ 
        model: SolrResultEntry
    }>();

    const title = computed(() => itemHelper.getProjectTitle(props.model as SolrResultEntry));
    const description = computed(() => '<p>' + itemHelper.getProjectDescription(props.model as SolrResultEntry).split('\n').join('</p><p>') + '</p>');
    const initiation = computed(() => itemHelper.getProjectInitiation(props.model as SolrResultEntry));
    const role = computed(() => itemHelper.getProjectRole(props.model as SolrResultEntry));
    function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

</script>

<template>    
    <div class="research-projects-background">
        <div class="container project-list-entry">
            <div class="project-list"><span class="project-list-headers">Project Title : </span> {{ title }}</div>
            <div class="project-list"><span class="project-list-headers">Project Description : </span> <div v-html="description"></div></div>
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

.research-projects-background:nth-child(odd){
  background-color: #EFF7F4;
  min-height: 200px;
}

.research-projects-background:nth-child(even){
  background-color: #FFFFFF;
  min-height: 200px;
}

</style>