import { Guid } from 'guid-typescript'


let googleClientId = "";
let app = "";
let auth = "";
let solr = "";
let solrCore = "";
if(window.location.host.indexOf("skipp.artsrn.ualberta.ca") >= 0){
    //Prod Server
    googleClientId = "589183038778-i21iod3d3obrmot5vk3ap59akglg5a9u.apps.googleusercontent.com";
    app = "https://skipp.artsrn.ualberta.ca";
    auth = "https://auth.artsrn.ualberta.ca/v1";
    solr = "https://solr.artsrn.ualberta.ca";
    solrCore = "http://arrw-db001.artsrn.ualberta.ca:8983/solr/skipp.artsrn.ualberta.ca"
}
else if(window.location.host.indexOf("skipp-test.artsrn.ualberta.ca") >= 0){
   //Test Server
   googleClientId = "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com";
   app = "https://skipp-test.artsrn.ualberta.ca";
   auth = "https://auth-test.artsrn.ualberta.ca/v1";
   solr = "https://solr-test.artsrn.ualberta.ca";
   solrCore = "";
}
else{
   //Dev Server
   googleClientId = "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com";
   app = "http://localhost:8080";
   auth = "https://auth-test.artsrn.ualberta.ca/v1";
   solr = "https://solr-test.artsrn.ualberta.ca";
   solrCore = "";
}

export default {
    dataServiceApiRoot: "/server/applets/api/",
    googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
    googleCalendarIds: ["ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com","c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com"],
    maxEvents: 10,
    tenantId:"a4a50d9f-fd20-4d74-8274-2acad28a6553",
    googleLoginClientId:googleClientId,
    app,
    auth,
    solr,
    solrCore,

     //on prod auth.api
    appId: "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid
};

// export default {
//     dataServiceApiRoot: "/server/applets/api/",
//     googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
//     tenantId:"a4a50d9f-fd20-4d74-8274-2acad28a6553",
//     googleCalendarIds: ["ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com","c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com"],
//     maxEvents: 10,
//     initialView: 'dayGridMonth',
//     googleLoginClientId:"589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",
    
//     //Production API Roots
//     prod: {
//         app:  "https://skipp.artsrn.ualberta.ca",
//         auth:  "https://auth.artsrn.ualberta.ca/v1",
//         solr: "https://solr.artsrn.ualberta.ca",
//         solrCore: "http://arrw-db001.artsrn.ualberta.ca:8983/solr/skipp.artsrn.ualberta.ca",
//     },
//     //Test API Roots
//     test: {
//         app:  "https://skipp-test.artsrn.ualberta.ca",
//         auth:  "https://auth-test.artsrn.ualberta.ca/v1",
//         solr: "https://solr-test.artsrn.ualberta.ca",
//         solrCore: "", //"http://arrw-db001.artsrn.ualberta.ca:8983/solr/solr-test.artsrn.ualberta.ca",
//     },    
//     //Dev API Roots
//     dev: {
//         app:  "localhost:8080",
//         auth:  "https://auth-test.artsrn.ualberta.ca/v1",
//         solr: "https://solr-test.artsrn.ualberta.ca",
//         // solr: "https://localhost:7148",
//         solrCore: "", //"http://arrw-db001.artsrn.ualberta.ca:8983/solr/solr-test.artsrn.ualberta.ca",
//     },
    
//     //LOGIN component  settings
//     googleLocalClientId: "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",
   
//     appId: "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid
// };

export enum SearchResultFieldMapping {
    NATIONORCOMMUNITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_af27cd1f-4df1-fc15-4ef4-286eb2002816_t",
    NAME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_77ef4194-c2bf-686c-a05d-e3a63ab53750_t",
    EMAIL = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_6c130003-7792-10c5-cdf5-372f8fe237bd_t",
    POSITION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_b0620da7-6bf1-5c9c-b70d-b96aadeb0413_t",
    FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_93f55bd0-8620-515e-411e-3abb2abf66e4_t",
    ADDITIONAL_FACULTY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_8f097f5a-d234-53e0-1399-968cf6ea2243_t",
    PRONOUNS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_bf33b1ab-ebd5-2452-e313-46a3f0f8d5eb_t",
    DISABILITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_c27ebf23-8765-3e9f-a0eb-35553d71e9f0_s",
    INDIGENOUS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_3138944e-82e7-3ff0-831a-b17cc2c950fe_t",
    COMMUNITIESNATIONSORGANIZATIONS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_a5582c7f-5c0b-b373-32ee-ad8584abe106_s",
    LOCATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_be9ebb54-2971-0267-80b2-3d963b56b8a4_ts", 
    ETHNICITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_71ae6003-556c-2ed0-d197-ff382ce75c45_t",
    THEME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_dca2335d-3c60-8785-6c07-c9e9079aa5c8_t",
    GENDER_IDENTITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_f503da45-f9ec-6942-269d-45cdea413f84_s",
    CURRENTPROJECTS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_020e9f66-911d-55dd-3eff-3bb3aec182ee_t",
    INITIATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_03d1ffdd-0736-d8c8-418f-58691f22c19b_t",
    ROLES = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b89ad9f-7a76-7594-b932-9a20bfa44b4b_t",
    WEBSITELINKS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b559321-498d-95b3-0734-2ae9ae876b93_t",
    KEYWORDS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_aeaf264c-06e0-7bec-1073-832cbdb88bca_ts",
    SOCIALMEDIA = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_t",
    ADITIONAL_CONTACT = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_260bedf2-ef68-c0be-be4b-e0e98ddcaf65_t",
    PROJECT_LIST = "container_020e9f66-911d-55dd-3eff-3bb3aec182ee",
    PROJECT_TITLE = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_f9324907-a5e3-d655-c5a8-ee31e6aa0ee5_t",
    PROJECT_DESCRIPTION = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_21dc5652-296f-1149-9cb9-e914f9894978_t",
    PROJECT_INITIATION = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_bb85e648-5f85-293f-4b20-f8cdf70c86a6_t",
    PROJECT_ROLE = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_b1709fd6-6c12-6234-f20b-6ca96c96716e_t",
    FILE_REFERENCES = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_f3eb263e-4e0b-f79a-7b93-9b0103076312_s",
    PROJECT_INDEX = "child_index_i",
    STATE = "status_s",
};

export const freeTextSearchTargetFieldNames = [
    SearchResultFieldMapping.NAME,
    SearchResultFieldMapping.KEYWORDS,
    SearchResultFieldMapping.COMMUNITIESNATIONSORGANIZATIONS
]
export const QueryCategoryValues = {
    publicVisibleStates: ["654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    adminVisibleStates: ["e952e454-73f8-4c54-92d9-d11f84ac3985", "654d0e93-0d14-4e6c-8f4a-98884bc7Fb0e"],
    Keywords: ["Aging", "Animal and Environmental Health", "Art", "Aztec History", "Child & Family Wellbeing", "Civil Society","Climate Change", "Colonialism",
    "Community Building", "Community Housing", "Community-Driven Knowledge Organization", "Computer Science", "Cosmology of the Land", "Cree Language",
    "Cultural Adequacy", "Cultural Heritage", "Cultural Identity", "Data Science", "Decolonization", "Digital Equity / Inclusion", "Digital Libraries",
    "Digital Literacy", "Digital Technology", "Disability Knowledges", "Drug Discovery", "Early Childhood", "Economic Development", "Education", "Emotions",
    "Empowerment", "Ethnobotany", "Family Health", "Financial Institutions", "Flood / Drought Predication", "Gender & Wellness", "Genetics", "Governance",
    "Health and Wellness", "Health Economics", "Health Policy", "Health Promotion", "Holistic Health", "Homelessness", "Housing", "Immunization", "Indigenous Clergy",
    "Indigenous Explorers", "Indigenous Health", "Indigenous Languages", "Indigenous Law", "Indigenous Research Methods", "Indigenous Video Games", 
    "Intergenerational Cohesion", "Intergenerational Health", "Inuit", "Knowledge Mobilization", "Knowledge Translation", "Land & Water Relations", "Land and Relationships",
    "Land-Based Learning", "Language Documentation", "Language Revitilization", "Linguistic and Cultural Continuity", "Local Labor Markets", "Masculinities",
    "Medicinal Chemistry", "Menopause", "Mental Health", "Metadata", "Mexican Codices", "Nahuatl", "Natural Products", "Natural Resources", "Peatlands",
    "Performance", "Physical Activity", "Public Health", "Quality of Life", "Rare Disorders", "Reservoir / Dam Management", "Resource Extraction", "Sexual & Reproductive Health",
    "Statistics", "Substance Abuse", "Telecommunications Policy", "Transcription and Translation", "Two-Spirit", "Vaccine", "Water", "Wellness",
    "Wetlands", "Wildlife Management", "Women's Health", "Wood Bison", "Youth"],
    Communities: ["Aboriginal Counseling Services of Alberta", "Alexander First Nation", "Alexis Community", "Amhara Communities", "Aseniwuche Winewak Nation", "Athabasca Chipewyan First Nation",
    "Babel Community", "Baniwa Communities", "Carry the Kettle", "Chief Julius School", "Cold Lake First Nation", "Dagbamba Communities", "Dehcho AAROM",
    "Dene Tha' First Nation", "El Duya Community", "Enoch Cree Nation", "Ermineskin Cree Nation", "Ewe Communities", "First Mile Connectivity Consortium",
    "First Nations Information Connection", "Four Bands Community Fund", "Four Nations of Maskwacis", "Guajajara Communities", "Gwich'in Tribal Council",
    "I-Steam", "Indigenous Bar Association", "Indigenous Professional Performers", "Indigenous Psychological Services", "Indigenous Services Canada",
    "Indigenous Works/Luminary Initiative", "Institute for the Advancement of Indigenous Women", "Inuvialuit Cultural Resource Centre", "Inuvialuit Regional Corporation",
    "James Smith Cree Nation", "Kahnawake First Nation", "Katlodeeche First Nation", "Kehewin Cree Nation", "Louis Bull Community", "Mackenzie Network",
    "Manitoba Métis Federation", "Māori", "Maskwacis", "Maskwacis Community", "Métis Crossing", "Métis Nation of Alberta", "Métis Nation of Ontario", 
    "Mikisew Cree First Nation", "Ministikwan Lake Cree Nation", "Montana First Nation", "Muscogee Creek Nation", "Musqueam Communities", "Native Counselling Services of Alberta",
    "Native Women's Association of NWT", "Niginan Housing Ventures", "Northwest Regional FASD Society", "Nubian Communities", "Oromo Communities", "Piikani First Nation",
    "Sagkeeng First Nation", "Sahtu Renewable Resources Board", "Samson Cree Nation", "Sand Bay First Nation", "Sarrapia Community", "SevGen Consulting",
    "Sexual Assault Centre of Edmonton", "Squamish Communities", "Standing Together", "Tlicho Government", "Tribal Chiefs Ventures", "Urban Indigenous 2S Youth",
    "Urban Indigenous Edmonton"],
    Positions: ["Academic Teaching Staff", "Assistant Clinical Professor", "Assistant Professor", "Associate Professor", "Graduate Student", "Librarian", "Professor Emeritus", 
    "Postdoctoral Fellow", "Professor", "Research Assistant"],
    Faculties: ["Agustana Campus", "Alberta School of Business", "Agricultural, Life, & Environmental Sciences", "Arts", "Campus Saint-Jean", "Education", "Engineering",
    "Kinesiology, Sport, & Recreation", "Law", "Medicine & Dentistry", "Native Studies", "Nursing", "Pharmacy & Pharmaceutical Sciences", "Rehabilitation Medicine",
    "School of Public Health", "Science", "St. Joseph's College", "St. Stephen's College"],
    SelfIdentification: {
        Disability: ["Deaf", "Neurodivergent", "Experiencing disability", "Not living with a disability", "Another"],
        Race: ["Indigenous", "Black", "Person of Colour", "White", "Another"],
        Ethnicity: ["Japanese-American", "European"],
        GenderIdentity: ["Two-Spirit", "Gender non-binary", "Genderfluid", "Transgender", "Woman", "Man", "Another"]
    }
}
