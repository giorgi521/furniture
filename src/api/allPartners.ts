import { useQuery } from '@apollo/client';
import {gql} from '../../generated/graphql.ts';
import {PartnersQuery, PartnersQueryVariables} from '../../generated/graphql.ts/graphql';


export const PARTNERS_QUERY = gql(`
  query partners {
    allPartners{
     title
     image{
       asset {
       url
     }
     }
   }
 }
`)


 export const usePartners = () => {
    const { loading, error, data } = useQuery<PartnersQuery,PartnersQueryVariables>(PARTNERS_QUERY);
    
    
     return { 
        loading,
        error,
        data 
    }}
