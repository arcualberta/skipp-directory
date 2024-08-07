import { Guid } from 'guid-typescript';
import { defineStore } from 'pinia';

import { useSearchStore } from './SearchStore';
import * as config from '../appsettings';
import { baseState, fetchQuery } from './common';
import type { SolrResultEntry, SolrSearchResult } from '@arc/arc-foundation/lib/solr/models';
import { toFormData } from '@arc/arc-foundation/lib/solr/helpers';
import { JoinUsFormTemplate } from '@/joinUsFormTemplate'
import type { ArcFormData, CompositeFieldData, FormTemplate } from '@arc/arc-foundation/lib/forms/models';
import type {LoginResult}  from '@arc/authorization'
import { AuthProxy } from '@arc/arc-foundation/lib/api';
import { useApiRootsStore } from './apiRootsStore';
//import { createProfileQueryModel } from '../helpers/createSearchQueryModel';
import { getEmail } from '../helpers/itemHelper';
import axios from 'axios';
import type { FileReference } from '@arc/arc-foundation/lib/forms/models/field';
//const searchStore = useSearchStore();
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
        userLoginResult: null as LoginResult | null,
        userLoginToken: null as string | null, //jwt token return from auth proxy
        apiKey: null as string | null,
        formSubmissionMode: null as null | "CREATE" | "UPDATE"

  }),
    getters: {
        isAdmin(): boolean {
            if (this.userInfo?.roles?.includes("SysAdmin")){
                return true;
            }
            else{
                return this.userLoginResult?.membership?.tenancy?.find(tenant  => tenant.id == config.default.tenantId )?.roles?.find(role => role.name == "Admin") ? true : false;
            }
        },
        currentUserEmail(): string | null {
            return this.userLoginResult?.email;
        },
        getFormData(): ArcFormData | CompositeFieldData | null {
            if(this.activeProfile){
                return toFormData(this.activeProfile as SolrResultEntry, JoinUsFormTemplate as unknown as FormTemplate)  
            }
            else{
                return null
            }
        },
        getUserLoginResult(): LoginResult{
            return this.userLoginResult;
        },
        getUserLoginToken(): string | null{
            return this.userLoginToken;
        },
        isUserLoggedIn(): boolean{
            return this.userLoginToken != null
        },
        getUserName(): string{
            return this.userLoginResult?.username 
        },
        getApiKey(): string | null {
            if(this.isAdmin){
                return this.apiKey;
            }
            else if(this.userLoginResult && this.userLoginResult.email === getEmail(this.activeProfile as SolrResultEntry)){
                return this.apiKey;
            }
            else{
                return null;
            }
        }
       
    },
    actions: {
        setActiveProfile(profileId: Guid) {
            if (profileId) {
                const apiRootsStore = useApiRootsStore();

                const url = `${apiRootsStore.solrRoot}/api/SolrSearch/get-document/${profileId}`;
                fetch(url, {
                    method: 'GET', 
                    headers: {
                        'Tenant-Id': `${config.default.tenantId}`,
                        'solrCore': `${apiRootsStore.solrCore}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.activeProfile = data;  
                    })
                    .catch((error) => {
                        console.error('Solr get-document API error:', error);
                    });
            }
            else{
                this.activeProfile = null;
            }
        },
          getProfilePictureURL(fileReference: FileReference | null): string | null {
            if (fileReference) {
                const apiRootsStore = useApiRootsStore();
                const url = `${apiRootsStore.solrRoot}/api/solr/get-attachment?fileName=${fileReference.fileName}&tenantId=${config.default.tenantId}`;
                return url;
             }
             else{
                return null
             }
        },
        async loadApiKey(){
            const apiRootsStore = useApiRootsStore();
            const proxy = new AuthProxy(apiRootsStore.authRoot, config.default.tenantId as unknown as Guid);
            this.apiKey = await proxy.getApiToken(config.default.appId, config.default.tenantId as unknown as Guid)
        }        
    }
});


