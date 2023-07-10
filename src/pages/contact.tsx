import Layout from '@/components/layout';
import React from 'react';
import Header from '@/components/contact/header';
import MessageUs from '@/components/contact/messageUs';
import Map from '@/components/contact/map';

const Contact = () => {
    return (
        <div>
            <Header />
            <MessageUs />
            <Map />
        </div>
    );
};

export default Contact;

Contact.getLayout = (page: any) => <Layout>{page}</Layout>;


