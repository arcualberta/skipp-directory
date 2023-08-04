import * as CatfishUI from 'applets'
import * as config from '../appsettings'

export const createSearchQueryModel = () =>{
    
    console.log("CatfishUI.Search: ", CatfishUI)

    const queryModel = new CatfishUI.Components.SolrQuery.QueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND);
    console.log("queryModel start", queryModel)
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
        
    console.log("queryModel end", queryModel)

    return queryModel;

        
}