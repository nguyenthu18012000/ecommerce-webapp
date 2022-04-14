import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyleCartItemComponent } from './styled';
import { AiOutlineDelete } from "react-icons/ai";
import productService from '../../../../../services/user/product.service';

const CartItemComponent = ({ dataProduct,
    updateQuantity,
    numberWithCommas,
    selectProductOrder,
    deleteProductFromCart }) => {
    const [inforProduct, setInforProduct] = useState({})
    const [quantity, setQuantity] = useState(dataProduct?.quantity || 1);

    const id_product = dataProduct.productId;

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const getInforProduct = (id_product) => {
        productService.getProductById(
            id_product,
            (data) => {
                setInforProduct(data);
            },
            () => { }
        );
    }
    useEffect(() => {
        getInforProduct(id_product);
        const interval = setInterval(updateQuantity(id_product, quantity), 1000);
        return () => clearInterval(interval);
    }, [quantity]);

    return (
        <StyleCartItemComponent>
            <div className="cart-item">
                <Row>
                    <Col span={7} className="item-image">
                        <img className="image" src={inforProduct?.imageBg} alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <span className="item-name">{inforProduct?.name}</span>
                            <span className="item-price">{numberWithCommas(inforProduct?.price)}đ</span>
                        </div>
                        <div className="item-infor item-status">{inforProduct?.status}</div>
                        <div className="item-infor item-quantity">
                            <button className="changeQuantityBtn" onClick={decreaseQuantity}>-</button>
                            <input
                                className="quantityInput"
                                value={quantity}
                                disabled
                            />
                            <button className="changeQuantityBtn" onClick={increaseQuantity}>+</button>
                        </div>
                    </Col>
                    <Col span={2} className="item-function">
                        <button className="item-delete" onClick={() => deleteProductFromCart(inforProduct?.id)}><AiOutlineDelete /></button>
                        <div>
                            <input
                                className="item-selected"
                                type="checkbox"
                                onChange={() => selectProductOrder(dataProduct?.id, inforProduct?.price)}
                            // onClick={() => calculateTotalPriceAndQuantity}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleCartItemComponent>
    );
};

export default CartItemComponent;