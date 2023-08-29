<script setup lang="ts">
import { useSearchStore } from '@/stores/SearchStore';
import Banner from '../components/Banner.vue'
import CheckboxList from '../components/CheckboxList.vue'
import Filter from '../components/Filter.vue'
import  ProfileListEntry  from '../components/ProfileListEntry.vue'
import Results from '../components/Results.vue'
import * as CatfishUI from 'applets'
import { ref, computed, watch} from 'vue';

const searchStore = useSearchStore();
const selectedButtons = ref([] as string[]);
const keyOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "keywords") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const posOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "positions") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];
const facOptions = ((searchStore.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "faculties") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints as CatfishUI.Components.SolrQuery.ValueConstraint[];


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
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
      </div>
    </div>
    {{ JSON.stringify(searchStore) }}
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