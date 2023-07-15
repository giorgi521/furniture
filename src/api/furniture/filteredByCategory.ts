import { gql } from '@/root/generated/graphql.ts/gql';
import {FurnitureByCategoryQuery, FurnitureByCategoryQueryVariables} from '@/root/generated/graphql.ts/graphql';
import { getProp } from '@/components/helper/functions/typeSafeData';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export const  FILTERED_FURNITURE_BY_CATEGORY = gql(`
        query furnitureByCategory($slug :String!) {
           allFurniture(where :{categories:{slug:{ current:{ eq: $slug}}}}){
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

export const useFilteredFurniture = (slug:string)=> {
    const singleFurnitureQuery = useQuery<FurnitureByCategoryQuery,FurnitureByCategoryQueryVariables>(
        FILTERED_FURNITURE_BY_CATEGORY,
        {
            variables: {
                slug
            }
        }
    );

    const typeSafeFilteredFurniture = useMemo(()=>( 
     getTypeSafeFurniture(singleFurnitureQuery.data?.allFurniture as FurnitureByCategoryQuery['allFurniture']
     )),[singleFurnitureQuery]);


    return {
        singleFurnitureQuery,
        data: typeSafeFilteredFurniture
    };

};