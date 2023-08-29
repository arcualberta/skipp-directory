<script setup lang="ts">
import { computed } from 'vue';
import * as CatfishUI from 'applets'
import * as itemHelper from '../helpers/itemHelper';
import { useSearchStore } from './../stores/SearchStore'

const props = defineProps<{ 
  model: CatfishUI.Components.ResultItem | null
  }>();
  const searchStore = useSearchStore();
  const name = "Jane Samson"//computed(() => itemHelper.getName(props.model))
  const position = "Professor"//computed(() => itemHelper.getPosition(props.model))
  const email = "jane.samson@ualberta.ca"//computed(() => itemHelper.getEmail(props.model))
</script>
<template>
  <div class="profile-component">
    <div class="row">
      <div class="col-sm-3">
        <img class="results-image" src="../assets/images/user-profile-icon.jpg" />
      </div>
      <div class="col-sm-6">
        <div class="profile-name">{{ name }}</div>
        <div class="profile-position">{{ position }}</div>
        <div class="research-interest-headding">Research Interests</div>
        <div class="research-interest-list">Indigenous explorers, Indigenous clergy, Colonialism</div>
      </div>
      <div class="col-sm-3">
        <div class="email">
            <img src="../assets/images/email.png" />
          <span class="email-id">{{ email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profile-component{
  height: 290px;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 10px;
  background-color: #EEFEF7;
}
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
.research-interest-headding{
  font-size: 16px;
  font-weight: 500; 
}
.research-interest-list{
  font-size: 16px;
  font-weight: 400;
}
.results-image{
  width: 110px;
  height: 110px;
  margin-left: 80px;
  margin-top: 70px;
  border-radius: 50%;
  border: 2px solid #327D49;
}
.email{
  margin-top: 70px;
}
.email-id{
  margin-left: 10px;
}

</style>