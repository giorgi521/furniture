import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';


export const FUNRITURE_QUERY = gql`
  query AllFurniture {
  allFurniture {
    title
    minPrice
    maxPrice
    mainImage{
    asset {
      url
    }
  }
}
}
`


 export const useFurniture = () => {
    const { loading, error, data } = useQuery(FUNRITURE_QUERY);

    
     return { 
        loading,
        error,
        data 
    }}