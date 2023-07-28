import * as CatfishUI from 'applets'
import * as config from '../appsettings'

export const createSearchQueryModel = () =>{
    
    console.log("CatfishUI.Search: ", CatfishUI)

    const queryModel = new CatfishUI.Components.SolrQuery.QueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND);

    //Keyword constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.KEYWORDS,
        config.QueryCategoryValues.Keywords,
        false,
        CatfishUI.Components.SolrQuery.AggregationOperator.AND,
        "keywords");

        //Position constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.POSITION,
        config.QueryCategoryValues.Positions,
        false,
        CatfishUI.Components.SolrQuery.AggregationOperator.OR,
        "positions");

    //Faculty constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.FACULTY,
        config.QueryCategoryValues.Faculties,
        false,
        CatfishUI.Components.SolrQuery.AggregationOperator.OR,
        "faculties");


    return queryModel;

        
}