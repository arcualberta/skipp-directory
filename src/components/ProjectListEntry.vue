<script setup lang="ts">
import type { FieldData } from '@arc/arc-foundation/lib/forms/models';

    const props = defineProps<{ 
        model: FieldData
    }>();

</script>

<template>
    <div class="project-list-entry">
        {{ model }}
    </div>
</template>