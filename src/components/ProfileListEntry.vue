<script setup lang="ts">
import { computed } from 'vue';
import * as itemHelper from '../helpers/itemHelper';
import { useSearchStore } from './../stores/SearchStore'
import {useRouter} from 'vue-router'
import { Guid } from 'guid-typescript'
import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models/solrResultEntry';
import { useProfileStore } from '@/stores/ProfileStore';

const props = defineProps<{ 
  model: SolrResultEntry | null
  }>();
  const router = useRouter();
  const searchStore = useSearchStore();
  const profileStore = useProfileStore();
  const name = computed(() => itemHelper.getName(props.model as SolrResultEntry))
  const position = computed(() => itemHelper.getPosition(props.model as SolrResultEntry))
  const email = computed(() => itemHelper.getEmail(props.model as SolrResultEntry))
  const keywords = computed(() => itemHelper.getKeywords(props.model as SolrResultEntry))
  const profileImage = computed(() => profileStore.getProfilePictureURL(itemHelper.getFileReferences(props.model as SolrResultEntry)));
  const gotoProfile = (id: Guid) => {router.push({ path: "/profile/" + id })}
</script>
<template>
  <div class="profile-component">
    <div class="row">
      <div class="col-sm-3">
        <!-- <img class="results-image" :src="profileImage"/> -->
        <img v-if="profileImage" class="results-image" :src="profileImage" />
        <img v-else class="results-image" src="../assets/images/user-profile-icon.jpg" />
      </div>
      <div class="col-sm-5">
        <div class="profile-name"><a  @click="gotoProfile(model?.id as unknown as Guid)">{{ name }}</a></div>
        <div class="profile-position">{{ position }}</div>
        <div class="research-interest-headding">Research Interests</div>
        <div class="research-interest-list">{{keywords}}</div>
      </div>
      <div class="col-sm-4">
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
  background-color: #F6FCFA;
}
.profile-name{
  padding-top: 70px;
  font-size: 24px;
  font-weight: 800;
}
.profile-name:hover{
  text-decoration: none;
}
.profile-position{
  font-size: 20px;
  font-weight: 400;
  color:#7A7A7A;
}
.research-interest-headding{
  padding-top: 30px;
  font-size: 16px;
  font-weight: 500; 
}
.research-interest-list{
  font-size: 16px;
  font-weight: 400;
  max-lines: 3;
  white-space:pre-line; 
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.research-interest-list:hover{
  overflow:visible;
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
  float: right;
}
.email-id{
  font-weight: 600;
  margin-left: 10px;
}

</style>