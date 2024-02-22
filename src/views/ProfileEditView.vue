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
    import { onMounted, computed } from 'vue';
    import { useApiRootsStore } from '@/stores/apiRootsStore';

    const profileStore = useProfileStore();
    const route = useRoute();
    const formSubmissionCallback = (submissionStatus:StatusCodes): void => {
      if(submissionStatus == StatusCodes.OK){
        router.push({name:'success'})
      }
    }
    const id = route.params.id as unknown as Guid;
    profileStore.setActiveProfile(id);
    profileStore.formSubmissionMode = "UPDATE";

    const formData = computed(() => profileStore.getFormData);
    const apiRootsStore = useApiRootsStore();
    
    onMounted(() => {
      profileStore.loadApiKey()
    })


</script>

<template>
    <div class="container">
        <FormSubmission 
          :api-root = apiRootsStore.solrRoot
          :data-store = "'Solr'"
          :securityToken = "profileStore.getApiKey"
          :form-template = "JoinUsFormTemplate"
          :formData = "formData"
          :is-update = "true"
          :pinia-instance = "getActivePinia()" 
          :tanent-id = "('a4a50d9f-fd20-4d74-8274-2acad28a6553' as unknown as Guid)"
          :msg = "''" 
          @arc-form-submit = "formSubmissionCallback"
        >
    </FormSubmission>
    </div>

    
</template>

<style>
.ext-option-button{
  background-color: #327D49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.ext-op-delete{
  margin-left: 10px;
}
.ext-option-text{
  margin-top: 5px;
}
.collapse-button{
  background-color: #327D49;
  color: white;
  border: none;
  border-radius: 5px;
  height: 35px;
}
.composite-field-heading{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}
.add-button{
  background-color: #327D49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
}
.submit-button{
  background-color: #327D49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
}
.form-details{
  background-color: white;
  padding-top: 50px;
}
.create-profile-description{
  text-align: justify;
  margin-top: 100px;
}
.protection-description{
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px 25px 50px 25px;
  text-align: justify;
  background-color: #F4F9F6;
}
.info-field{
  font-size: 24px;
  font-weight: 500;
  color: #327D49;
}
.info-field-description{
  font-size: 16px;
    width: 100%;
    color: #787878;
    text-align: justify;
}
.required{
  color: red;
}
.create-profile-heading{
  margin-top: 100px;
  padding-top: 50px;
  font-size: 64px;
  font-weight: 500;
  color: #327D49;
}
.form-background{
  background-color: #F4F9F6;
}
.roots-of-change-url{
  text-decoration:underline;
  color: black;
}
.delete-button{
  float:right;
}
.add-button{
  float:right;
}
.compositeField{
  padding: 10px;
  margin-bottom: 30px;
}
.lightGrayBorder{
  border: 1px solid lightgray;
  border-radius: 5px;
}
/* insert field button*/
.insertFieldBtn{
    text-align: center;
    width: 100%;
   }
.fontSize2em{
    font-size: 2rem;
}
.inner-container{
  padding-left: 100px;
  padding-right: 100px;
}
</style>