import React, { useEffect, useState } from 'react';
import imageService from '../../../../../../../services/admin/image.service';
import { StyleElementCategoryComponent } from './styled';

const ElementCategoryComponent = ({ category }) => {
    const [image, setImage] = useState([]);

    const getImage = () => {
        imageService.getImageByIds(
            [category.image],
            (data) => {
                setImage(data);
            },
            () => { }
        )
    }

    useEffect(() => {
        getImage();
    }, [])
    return (
        <StyleElementCategoryComponent>
            <div className="category">
                <img
                    className="category-image"
                    src={image[0]?.src}
                    alt="category"
                />
                <div
                    className="category-name"
                >
                    {category?.name}
                </div>
            </div>
        </StyleElementCategoryComponent>
    );
};

export default ElementCategoryComponent;