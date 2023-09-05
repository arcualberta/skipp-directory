import { eFieldType, type SearchFieldDefinition } from "./components/Shared/constant";

export default {
    dataServiceApiRoot: "/server/applets/api/",
    googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
    googleCalendarIds: ["ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com","c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com"],
    maxEvents: 10,
    initialView: 'dayGridMonth',
    googleLoginClientId:"589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",
    //authorizationApiRoot:"https://localhost:5010/",
    //dataRepositoryApiRoot: "https://localhost:5020",
    authorizationApiRoot: "https://auth-test.artsrn.ualberta.ca",
    dataRepositoryApiRoot: "https://skipp-test.artsrn.ualberta.ca/api",
    joinUsFormId:"43FF5214-B6A6-9F16-E7FD-A2337B97A949"
};

export enum SearchResultFieldMapping {
    NATIONORCOMMUNITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_af27cd1f-4df1-fc15-4ef4-286eb2002816_ss",
    NAME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_77ef4194-c2bf-686c-a05d-e3a63ab53750_ts",
    EMAIL = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_6c130003-7792-10c5-cdf5-372f8fe237bd_ss",
    POSITION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_b0620da7-6bf1-5c9c-b70d-b96aadeb0413_ss",
    FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_ts",
    ADDITIONAL_FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_8f097f5a-d234-53e0-1399-968cf6ea2243_ts",
    PRONOUNS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_bf33b1ab-ebd5-2452-e313-46a3f0f8d5ebts",
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
    ADDITIONAL_KEYWORDS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_aeaf264c-06e0-7bec-1073-832cbdb88bca_ts",
    SOCIALMEDIA = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_ts",
    ADITIONAL_CONTACT = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_260bedf2-ef68-c0be-be4b-e0e98ddcaf65_ts",
    CREATED = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_ts",
    UPDATED = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_ts",
    CONSENT = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_ts",
    STATE = "status_s",
    KEYWORDS = "_keywords__ss",
};
export const QueryCategoryValues = {
    publicVisibleStates: ["654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    adminVisibleStates: ["e952e454-73f8-4c54-92d9-d11f84ac3985", "654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    Keywords: ["Activism", "Age", "Black studies", "Body", "Canada", "Class", "Colonialism", "Culture", " Decolonization", "Disability",
        "Diversity", "Environment", "Ethics", "Family", "Feminism", "Feminist Theory", "Film", "Gender", "Genderqueer", "Government",
        "Health", "History", "Human Rights", "Identity", "Immigration", "Indigenous", "Inequality", " International", "Intersectionality", "Language", "Law", "Literature", "Marginalized population", "Masculinities", "Media", "Mental health", " Mothering",
        "Pedagogy", "Policy", "Politics", "Qualitative", "Research", " Queer", "Quare", "Race", "Relation", "Religion", "Sex", "Sexuality",
        "Science", "Sport", "Social justice", "Transgender", " Two-spirit", "Violence", "Work"],
    Positions: ["Assistant Professor", "Assistant Clinical Professor", "Associate Professor", "Professor", "Academic Teaching Staff", "Professor Emerit/a/us", "Retired"],
    Faculties: ["Arts", "Education", "Native Studies", "Agricultural, Life and Environmental Sciences", "Nursing"],
    SelfIdentification: {
        Disability: ["Deaf", "Neurodivergent", "Experiencing disability", "Not living with a disability", "Another"],
        Race: ["Indigenous", "Black", "Person of Colour", "White", "Another"],
        Ethnicity: ["Japanese-American", "European"],
        GenderIdentity: ["Two-Spirit", "Gender non-binary", "Genderfluid", "Transgender", "Woman", "Man", "Another"]
    }
}
