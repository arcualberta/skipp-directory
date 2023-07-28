import * as CatfishUI from 'applets'
import * as config from '../appsettings'

export const createSearchQueryModel = () =>{
    const queryModel = new CatfishUI.Search.SolrQuery.QueryModel(CatfishUI.Search.SolrQuery.AggregationOperator.AND);

    //Keyword constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.KEYWORDS,
        config.QueryCategoryValues.Keywords,
        false,
        CatfishUI.Search.SolrQuery.AggregationOperator.AND,
        "keywords");

        //Position constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.POSITION,
        config.QueryCategoryValues.Positions,
        false,
        CatfishUI.Search.SolrQuery.AggregationOperator.OR,
        "positions");

    //Faculty constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.FACULTY,
        config.QueryCategoryValues.Faculties,
        false,
        CatfishUI.Search.SolrQuery.AggregationOperator.OR,
        "faculties");
        return queryModel;
}