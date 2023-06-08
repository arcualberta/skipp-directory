<script setup lang="ts">
//import { Login } from 'applets';
import { default as config } from '@/appsettings'

</script>

<template>
  <div class="login">
    <h1>This is an login page</h1>
    <Login :authorizationRoot = config.authorizationApiRoot></Login>
  </div>
</template>

<style>

</style>
