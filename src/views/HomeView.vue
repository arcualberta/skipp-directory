<script setup lang="ts">
import Banner from '../components/Banner.vue'
</script>

<template>
  <main>
    <div >
      <Banner>
          <template #image>
            <img src="../assets/images/SKIPP-Banner.png" class="banner-div">
          </template>
        </Banner>
    </div>
    <div class="alpherbertical-search">
      <div class="row">
        <div class="col-sm-4 alpherbertical-search-title">
          Search Alphabetically:
        </div>
        <div class="col-sm-8">
          <span class="alpherbertical-search-letters">#</span>
          <button class="btn-letters">A</button>
          <button class="btn-letters">B</button>
          <button class="btn-letters">C</button>
          <button class="btn-letters">D</button>
          <button class="btn-letters">E</button>
          <button class="btn-letters">F</button>
          <button class="btn-letters">G</button>
          <button class="btn-letters">H</button>
          <button class="btn-letters">I</button>
          <button class="btn-letters">J</button>
          <button class="btn-letters">K</button>
          <button class="btn-letters">L</button>
          <button class="btn-letters">M</button>
          <button class="btn-letters">N</button>
          <button class="btn-letters">O</button>
          <button class="btn-letters">P</button>
          <button class="btn-letters">Q</button>
          <button class="btn-letters">R</button>
          <button class="btn-letters">S</button>
          <button class="btn-letters">T</button>
          <button class="btn-letters">U</button>
          <button class="btn-letters">V</button>
          <button class="btn-letters">W</button>
          <button class="btn-letters">X</button>
          <button class="btn-letters">Y</button>
          <button class="btn-letters">Z</button>
        </div>
      </div>
    </div>
    <div class="row filter-results">
      <div class="col-sm-4 lbl-filters-title">
        <span class="lbl-filters">Filter results by:</span>
      </div>
      <div class="col-sm-8 lbl-results">
        <span class="lbl-filters">Results</span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
      </div>
      <div class="col-sm-8">
      </div>
    </div>
    <div class="contact-link">
      Have a question? Want to share a story? Tell us how we’re doing? Contact us at <a href="mailto:skipp@ualberta.ca" class="mail-to-link">skipp@ualberta.ca</a>
    </div>
  </main>
</template>
<style>
.banner-div{
  width: auto;
  max-width: 100%;
}
.alpherbertical-search{
  color: white;
  min-height: 131px;
  background-color: #327D49;
  padding-top: 60px;
  font-size: 24px;
  font-weight: 500;
}
.alpherbertical-search-title{
  text-align: center;
}
.alpherbertical-search-letters{
  padding:0px 10px 0px 10px;
}
.btn-letters{
  border: none;
  background-color: transparent;
  color: white;
  padding:0px 11px 0px 11px;
}
.lbl-filters{
  color: #A1A1A1;
  font-size: 24px;
  font-weight: 500;
}
.lbl-filters-title{
  padding-top: 60px;
  text-align: center;
  min-height: 131px;
}
.lbl-results{
  padding-top: 60px;
  padding-left: 90px;
  min-height: 131px;
}
.contact-link{
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
.filter-results{
  min-height: 200px;
}
.mail-to-link{
  color: black;
  text-decoration: none;
  font-weight: 500;
}
.mail-to-link:hover{
  background-color: transparent;
}
</style>
