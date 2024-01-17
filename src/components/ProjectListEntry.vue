<script setup lang="ts">
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';

    const props = defineProps<{ 
        model: SolrResultEntry
    }>();

</script>

<template>
    <div class="project-list-entry">
        {{ model }}
    </div>
</template>