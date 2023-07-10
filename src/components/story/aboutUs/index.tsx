import React from 'react';
import Categorys from '@/components/shared/category';

const AboutUs = () => {
    return (
    <Categorys
        subTitle='our story'
        title='How it all started'
      >
            <div className='text-center text-base text-gray w-[35%] pt-8 pb-20'>
               Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor.
               Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat.
               Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.
               Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin
               elit sit amet facilisis euismod. Fusce at arcu sed libero lacinia dignissim id bibendum metus.
        </div>
    </Categorys>
    );
};

export default AboutUs;