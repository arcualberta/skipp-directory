import * as CatfishUI from 'applets'
import * as config from '../appsettings';

type SolrFieldValueType = string | string[] | number | number[] | Date | Date[] | null

export function getSolrFieldValue(item: CatfishUI.Components.ResultItem, solrFieldName: string): SolrFieldValueType {
    
    if (item?.data) {
        /* item.data is an array of key/value pairs. We need to select the key-value pair that has the
          value of key same as the given solrFieldName. The value of this key value pair depends on the 
          type of the solr field, which we can decide as follows depending on how the solr field name ends.
          i.e. if filed name ends with:
            _t or _s => single string
            _ts or _ss => an array of strings
            _i, _d => a single number
            _is, _ds => an array of numbers
            _dt => a single date
            _dts => array of dates.
        */
        
        return item.data.find((entry: { key: string; }) => entry.key === solrFieldName)?.value
    }
    return null;
}
export function getStringArrayValue(item: CatfishUI.Components.ResultItem, solrFieldName: string): string[] {
    
    const val = getSolrFieldValue(item, solrFieldName)
    return val ? val as unknown as string[] : [];
}

export function getConcatenatedStringValue(item: CatfishUI.Components.ResultItem, solrFieldName: string){
    return getStringArrayValue(item, solrFieldName)?.join(", ");
}

export function getName(item: CatfishUI.Components.ResultItem){
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.NAME)
}
export function getPosition(item: CatfishUI.Components.ResultItem): string{
    return getSolrFieldValue(item, config.SearchResultFieldMapping.POSITION) as string
}
export function getEmail(item: CatfishUI.Components.ResultItem): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.EMAIL) as string
}

export function getKeywords(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.KEYWORDS).join(", ");
}
export function getKeywordList(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.KEYWORDS);
}
export function getFaculty(item: CatfishUI.Components.ResultItem) {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.FACULTY)
}
export function getPronouns(item: CatfishUI.Components.ResultItem) {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PRONOUNS)
}
export function getWebsiteLinks(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.WEBSITELINKS);
}
export function getIndigeniousCommunity(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.NATIONORCOMMUNITY);
}
