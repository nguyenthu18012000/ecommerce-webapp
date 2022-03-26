import React from 'react';
import { StyleImagesComponent } from './styled';
import { Carousel } from 'antd';

const ImagesComponent = () => {
    return (
        <StyleImagesComponent>
            <Carousel className="carousel">
                <div>
                    <img className="image" src="/images/image1.webp" alt="" />
                </div>
                <div>
                    <img className="image" src="/images/image1.webp" alt="" />
                </div>
                <div>
                    <img className="image" src="/images/image1.webp" alt="" />
                </div>
                <div>
                    <img className="image" src="/images/image1.webp" alt="" />
                </div>
            </Carousel>
        </StyleImagesComponent>
    );
};

export default ImagesComponent;