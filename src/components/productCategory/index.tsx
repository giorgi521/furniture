import Card from "@/components/home/featuredProduct/card";
import { useRouter } from "next/router"; 
import CustomizedBreadcrumbs from "@/components/shared/breadCrumbs";
import {useFilteredFurniture, LIMIT_OF_FURNITURE} from '@/api/furniture/filteredByCategory';
import {Button} from '@/components/ui/button'
import { useState } from "react";
import Loader from "../shared/loader";

const ProductCategorys = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [disable, setDisable] = useState(false)
    const {data,fetchMore,loading} = useFilteredFurniture({
      slug:slug as string,
      offset:LIMIT_OF_FURNITURE.offset,
      limit: LIMIT_OF_FURNITURE.limit
    });

    const fetchMoreHandler = () => {
        fetchMore({
         variables:{
            slug: slug,
            limit: LIMIT_OF_FURNITURE.limit ,
            offset: data.length
         },
         // @ts-ignore
         updateQuery: (prev, {fetchMoreResult}) =>{
            if(!fetchMoreResult) return
            if(fetchMoreResult.allFurniture.length < LIMIT_OF_FURNITURE.limit) {
               setDisable(true)
            }
            return  {
               prev,
               allFurniture:[
                  ...prev.allFurniture , ...fetchMoreResult.allFurniture
               ]
            }
         },
        })
      
    }
    return (
        <div className="flex flex-col justify-center items-center py-16">
            <div className="w-[70%]">
            <CustomizedBreadcrumbs />
            <div className="text-6xl mt-4 mb-8">{slug}</div>
            <div className="text-base mb-4 text-gray">showing 1-9 of 11 result </div>
            <div className="flex flex-wrap justify-between ">
             {data.map((item,i)=>(
                <div key={i} className="mb-10">
                 <Card
                    item={item}
                 />
                </div>
                ))}
             </div>
             <div className="flex w-full justify-center gap-4">
                <Button 
                 className="w-44 flex gap-2 items-center justify-center"
                 disabled={loading || disable}
                 onClick= {fetchMoreHandler}
                >
                  {loading && 
                  <div className="animate-spin">
                     <Loader/>
                  </div>
                  }
                  <span>fetch more</span>
                </Button>
             </div>
             </div>
        </div>
    );
};

export default ProductCategorys;