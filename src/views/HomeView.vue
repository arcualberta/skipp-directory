<script setup lang="ts">
import { useSearchStore } from '@/stores/SearchStore';
import Filter from '../components/Filter.vue'
import  ProfileListEntry  from '../components/ProfileListEntry.vue'
import  NoDataFound  from '../components/NoDataFound.vue'
import * as CatfishUI from 'applets'
import { ref, computed} from 'vue';

const searchStore = useSearchStore();
const selectedButtons = ref([] as string[]);
const selectedPage = ref(1);
const isFirst = ref(true);
const isLast = ref(false);
const keyOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "keywords") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const posOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "positions") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const facOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "faculties") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
//searchStore.isLoading = true;
searchStore.fetchData();
let searchText:string;

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

  const search = (searchText:string) =>{
    searchStore.searchWord = searchText;
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
    <div>
      <div class="row">
        <div class="col-sm-8">
          <img src="../assets/images/SKIPP-Banner.png" class="image-banner">
        </div>
        <div class="col-sm-4">
          <div class="banner-heading">
            SKIPP | Situated Knowledges : Indigenous Peoples & Place
          </div>
          <div class="banner-description">
            Indigenous - Engaged Researcher Database
          </div>
        </div>
      </div>
    </div>
    <div class="alpherbertical-search">
      <div class="row">
        <div class="col-sm-4 alpherbertical-search-title">
          Search :
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-10">
              <input type="text" v-model="searchText" class="search-field" placeholder="Search by Keyword, Community or Name...."/>
            </div>
            <div class="col-sm-2">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" @click="search(searchText)"  class="fa-icon fa-magnifying-glass search-text" />
            </div>
          </div>
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
        <div class="list-item">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span class="accordion-header-text">Keywords</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Filter :options= keyOptions></Filter>
       </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <span class="accordion-header-text">Area of interest</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          ....
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <span class="accordion-header-text">Faculty/ Department</span>
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
</div></div>
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
                
          <ProfileListEntry v-for="entry in searchStore.searchResult?.resultEntries" :key="entry.id" :model="entry"></ProfileListEntry>
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
    <div class="contact-link">
      Have a question? Want to share a story? Tell us how we’re doing? Contact us at <a href="mailto:skipp@ualberta.ca" class="mail-to-link">skipp@ualberta.ca</a>
    </div>
  </div>
  </main>
</template>
<style>
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
  width: 100%;
}
.banner-heading{
  font-size: 36px;
    font-weight: 600;
    color: #327D49;
}
.banner-description{
  font-size: 24px;
    font-weight: 600;
    margin-top: 100px;
}
.center {
  border: 1px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
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
.btn-active{
  border: none;
  background-color: transparent;
  color:rgb(5, 5, 5);
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



.accordion-header-text{
    font-size: 24px;
    font-weight: 400;
    color: #327D49;
}
.accordion-button{
    width: 30px;
    height: 30px;
    float: right;
}
.accordion-body{
  max-height: 400px;
  overflow-y: scroll;
}
</style>
@/stores/searchStore