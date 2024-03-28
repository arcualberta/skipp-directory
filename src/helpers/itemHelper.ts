import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models';
import * as config from '../appsettings';

type SolrFieldValueType = string | string[] | number | number[] | Date | Date[] | null

export function getSolrFieldValue(item: SolrResultEntry, solrFieldName: string): SolrFieldValueType {
    
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
export function getStringArrayValue(item: SolrResultEntry, solrFieldName: string): string[] {
    
    const val = getSolrFieldValue(item, solrFieldName)
    return val ? val as unknown as string[] : [];
}

export function getConcatenatedStringValue(item: SolrResultEntry, solrFieldName: string){
    return getStringArrayValue(item, solrFieldName)?.join(", ");
}

export function getName(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.NAME) as string
}
export function getPosition(item: SolrResultEntry): string{
    return getSolrFieldValue(item, config.SearchResultFieldMapping.POSITION) as string
}
export function getEmail(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.EMAIL) as string; 
}

export function getKeywords(item: SolrResultEntry) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.KEYWORDS).join(", ");
}
export function getKeywordList(item: SolrResultEntry) {
    return getStringArrayValue(item, config.SearchResultFieldMapping.KEYWORDS);
}
export function getFaculty(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.FACULTY) as string;
}
export function getPronouns(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PRONOUNS) as string;
}
export function getWebsiteLinks(item: SolrResultEntry): string[] {
    return [getSolrFieldValue(item, config.SearchResultFieldMapping.WEBSITELINKS) as string];
}
export function getIndigeniousCommunity(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.NATIONORCOMMUNITY) as string;
}
export function getLocation(item: SolrResultEntry) {
    return getConcatenatedStringValue(item, config.SearchResultFieldMapping.LOCATION);
}
export function getProjectList(item: SolrResultEntry) {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PROJECT_LIST) as unknown as SolrResultEntry[];
}
export function getProjectTitle(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PROJECT_TITLE) as string;
}
export function getProjectDescription(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PROJECT_DESCRIPTION) as string;
}
export function getProjectInitiation(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PROJECT_INITIATION) as string;
}
export function getProjectRole(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.PROJECT_ROLE) as string;
}
export function getFileReferences(item: SolrResultEntry): string {
    return getSolrFieldValue(item, config.SearchResultFieldMapping.FILE_REFERENCES) as string;
}