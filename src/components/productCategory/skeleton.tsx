import React from 'react';
import {Skeleton} from '@/components/ui/skeleton';

const FurnitureSkeleton = () => {
    return (
        <div className='flex p-4 flex-wrap justify-between'>
            {[1,2,3,4,5,6].map(()=> (
                <div className='flex flex-wrap justify-between'>
                    <Skeleton className='w-[333px] h-[500px] 2xl:w-[433px] 2xl:h-[600px] mb-10'>
                    <div className='text-sm rounded-xl border-[1px] border-white drop-shadow-lg
                     m-2 w-12 h-8 flex items-center justify-center bg-white'>sale!</div>
                    </Skeleton>
                </div>
            ))}
        </div>
    );
};

export default FurnitureSkeleton;