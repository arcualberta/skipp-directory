<script setup lang="ts">
import { getActivePinia } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Footer from './components/Footer.vue'
import {AuthorizationResult} from '@arc/authorization'
import {useProfileStore} from './stores/ProfileStore'

const router = useRouter();
const profileStore = useProfileStore();

const sessionAuthResult = sessionStorage.getItem("authResult");
if(sessionAuthResult){
  const authResult = JSON.parse(sessionAuthResult) as AuthorizationResult
  profileStore.userLoginResult = authResult.loginResult
  profileStore.userLoginToken = authResult.jwtToken
}

const logout = () => {
  profileStore.userLoginToken=null;
  profileStore.userLoginResult = null;
  sessionStorage.removeItem("authResult");
  return false;
}

</script>


<template>
  <div class="page-background">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <img  src="./assets/images/UA-logo.png" class="ua-logo"/>
          </div>
          <div class="col-sm-7">
            <header>
                <nav class="nav-bar">
                <router-link to="/" class="navigation-menu-box">Home</router-link> 
                <router-link to="/join">Join Our Directory</router-link>
                <a href=" https://www.ualberta.ca/provost/portfolio/indigenous-initiatives/index.html" target="_blank" class="navigation-menu-box">Contact</a>
      
          <span style="float: right;">
              <router-link class="navigation-menu-box login" v-if="profileStore.isUserLoggedIn" :to="{}" @click="logout">Logout</router-link>
              <router-link class="navigation-menu-box login" v-else to="/login">Login</router-link>
          </span>  
                </nav>
              </header>
          </div>
        </div>
      </div>
    </div>
  <RouterView />
  <Footer></Footer>
  </div>
</template>
<style scoped>
.navigation-menu-box{
  margin-left: 20px;
  margin-right: 20px;
}
.page-background{
  /* background: #DBDBDB; */
  overflow:hidden;
}
.header{
  background: white;
  border-bottom: #E6E7E7 solid 2px;
  padding-bottom: 25px;
  
}
.top-layer{
  background: #DBDBDB;
  width: 100%;
}
.ua-logo{
  /* margin-left: 160px; */
  max-width: 200px;
  max-height: 50px;
  margin-top: 20px;
}
.login{
   background-color: #327D49 !important;
  color: white !important;
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  margin-left: 30px;
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
text-align:right;

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
