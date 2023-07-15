import {gql} from '@/root/generated/graphql.ts/gql';
import { AllFurnitureQuery } from '@/root/generated/graphql.ts/graphql';
import { getProp } from '@/components/helper/functions/typeSafeData';

export const FUNRITURE_QUERY_PATH = gql(`
  query AllFurniture {
  allFurniture {
    _id
}}
`);


export const getTypeSafeFurniture = (data: AllFurnitureQuery["allFurniture"]) => {
  return data.map((item) => {
    return {
      id: getProp(() => item!._id!, ''),
    };
  });
};