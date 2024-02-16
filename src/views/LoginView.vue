<script setup lang="ts">

import { getActivePinia } from 'pinia';
import { default as config}  from '@/appsettings'
import { ref } from 'vue';
import { useProfileStore } from '../stores/ProfileStore'
import { LoginResult } from '@arc/authorization'
import {AuthorizationResult} from '@arc/authorization'
import { useRouter } from 'vue-router'

const router = useRouter();
const tenantId = config.tenantId;
const authApiRoot = config.authorizationApiRoot;
const profileStore = useProfileStore();

const handleAuthorizationResult = ((authResult: AuthorizationResult)=>{
    sessionStorage.setItem("authResult", JSON.stringify(authResult))
    profileStore.userLoginResult = authResult.loginResult
    profileStore.userLoginToken = authResult.jwtToken
    router.go(-1)
});

</script>


<template>

<div class="container login-pannel">
        <div class="login-lable">Login with Google</div>
        <div class="button-centre">
            <Login :pinia-instance="getActivePinia()"
            :tenantId="tenantId" 
            :apiRoot="authApiRoot"
            @authorizationResult="handleAuthorizationResult"
        />
        </div>
    </div>    

   
</template>
<style>
.login-pannel{
    margin-top: 200px;
    margin-bottom: 300px;
}
.button-centre{
    margin-top: 50px;
    text-align: center;
}
.login-lable{
    font-size: 32px;
    font-weight: 600;
    color: #327D49;
    margin-left: 50px;
    padding-top: 60px;
    text-align: center;  
}
</style>
