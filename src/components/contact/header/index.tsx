import Categorys from '@/components/shared/category';
import { Contact } from '@/components/contact/header/helper';

const Header = () => {
    return (
    <div className='bg-darkGray py-12'>
        <Categorys title="Contact Us" subTitle="Don't be a stranger">
        <div className='flex gap-4 mt-12'>
            {Contact.map(({desc,icon,id,title})=> (
             <div key={id} className='flex flex-col items-center justify-center 
             w-[400px] h-[230px] rounded-xl shadow-lg bg-white gap-4 hover:shadow-2xl hover:scale-125 hover:z-10 transition-all duration-700'>
                <div className='text-4xl'>{icon}</div>
                <div className='text-xl'>{title}</div>
                <div className='text-sm text-gray'>{desc}</div>
             </div>
            ))}
        </div>
        </Categorys>
    </div>
    );
};

export default Header;