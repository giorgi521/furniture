import { gql } from '@/root/generated/graphql.ts/gql';
import { FurnitureQuery, FurnitureQueryVariables } from '@/root/generated/graphql.ts/graphql';
import { getProp } from '@/components/helper/functions/typeSafeData';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export const  SINGLE_FURNITURE_QUERY = gql(`
   query furniture($id:ID!) {
    Furniture(id: $id){
     title
     description
     minPrice
     maxPrice
     mainImage{
       asset{
         url
       }
     }
     secondImage{
        asset{
         url
       }
     }
     thirdImage {
        asset{
         url
       }
     }
   }
 }

`);

const typeSafeSingleFurniture = ( data:FurnitureQuery['Furniture']) => {
    return {
        title: getProp(()=> data!.title!, ''),
        description: getProp(()=> data!.description!, ''),
        minPrice: getProp(()=> data!.minPrice!, 0),
        maxPrice: getProp(()=> data!.maxPrice!, 0),
        image: getProp(()=> [
        getProp(()=> data!.mainImage!.asset!.url!, ''),
        getProp(()=> data!.secondImage!.asset!.url!, ''),
        getProp(()=> data!.thirdImage!.asset!.url!, ''),
        ], [])
    };
};

export const useSingleFurniture = (id:string)=> {

    const singleFurnitureQuery = useQuery<FurnitureQuery, FurnitureQueryVariables>(
        SINGLE_FURNITURE_QUERY,
        {
            variables: {
                id
            }
        }
    );

    const singleFurniture = useMemo(()=> (
        typeSafeSingleFurniture(singleFurnitureQuery.data?.Furniture)
    ),[singleFurnitureQuery.data?.Furniture]);

    return {
        ...singleFurnitureQuery,
        data:singleFurniture,
    };

};