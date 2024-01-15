import { Guid } from 'guid-typescript';
import { defineStore } from 'pinia';

import { useSearchStore } from './SearchStore';
import * as config from '../appsettings';
import { baseState, fetchQuery } from './common';
import type { SolrResultEntry, SolrSearchResult } from '@arc/arc-foundation/lib/solr/models';
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
        }
    },
    actions: {
        setActiveProfile(profileId: Guid) {
            if (profileId) {
                let query = "id:"+profileId;
                console.log("query",query)
                const formData = new FormData();
                formData.append("query", query);
                formData.append("offset","0");
                formData.append("max", "1");
                formData.append("filterQuery", "");
                formData.append("sortBy", "");
                formData.append("fieldList", "");
                formData.append("maxHiglightSnippets", "1");
                const queryApiUrl = `${config.default.solrApiRoot}/api/SolrSearch`
                const tenantId = `${config.default.tenantId}`
                fetch(queryApiUrl, {
                    method: 'POST', // or 'PUT'
                    body: formData,
                    headers: {
                        'Tenant-Id': `${tenantId}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const entries = (data as SolrSearchResult)?.resultEntries;
                        this.activeProfile = entries?.length > 0 ? entries[0] : null;
                        
                    })
                    .catch((error) => {
                        console.error('Item Load API Error:', error);
                    });
                
            }
            else
                this.activeProfile = null;
        },
    }
});


