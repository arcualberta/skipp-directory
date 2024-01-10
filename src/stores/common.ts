import { Guid } from 'guid-typescript';
import * as CatfishUI from 'applets';
import * as config from '../appsettings';

export interface BaseState {
    searchWord: null | string;
    queryParams: null | string;
    offset: number;
    pageSize: number;
    last: number;
    isLoading: boolean;
    searchResult: CatfishUI.Components.SolrQuery.SearchOutput;
}
export const baseState: BaseState = {
    searchWord:null,
    queryParams: null,
    offset: 0,
    pageSize: 10,
    last: 10,
    isLoading: false,
    searchResult: {
        first: 0,
        last: 0,
        count: 0,
        items: [] 
    },
}

/**
 * Fetches a list of search result objects that are corresponding to the query specified by the
 *  query model from the solr search.
 * 
 * @param queryModel 
 * @param searchText 
 * @param offset 
 * @param pageSize 
 * @param resultCallback 
 * @param isAdmin 
 */
export const fetchQuery = (
    searchWord:string|null,
    queryModel: CatfishUI.Components.SolrQuery.solrQueryModel,
    offset: number,
    pageSize: number,
    isLoading: boolean,
    resultCallback: any,
    isAdmin: boolean
) => {
    if (isAdmin) {
        //Update the visibleStates property in the query model such that the admin can see
        //both submitted and approved entries
        const visibilityConstraint = (queryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).filter(q => q.internalId === "visibleStates")[0] as CatfishUI.Components.SolrQuery.FieldConstraint;
        if (visibilityConstraint)
            visibilityConstraint.setValueConstraints(config.QueryCategoryValues.adminVisibleStates, true);
    }
    
    //const queryVal = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_t:Arts"
    const formData = new FormData();
    let query = "*:*";
    console.log("searchWord",searchWord)
    if(searchWord != null){
        query = (config.SearchResultFieldMapping.NAME+":"+searchWord + " OR " + config.SearchResultFieldMapping.COMMUNITIESNATIONSORGANIZATIONS+":"+searchWord+ " OR " + config.SearchResultFieldMapping.KEYWORDS+":"+searchWord)
        console.log("query",query)
        if(queryModel?.buildQueryString())
            query = query + " AND "+queryModel?.buildQueryString();
    }
    else{
        if(queryModel?.buildQueryString())
            query = queryModel?.buildQueryString();
    }
    
    formData.append("query", query);
    formData.append("offset", offset.toString());
    formData.append("max", pageSize.toString());
    formData.append("filterQuery", "");
    formData.append("sortBy", "");
    formData.append("fieldList", "");
    formData.append("maxHiglightSnippets", "1");
    
   
    const queryApiUrl = `${config.default.solrApiRoot}/api/SolrSearch`
    const tenantId = "a4a50d9f-fd20-4d74-8274-2acad28a6553" as unknown as Guid
    const securityToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhcmNyY2dAdWFsYmVydGEuY2EiLCJ0b2tlblR5cGUiOiJVc2VyVG9rZW4iLCJ1c2VyZGF0YSI6IiIsIm1lbWJlcnNoaXAiOiJ7XCJVc2VyXCI6e1wiSWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiSWRlbnRpdHlVc2VySWRcIjpcIjRiZDc1NjAzLTQzZjEtNGM5OS1hNDkxLWRjNjJhZmVjMmQ2OVwiLFwiVXNlck5hbWVcIjpcImFkbWluXCIsXCJFbWFpbFwiOlwiYXJjcmNnQHVhbGJlcnRhLmNhXCIsXCJTeXN0ZW1Sb2xlc1wiOltcIlN5c0FkbWluXCJdfSxcIlRlbmFuY3lcIjpudWxsfSIsImp0aSI6IjJlYzA3YmIzLTEwOTYtNGI0Ni05ZGZkLTVjZjRmYWI2MTg3MyIsInJvbGVzIjoiU3lzQWRtaW4iLCJleHAiOjE3MDUwMDA5NDEsImlzcyI6Imh0dHBzOi8vYXV0aC5hcnRzcm4udWFsYmVydGEuY2EiLCJhdWQiOiJodHRwczovL2FyYy1hcHBzLmFydHNybi51YWxiZXJ0YS5jYSJ9.aLDvfQ16WHwR0iHHsYFHspXwRK274OrrG-k8E45gVW01tHJbfhIWEzyS5vHgFiJilJgS8PlVnzcHsjK4YVR95bPQ1mtLK6F-EowsG0aAlCldi7aVzjmh7yKQ86cu5g6rxG0rR6gVa71PTpvCSCLkHVWVyGzwgTyyaIwhFhFBqtSiO--N8h4EWF-BPk2usxBua-ODLhGzTmCKDFeUTn5bw2L7hA_Zr581_q9opiwiLXRGGt1JynZcULPcVnfcq7Gv8yQ02QSbfXJHqDUH4xen5SNw6Figf8ngiL7H2DvVWVJITbkqGNax1RzmF57mh_3at5pZaOOZ9I8gwhRpuuGCgA"
    console.log("tenantId", tenantId);
    fetch(queryApiUrl, {
        'Tenant-Id': `${tenantId}`,
        method: 'POST', // or 'PUT'
        body: formData,
        'Authorization': `Bearer ${securityToken}`
    })
        .then(response => response.json())
        .then(data => {
            //console.log("Search Results:\n", JSON.stringify(data));
            isLoading = false;
            resultCallback(JSON.parse(JSON.stringify(data)));
        })
        .catch((error) => {
            isLoading = false;
            console.error('Item Load API Error:', error);
        });
}