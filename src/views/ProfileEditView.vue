<script setup lang="ts">
    import { useProfileStore } from '../stores/ProfileStore'
    import { useRoute, useRouter } from 'vue-router'
    import { Guid } from 'guid-typescript';

    const profileStore = useProfileStore();

    const route = useRoute();
    
    const id = route.params.id as unknown as Guid;
    profileStore.setActiveProfile(id);
</script>

<template>
<br>
<br>
    {{ id }}
</template>

<style>
</style>