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
    <div class="container login-pannel">
        <div class="login-lable">Login with Google</div>
        <div class="button-centre">
            <Login :pinia-instance="getActivePinia()"
        :tenantId="tenantId" 
        :apiRoot="authApiRoot"
            @getJwtLoginResult="getUserLoginToken"
        />
        </div>
        
    </div>
    
</template>
<style>
.login-pannel{
    margin-top: 200px;
    margin-bottom: 200px;
}
.button-centre{
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
