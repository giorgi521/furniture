import Card from "@/components/home/featuredProduct/card";
import { useRouter } from "next/router"; 
import CustomizedBreadcrumbs from "@/components/shared/breadCrumbs";
import {useFilteredFurniture, LIMIT_OF_FURNITURE} from '@/api/furniture/filteredByCategory';
import {Button} from '@/components/ui/button'
import Loader from "../shared/loader";
import { useTotalFurniture } from "@/api/furniture/allFurnitureId";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"
import {SortOrder} from '@/root/generated/graphql.ts/graphql';
import { useEffect, useState } from "react";
import FurnitureSkeleton from "./skeleton";
import clsx from "clsx";


const ProductCategorys = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [sort,setSort] = useState<SortOrder>(SortOrder.Asc)
    const totalFurniture = useTotalFurniture(slug as string)
    const {data,fetchMore,loading} = useFilteredFurniture({
      slug:slug as string,
      offset:LIMIT_OF_FURNITURE.offset,
      limit: LIMIT_OF_FURNITURE.limit,
      sortbyminPrice: sort 
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
            return  {
               prev,
               allFurniture:[
                  ...prev.allFurniture , ...fetchMoreResult.allFurniture
               ]
            }
         },
        })
      
    }

    useEffect(()=> {
      if(!router.query.sort) return

      setSort(router.query.sort as SortOrder)
    },[router.query.sort])

    const sortFunriture = (value:SortOrder) => {
      setSort(value);
      router.push({
         pathname: router.pathname,
         query: {slug:slug, sort: value},
      },undefined,{
         scroll: false
      })
    }

    return (
        <div className="flex flex-col justify-center items-center py-16">
            <div className="w-[70%]">
            <CustomizedBreadcrumbs />
            <div className="text-6xl mt-4 mb-8">{slug}</div>
            <div className="text-base mb-4 text-gray flex justify-between w-full">
                  <div>
                    showing
                  <span className="px-2">{data.length}</span>
                    of 
                  <span className="px-2 text-black text-xl">{totalFurniture}</span> 
                  </div>
                  <Select onValueChange={sortFunriture}>
                      <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="sort by price" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value={SortOrder.Asc}> low to high</SelectItem>
                      <SelectItem value={SortOrder.Desc}> hight to low</SelectItem>
                      </SelectContent>
                   </Select>
            </div>
            <div className="flex flex-wrap justify-between ">
             {loading ? <FurnitureSkeleton /> : data.map((item,i)=>(
                <div key={i} className="mb-10">
                   <Card item={item}/>
                </div>
                ))}
             </div>
             <div className="flex w-full justify-center gap-4">
                <Button 
                 className="w-44 flex gap-2 items-center justify-center"
                 disabled={loading || totalFurniture === data.length}
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