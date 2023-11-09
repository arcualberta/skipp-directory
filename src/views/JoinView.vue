<script setup lang="ts">
  import { ref } from 'vue'
  import { getActivePinia } from 'pinia'
  import { useRoute } from 'vue-router'
  import router from '../router'
  import { Guid } from 'guid-typescript'
  import {default as config} from "@/appsettings";
  import { FormSubmission } from '@arc/form-submission'
  import { StatusCodes } from 'http-status-codes'

  import { JoinUsFormTemplate } from '@/joinUsFormTemplate'
  
  const route = useRoute()
  const submissionId = route.params.submissionId as unknown as Guid
  const solrApiRoot = config.solrApiRoot;
  const formSubmissionCallback = (submissionStatus:StatusCodes): void => {
      console.log("Submission Status:",submissionStatus)

      if(submissionStatus == StatusCodes.OK){
        console.log("sucess")
        router.push({name:'success'})
      }
  }
console.log("solrApiRoot",solrApiRoot)
</script>
<template>
  <div class="container">
    <div class="create-profile-description">
      This work is part of a larger effort to identify Indigenous-engaged research at the University of Alberta with the aim of connecting to Indigenous community needs specifically but also to making researchers, funders, students and community members aware of the work that is being done. The longer-term hope is that this cataloguing will support those involved by identifying potential collaborations, resources and access for communities, nations, and organizations
For additional information, please visit the Roots of Change webpage.

This work is part of a larger effort to identify Indigenous-engaged research at the University of Alberta with the aim of connecting to Indigenous community needs specifically but also to making researchers, funders, students and community members aware of the work that is being done. The longer-term hope is that this cataloguing will support those involved by identifying potential collaborations, resources and access for communities, nations, and organizations
For additional information, please visit the <a class="roots-of-change-url" href="https://www.ualberta.ca/situated-knowledges-indigenous-peoples-place/rootsofchange/index.html">Roots of Change</a> webpage.
    </div>
    <div class="create-profile-heading">
      <h1>CREATE A PROFILE</h1>
    </div >
    <div class="protection-description">
      Protection of Privacy - Personal information provided is collected in accordance with Section 33(c) of the Alberta Freedom of Information and Protection of Privacy Act (the FOIP Act) and will be protected under Part 2 of that Act. It will be used for the purpose of the Intersections of Gender Researcher Directory. Information collected will be used to administer and manage the Gender Researcher Directory. Information will be used to highlight and mobilize intersectional research, for statistical reporting, and to identify and support equity seeking groups. Any public disclosures of information from the directory will be in aggregate form only.Should you require further information about collection, use and disclosure of personal information, please contact intersectionsofgender@ualberta.ca
    </div>
    <FormSubmission 
      :pinia-instance="getActivePinia()" 
      :api-root=solrApiRoot
      :msg="''" 
      :form-template="JoinUsFormTemplate"
      :data-store="'Solr'"
      @arc-form-submit="formSubmissionCallback"
      >
    </FormSubmission>
  </div>
</template>
<style>
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
  font-size: 64px;
  font-weight: 500;
  color: #327D49;
}
.roots-of-change-url{
  text-decoration:underline;
  color: black;
}
</style>
