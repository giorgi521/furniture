import Layout from '@/components/layout';
import React,{ReactElement} from 'react';
import ProductCategorys from '@/components/productCategory/index';
import { initializeApollo } from "../shared/lib/apolloClient";
import {FILTERED_FURNITURE_BY_CATEGORY, LIMIT_OF_FURNITURE} from '@/api/furniture/filteredByCategory';
import {FurnitureByCategoryQuery, FurnitureByCategoryQueryVariables, SortOrder} from '@/root/generated/graphql.ts/graphql';
import {FURNITURE_CATEGORY_QUERY} from '@/api/category/index';

const Decor = () => {
    return (
        <ProductCategorys />
    );
};

Decor.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Decor;



export const getStaticPaths = async () => {
    const apolloClient = initializeApollo();
    const category = await apolloClient.query({
        query: FURNITURE_CATEGORY_QUERY,
    })

   const paths = category.data?.allCategory.map(({slug,_id})=>({
        params: {slug: slug?.current ,id:_id}
   }))

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({params}:{params:{slug:string}}) => {
    const apolloClient = initializeApollo();

    await apolloClient.query<FurnitureByCategoryQuery,FurnitureByCategoryQueryVariables>({
        query:FILTERED_FURNITURE_BY_CATEGORY,
        variables:{
            slug:params.slug,
            offset:LIMIT_OF_FURNITURE.offset,
            limit: LIMIT_OF_FURNITURE.limit,
            sortbyminPrice: SortOrder.Asc
        }
    });


    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
};



