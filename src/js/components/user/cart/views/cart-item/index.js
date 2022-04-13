import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyleCartItemComponent } from './styled';
import { AiOutlineDelete } from "react-icons/ai";

const CartItemComponent = ({ dataProduct, updateQuantity, numberWithCommas }) => {
    const [quantity, setQuantity] = useState(dataProduct?.quantity || 1);

    const id_product = dataProduct.id;

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(updateQuantity(id_product, quantity), 1000);
        return () => clearInterval(interval);
    });

    return (
        <StyleCartItemComponent>
            <div className="cart-item">
                <Row>
                    <Col span={7} className="item-image">
                        <img className="image" src={dataProduct?.image} alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <span className="item-name"> {dataProduct.name}</span>
                            <span className="item-price">{numberWithCommas(dataProduct?.price)}đ</span>
                        </div>
                        <div className="item-infor item-status">{dataProduct?.status}</div>
                        <div className="item-infor item-quantity">
                            <button className="changeQuantityBtn" onClick={decreaseQuantity}>-</button>
                            <input className="quantityInput" value={quantity} />
                            <button className="changeQuantityBtn" onClick={increaseQuantity}>+</button>
                        </div>
                        <div>
                        </div>
                    </Col>
                    <Col span={2}>
                        <button className="item-delete"><AiOutlineDelete /></button>
                    </Col>
                </Row>
            </div>
        </StyleCartItemComponent>
    );
};

export default CartItemComponent;