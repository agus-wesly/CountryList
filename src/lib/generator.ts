import { GraphQLClient } from 'graphql-request'

const API_URL = 'https://countries.trevorblades.com/'

export const gqlClient = new GraphQLClient(API_URL, {
  headers: () => ({
    'Content-Type': 'application/json',
  }),
})
