import { Guid } from 'guid-typescript';
import { defineStore } from 'pinia';

import * as CatfishUI from 'applets';
import { useSearchStore } from './SearchStore';
import * as config from '../appsettings';
import { baseState, fetchQuery } from './common';
import { createProfileQueryModel } from '../helpers/createProfileQueryModel';

const searchStore = useSearchStore();
interface UserInfo {
    userName: string | null;
    roles: string[] | null;
}

export const useProfileStore = defineStore('ProfileStore', {
    state: () => ({
        ...baseState,
        solrQueryModel: createProfileQueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND),
        defaultQueryModel: createProfileQueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.OR),
        activeProfile: null as CatfishUI.Components.ResultItem | null,
        userInfo: null as UserInfo | null,
        profileDeleteStatus: "",
  }),
    getters: {
        isAdmin(): boolean {
            return this.userInfo?.roles?.includes("SysAdmin") ? true : false;
        }
    },
    actions: {
        
        fetchData() {
            if (!this.activeProfile)
                return;

            console.log("ProfileStore.fetchData called")

            let queryModel: CatfishUI.Components.SolrQuery.QueryModel | null = null;
            
                queryModel = this.defaultQueryModel as CatfishUI.Components.SolrQuery.QueryModel;
            

            queryModel.excludeIds = [(this.activeProfile as CatfishUI.Components.ResultItem)?.id];

            fetchQuery(
                "",
                queryModel,
                this.offset,
                this.pageSize,
                (result: CatfishUI.Components.SearchOutput) => { this.searchResult = result; },
                this.isAdmin
            )
        },
        
        setActiveProfile(profileId: Guid) {
            console.log("ProfileStore.setActiveProfile called",profileId)
            if (profileId) {
                let query = "id:"+profileId;
                const formData = new FormData();
                formData.append("query", query);
                formData.append("offset","0");
                formData.append("max", "1");
                formData.append("filterQuery", "");
                formData.append("sortBy", "");
                formData.append("fieldList", "");
                formData.append("maxHiglightSnippets", "1");
                const queryApiUrl = `${config.default.dataRepositoryApiRoot}/solr-search`

                console.log("queryApiUrl",queryApiUrl)
                console.log("Query",query)

                fetch(queryApiUrl, {
                    method: 'POST', // or 'PUT'
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Search Results:\n", JSON.stringify(data));
                        const entries = (data as CatfishUI.Components.ResultItem)?.resultEntries;
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


