import Layout from '@/components/layout';
import React from 'react';
import Header from '@/components/contact/header';
import MessageUs from '@/components/contact/messageUs';
import Map from '@/components/contact/map';
import CustomMotionDiv from '@/components/shared/CustomMotionDiv';
import {ReactElement} from 'react';

const Contact = () => {
    return (
        <CustomMotionDiv>
            <Header />
            <MessageUs />
            <Map />
        </CustomMotionDiv>
    );
};

export default Contact;

Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;


