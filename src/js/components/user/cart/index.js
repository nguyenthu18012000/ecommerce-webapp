import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../helpers/formatNumberWithCommas';
import { StyleCartComponent } from './styled';
import CartItemComponent from './views/cart-item';
import WebData from '../../../data/data';

const CartComponent = () => {
    const [dataCartProduct, setDataCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const dataCart = WebData.productInCart;

    const getListProductInCart = () => {
        setDataCartProduct(dataCart);
    }

    const updateQuantity = (id, quantity) => {
        console.log(id + " " + quantity);
    }

    useEffect(() => {
        getListProductInCart();
    }, []);
    return (
        <StyleCartComponent>
            <div className="cart-header">Giỏ hàng của bạn</div>
            <div className="cart-summary">
                <span>TỔNG CỘNG ( 2 sản phẩm)</span>
                <span className="cart-sum"> {numberWithCommas(10000500)}đ</span>
            </div>
            <Row className="cart-infor">
                <Col xs={24} xl={16} className="cart-product">
                    {dataCartProduct.map(dataProduct => (
                        <CartItemComponent
                            key={dataProduct.id}
                            dataProduct={dataProduct}
                            updateQuantity={updateQuantity}
                            numberWithCommas={numberWithCommas}
                        />
                    ))}
                </Col>
                <Col xs={0} xl={1}></Col>
                <Col xs={24} xl={7} className="cart-detail">
                    <h1>Tóm tắt đơn hàng</h1>
                    <div>
                        <span>2 sản phẩm: </span>
                        <span>{numberWithCommas(10000000)}đ</span>
                    </div>
                    <div>
                        <span>Giao hàng: </span>
                        <span>Miễn phí</span>
                    </div>
                    <div>
                        <span>Tổng (Đã bao gồm thuế): </span>
                        <span>{numberWithCommas(10000000)}đ</span>
                    </div>
                </Col>
            </Row>

            <div className="cart-payment">
                <button>thanh toán</button>
            </div>
        </StyleCartComponent>
    );
};

export default CartComponent;