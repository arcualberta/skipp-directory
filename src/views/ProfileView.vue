<script setup lang="ts">
  import { defineComponent, computed, watch,onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import { Guid } from 'guid-typescript';
  import  ProjectListEntry  from '../components/ProjectListEntry.vue'
  import { default as config, SearchResultFieldMapping } from '../appsettings';
  import { useProfileStore } from '../stores/ProfileStore'
  import { useSearchStore } from '../stores/SearchStore'
  import * as itemHelper from '../helpers/itemHelper';
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';
  
  
  const profileStore = useProfileStore();
  const searchStore = useProfileStore();

  const route = useRoute();
  const router = useRouter();

  const id = route.params.id as unknown as Guid;
  profileStore.setActiveProfile(id);
  console.log("activeProfile", JSON.stringify(profileStore.activeProfile))
  const name = computed(() => itemHelper.getName(profileStore.activeProfile as SolrResultEntry));
  const position = computed(() => itemHelper.getPosition(profileStore.activeProfile as SolrResultEntry))
  const email = computed(() => itemHelper.getEmail(profileStore.activeProfile as SolrResultEntry));
  const keywords = computed(() => itemHelper.getKeywordList(profileStore.activeProfile as SolrResultEntry));
  const organization = computed(() => itemHelper.getFaculty(profileStore.activeProfile as SolrResultEntry));
  const pronounce = computed(() => itemHelper.getPronouns(profileStore.activeProfile as SolrResultEntry));
  const websiteLinks = computed(() => itemHelper.getWebsiteLinks(profileStore.activeProfile as SolrResultEntry));
  const IndigenousCommunity = computed(() => itemHelper.getIndigeniousCommunity(profileStore.activeProfile as SolrResultEntry));
  const location = computed(() => itemHelper.getLocation(profileStore.activeProfile as SolrResultEntry));
  const projectList = computed(() => itemHelper.getProjectList(profileStore.activeProfile as SolrResultEntry));
  onMounted(()=>{
window.scrollTo(0,0);
  })
</script>
<template>
  <div id="profile" class="container">
    <div class="row space-bottom">
      <div class="col-sm-4">
        <img class="results-image" src="../assets/images/user-profile-icon.jpg" />
      </div>
      <div class="col-sm-8">
        <div class="profile-name" tabindex="0">{{ name }}</div>
        <div class="psh">{{ position }} | {{ organization }}</div>
        <div class="psh">Email: <span class="email-value">{{ email }}</span></div>
        <div class="psh" v-if="pronounce" >Pronounce: <span class="pronounce-value">{{ pronounce }}</span></div>
        <div class="psh" v-if="IndigenousCommunity">Indigenous Nation / Community: <span class="pronounce-value">{{ IndigenousCommunity }}</span></div>
        <div>
          <div  v-for="link in websiteLinks">
          <a class="psh worklinks" target="_blank" :href="link" >{{link}}</a>
      </div>
        </div>
      </div>
    </div>
    <div class="row space-bottom">
      <div class="Keywords">Research Keywords: <span v-for="keyword in keywords" class="keyword-block">{{ keyword }}</span></div>
    </div> 
    <div class="psh" v-if="location">Recently Engaged Indigenous Communities / Nation(s) / organization(s): <span class="pronounce-value">{{ location }}</span></div>
    </div>
    <div class=" container research-project-header">
      Recent Indigenous-Engaged Research Projects
          {{ projectList }}
        </div>
    
      <div class="research-projects-background">
        <div class="container">
        <ProjectListEntry v-for="project in projectList" :key="project.id" :model="project"></ProjectListEntry>
        <div><pre>{{ profileStore.activeProfile }}</pre></div>
      </div>
    </div>
    <div class="container">
      <div class="contact-link">
          Have a question?  
      </div>
    <div class="contact-us">
      Contact us at <a href="mailto:skipp@ualberta.ca" class="mail-to-link">skipp@ualberta.ca</a>
    </div>
  </div>
</template>

<style>
.auto-scroll{

}
.space-bottom{
  margin-bottom: 100px;
}
.research-project-header{
  color: #327D49;
  font-size: 28px;
  padding-top: 50px;
}
.research-projects-background{
  background-color: #EFF7F4;
  min-height: 400px;
}
.profile-name{
  padding-top: 70px;
  font-size: 40px;
  font-weight: bold;
}
.profile-name:hover{
  cursor: pointer;
}
.psh{
  font-size: 18px;
  font-weight: 600;
  color:#000000;
  line-height: 50px;
}
.contact-us{
  text-align: center;
}
.ch1{
  font-size: 40px;
  font-weight: 500;
  color:#327D49;
  line-height: 50px;
  margin-left: 80px;
  padding-top: 100px;
}
.results-image{
  width: 226px;
  height: 226px;
  margin-left: 80px;
  margin-top: 70px;
  border: 2px solid #327D49;
  border-radius: 5px;
}
.email-value{
  font-size: 18px;
  font-weight: 400;
  color:#000000;
  line-height: 50px;
}
.pronounce-value{
  font-style: italic;
}
.Keywords{
  font-size: 18px;
  font-weight: 600;
  color:#000000;
  line-height: 50px;
  
}
.keyword-block{
  margin-left: 10px;
  margin-right: 10px;
  padding:  15px 15px;
  border-radius: 10px;
  background-color: #327D49;
  color: #F4F9F6;
}
.external-links{
  background-color: #F4F9F6;
  min-height: 400px;
}
.worklinks{
  font-size: 18px;
  font-weight: 400;
  color:#000000;
  line-height: 40px;
}
.worklinks:hover{
  background-color: transparent;
}
</style>
