<script setup lang="ts">

import { getActivePinia } from 'pinia';
import { default as config}  from '@/appsettings'
import { ref } from 'vue';
import { useProfileStore } from '../stores/ProfileStore'
import LoginResult from '@arc/authorization'
import UserMembership from '@arc/authorization'

const tenantId = config.tenantId;
const authApiRoot = config.authorizationApiRoot;
const profileStore = useProfileStore();
const userToken = ref(null)
const getUserLoginResult = ((val: string)=>{
    console.log("user token: ", val)
    userToken.value = JSON.parse(val) as LoginResult;
    profileStore.setUserLoginResult(userToken.value)

});

const getUserMembership=((value:UserMembership)=>{
    profileStore.setUserMembership(value);
    console.log("cathed emit user membership: ", JSON.stringify(value))
})
const getUserLoginToken=((token: string)=>{
    profileStore.setUserLoginToken(token);
    console.log("catched emit user login token: ", token)
});
</script>


<template>
    <div>Login View </div>

    <Login :pinia-instance="getActivePinia()"
           :tenantId="tenantId" 
           :apiRoot="authApiRoot"
            @getJwtLoginResult="getUserLoginResult"
              @getUserMembership="getUserMembership"
           @getUserLoginToken="getUserLoginToken"
             />
<div style="alert alert-info">Login JWT token: {{profileStore.userLoginToken}}</div>

<div style="alert alert-warning">Membership {{profileStore.userMembership}}</div>

<div style="alert alert-info">LoginResult {{profileStore.userLoginResult}}</div>
</template>
<style>

</style>
