import Card from "@/components/home/featuredProduct/card";
import { useRouter } from "next/router";
import Button from "../shared/button";
import CustomizedBreadcrumbs from "@/components/shared/breadCrumbs";

const ProductCategorys = () => {

    const router = useRouter();
    const {slug} = router.query;

    return (
        <div className="flex flex-col justify-center items-center py-16">
            <div className="w-[70%]">
            <CustomizedBreadcrumbs />
            <div className="text-6xl mt-4 mb-8">{slug}</div>
            <div className="text-base mb-4 text-gray">showing 1-9 of 11 result </div>
            <div className="flex flex-wrap justify-between ">
             {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item)=>(
                <div key={item} className="mb-10">
                 <Card/>
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