<script setup lang="ts">
    import { ref } from 'vue'
    import { getActivePinia } from 'pinia'
    import { useRoute } from 'vue-router'
    import { Guid } from 'guid-typescript'
    import {default as config} from "@/appsettings";
    import { FormSubmission } from '@arc/form-submission'
    
    const route = useRoute()
    const submissionId = route.params.submissionId as unknown as Guid
    const apiRoot= config.dataRepositoryApiRoot;


</script>
<template>
  <div class="container">
    <FormSubmission :pinia-instance="getActivePinia()" :apiRoot="'https://localhost:5020'" :msg="''" :formTemplateId="config.joinUsFormId"></FormSubmission>
  </div>
</template>
<style scoped>
.info-field{
  font-size: 24px;
  font-weight: 500;
  color: #327D49;
}
</style>
