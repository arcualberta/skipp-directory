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

export function getConcatenatedStringValue(item: CatfishUI.Components.ResultItem, solrFieldName: string): string | null {
    return getStringArrayValue(item, solrFieldName)?.join(", ");
}

export function getName(item: CatfishUI.Components.ResultItem): string | null {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.NAME)
}
export function getPosition(item: CatfishUI.Components.ResultItem){
    return getSolrFieldValue(item, config.SearchResultFieldMapping.POSITION)
}
export function getEmail(item: CatfishUI.Components.ResultItem) {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.EMAIL)
}

export function getKeywords(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.KEYWORDS).join(", ");
}
/*
export function getFaculty(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.FACULTY).join(", ")
}
export function getDisability(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.DISABILITY).join(", ")
}
export function getEthnicity(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.ETHNICITY).join(", ")
}
export function getGenderIdentity(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.GENDER_IDENTITY).join(", ")
}
export function getCurrentProjects(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.CURRENTPROJECTS).join(", ")
}
export function getInitiation(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.INITIATION)
}
export function getWebsiteLinks(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.WEBSITELINKS);
}
export function getPronouns(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.PRONOUNS)
}
export function getCommunitiesAndOrganizations(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.COMMUNITIESNATIONSORGANIZATIONS)
}
export function getShowPronouns(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_PRONOUNS)
}
export function getShowPosition(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_POSITION)
}
export function getShowDisability(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_DISABILITY)
}
export function getShowRace(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_RACE)
}
export function getShowGenderIdentity(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_GENDER_IDENTITY)
}
export function getShowLinks(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.SHOW_EXTERNAL_LINKS)
}
export function getConsent(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.CONSENT)
}
export function getFileName(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.FILE_NAME)
}
export function getSimilarityTerms(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.SIMILARITY_SOURCE).filter(val => !config.default.dataAttributes.excludeTerms.includes(val))
}*/




