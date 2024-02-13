<script setup lang="ts">

import { getActivePinia } from 'pinia';
import { default as config}  from '@/appsettings'

const tenantId = config.tenantId;
const authApiRoot = config.authorizationApiRoot;

</script>


<template>
    <div>Login View </div>

    <Login :pinia-instance="getActivePinia()"
           :tenantId="tenantId" 
           :apiRoot="authApiRoot" />
</template>
<style>

</style>
