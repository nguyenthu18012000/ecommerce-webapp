import React from 'react';
import BannerComponent from './views/banner';
import BestOfAdidasComponent from './views/bestOfAdidas';
import NewArrivalsComponent from './views/newArrivals';
import StillInterestedComponent from './views/stillInterested';

const HomeComponent = () => {
    return (
        <div>
            <BannerComponent />
            <StillInterestedComponent />
            <NewArrivalsComponent />
            <BestOfAdidasComponent />
        </div>
    );
};

export default HomeComponent;