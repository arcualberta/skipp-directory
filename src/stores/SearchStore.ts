import { defineStore } from 'pinia';
import { Guid } from 'guid-typescript';
//import * as CatfishUI from 'applets'
import { baseState, fetchQuery } from './common';
import { createSearchQueryModel } from '../helpers/createSearchQueryModel';

export const useSearchStore = defineStore('SearchStore', {
    state: () => ({
        //...baseState,
        solrQueryModel: createSearchQueryModel(),
    }),
    /*
    getters: {
        keywords(): CatfishUI.Search.SolrQuery.ValueConstraint[] { return (this.solrQueryModel.queryConstraints.find(qc => qc.internalId === "keywords") as CatfishUI.Search.SolrQuery.FieldConstraint).valueConstraints },
        resultCount: state => state.searchResult?.items?.length,
        selectedKeywords(): CatfishUI.Search.SolrQuery.ValueConstraint[] {
            return this.keywords.filter(keyword => keyword.selected)
        },
    },
    actions: {
        fetchData() {
            fetchQuery(
                this.templateId as Guid,
                this.solrQueryModel as CatfishUI.search.SolrQuery.QueryModel,
                this.searchText as string,
                this.offset,
                this.pageSize,
                this.queryApiUrl as string,
                (result: CatfishUI.search.SearchOutput) => { this.searchResult = result; },
                false
            )
        },
        fetchNextPage() {
            fetchQuery(
                this.templateId as Guid,
                this.solrQueryModel as CatfishUI.search.SolrQuery.QueryModel,
                this.searchText as string,
                this.searchResult.last,
                this.pageSize,
                this.queryApiUrl as string,
                (result: CatfishUI.search.SearchOutput) => {
                    this.searchResult.items = this.searchResult.items.concat(result.items);
                    this.searchResult.last = result.last

                },
                false
            )
        },
        selectKeyword(index: number) {
            if (!this.keywords[index].selected) {
                this.keywords[index].selected = true;
                this.fetchData();
            }
        },
        unselectKeyword(index: number) {
            this.selectedKeywords[index].selected = false;
            this.fetchData();
        },
        clearKeywordSelection() {
            this.selectedKeywords.forEach(keyword => keyword.selected = false);
            
            //clear searchText
            const fieldConstraint = (this.solrQueryModel.queryConstraints as CatfishUI.search.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "freetext") as search.SolrQuery.FieldConstraint;
            fieldConstraint.valueConstraints[0].value = "";

            this.fetchData();
        },
    }
    */
});
