import MasterCard from '@/components/helper/icons/masterCard';
import Maestro from '@/components/helper/icons/maestro';
import Discover from '@/components/helper/icons/discover';
import Visa from '@/components/helper/icons/visa';

 const Cards = [
    {
        id: 1,
        icon: <MasterCard />,
    },
    {
        id: 2,
        icon: <Maestro />,
    },
    {
        id: 3,
        icon: <Discover />,
    },
    {
        id: 4,
        icon: <Visa />,
    },
];
 const Benefits = [
    {
        id: 1,
        name:'No-Risk Money Back Guarantee!',
    },
    {
        id: 2,
        name:'No Hassle Refunds',
    },
    {
        id: 3,
        name:'Secure Payments',
    },
];

export {
    Benefits,
    Cards
}