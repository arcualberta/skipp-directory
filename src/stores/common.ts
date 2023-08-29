import { Guid } from 'guid-typescript';
import * as CatfishUI from 'applets';
import * as config from '../appsettings';

export interface BaseState {
    templateId: null | Guid;
    stateIdRestrictions: Guid[];
    queryParams: null | string;
    offset: number;
    pageSize: number;
    queryApiUrl: null | string;
    searchText: null | string;
    searchResult: CatfishUI.Components.SolrQuery.SearchOutput;
}
export const baseState: BaseState = {
    templateId: null,
    stateIdRestrictions: [],
    queryParams: null,
    offset: 0,
    pageSize: 25,
    queryApiUrl: null,
    searchText: null,
    searchResult: {
        first: 0,
        last: 0,
        count: 0,
        items: [] 
    },
}
export const fetchQuery = (
    templateId: Guid,
    queryModel: CatfishUI.Components.SolrQuery.solrQueryModel,
    searchText: string,
    offset: number,
    pageSize: number,
    queryApiUrl: string,
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
    queryApiUrl="https://localhost:5020/api/solr-search";
    const queryVal = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_t:Arts"
    const formData = new FormData();
    formData.append("templateId", templateId as unknown as string);
    formData.append("query", queryVal);

    formData.append("searchText", searchText);
    formData.append("offset", offset.toString());
    formData.append("max", pageSize.toString());
   
    console.log("Query",queryModel?.buildQueryString())
    console.log("queryApiUrl",queryApiUrl)
    fetch(queryApiUrl, {
        method: 'POST', // or 'PUT'
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            //console.log("Search Results:\n", JSON.stringify(data));
            resultCallback(JSON.parse(JSON.stringify(data)));
            
        })
        .catch((error) => {
            console.error('Item Load API Error:', error);
        });
}