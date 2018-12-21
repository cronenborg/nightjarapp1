// eslint-disable
// this is an auto generated file. This will be overwritten

export const getWorks = `query GetWorks($id: ID!) {
  getWorks(id: $id) {
    id
    name
    description
    image
    datestart
    dateend
    url
  }
}
`;
export const listWorkss = `query ListWorkss(
  $filter: ModelWorksFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      datestart
      dateend
      url
    }
    nextToken
  }
}
`;
