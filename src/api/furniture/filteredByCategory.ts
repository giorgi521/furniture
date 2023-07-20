import { gql } from '@/root/generated/graphql.ts/gql';
import {FurnitureByCategoryQuery, FurnitureByCategoryQueryVariables, SortOrder} from '@/root/generated/graphql.ts/graphql';
import { getProp } from '@/components/helper/functions/typeSafeData';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export enum LIMIT_OF_FURNITURE  {
  limit = 6,
  offset = 0
}

export const  FILTERED_FURNITURE_BY_CATEGORY = gql(`
        query furnitureByCategory($slug :String!,$limit: Int!  $offset: Int!, $sortbyminPrice:SortOrder!) {
           allFurniture(sort:{minPrice:$sortbyminPrice},limit: $limit, offset:$offset,where :{categories:{slug:{ current:{ eq: $slug}}}}){
             _id
             title 
             description
             minPrice
             maxPrice
             categories{
              slug{
                current
              }
            }
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
          }}
`);

const getTypeSafeFurniture = (data:FurnitureByCategoryQuery['allFurniture'])=> {
    const furniture = getProp(()=> (
         data.map((item) => {
            return {
                id: getProp(() => item!._id!, ''),
                title: getProp(() => item!.title!, ''),
                description: getProp(() => item!.description!, ''),
                minPrice: getProp(() => item!.minPrice!, 0),
                maxPrice: getProp(() => item!.maxPrice!, 0),    
                image: getProp(() => [
                    getProp(() => item!.mainImage!.asset!.url!, ''),
                    getProp(() => item!.secondImage!.asset!.url!, ''),
                    getProp(() => item!.thirdImage!.asset!.url!, ''),
                ], []),
            };
        })
    ), []);

    return furniture;
};

export type FurnitureType = ReturnType<typeof getTypeSafeFurniture>

export const useFilteredFurniture = ({slug, limit = LIMIT_OF_FURNITURE.limit,sortbyminPrice, offset = LIMIT_OF_FURNITURE.offset}:{
    slug: string,
    limit?:number,
    offset:number
    sortbyminPrice:SortOrder
})=> {
    const furnitureByCategory = useQuery<FurnitureByCategoryQuery,FurnitureByCategoryQueryVariables>(
        FILTERED_FURNITURE_BY_CATEGORY,
        {
            variables: {
                slug:slug,
                offset:offset ,
                limit: limit,
                sortbyminPrice: sortbyminPrice
            }
        }
    );

    const typeSafeFilteredFurniture = useMemo(()=>( 
     getTypeSafeFurniture(furnitureByCategory.data?.allFurniture as FurnitureByCategoryQuery['allFurniture']
     )),[furnitureByCategory]);


    return {
        ...furnitureByCategory,
        data: typeSafeFilteredFurniture
    };

};