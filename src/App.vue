<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

</script>


<template>
  <div class="top-layer">
    <div class="row header-panel">
      <div class="col-sm-5">
        <img  src="./assets/images/UA-logo.png" class="ua-logo"/>
      </div>
      <div class="col-sm-7">
        <div class="row">
          <div class="col-sm-8">
            <header>
              <nav class="nav-bar">
                <router-link to="/about">About Us</router-link>
                <router-link to="/join">Join Our Directory</router-link>
                <router-link to="/news">Latest News & Events</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/login" class="btn btn-success login">Login</router-link>
              </nav>
            </header>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    <RouterView />
    <Footer></Footer>
</template>
<style scoped>
.top-layer{
  background: #DBDBDB;
}
.ua-logo{
  margin-left: 160px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.login{
  margin-top: 20px;
  width: 140px;
  margin-right: 120px;
  background-color: #327D49;
}
.banner{
  width: 100%;
}
.header-panel {
  background: white;
    border-radius: 50px 50px 0px 0px ;
}
.nav-bar {
height: 18px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
color: #000000;

}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #327D49;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: #327D49 solid 2px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  color: #000000;
}


  .logo {
    margin: 0 2rem 0 0;
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

</style>
