<script setup lang="ts">
import { useSearchStore } from '@/stores/SearchStore';
import Banner from '../components/Banner.vue'
import Filter from '../components/Shared/Filter.vue'
import Results from '../components/Shared/Results.vue'
import * as CatfishUI from 'applets'

const searchStore = useSearchStore();
const posOptions = (searchStore.solrQueryModel.queryConstraints.find(qc => qc.internalId === "positions") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
console.log("posOptions",posOptions)
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
        <body>
          <nav class="accordion arrows">
            <input type="radio" name="accordion" id="cb1" />
            <section class="box">
              <label class="box-title" for="cb1">Keywords</label><span></span>
              <label class="box-close" for="acc-close"></label>
              <div class="box-content">
                
              </div>
      
            </section>
            <input type="radio" name="accordion" id="cb2" />
            <section class="box">
              <label class="box-title" for="cb2">Area of interest</label>
              <label class="box-close" for="acc-close"></label>
              <div class="box-content">Add the class 'arrows' to nav.accordion to add dropdown arrows.</div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section class="box">
              <label class="box-title" for="cb3">Faculty/ Department</label>
              <label class="box-close" for="acc-close"></label>
              <div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
            </section>
            <input type="radio" name="accordion" id="cb4" />
            <section class="box">
              <label class="box-title" for="cb4">Position</label>
              <label class="box-close" for="acc-close"></label>
              <div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
          </nav>
        </body>

        <Filter :options= posOptions></Filter>
      </div>
      <div class="col-sm-8">
        <Results></Results>
        {{ JSON.stringify(searchStore) }}
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



body {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 0;
  padding: 10px;
  display: flex;
  background: #f2f2f2;
  color: rgba(0,0,0,.87);
  font-family: 'Roboto', sans-serif;
}
.accordion {
  margin: auto;
  width: 400px;
}
.accordion input {
  display: none;
}
.box {
  position: relative;
 
}
.box::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    
}
header.box {
  background: #00BCD4;
  z-index: 100;
  cursor: initial;
}
header .box-title {
  margin: 0;
  font-weight: normal;
  font-size: 16pt;
  color: white;
  cursor: initial;

}
.box-title {
  width: calc(100% - 40px);
  color: #327D49;
  font-size: 24px;
  font-weight: 500;
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
}
.box-content {
  width: calc(100% - 40px);
  padding: 30px 20px;
  font-size: 11pt;
  color: rgba(0,0,0,.54);
  display: none;
}
.box-close {
  position: absolute;
  height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}
input:checked + .box {
  height: auto;
  margin: 16px 0;
}
input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
}
.arrows section .box-title {
  padding-left: 44px;
  width: calc(100% - 64px);
}
.arrows section .box-title:before {
  float: right;
  display: block;
  content: '\203a';
  font-size: 24pt;
  left: 20px;
  top: -2px;
  transition: transform .15s ease-in-out;
  color: #BDBDBD;

}
input:checked + section.box .box-title:before {
  transform: rotate(90deg);
}
</style>
@/stores/searchStore