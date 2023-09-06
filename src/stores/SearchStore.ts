import { defineStore } from 'pinia';
import { Guid } from 'guid-typescript';
import * as CatfishUI from 'applets'
import { baseState, fetchQuery } from './common';
import { createSearchQueryModel } from '../helpers/createSearchQueryModel';

export const useSearchStore = defineStore('SearchStore', {
    state: () => ({
        ...baseState,
        solrQueryModel: createSearchQueryModel(),
    }),
    
    getters: {
        keywords(): CatfishUI.Components.SolrQuery.ValueConstraint[] { return ((this.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "keywords") as CatfishUI.Components.SolrQuery.FieldConstraint)?.valueConstraints },
        resultCount: state => state.searchResult?.items?.length,
        selectedKeywords(): CatfishUI.Components.SolrQuery.ValueConstraint[] {
            return this.keywords.filter(keyword => keyword.selected)
        },
    },
    actions: {
        fetchData() {
            fetchQuery(
                this.solrQueryModel as CatfishUI.Components.SolrQuery.QueryModel,
                this.offset,
                this.pageSize,
                (result: CatfishUI.Components.SolrQuery.SearchOutput) => { this.searchResult = result; },
                false
            )
        },
        fetchNextPage() {
            fetchQuery(
                this.solrQueryModel as CatfishUI.Components.SolrQuery.QueryModel,
                this.searchResult.last,
                this.pageSize,
                (result: CatfishUI.Components.SolrQuery.SearchOutput) => {
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
            const fieldConstraint = (this.solrQueryModel.queryConstraints as CatfishUI.Components.SolrQuery.FieldConstraint[]).find(qc => qc.internalId === "freetext") as CatfishUI.Components.SolrQuery.FieldConstraint;
            fieldConstraint.valueConstraints[0].value = "";

            this.fetchData();
        },
    }
    
});
