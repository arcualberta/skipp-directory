<script setup lang="ts">
import { useSearchStore } from '@/stores/SearchStore';
import Filter from '../components/Filter.vue'
import  ProfileListEntry  from '../components/ProfileListEntry.vue'
import  NoDataFound  from '../components/NoDataFound.vue'
import { ref, computed, watch} from 'vue';
import type { SolrQuery } from '@arc/arc-foundation/lib/solr/models/solrQuery';
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';

const searchStore = useSearchStore();
const selectedButtons = ref([] as string[]);
const selectedPage = ref(1);
const isFirst = ref(true);
const isLast = ref(false);
const keyOptions = ((searchStore.solrQueryModel.queryConstraints as SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "keywords") as SolrQuery.FieldConstraint)?.valueConstraints as SolrQuery.ValueConstraint[];
const posOptions = ((searchStore.solrQueryModel.queryConstraints as SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "positions") as SolrQuery.FieldConstraint)?.valueConstraints as SolrQuery.ValueConstraint[];
const facOptions = ((searchStore.solrQueryModel.queryConstraints as SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "faculties") as SolrQuery.FieldConstraint)?.valueConstraints as SolrQuery.ValueConstraint[];
const comOptions = ((searchStore.solrQueryModel.queryConstraints as SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "communities") as SolrQuery.FieldConstraint)?.valueConstraints as SolrQuery.ValueConstraint[];
//searchStore.isLoading = true;
searchStore.fetchData();


  const first = computed(() => searchStore.searchResult.offset + 1)
  const last = computed(() => searchStore.searchResult.offset + searchStore.searchResult.itemsPerPage)
  const pageCount = computed(() => Math.ceil((searchStore.searchResult.totalMatches)/(searchStore.searchResult.itemsPerPage)))
  

  // const selectLetter = (letter: string) => {
  // if(searchStore.selectedLetter===letter)
  // {
  //   searchStore.selectedLetter=null;
  //   searchStore.fetchData();
  //   checkFirstLast(selectedPage.value);
    
  // }else{
  //   searchStore.selectLetter(letter)
  //   checkFirstLast(selectedPage.value)}
  // }
watch(() => searchStore.searchWord, async newText => {
        if(newText === "" || newText === null){
          searchStore.selectWord("")
        }
    })
  const search = (searchText:string) =>{
    searchStore.selectWord(searchText)

  }
  const checkFirstLast = (page : number) => {
    if(page === 1){
          isFirst.value = true;
        }else{
          isFirst.value = false;
        }
        if(page === pageCount.value){
          isLast.value = true;
        }else{
          isLast.value = false;
        }
      
    }
const setPage = (page : number) => {
        selectedPage.value = page;
        if(pageCount.value > 1){
          searchStore.setPage(page);
        }
        checkFirstLast(page);
      
    }
    const setPrevious = () => {
      selectedPage.value = selectedPage.value-1; 
      checkFirstLast(selectedPage.value);
      if(pageCount.value > 1){
        searchStore.fetchPerviousPage();
        }
    }
    const setNext = () => {
      if(pageCount.value > 1){
        selectedPage.value = selectedPage.value+1;
        searchStore.fetchNextPage();
        }else{
          selectedPage.value = pageCount.value
        }
        checkFirstLast(selectedPage.value);
    }
</script>

<template>
  <main>
    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <img src="../assets/images/SKIPP-Banner.png" class="image-banner">
          </div>
          <div class="col-sm-5">
            <div class="banner-heading">
              ROOTS OF CHANGE
            </div>
            <div class="banner-description">
              Indigenous-Engaged Researcher Database
            </div>
          </div>
        </div>
      </div>
      <div class="alpherbertical-search">
        <div class="container">
          <div class="row">
            <div class="col-sm-2 alpherbertical-search-title">
              Search :
            </div>
            <div class="col-sm-10">
              <div class="row">
                <div class="col-sm-10">
                  <input type="text" v-model="searchStore.searchWord" class="search-field" placeholder="Search by Keyword, Community or Name...." v-on:keyup.enter="search(searchStore.searchWord as string)"/>
                </div>
                <div class="col-sm-2">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" @click="search(searchStore.searchWord as string)"  class="fa-icon fa-magnifying-glass search-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="container">
      <div class="row filter-results">
        <div class="col-sm-4 lbl-filters-title">
          <span class="lbl-filters">Filter results by:</span>
        </div>
        <div class="col-sm-8 lbl-results">
          <span class="lbl-filters">Results</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="list-item">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <span class="accordion-header-text">Keywords</span>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <Filter :options= keyOptions></Filter>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span class="accordion-header-text">Communities / Organizations</span>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <Filter :options= comOptions></Filter>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span class="accordion-header-text">Faculty / Department</span>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <Filter :options= facOptions></Filter>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <span class="accordion-header-text">Position</span>
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <Filter :options= posOptions></Filter>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div v-if="searchStore.isLoading" style="text-align: center;">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          <div v-else>
            <div v-if="searchStore.searchResult.totalMatches>0">
              <div style="text-align: center;">
                {{first}} to <span v-if="last<searchStore.searchResult?.totalMatches">{{last}}</span><span v-else>{{searchStore.searchResult?.totalMatches}}</span> of {{searchStore.searchResult?.totalMatches}}
              </div>
              <ProfileListEntry v-for="entry in searchStore.searchResult?.resultEntries" :key="entry.id" :model="(entry as SolrResultEntry)"></ProfileListEntry>
              <div >
                <nav>
                  <ul class="pagination justify-content-center">
                    <li v-bind:class = "(isFirst)?'page-item disabled':'page-item'"><a class="page-link" href="#" tabindex="-1" @click="setPrevious()">Previous</a></li>
                    <li v-for="p in pageCount" v-bind:class = "(selectedPage===p)?'page-item active':'page-item'" @click="setPage(p)"><a class="page-link" href="#">{{p}}</a></li>
                    <li v-bind:class = "(isLast)?'page-item disabled':'page-item'"><a class="page-link" href="#" @click="setNext()">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div v-else>
                  <NoDataFound />
            </div>
          </div>
      </div>
    </div>
    </div>
    
  </div>
  </main>
</template>
<style>
.accordion-header{
  padding-top: 28px;
  padding-bottom: 60px;
}
.accordion-button-height{
  min-height: 30px;
}
.accordion-button:not(.collapsed) {
  background-color: white;
}
.image-banner{
  width: 100%;
}
.main-content{
  background-color: white;
}
.search-text:hover{
cursor: pointer;
}
.search-field{
  height: 50px;
  width: 100%;
}
.banner-heading{
    font-size: 32px;
    font-weight: 600;
    color: #327D49;
    margin-left: 50px;
    padding-top: 60px;
    text-align: center;
}
.banner-description{
  font-size: 22px;
    font-weight: 600;
    margin-left: 50px;
    padding-top: 30px;
    text-align: center;
}
.center {
  border: 1px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
}
.alpherbertical-search{
  color: white;
  min-height: 100px;
  background-color: #327D49;
  padding-top: 30px;
  font-size: 24px;
  font-weight: 500;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* .alpherbertical-search-title{
  text-align:right;
} */
.alpherbertical-search-title{
  font-size: 22px;
    font-weight: 600;
}
.btn-letters{
  border: none;
  background-color: transparent;
  color: white;
  padding:0px 11px 0px 11px;
}
.pagination > .active > a
{
    color: black;
    background-color: #F6FCFA;
    border: solid 1px black;
}
.page-link{
color: #327D49 !important;
}
.btn-active{
  border: none;
  background-color: transparent;
  color:rgb(5, 5, 5);
  padding:0px 11px 0px 11px;
}
.lbl-filters{
  /* color: #A1A1A1; */
  font-size: 24px;
  font-weight: 500;
  color: #c1c2c1;
}
.lbl-filters-title{
  padding-top: 30px;
  min-height: 100px;
}
.lbl-results{
  padding-top: 30px;
  min-height: 100px;
  color: #c1c2c1;
}
.contact-link{
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
.filter-results{
  min-height: 100px;
}
.mail-to-link{
  color: black;
  text-decoration: none;
  font-weight: 500;
}
.mail-to-link:hover{
  background-color: transparent;
}



.accordion-header-text{
  padding-top: 30px;
  padding-bottom: 30px;
    font-size: 24px;
    font-weight: 400;
    color: #327D49;
}
.accordion-button{
  background-color: white;
    width: 30px;
    height: 30px;
    float: right;
}
.accordion-body{
  max-height: 400px;
  overflow-y: scroll;
}
.accordion-button>.collapsed{
  background-color: white !important;
}
</style>
@/stores/searchStore