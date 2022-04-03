import { Col, Row } from 'antd';
import React from 'react';
import { StyleCartItemComponent } from './styled';
import { AiOutlineDelete } from "react-icons/ai";

const CartItemComponent = ({ numberWithCommas }) => {
    return (
        <StyleCartItemComponent>
            <div className="cart-item">
                <Row>
                    <Col span={7} className="item-image">
                        <img className="image" src="/images/shoes1.webp" alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <span className="item-name">Giày ultaboost</span>
                            <span className="item-price">{numberWithCommas(10000000)}đ</span>
                        </div>
                        <div className="item-infor item-status">sản phẩm đang sẵn hàng</div>
                        <div className="item-infor item-quantity">
                            <select className="number">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
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