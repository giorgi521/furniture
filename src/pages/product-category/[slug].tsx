import Layout from '@/components/layout';
import React,{ReactElement} from 'react';
import ProductCategorys from '@/components/productCategory/index';
import { initializeApollo } from "../../shared/lib/apolloClient";
import {FILTERED_FURNITURE_BY_CATEGORY} from '@/api/furniture/filteredByCategory';
import {FurnitureByCategoryQuery, FurnitureByCategoryQueryVariables} from '@/root/generated/graphql.ts/graphql';
const Decor = () => {
    return (
        <ProductCategorys />
    );
};

Decor.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Decor;



export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
};

export const getStaticProps = async ({params}:{params:{slug:string}}) => {
    const apolloClient = initializeApollo();

    await apolloClient.query<FurnitureByCategoryQuery,FurnitureByCategoryQueryVariables>({
        query:FILTERED_FURNITURE_BY_CATEGORY,
        variables:{
            slug:params.slug
        }
    });



    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
};



