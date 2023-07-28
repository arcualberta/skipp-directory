import { Guid } from 'guid-typescript';
import * as CatfishUI from 'applets'
import * as config from '../appsettings';

export interface BaseState {
    templateId: null | Guid;
    stateIdRestrictions: Guid[];
    queryParams: null | string;
    offset: number;
    pageSize: number;
    queryApiUrl: null | string;
    searchText: null | string;
    searchResult: CatfishUI.SearchOutput;
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
    queryModel: CatfishUI.search.SolrQuery.QueryModel,
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
        const visibilityConstraint = queryModel.queryConstraints.filter(q => q.internalId === "visibleStates")[0] as CatfishUI.SolrQuery.FieldConstraint;
        if (visibilityConstraint)
            visibilityConstraint.setValueConstraints(config.QueryCategoryValues.adminVisibleStates, true);
    }

    const formData = new FormData();

    formData.append("templateId", templateId as unknown as string);
    formData.append("query", queryModel?.buildQueryString());
    formData.append("searchText", searchText);

    formData.append("offset", offset.toString());
    formData.append("max", pageSize.toString());

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