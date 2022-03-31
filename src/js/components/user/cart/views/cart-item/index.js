import { Col, Row } from 'antd';
import React from 'react';
import { StyleCartItemComponent } from './styled';

const CartItemComponent = () => {
    return (
        <StyleCartItemComponent>
            <div className="cart-item">
                <Row>

                    <Col span={8} className="item-image">
                        <img className="image" src="/images/shoes1.webp" alt="" />
                    </Col>
                    <Col span={16} className="item-information">
                        <div className="item-infor item-name">
                            <span>Giày ultaboost</span>
                            <span>giá</span>
                        </div>
                        <div className="item-infor item-status">snar phẩm đang sẵn hàng</div>
                        <div className="item-infor item-quantity">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleCartItemComponent>
    );
};

export default CartItemComponent;