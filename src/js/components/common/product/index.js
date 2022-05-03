import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import "react-multi-carousel/lib/styles.css";
import { StyleProductComponent } from './styled';
import numberWithCommas from '../../../helpers/formatNumberWithCommas';
import { useHistory } from 'react-router-dom';
import imageService from '../../../services/admin/image.service';

const ProductComponent = ({ dataProduct = {} }) => {
    const [imageBg, setImageBg] = useState("");
    const history = useHistory();
    const handleRedirectDetailProduct = (idProduct) => {
        history.push(`product/${idProduct}`);
    }

    const getImageBg = () => {
        imageService.getImageByIds(
            dataProduct.imageBg,
            (data) => {
                setImageBg(data);
            },
            () => { }
        )
    }

    useEffect(() => {
        getImageBg();
    }, [])

    return (
        <StyleProductComponent>
            <div className="new-arrival-item">
                <div className="product" onClick={() => handleRedirectDetailProduct(dataProduct.id)}>
                    <img className="product-image" src={imageBg[0]?.src} alt="product" />
                    <div className="detail">
                        <span className="price"> {numberWithCommas(dataProduct?.price)}đ </span>
                        <span className="wishlist"><AiOutlineHeart /></span>
                    </div>
                    <div className="detail">
                        <div className="product-name"> {dataProduct?.name} </div>
                        <div className="product-category"> {dataProduct?.category} </div>
                    </div>
                </div>
            </div>

        </StyleProductComponent>
    );
};

export default ProductComponent;