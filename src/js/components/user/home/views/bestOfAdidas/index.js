import React from 'react';
import { StyleBestOfAdidasComponent } from './styled';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ProductComponent from '../../../../common/product';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const BestOfAdidasComponent = () => {
    return (
        <StyleBestOfAdidasComponent>
            <div>
                <div className="carousel-title">
                    <h3 className='title'>Best Of Adidas</h3>
                </div>
                <div className="">

                </div>
            </div>
            <Carousel responsive={responsive}>
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
            </Carousel>
        </StyleBestOfAdidasComponent>
    );
};

export default BestOfAdidasComponent;