import React from 'react';
import FAQ from '../components/home/FAQ';
import Contacts from '../components/Contacts';
import Header from '../components/home/Header';
import Partners from '../components/home/Partners';
import HomeNews from '../components/home/HomeNews';
import Advantages from '../components/home/Advantages';
import TopProducts from '../components/home/TopProducts';
import Infographics from '../components/home/Infographics';
import HomeCategories from '../components/home/HomeCategories';

const HomeRouter = ({ changeProdValue }) => {
    return (
        <>
            <Header />
            <HomeCategories />
            <TopProducts changeProdValue={changeProdValue} />
            <Advantages />
            <Infographics />
            <HomeNews />
            <Partners />
            <FAQ />
            <Contacts />
        </>
    );
};

export default HomeRouter;