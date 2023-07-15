import { useQuery } from '@apollo/client';
import { gql } from '@/root/generated/graphql.ts/gql';
import {FutureProductQuery, FutureProductQueryVariables} from '../../../generated/graphql.ts/graphql';
import { useMemo } from 'react';
import {getProp} from '@/components/helper/functions/typeSafeData';

export const  FUTUREP_PRODUCTS_QUERY = gql(`
  query futureProduct($products: String!) {
   allFurniture(where: {categories:{title:{ eq: $products}}}){
    _id
    title
    minPrice
    maxPrice
    mainImage{
      asset {
        url
    }
    }
    secondImage{
      asset{
        url
      }
    }
    thirdImage{
      asset{
        url
      }
    }
  }
}
`);

const TypeSafeData = (data:FutureProductQuery['allFurniture'])=> {
  const futureProducts = getProp(()=> (
     data.map((item) => {
      return {
        id: getProp(() => item!._id!, ''),
        title: getProp(() => item!.title!, ''),
        image: getProp(() => [
         getProp(() => item!.mainImage!.asset!.url!, ''),
         getProp(() => item!.secondImage!.asset!.url!, ''),
         getProp(() => item!.thirdImage!.asset!.url!, ''),
        ], []),
        minPrice: getProp(() => item!.minPrice!, 0),
        maxPrice: getProp(() => item!.maxPrice!, 0),
      };
    })
  ),[]);
  return futureProducts;
};

export type FutureProductsType = ReturnType<typeof TypeSafeData>

export const useFutureProducts = (products:string) => {
  
    const futureProductsQuery = useQuery<FutureProductQuery, FutureProductQueryVariables>(
        FUTUREP_PRODUCTS_QUERY,
        {
            variables: {
                products
            }
        });

      const futureProducts = useMemo(
        () => TypeSafeData(futureProductsQuery.data?.allFurniture  as FutureProductQuery['allFurniture'])
      , [futureProductsQuery]);
    


    return { 
      ...futureProductsQuery,
      data:futureProducts
    };
};