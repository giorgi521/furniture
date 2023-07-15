/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n   query Category {\n       allCategory {\n           _id\n           title\n            image{\n             asset{\n             url\n           }\n        }\n        slug{\n            current\n          }\n  }}\n": types.CategoryDocument,
    "\n  query AllFurniture {\n  allFurniture {\n    _id\n}}\n": types.AllFurnitureDocument,
    "\n        query furnitureByCategory($slug :String!) {\n           allFurniture(where :{categories:{slug:{ current:{ eq: $slug}}}}){\n             _id\n             title\n             description\n             minPrice\n             maxPrice\n             categories{\n              slug{\n                current\n              }\n            }\n             mainImage{\n               asset{\n                 url\n               }\n             }\n             secondImage{\n                asset{\n                 url\n               }\n             }\n             thirdImage {\n                asset{\n                 url\n               }\n             }\n          }}\n": types.FurnitureByCategoryDocument,
    "\n   query furniture($id:ID!) {\n    Furniture(id: $id){\n     title\n     description\n     minPrice\n     maxPrice\n     mainImage{\n       asset{\n         url\n       }\n     }\n     secondImage{\n        asset{\n         url\n       }\n     }\n     thirdImage {\n        asset{\n         url\n       }\n     }\n   }\n }\n\n": types.FurnitureDocument,
    "\n  query futureProduct($products: String!) {\n   allFurniture(where: {categories:{title:{ eq: $products}}}){\n    _id\n    title\n    minPrice\n    maxPrice\n    mainImage{\n      asset {\n        url\n    }\n    }\n    secondImage{\n      asset{\n        url\n      }\n    }\n    thirdImage{\n      asset{\n        url\n      }\n    }\n  }\n}\n": types.FutureProductDocument,
    "\n  query partners {\n    allPartners{\n     title\n     image{\n       asset {\n       url\n     }\n     }\n   }\n }\n": types.PartnersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   query Category {\n       allCategory {\n           _id\n           title\n            image{\n             asset{\n             url\n           }\n        }\n        slug{\n            current\n          }\n  }}\n"): (typeof documents)["\n   query Category {\n       allCategory {\n           _id\n           title\n            image{\n             asset{\n             url\n           }\n        }\n        slug{\n            current\n          }\n  }}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllFurniture {\n  allFurniture {\n    _id\n}}\n"): (typeof documents)["\n  query AllFurniture {\n  allFurniture {\n    _id\n}}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query furnitureByCategory($slug :String!) {\n           allFurniture(where :{categories:{slug:{ current:{ eq: $slug}}}}){\n             _id\n             title\n             description\n             minPrice\n             maxPrice\n             categories{\n              slug{\n                current\n              }\n            }\n             mainImage{\n               asset{\n                 url\n               }\n             }\n             secondImage{\n                asset{\n                 url\n               }\n             }\n             thirdImage {\n                asset{\n                 url\n               }\n             }\n          }}\n"): (typeof documents)["\n        query furnitureByCategory($slug :String!) {\n           allFurniture(where :{categories:{slug:{ current:{ eq: $slug}}}}){\n             _id\n             title\n             description\n             minPrice\n             maxPrice\n             categories{\n              slug{\n                current\n              }\n            }\n             mainImage{\n               asset{\n                 url\n               }\n             }\n             secondImage{\n                asset{\n                 url\n               }\n             }\n             thirdImage {\n                asset{\n                 url\n               }\n             }\n          }}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   query furniture($id:ID!) {\n    Furniture(id: $id){\n     title\n     description\n     minPrice\n     maxPrice\n     mainImage{\n       asset{\n         url\n       }\n     }\n     secondImage{\n        asset{\n         url\n       }\n     }\n     thirdImage {\n        asset{\n         url\n       }\n     }\n   }\n }\n\n"): (typeof documents)["\n   query furniture($id:ID!) {\n    Furniture(id: $id){\n     title\n     description\n     minPrice\n     maxPrice\n     mainImage{\n       asset{\n         url\n       }\n     }\n     secondImage{\n        asset{\n         url\n       }\n     }\n     thirdImage {\n        asset{\n         url\n       }\n     }\n   }\n }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query futureProduct($products: String!) {\n   allFurniture(where: {categories:{title:{ eq: $products}}}){\n    _id\n    title\n    minPrice\n    maxPrice\n    mainImage{\n      asset {\n        url\n    }\n    }\n    secondImage{\n      asset{\n        url\n      }\n    }\n    thirdImage{\n      asset{\n        url\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  query futureProduct($products: String!) {\n   allFurniture(where: {categories:{title:{ eq: $products}}}){\n    _id\n    title\n    minPrice\n    maxPrice\n    mainImage{\n      asset {\n        url\n    }\n    }\n    secondImage{\n      asset{\n        url\n      }\n    }\n    thirdImage{\n      asset{\n        url\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query partners {\n    allPartners{\n     title\n     image{\n       asset {\n       url\n     }\n     }\n   }\n }\n"): (typeof documents)["\n  query partners {\n    allPartners{\n     title\n     image{\n       asset {\n       url\n     }\n     }\n   }\n }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;