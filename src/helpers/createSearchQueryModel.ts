import * as CatfishUI from 'applets'
import * as config from '../appsettings'

export const createSearchQueryModel = () =>{

    const queryModel = new CatfishUI.Components.SolrQuery.QueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND);
    //Keyword constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.KEYWORDS,
        config.QueryCategoryValues.Keywords,
        CatfishUI.Components.SolrQuery.AggregationOperator.AND,
        "keywords");

        //Position constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.POSITION,
        config.QueryCategoryValues.Positions,
        CatfishUI.Components.SolrQuery.AggregationOperator.OR,
        "positions");

    //Faculty constr
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.FACULTY,
        config.QueryCategoryValues.Faculties,
        CatfishUI.Components.SolrQuery.AggregationOperator.OR,
        "faculties");
        

    return queryModel;

        
}