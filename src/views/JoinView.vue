<script setup lang="ts">
    import { ref } from 'vue'
    import { getActivePinia } from 'pinia'
    import { useRoute } from 'vue-router'
    import { Guid } from 'guid-typescript'
    import {default as config} from "@/appsettings";
    
    const route = useRoute()
    const submissionId = route.params.submissionId as unknown as Guid
    const apiRoot= config.dataRepositoryApiRoot;


</script>
<template>
  <div class="row">
    <FormSubmission :repository-root="apiRoot" :piniaInstance="getActivePinia()" :form-id="config.joinUsFormId"></FormSubmission>
  </div>
</template>
