import {gql} from '@/root/generated/graphql.ts/gql';
import { AllFurnitureQuery, AllFurnitureQueryVariables } from '@/root/generated/graphql.ts/graphql';
import { getProp } from '@/components/helper/functions/typeSafeData';
import {useQuery} from '@apollo/client'

export const FUNRITURE_QUERY_PATH = gql(`
  query AllFurniture {
  allFurniture {
    _id
}}
`);


export const TOTAL_FUNRITURE = gql(`
  query TotalFurniture($slug :String!) {
    allFurniture(where :{categories:{slug:{ current:{ eq: $slug}}}}) {
      title 
}}
`);


export const getTypeSafeFurniture = (data: AllFurnitureQuery["allFurniture"]) => {
  return data.map((item) => {
    return {
      id: getProp(() => item!._id!, ''),
    };
  });
};

export const useTotalFurniture = (slug:string) => {
  
    const {data} = useQuery(TOTAL_FUNRITURE,{
      variables:{
        slug: slug,
      }
    })
    const length = data?.allFurniture?.length || 0

    return length
}