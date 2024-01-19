import { eFieldType, type SearchFieldDefinition } from "./components/Shared/constant";

export default {
    dataServiceApiRoot: "/server/applets/api/",
    googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
    tenantId:"a4a50d9f-fd20-4d74-8274-2acad28a6553",
    googleCalendarIds: ["ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com","c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com"],
    maxEvents: 10,
    initialView: 'dayGridMonth',
    googleLoginClientId:"589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",
    //authorizationApiRoot:"https://localhost:5010/",
    dataRepositoryApiRoot: "https://localhost:5020",
    authorizationApiRoot: "https://auth-test.artsrn.ualberta.ca",
    solrApiRoot:  "https://solr-test.artsrn.ualberta.ca"
};

export enum SearchResultFieldMapping {
    NATIONORCOMMUNITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_af27cd1f-4df1-fc15-4ef4-286eb2002816_ts",
    NAME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_77ef4194-c2bf-686c-a05d-e3a63ab53750_ts",
    EMAIL = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_6c130003-7792-10c5-cdf5-372f8fe237bd_ts",
    POSITION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_b0620da7-6bf1-5c9c-b70d-b96aadeb0413_ts",
    FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_ts",
    ADDITIONAL_FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_8f097f5a-d234-53e0-1399-968cf6ea2243_ts",
    PRONOUNS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_bf33b1ab-ebd5-2452-e313-46a3f0f8d5eb_ts",
    DISABILITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_c27ebf23-8765-3e9f-a0eb-35553d71e9f0_ss",
    INDIGENOUS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_3138944e-82e7-3ff0-831a-b17cc2c950fe_ts",
    COMMUNITIESNATIONSORGANIZATIONS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_be9ebb54-2971-0267-80b2-3d963b56b8a4_ss",
    LOCATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_a5582c7f-5c0b-b373-32ee-ad8584abe106_ts",
    ETHNICITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_71ae6003-556c-2ed0-d197-ff382ce75c45_ts",
    THEME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_dca2335d-3c60-8785-6c07-c9e9079aa5c8_ts",
    GENDER_IDENTITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_f503da45-f9ec-6942-269d-45cdea413f84_ss",
    CURRENTPROJECTS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_020e9f66-911d-55dd-3eff-3bb3aec182ee_ts",
    INITIATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_03d1ffdd-0736-d8c8-418f-58691f22c19b_ts",
    ROLES = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b89ad9f-7a76-7594-b932-9a20bfa44b4b_ts",
    WEBSITELINKS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b559321-498d-95b3-0734-2ae9ae876b93_ts",
    KEYWORDS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_aeaf264c-06e0-7bec-1073-832cbdb88bca_ts",
    SOCIALMEDIA = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_ts",
    ADITIONAL_CONTACT = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_260bedf2-ef68-c0be-be4b-e0e98ddcaf65_ts",
    PROJECT_LIST = "container_020e9f66-911d-55dd-3eff-3bb3aec182ee",
    PROJECT_TITLE = "data_undefined_f9324907-a5e3-d655-c5a8-ee31e6aa0ee5_ts",
    PROJECT_DESCRIPTION = "data_undefined_21dc5652-296f-1149-9cb9-e914f9894978_ts",
    PROJECT_INITIATION = "data_undefined_bb85e648-5f85-293f-4b20-f8cdf70c86a6_ts",
    PROJECT_ROLE = "data_undefined_b1709fd6-6c12-6234-f20b-6ca96c96716e_ts",
    PROJECT_INDEX = "child_index_i",
    STATE = "status_s",
};
export const QueryCategoryValues = {
    publicVisibleStates: ["654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    adminVisibleStates: ["e952e454-73f8-4c54-92d9-d11f84ac3985", "654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    Keywords: ["Activism", "Age", "Black studies", "Body", "Canada", "Class", "Colonialism", "Culture", " Decolonization", "Disability",
        "Diversity", "Environment", "Ethics", "Family", "Feminism", "Feminist Theory", "Film", "Gender", "Genderqueer", "Government",
        "Health", "History", "Human Rights", "Identity", "Immigration", "Indigenous", "Inequality", " International", "Intersectionality", "Language", "Law", "Literature", "Marginalized population", "Masculinities", "Media", "Mental health", " Mothering",
        "Pedagogy", "Policy", "Politics", "Qualitative", "Research", " Queer", "Quare", "Race", "Relation", "Religion", "Sex", "Sexuality",
        "Science", "Sport", "Social justice", "Transgender", " Two-spirit", "Violence", "Work"],
    Positions: ["Academic teaching staff", "Assistant professor","Associate professor","Graduate student","Postdoctoral fellow","Professor","Professor Emeritus","Research assistant"],
    Faculties: ["Arts", "Education", "Native Studies", "Agricultural, Life and Environmental Sciences", "Nursing"],
    SelfIdentification: {
        Disability: ["Deaf", "Neurodivergent", "Experiencing disability", "Not living with a disability", "Another"],
        Race: ["Indigenous", "Black", "Person of Colour", "White", "Another"],
        Ethnicity: ["Japanese-American", "European"],
        GenderIdentity: ["Two-Spirit", "Gender non-binary", "Genderfluid", "Transgender", "Woman", "Man", "Another"]
    }
}
