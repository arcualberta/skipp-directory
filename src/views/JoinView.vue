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
import { useProfileStore } from '@/stores/ProfileStore'
  
  const route = useRoute()
  const submissionId = route.params.submissionId as unknown as Guid
  const solrApiRoot = config.solrApiRoot;
  const formSubmissionCallback = (submissionStatus:StatusCodes): void => {
      if(submissionStatus == StatusCodes.OK){
        router.push({name:'success'})
      }
  }

  const store = useProfileStore()
  store.formSubmissionMode = "CREATE";
  
</script>
<template>
  <div class="container">
    <div class="create-profile-description">
      <div class="inner-container">
        This work is part of a larger effort to identify Indigenous-engaged research at the University of Alberta with the aim of connecting to Indigenous community needs specifically but also to making researchers, funders, students and community members aware of the work that is being done. The longer-term hope is that this cataloguing will support those involved by identifying potential collaborations, resources and access for communities, nations, and organizations
For additional information, please visit the Roots of Change webpage.

This work is part of a larger effort to identify Indigenous-engaged research at the University of Alberta with the aim of connecting to Indigenous community needs specifically but also to making researchers, funders, students and community members aware of the work that is being done. The longer-term hope is that this cataloguing will support those involved by identifying potential collaborations, resources and access for communities, nations, and organizations
<br>
<br>
For additional information, please visit the <a class="roots-of-change-url" href="https://www.ualberta.ca/situated-knowledges-indigenous-peoples-place/rootsofchange/index.html">Roots of Change</a> webpage.
      </div>
      </div>
      <div class="inner-container form-background">
        <div class="create-profile-heading">
      <h1>CREATE A PROFILE</h1>
    </div >
    <div class="protection-description">
      Protection of Privacy - Personal information provided is collected in accordance with Section 33(c) of the Alberta Freedom of Information and Protection of Privacy Act (the FOIP Act) and will be protected under Part 2 of that Act. it will be used for the purpose of the Indigenous-Engaged Researcher Database. Information collected will be used to administer and manage the database. Information will be used to highlight and identify Indigenous-engaged research at the University of Alberta. Any public disclosures of information from the director will be in aggregate form only. Should you require further information about collection, use, and disclosure of personal information please contact <a href="mailto:skipp@ualberta.ca" class="mail-to-link">skipp@ualberta.ca</a> 
    </div>
    <div class="inner-container form-details">
      <FormSubmission 
      :api-root = solrApiRoot
      :data-store = "'Solr'"
      securityToken = ""
      :form-template = "JoinUsFormTemplate"
      :pinia-instance = "getActivePinia()" 
      :tanent-id = "('a4a50d9f-fd20-4d74-8274-2acad28a6553' as unknown as Guid)"
      :msg = "''" 
      @arc-form-submit = "formSubmissionCallback"
      >
    </FormSubmission>
    </div>
    
      </div>
    
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
