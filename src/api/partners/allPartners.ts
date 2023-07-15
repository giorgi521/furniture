import { useQuery } from '@apollo/client';
import {gql} from '../../../generated/graphql.ts/gql';
import {PartnersQuery, PartnersQueryVariables} from '../../../generated/graphql.ts/graphql.js';
import { useMemo } from 'react';
import { getProp } from '@/components/helper/functions/typeSafeData';


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
`);

  const getTypeSafePartners = (data: PartnersQuery["allPartners"]) => {
      const partners = getProp(()=> {
        return data.map((item) => {
          return {
            image: getProp(() => item!.image!.asset!.url!, ''),
          };
        });
      },[]);

      return partners;
};

  export type partnersType = ReturnType<typeof getTypeSafePartners>


 export const usePartners = () => {
    const partners = useQuery<PartnersQuery,PartnersQueryVariables>(PARTNERS_QUERY);

    const typeSafePartners = useMemo(()=>{
     return getTypeSafePartners(partners.data?.allPartners as PartnersQuery["allPartners"]);
    },[partners]);

     return { 
        ...partners,
        data:typeSafePartners
    };};
