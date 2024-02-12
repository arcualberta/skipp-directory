import { Guid } from 'guid-typescript';
import { defineStore } from 'pinia';

import { useSearchStore } from './SearchStore';
import * as config from '../appsettings';
import { baseState, fetchQuery } from './common';
import type { SolrResultEntry, SolrSearchResult } from '@arc/arc-foundation/lib/solr/models';
import { toFormData } from '@arc/arc-foundation/lib/solr/helpers';
  import { JoinUsFormTemplate } from '@/joinUsFormTemplate'
import type { ArcFormData, CompositeFieldData, FormTemplate } from '@arc/arc-foundation/lib/forms/models';
//import { createProfileQueryModel } from '../helpers/createSearchQueryModel';

const searchStore = useSearchStore();
interface UserInfo {
    userName: string | null;
    roles: string[] | null;
}

export const useProfileStore = defineStore('ProfileStore', {
    state: () => ({
        ...baseState,
        //solrQueryModel: createProfileQueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND),
        //defaultQueryModel: createProfileQueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.OR),
        activeProfile: null as SolrResultEntry | null,
        userInfo: null as UserInfo | null,
        profileDeleteStatus: "",
  }),
    getters: {
        isAdmin(): boolean {
            return this.userInfo?.roles?.includes("SysAdmin") ? true : false;
        },
        getFormData(): ArcFormData | CompositeFieldData {
            const formData = toFormData(this.activeProfile as SolrResultEntry, JoinUsFormTemplate as unknown as FormTemplate);
            return formData
        }
    },
    actions: {
        setActiveProfile(profileId: Guid) {
            if (profileId) {
                const url = `${config.default.solrApiRoot}/api/SolrSearch/get-document/${profileId}`;
                fetch(url, {
                    method: 'GET', 
                    headers: {
                        'Tenant-Id': `${config.default.tenantId}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.activeProfile = data;  
                        console.log("profile ", JSON.stringify(data))                     
                    })
                    .catch((error) => {
                        console.error('Solr get-document API error:', error);
                    });
            }
            else
                this.activeProfile = null;
        },
        
    }
});


