<script setup lang="ts">
    import { useProfileStore } from '../stores/ProfileStore'
    import { getActivePinia } from 'pinia'
    import { useRoute, useRouter } from 'vue-router'
    import { Guid } from 'guid-typescript';
    import { FormSubmission } from '@arc/form-submission'
    import {default as config} from "@/appsettings";
    import { JoinUsFormTemplate } from '@/joinUsFormTemplate'
    import router from '../router'
    import { StatusCodes } from 'http-status-codes'

    const profileStore = useProfileStore();
    const route = useRoute();
    const formSubmissionCallback = (submissionStatus:StatusCodes): void => {
      if(submissionStatus == StatusCodes.OK){
        router.push({name:'success'})
      }
  }
    const id = route.params.id as unknown as Guid;
    //profileStore.setActiveProfile(id);
    const formData = profileStore.getFormData;
    const solrApiRoot = config.solrApiRoot;

</script>

<template>
<br>
<br>
    {{ id }}


    <!-- {{ formData }} -->

    <FormSubmission 
      :api-root = solrApiRoot
      :data-store = "'Solr'"
      securityToken = ""
      :form-template = "JoinUsFormTemplate"
      :formData = "formData"
      :pinia-instance = "getActivePinia()" 
      :tanent-id = "('a4a50d9f-fd20-4d74-8274-2acad28a6553' as unknown as Guid)"
      :msg = "''" 
      @arc-form-submit = "formSubmissionCallback"
      >
    </FormSubmission>
</template>

<style>
</style>