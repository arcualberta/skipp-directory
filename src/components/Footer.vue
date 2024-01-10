<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="content-row">
      <span class="footer-header">Territorial Acknowledgement </span>
      <span class="footer-content"> The University of Alberta, its buildings, labs, and research stations are primarily located on the traditional territory of Cree, Blackfoot, Métis, Nakota Sioux, Iroquois, Dene, and Ojibway/Saulteaux/Anishinaabe nations; lands that are now known as part of Treaties 6, 7, and 8 and homeland of the Métis. The University of Alberta respects the sovereignty, lands, histories, languages, knowledge systems, and cultures of First Nations, Métis and Inuit nations.</span>
    </div>
    <div class="row footer-row">
      <div class="col-sm-3 footer-links">
        <router-link to="/contact">Contact Us</router-link>
      </div>
      <div class="col-sm-3 footer-links">
        <router-link to="/contact">Policies</router-link>
      </div>
      <div class="col-sm-3 footer-links">
        <router-link to="/contact">Privacy</router-link>
      </div>
      <!--<div class="col-sm-2">
        <router-link to="/news">News</router-link>
      </div>-->
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
.content-row{
  padding-top: 50px;
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
.footer-row{
  padding-top: 100px;
  font-size: 26px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
.footer-links{
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  border-right: 1px solid #BDBDBD;
}
.footer-links:last-child {
  border-right:none;
}
a.router-link-exact-active {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: #327D49 solid 2px;
}
a.router-link-exact-active:hover {
  background-color: transparent;
}
a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: #327D49 solid 2px;
}
a:hover {
  background-color: transparent;
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
