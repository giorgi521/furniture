import { gql } from "@/root/generated/graphql.ts/gql";
import {useQuery} from '@apollo/client';
import {CategoryQuery} from '@/root/generated/graphql.ts/graphql';
import { CategoryQueryVariables } from "@/root/generated/graphql.ts/graphql";
import { getProp } from "@/components/helper/functions/typeSafeData";


export const FURNITURE_CATEGORY_QUERY = gql(`
   query Category {
       allCategory {
           _id
           title
            image{
             asset{
             url
           }
        }
        slug{
            current
          }
  }}
`);

const getTypeSafeCategory = (data: CategoryQuery["allCategory"]) => {
    const category = getProp(() => (
         data.map((item) => {
            return {
                id: getProp(() => item!._id!, ''),
                title: getProp(() => item!.title!, ''),
                image: getProp(() => item!.image!.asset!.url!, ''),
                slug: getProp(() => item!.slug!.current!, '')
            };
        })
    ), []);

    return category;
};


export const useFurnitureCategory = () => {
    const category = useQuery<CategoryQuery,CategoryQueryVariables>(FURNITURE_CATEGORY_QUERY);


    const typeSafeCategory = getTypeSafeCategory(
        category.data?.allCategory as CategoryQuery["allCategory"]
        );

    return {
        category,
        data: typeSafeCategory
    };
};