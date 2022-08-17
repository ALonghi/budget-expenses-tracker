export default interface QueryParamDAO {
    fieldName: string,
    fieldValue: string | any[],
    operation: SearchType
}

type SearchType =
    SearchTypes.LESS_THAN |
    SearchTypes.LESS_THAN_OR_EQUAL |
    SearchTypes.EQUAL |
    SearchTypes.GREATER_THAN |
    SearchTypes.GREATER_THAN_OR_EQUAL |
    SearchTypes.NOT_EQUAL |
    SearchTypes.ARRAY_CONTAINS |
    SearchTypes.ARRAY_CONTAINS_ANY |
    SearchTypes.IN |
    SearchTypes.NOT_IN

export enum SearchTypes {
    LESS_THAN = '<',
    LESS_THAN_OR_EQUAL = '<=',
    EQUAL = '==',
    GREATER_THAN = '>',
    GREATER_THAN_OR_EQUAL = '>=',
    NOT_EQUAL = '!=',
    ARRAY_CONTAINS = 'array-contains',
    ARRAY_CONTAINS_ANY = 'array-contains-any',
    IN = 'in', // maximum of 10 elements at a time
    NOT_IN = 'not-in',
}

