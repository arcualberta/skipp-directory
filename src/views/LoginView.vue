<script setup lang="ts">

import { getActivePinia } from 'pinia';
import { default as config}  from '@/appsettings'
import { ref } from 'vue';
import { useProfileStore } from '../stores/ProfileStore'
import {AuthorizationResult} from '@arc/authorization'
import { useRouter } from 'vue-router'

const router = useRouter();
const tenantId = config.tenantId;
const authApiRoot = config.authorizationApiRoot;
const profileStore = useProfileStore();
const userToken = ref(null)
const handleAuthorizationResult = ((val: AuthorizationResult)=>{
    console.log("user token: ", val)
    userToken.value = val.jwtToken

    profileStore.userLoginResult = val.loginResult
    profileStore.userLoginToken = val.jwtToken

    router.go(-1)
});

</script>


<template>
    <div class="google-login">
        <Login :pinia-instance="getActivePinia()"
            :tenantId="tenantId" 
            :apiRoot="authApiRoot"
                @authorizationResult="handleAuthorizationResult"
                />
    </div>
</template>

<style scoped>

</style>
