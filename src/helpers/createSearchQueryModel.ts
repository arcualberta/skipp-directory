import { SolrQuery } from '@arc/arc-foundation/lib/solr/models/solrQuery';
import * as config from '../appsettings'

export const createSearchQueryModel = () =>{

    const queryModel = new SolrQuery.QueryModel(SolrQuery.AggregationOperator.AND);
    //Keyword constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.KEYWORDS,
        config.QueryCategoryValues.Keywords,
        SolrQuery.AggregationOperator.AND,
        "keywords");

    //Communities constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.LOCATION,
        config.QueryCategoryValues.Communities,
        SolrQuery.AggregationOperator.OR,
        "communities");

        //Position constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.POSITION,
        config.QueryCategoryValues.Positions,
        SolrQuery.AggregationOperator.OR,
        "positions");

    //Faculty constr
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.FACULTY,
        config.QueryCategoryValues.Faculties,
        SolrQuery.AggregationOperator.OR,
        "faculties");
        

    return queryModel;

        
}