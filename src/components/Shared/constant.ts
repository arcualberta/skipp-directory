export enum eFieldType{
    Text = 1,
    Date,
    Integer,
    Decimal,
    Email,
    Checkbox,
    DropDown,
    Radio
}
export interface SearchFieldDefinition{
    name: string,
    label: string,
    type: eFieldType,
    options: string[],
    entryGuid: string
}