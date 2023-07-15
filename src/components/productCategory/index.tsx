import Card from "@/components/home/featuredProduct/card";
import { useRouter } from "next/router";
import Button from "../shared/button";
import CustomizedBreadcrumbs from "@/components/shared/breadCrumbs";
import {useFilteredFurniture} from '@/api/furniture/filteredByCategory';

const ProductCategorys = () => {
    const router = useRouter();
    const {slug} = router.query;
    const {data} = useFilteredFurniture(slug as string);
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
             <div className="flex w-full justify-center">
                <Button>
                 fetch more
                </Button>
             </div>
             </div>
        </div>
    );
};

export default ProductCategorys;