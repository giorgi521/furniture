import Layout from '@/components/layout';
import React, { ReactElement } from 'react';
import SingleProducts from '@/components/products/';
import {initializeApollo} from '@/shared/lib/apolloClient';
import {FUNRITURE_QUERY_PATH, getTypeSafeFurniture} from '@/api/furniture/allFurnitureId';
import {SINGLE_FURNITURE_QUERY} from '@/api/furniture/singleFurniture';
import {FurnitureQuery, FurnitureQueryVariables} from '@/root/generated/graphql.ts/graphql';

const Products = () => {
    return (
           <SingleProducts />
    );
};

export default Products;

Products.getLayout = (page:ReactElement)=> <Layout>{page}</Layout> 

export async function getStaticPaths() {
    
    const apolloClient = initializeApollo();
    const allFurnitureId = await apolloClient.query({
        query: FUNRITURE_QUERY_PATH
    });
   
    const paths =  getTypeSafeFurniture(allFurnitureId.data.allFurniture).map((item)=>({
        params: {id: item?.id}  
    }))

    return {
          paths,
          fallback: 'blocking' 
    }
  }

export async function getStaticProps({params}:{params:{id:string}}) {
    const apolloClient = initializeApollo();

    await apolloClient.query<FurnitureQuery, FurnitureQueryVariables>({
        query: SINGLE_FURNITURE_QUERY,
        variables: {
            id: params.id
        }
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
     },
}}