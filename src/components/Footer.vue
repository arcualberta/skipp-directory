<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div>
      <span class="footer-header">Territorial Acknowledgement </span>
      <span class="footer-content"> The University of Alberta, its buildings, labs, and research stations are primarily located on the traditional territory of Cree, Blackfoot, Métis, Nakota Sioux, Iroquois, Dene, and Ojibway/Saulteaux/Anishinaabe nations; lands that are now known as part of Treaties 6, 7, and 8 and homeland of the Métis. The University of Alberta respects the sovereignty, lands, histories, languages, knowledge systems, and cultures of First Nations, Métis and Inuit nations.</span>

    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.footer{
  background-color: #327D49;
  height: 564px;
  width: 100%;
  padding: 50px 100px 50px 100px;
  text-align: justify;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}
.footer-header{
  color: #FFED4A;
  font-size: 64px;
}
.footer-content{
  color: #FFFFFF;
  font-size: 26px;
  text-align: justify;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
