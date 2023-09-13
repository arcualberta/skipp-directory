<script setup lang="ts">
  import { defineComponent, computed, watch, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import { Guid } from 'guid-typescript';

  import * as CatfishUI from 'applets'
  import { default as config, SearchResultFieldMapping } from '../appsettings';
  import { useProfileStore } from '../stores/ProfileStore'
  import { useSearchStore } from '../stores/SearchStore'
  import * as itemHelper from '../helpers/itemHelper';
  
  
  const profileStore = useProfileStore();
  const searchStore = useProfileStore();

  const route = useRoute();
  const router = useRouter();

  const id = route.params.id as unknown as Guid;
  profileStore.setActiveProfile(id);
  
  const name = computed(() => itemHelper.getName(profileStore.activeProfile));
  const position = computed(() => itemHelper.getPosition(profileStore.activeProfile))
  const email = computed(() => itemHelper.getEmail(profileStore.activeProfile));
  const keywords = computed(() => itemHelper.getKeywordList(profileStore.activeProfile));
  const organization = computed(() => itemHelper.getFaculty(profileStore.activeProfile));
  const pronounce = computed(() => itemHelper.getPronouns(profileStore.activeProfile));
  const showDisability = ""//computed(() => itemHelper.getShowDisability(profile.value));
  const disability = ""//computed(() => itemHelper.getDisability(profile.value));
  const showRace = ""//computed(() => itemHelper.getShowRace(profile.value));
  const race = ""//computed(() => itemHelper.getRace(profile.value));
  const genderIdentity = ""//computed(() => itemHelper.getGenderIdentity(profile.value));
  const showGenderIdentity = ""//computed(() => itemHelper.getShowGenderIdentity(profile.value));
  const researchQuestion = ""//computed(() => itemHelper.getResearchQuestion(profile.value));
  const communityProjects = ""//computed(() => itemHelper.getCommunityProjects(profile.value));
  const pronouns = ""//computed(() => itemHelper.getPronouns(profile.value));

</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <img class="results-image" src="../assets/images/user-profile-icon.jpg" />
      </div>
      <div class="col-sm-8">
        <div class="profile-name">{{ name }}</div>
        <div class="psh">{{ position }} | {{ organization }}</div>
        <div class="psh">Email: <span class="email-value">{{ email }}</span></div>
        <div class="psh">Pronounce: <span class="pronounce-value">{{ pronounce }}</span></div>
      </div>
    </div>
    <div class="row">
      <div class="Keywords">Keywords: <span v-for="keyword in keywords" class="keyword-block">{{ keyword }}</span></div>
    </div>
  </div>
</template>

<style>
.profile-name{
  padding-top: 70px;
  font-size: 40px;
  font-weight: 500;
}
.psh{
  font-size: 18px;
  font-weight: 600;
  color:#000000;
  line-height: 50px;
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
  margin-top: 100px;
  margin-left: 80px;
}
.keyword-block{
  margin-left: 10px;
  margin-right: 10px;
  padding:  5px 15px;
  border-radius: 10px;
  background-color: #327D49;
}
</style>
