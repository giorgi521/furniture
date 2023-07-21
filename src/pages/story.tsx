import React from 'react';
import {ReactElement} from 'react';
import Layout from '@/components/layout';
import Header from '@/components/story/header';
import Animation from '@/components/story/animation';
import AboutUs from '@/components/story/aboutUs';
import Founder from '@/components/story/aboutTheFounder';
import CustomMotionDiv from '@/components/shared/CustomMotionDiv';

const Story = () => {
    return (
        <CustomMotionDiv>
            <Header />
            <Animation />
            <AboutUs />
            <Founder />
        </CustomMotionDiv>
    );
};

export default Story;

Story.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;