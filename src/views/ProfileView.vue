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

  let name =  ref("")
  let position =  ref("")
  let email =  ref("")
  watch(() => profileStore.activeProfile, async newProfile => {
        if (newProfile.length>0){
          console.log("Name",itemHelper.getName(profileStore.activeProfile.value))
          //const profile = computed(() => profileStore.activeProfile as CatfishUI.Components.ResultItem);
          name.value = computed(() => itemHelper.getName(profileStore.activeProfile.value)).value;
          position.value = computed(() => itemHelper.getPosition(profileStore.activeProfile.value)).value;
          email.value = computed(() => itemHelper.getEmail(profileStore.activeProfile.value)).value;
          const keywords = computed(() => itemHelper.getKeywords(profileStore.activeProfile.value));
        }
    })
  console.log("2",profileStore.activeProfile)
  
  const pronounce = ""//computed(() => itemHelper.getShowPosition(profile.value));
  const organization = ""//computed(() => itemHelper.getOrganization(profile.value));
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
        <div class="profile-position">{{ position }}</div>
        <div class="email">Email: {{ email }}</div>
        <div class="pronounce">Pronounce: {{ pronounce }}</div>
      </div>

    </div>
  </div>
  Profile Store{{ profileStore.activeProfile }}
</template>

<style>
.profile-name{
  padding-top: 70px;
  font-size: 24px;
  font-weight: 500;
}
.profile-position{
  font-size: 20px;
  font-weight: 400;
  color:#7A7A7A;
}
.results-image{
  width: 110px;
  height: 110px;
  margin-left: 80px;
  margin-top: 70px;
  border: 2px solid #327D49;
}
</style>
