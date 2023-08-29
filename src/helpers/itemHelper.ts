import * as CatfishUI from 'applets'
import * as config from '../appsettings';

export function getSolrFieldValue(item: CatfishUI.Components.ResultItem, solrFieldName: string) {
    
    if (item?.data) {
        console.log("solrFieldName", solrFieldName);
        const index = Object.keys(item).indexOf(solrFieldName);
        console.log("index", index);
        if (index >= 0)
            return Object.values(item.data)[index]
    }
    return null;
}
export function getStringArrayValue(item: CatfishUI.Components.ResultItem, solrFieldName: string): string[] {
    
    const val = getSolrFieldValue(item, solrFieldName)
    return val ? val as unknown as string[] : [];
}

export function getConcatenatedStringValue(item: CatfishUI.Components.ResultItem, solrFieldName: string): string | null {
    return getStringArrayValue(item, solrFieldName).filter(val => !config.default.dataAttributes.excludeTerms.includes(val)).join(", ");
}

export function getName(item: CatfishUI.Components.ResultItem) {
    console.log("item", item);
    console.log("solrFields", Object.keys(item));
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.NAME)
}
export function getPosition(item: CatfishUI.Components.ResultItem) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.POSITION)
}
export function getKeywords(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.ADDITIONAL_KEYWORDS)
}
export function getEmail(item: CatfishUI.Components.ResultItem) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.EMAIL).join(", ")
}
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
}/*
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




