import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { StyleNewArrivalsComponent } from './styled';
import ProductComponent from '../../../../common/product';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4.5
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

const NewArrivalsComponent = () => {
    return (
        <StyleNewArrivalsComponent>
            <div>
                <div className="carousel-title">
                    <h3 className='title'>New Arrivals</h3>
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
        </StyleNewArrivalsComponent>
    );
};

export default NewArrivalsComponent;