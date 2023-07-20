import { eFieldType, type SearchFieldDefinition } from "./components/Shared/constant";

export default {
    googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
    googleCalendarIds: ["ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com","c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com"],
    maxEvents: 10,
    initialView: 'dayGridMonth',
    googleLoginClientId:"589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",
    authorizationApiRoot:"https://localhost:5010/",
    dataRepositoryApiRoot: "https://localhost:5020",
    //authorizationApiRoot: "https://auth-test.artsrn.ualberta.ca",
    //dataRepositoryApiRoot: "https://catfish-test.artsrn.ualberta.ca/repository"
    joinUsFormId:"43FF5214-B6A6-9F16-E7FD-A2337B97A949"
}
export const SolrFields: SearchFieldDefinition[] = [
    { name: "name_t", label: "Name", type: eFieldType.Text, options: [], entryGuid: "d46250e9-4940-41da-8734-16926ce69698" },
    { name: "email_ss", label: "Email Address", type: eFieldType.Email, options: [], entryGuid: "4b906eb5-6bb4-4cf2-981e-257de92d4f3d" },
    { name: "position_t", label: "Position", type: eFieldType.Radio, options: ["Professor", "Research assistant", "Associate professor", "Assistant professor", "Graduate student", "Academic teaching staff", "Postdoctoral fellow"], entryGuid: "b7862a8d-a675-4803-a133-6c7c7c4d970a" },
    { name: "faculty_t", label: "Faculty or Organizational Affiliation", type: eFieldType.Text, options: [], entryGuid: "5c8bde1d-0732-42e3-be47-6fc060a80bed" },
    { name: "additional_faculty_t", label: "Additional Faculties or Organizations", type: eFieldType.Text, options: [], entryGuid: "9d79c715-dbcb-4aa6-8a34-27ee3e18b8b5" },
    { name: "pronouns_t", label: "Pronouns", type: eFieldType.Text, options: [], entryGuid: "e585df72-66a9-4a23-8770-19a83eb02893" },
    { name: "gender_identity_t", label: "Gender identity", type: eFieldType.Text, options: [], entryGuid: "df353305-a603-4152-9c22-dbb2a583dea5" },
    { name: "indigenous_t", label: "Indigenous Self-Declaration", type: eFieldType.Text, options: [], entryGuid: "ed3c6eac-8d84-4723-af38-b4f871d07a56" },
    { name: "nation_or_community_t", label: " Indigenous Nation and/or Community.", type: eFieldType.Text, options: [], entryGuid: "da8cd986-da69-4f0f-8a82-b7a34fe9a7b2" },
    { name: "ethnicity_t", label: "Ethnicity", type: eFieldType.Text, options: [], entryGuid: "4b906eb5-6bb4-4cf2-981e-257de92d4f3d" },
    { name: "disability_t", label: "Do you identify as living with disability", type: eFieldType.Radio, options: ["Yes", "No", "Prefer Not to Say"], entryGuid: "b4e42fd8-796e-4abd-a9ec-4d27f2cb1335" },
    { name: "communities_nation_organization_dt", label: "What Indigenous communities/nation(s)/organization(s) do you (or have you recently) worked with", type: eFieldType.Date, options: [], entryGuid: "ef357510-de3c-4916-8ab3-b405c5fb6026" },
    { name: "location_t", label: "Where are they located", type: eFieldType.Text, options: [], entryGuid: "b35577bc-345d-423f-90a3-ee28b6155e71" },
    { name: "theme_ts", label: "What theme(s) does your research fall under", type: eFieldType.Text, options: [], entryGuid: "3778d964-73fd-4661-b4d6-9c76553acd66" },
    { name: "keywords_ss", label: "Research keywords", type: eFieldType.Radio, options: [], entryGuid: "b7862a8d-a675-4803-a133-6c7c7c4d970a" },
    { name: "current_research_projects_t", label: "Please briefly describe your current or recent research project(s)", type: eFieldType.Text, options: [], entryGuid: "483f1d91-86ed-488a-b859-bcedc3dc8d85" },
    { name: "initiation_of_project_ts", label: "Who initiated your research project", type: eFieldType.Text, options: [], entryGuid: "c17f43d8-9207-4549-bcf5-d4c09c1851c5" },
    { name: "roles_in_project_t", label: "What role do community members play in your project", type: eFieldType.Text, options: [], entryGuid: "a244d387-ac16-4672-a950-09ae8d5cf97a" },
    { name: "website_links_t", label: "Do you have links to a professional website you would like to share", type: eFieldType.Text, options: [], entryGuid: "7ec9f661-1670-4aa2-9ca5-f3182d0f3520" },
    { name: "social_media_t", label: "Social Media Accounts", type: eFieldType.Text, options: [], entryGuid: "72313627-51e2-40a9-bff7-714410579714" },
    { name: "additional_contact_t", label: "Additional Contact Information", type: eFieldType.Text, options: [], entryGuid: "6ae45cc5-3e3b-4502-a94d-78629391b864" },
    { name: "created_t", label: "Created Date", type: eFieldType.Date, options: [], entryGuid: "297d1ad7-6b24-4ace-a32a-956b4b2aef2f" },   
    { name: "updated_t", label: "Updated Date", type: eFieldType.Date, options: [], entryGuid: "9150fbef-d725-4c85-8936-4d4f8bc9da12" },   
];

