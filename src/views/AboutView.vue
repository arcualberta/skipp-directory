<script setup lang="ts">
import Banner from '../components/Banner.vue'

</script>
<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <div >
      <Banner>
        <template #image>
          <img  src="./assets/images/banner.JPG" />
        </template>
      </Banner>
    </div>
  </main>
  
</template>

<style>
</style>
