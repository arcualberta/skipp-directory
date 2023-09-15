<script setup lang="ts">
//import { Login } from 'applets';
import { default as config } from '@/appsettings'

</script>

<template>
  <div class="login">
    <Login :authorizationRoot = config.authorizationApiRoot></Login>
  </div>
</template>

<style>

</style>
