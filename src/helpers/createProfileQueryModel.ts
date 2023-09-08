import * as CatfishUI from 'applets'
import * as config from '../appsettings';

export const createProfileQueryModel = (keywordAggregator: CatfishUI.Components.SolrQuery.AggregationOperator) => {

    const queryModel = new CatfishUI.Components.SolrQuery.QueryModel(CatfishUI.Components.SolrQuery.AggregationOperator.AND);

    if (!keywordAggregator)
        keywordAggregator = CatfishUI.Components.SolrQuery.AggregationOperator.AND;

    //Related entries constraint
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.KEYWORDS,
        [],
        false,
        keywordAggregator,
        "keywords");

    //Free-text search field
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.INITIATION,
        [],
        false,
        CatfishUI.Components.SolrQuery.AggregationOperator.AND,
        "freetext");

    //Filtering by visible status values.
    queryModel.appendNewFieldConstraint(
        config.SearchResultFieldMapping.STATE,
        config.QueryCategoryValues.publicVisibleStates,
        true,
        CatfishUI.Components.SolrQuery.AggregationOperator.OR,
        "visibleStates");


    return queryModel;
}