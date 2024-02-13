<script setup lang="ts">

import { getActivePinia } from 'pinia';
import { default as config}  from '@/appsettings'
import { ref } from 'vue';
import { useProfileStore } from '../stores/ProfileStore'
import LoginResult from '@arc/authorization'

const tenantId = config.tenantId;
const authApiRoot = config.authorizationApiRoot;
const profileStore = useProfileStore();
const userToken = ref(null)
const getUserLoginToken = ((val: string)=>{
    console.log("user token: ", val)
    userToken.value = JSON.parse(val) as LoginResult;
    profileStore.setUserLoginResult(userToken.value)

})
</script>


<template>
    <div>Login View </div>

    <Login :pinia-instance="getActivePinia()"
           :tenantId="tenantId" 
           :apiRoot="authApiRoot"
            @getJwtLoginResult="getUserLoginToken"
             />

             <div>{{userToken}}</div>
</template>
<style>

</style>
