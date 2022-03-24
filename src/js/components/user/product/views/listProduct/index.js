import React from 'react';
import { Col, Row } from 'antd';
import ProductComponent from '../../../../common/product';
import { StyleListProductComponent } from './styled';

const ListProductComponent = () => {
    return (
        <StyleListProductComponent>
            <div className="breadcrumb">
                <span className="breadcrumb-item">Trang chủ </span>
                <span className="breadcrumb-item">/ Nam </span>
                <span className="breadcrumb-item">/ giày</span>
            </div>
            <div className="header-bar">Giày nam</div>
            <div className="list-product">
                <Row>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                    <Col className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent /> </Col>
                </Row>
            </div>
        </StyleListProductComponent>
    );
};

export default ListProductComponent;