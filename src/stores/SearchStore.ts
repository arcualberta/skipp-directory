import { defineStore } from 'pinia';
import { Guid } from 'guid-typescript';
import * as CatfishUI from 'applets'
import * as config from '../appsettings';
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
            this.isLoading = true;
            fetchQuery(
                this.searchWord as string,
                this.solrQueryModel as CatfishUI.Components.SolrQuery.QueryModel,
                this.offset,
                this.pageSize,
                true,
                (result: CatfishUI.Components.SolrQuery.SearchOutput) => { this.searchResult = result;
                    this.isLoading = false; },
                false
            )
        },
        fetchNextPage() {
            this.offset = this.pageSize + this.offset;
            this.isLoading = true;
            fetchQuery(
                this.searchWord as string,
                this.solrQueryModel as CatfishUI.Components.SolrQuery.QueryModel,
                this.offset,
                this.pageSize,
                true,
                (result: CatfishUI.Components.SolrQuery.SearchOutput) => {
                    //this.searchResult.resultEntries = this.searchResult.resultEntries.concat(result.resultEntries);
                    this.searchResult.resultEntries = result.resultEntries;
                    this.searchResult.offset = result.offset;
                    this.isLoading = false;
                },
                false
            )
        },
        fetchPerviousPage() {
            this.offset = this.offset - this.pageSize;
            this.isLoading = true;
            fetchQuery(
                this.searchWord as string,
                this.solrQueryModel as CatfishUI.Components.SolrQuery.QueryModel,
                this.offset,
                this.pageSize,
                true,
                (result: CatfishUI.Components.SolrQuery.SearchOutput) => {
                    //this.searchResult.resultEntries = this.searchResult.resultEntries.concat(result.resultEntries);
                    this.searchResult.resultEntries = result.resultEntries;
                    this.searchResult.offset = result.offset;
                    this.isLoading = false;
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
        selectWord(word: string) {
            console.log("word",word)
            this.isLoading = true;
            this.searchWord = word,
            this.fetchData();
            
        },
        setPage(pageNumber: number) {
            this.isLoading = true;
            this.offset = (pageNumber-1)*this.pageSize,
            this.fetchData();
            
        },
    }
    
});
