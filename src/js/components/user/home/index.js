import React, { useEffect, useState } from 'react';
import BannerComponent from './views/banner';
import BestOfAdidasComponent from './views/bestOfAdidas';
import NewArrivalsComponent from './views/newArrivals';
import StillInterestedComponent from './views/stillInterested';
import productService from '../../../services/user/product.service';
import WebData from '../../../data/data';

const HomeComponent = () => {
    const [newestProduct, setNewestProduct] = useState([]);
    const [mostStarProduct, setMostStarProduct] = useState([]);
    const dataBanners = WebData.banners;
    const dataProducts = WebData.products;

    const getNewestProduct = () => {
        productService.getNewestProduct(
            "",
            (data) => {
                setNewestProduct(data);
            },
            () => { }
        );

    }
    const getMostStarProduct = () => {
        productService.getMostStarProduct(
            "",
            (data) => {
                setMostStarProduct(data);
            },
            () => { }
        );

    }
    useEffect(() => {
        getNewestProduct();
        getMostStarProduct();
    }, []);

    return (
        <>
            {dataBanners?.map(banner => (
                <BannerComponent key={banner.bannerSrc} dataBanner={banner} />
            ))}
            {/* <StillInterestedComponent dataProducts={dataProducts} /> */}
            <NewArrivalsComponent dataProducts={newestProduct} />
            <BestOfAdidasComponent dataProducts={mostStarProduct} />
        </>
    );
};

export default HomeComponent;