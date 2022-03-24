import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import { StyleProductComponent } from './styled';

const ProductComponent = () => {
    return (
        <StyleProductComponent>
            <div className="new-arrival-item">
                <div className="product">
                    <Link>
                        <img className="product-image" src="/images/shoes1.webp" alt="product" />
                    </Link>
                    <div>
                        <Link>
                            <span className="price">3.000.000 đ</span>
                        </Link>
                        <Link>
                            <span className="wishlist"><AiOutlineHeart /></span>
                        </Link>
                    </div>
                    <Link>
                        <div className="detail">
                            <div className="product-name">giày superstar</div>
                            <div className="product-category">Nam originals</div>
                            {/* <div className="product-status">mới</div> */}
                        </div>
                    </Link>
                </div>
            </div>
        </StyleProductComponent>
    );
};

export default ProductComponent;