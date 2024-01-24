import { Guid } from 'guid-typescript';
import * as config from '../appsettings';
import type { SolrQuery, SolrSearchResult } from '@arc/arc-foundation/lib/solr/models';

export interface BaseState {
    searchWord: null | string;
    queryParams: null | string;
    offset: number;
    pageSize: number;
    last: number;
    isLoading: boolean;
    searchResult: SolrSearchResult;
}
export const baseState: BaseState = {
    searchWord:null,
    queryParams: null,
    offset: 0,
    pageSize: 10,
    last: 10,
    isLoading: false,
    searchResult: {
        offset: 0,
        totalMatches: 0,
        itemsPerPage:10,
        resultEntries: [] 
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
    queryModel: SolrQuery.QueryModel,
    offset: number,
    pageSize: number,
    isLoading: boolean,
    resultCallback: any,
    isAdmin: boolean
) => {
    // if (isAdmin) {
    //     //Update the visibleStates property in the query model such that the admin can see
    //     //both submitted and approved entries
    //     const visibilityConstraint = (queryModel.queryConstraints as SolrQuery.FieldConstraint[]).filter(q => q.internalId === "visibleStates")[0] as SolrQuery.FieldConstraint;
    //     if (visibilityConstraint)
    //         visibilityConstraint.setValueConstraints(config.QueryCategoryValues.adminVisibleStates, true);
    // }
    
    //const queryVal = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_t:Arts"
    const formData = new FormData();
    let query = "";

    const modelString = queryModel?.buildQueryString();
    const searchConstraint = (!searchWord || searchWord.trim().length == 0) ? "" : config.freeTextSearchTargetFieldNames.map( fieldName => `${fieldName}:${searchWord}`).join(' OR ');
    if(modelString.length == 0 &&  searchConstraint.length == 0){
        query = "*:*";
    }
    else if(modelString.length > 0 &&  searchConstraint.length == 0){
        query = modelString;
    }
    else if(modelString.length == 0 &&  searchConstraint.length > 0){
        query = searchConstraint;
    }
    else{
        query = `(${modelString}) AND (${searchConstraint})`;
    }

    console.log("searchWord",searchWord)
    console.log("queryModel", queryModel)
    console.log("query",query)  
    
    formData.append("query", query);
    formData.append("offset", offset.toString());
    formData.append("max", pageSize.toString());
    formData.append("filterQuery", "");
    formData.append("sortBy", "");
    formData.append("fieldList", "");
    formData.append("maxHiglightSnippets", "1");
    
   
    const queryApiUrl = `${config.default.solrApiRoot}/api/SolrSearch`
    const tenantId = `${config.default.tenantId}`
    console.log("tenantId", tenantId);
    fetch(queryApiUrl, {
        
        method: 'POST', // or 'PUT'
        body: formData,
        headers: {
            'Tenant-Id': `${tenantId}`
        }
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