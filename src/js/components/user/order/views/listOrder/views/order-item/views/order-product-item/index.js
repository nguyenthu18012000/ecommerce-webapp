import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderProductItemComponent } from './styled';
import productService from '../../../../../../../../../services/user/product.service';

const OrderProductItemComponent = ({ product }) => {
    const [inforProduct, setInforProduct] = useState({});

    const id = product.productId;

    const getInforProduct = () => {
        productService.getProductById(
            id,
            (data) => {
                setInforProduct(data);
            },
            () => { }
        );
    }

    useEffect(() => {
        getInforProduct();
    }, [])
    return (
        <StyleOrderProductItemComponent>
            <div className="cart-item">
                <Row>
                    <Col span={7} className="item-image">
                        <img className="image" src={inforProduct.imageBg} alt="" />
                    </Col>
                    <Col span={15} className="item-information">
                        <div className="item-infor">
                            <span className="item-name">{inforProduct.name}</span>
                            <span className="item-price">{numberWithCommas(inforProduct.price)}đ</span>
                        </div>
                        <div className="item-infor item-quantity">
                            <div>x{product.quantity}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleOrderProductItemComponent>
    );
};

export default OrderProductItemComponent;