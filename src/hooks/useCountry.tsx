import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../lib/generator'
import { graphql } from '../gql/gql'

const GET_ALL_QUERY = graphql(`
  query getContinent {
    countries {
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`)

export default function useCountry() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['country'],
    queryFn: async () => gqlClient.request(GET_ALL_QUERY),
  })

  return [data, isLoading, isError] as const
}
