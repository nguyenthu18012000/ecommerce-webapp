import React from 'react';
import BannerComponent from './views/banner';
import BestOfAdidasComponent from './views/bestOfAdidas';
import NewArrivalsComponent from './views/newArrivals';
import StillInterestedComponent from './views/stillInterested';
import WebData from '../../../data/data';

const HomeComponent = () => {
    const dataBanners = WebData.banners;
    const dataProducts = WebData.products;
    return (
        <>
            {dataBanners?.map(banner => (
                <BannerComponent key={banner.bannerSrc} dataBanner={banner} />
            ))}
            <StillInterestedComponent dataProducts={dataProducts} />
            <NewArrivalsComponent dataProducts={dataProducts} />
            <BestOfAdidasComponent dataProducts={dataProducts} />
        </>
    );
};

export default HomeComponent;