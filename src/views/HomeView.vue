<script setup lang="ts">
import { useSearchStore } from '@/stores/SearchStore';
import Banner from '../components/Banner.vue'
import Filter from '../components/Filter.vue'
import  ProfileListEntry  from '../components/ProfileListEntry.vue'
import * as CatfishUI from 'applets'
import { ref, computed} from 'vue';

const searchStore = useSearchStore();
const selectedButtons = ref([] as string[]);
const keyOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "keywords") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const posOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "positions") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const facOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "faculties") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
searchStore.fetchData();

const selectLetter = (letter: string) => {
  if(searchStore.selectedLetter===letter)
  {
    searchStore.selectedLetter=null;
    searchStore.fetchData();
  }else{
    searchStore.selectLetter(letter)}
  }
  const first = computed(() => searchStore.searchResult.offset + 1)
  const last = computed(() => searchStore.searchResult.offset + searchStore.searchResult.itemsPerPage)

const setAccordion = (Id : string) => {
        if(selectedButtons.value.includes(Id)){
            const idx = selectedButtons.value.findIndex(sb => sb == Id)
            selectedButtons.value?.splice(idx as number, 1)
        }else{
            selectedButtons.value.push(Id);
        }
    }
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
          <button v-bind:class = "(searchStore.selectedLetter==='A')?'btn-active':'btn-letters'" @click="selectLetter ('A')">A</button>
          <button v-bind:class = "(searchStore.selectedLetter==='B')?'btn-active':'btn-letters'" @click="selectLetter ('B')">B</button>
          <button v-bind:class = "(searchStore.selectedLetter==='C')?'btn-active':'btn-letters'" @click="selectLetter ('C')">C</button>
          <button v-bind:class = "(searchStore.selectedLetter==='D')?'btn-active':'btn-letters'" @click="selectLetter ('D')">D</button>
          <button v-bind:class = "(searchStore.selectedLetter==='E')?'btn-active':'btn-letters'" @click="selectLetter ('E')">E</button>
          <button v-bind:class = "(searchStore.selectedLetter==='F')?'btn-active':'btn-letters'" @click="selectLetter ('F')">F</button>
          <button v-bind:class = "(searchStore.selectedLetter==='G')?'btn-active':'btn-letters'" @click="selectLetter ('G')">G</button>
          <button v-bind:class = "(searchStore.selectedLetter==='H')?'btn-active':'btn-letters'" @click="selectLetter ('H')">H</button>
          <button v-bind:class = "(searchStore.selectedLetter==='I')?'btn-active':'btn-letters'" @click="selectLetter ('I')">I</button>
          <button v-bind:class = "(searchStore.selectedLetter==='J')?'btn-active':'btn-letters'" @click="selectLetter ('J')">J</button>
          <button v-bind:class = "(searchStore.selectedLetter==='K')?'btn-active':'btn-letters'" @click="selectLetter ('K')">K</button>
          <button v-bind:class = "(searchStore.selectedLetter==='L')?'btn-active':'btn-letters'" @click="selectLetter ('L')">L</button>
          <button v-bind:class = "(searchStore.selectedLetter==='M')?'btn-active':'btn-letters'" @click="selectLetter ('M')">M</button>
          <button v-bind:class = "(searchStore.selectedLetter==='N')?'btn-active':'btn-letters'" @click="selectLetter ('N')">N</button>
          <button v-bind:class = "(searchStore.selectedLetter==='O')?'btn-active':'btn-letters'" @click="selectLetter ('O')">O</button>
          <button v-bind:class = "(searchStore.selectedLetter==='P')?'btn-active':'btn-letters'" @click="selectLetter ('P')">P</button>
          <button v-bind:class = "(searchStore.selectedLetter==='Q')?'btn-active':'btn-letters'" @click="selectLetter ('Q')">Q</button>
          <button v-bind:class = "(searchStore.selectedLetter==='R')?'btn-active':'btn-letters'" @click="selectLetter ('R')">R</button>
          <button v-bind:class = "(searchStore.selectedLetter==='S')?'btn-active':'btn-letters'" @click="selectLetter ('S')">S</button>
          <button v-bind:class = "(searchStore.selectedLetter==='T')?'btn-active':'btn-letters'" @click="selectLetter ('T')">T</button>
          <button v-bind:class = "(searchStore.selectedLetter==='U')?'btn-active':'btn-letters'" @click="selectLetter ('U')">U</button>
          <button v-bind:class = "(searchStore.selectedLetter==='V')?'btn-active':'btn-letters'" @click="selectLetter ('V')">V</button>
          <button v-bind:class = "(searchStore.selectedLetter==='W')?'btn-active':'btn-letters'" @click="selectLetter ('W')">W</button>
          <button v-bind:class = "(searchStore.selectedLetter==='X')?'btn-active':'btn-letters'" @click="selectLetter ('X')">X</button>
          <button v-bind:class = "(searchStore.selectedLetter==='Y')?'btn-active':'btn-letters'" @click="selectLetter ('Y')">Y</button>
          <button v-bind:class = "(searchStore.selectedLetter==='Z')?'btn-active':'btn-letters'" @click="selectLetter ('Z')">Z</button>
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
        <ProfileListEntry v-for="entry in searchStore.searchResult?.resultEntries" :key="entry.id" :model="entry"></ProfileListEntry>
        <div style="text-align:center; margin:10px;">
                {{first}} to <span v-if="last<searchStore.searchResult?.totalMatches">{{last}}</span><span v-else>{{searchStore.searchResult?.totalMatches}}</span> of {{searchStore.searchResult?.totalMatches}}
                <a  v-if="last < searchStore.searchResult?.totalMatches" href="#" @click="searchStore.fetchNextPage()">load more ...</a>
            </div>
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