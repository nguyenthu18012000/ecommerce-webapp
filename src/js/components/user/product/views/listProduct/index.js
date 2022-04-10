import React from 'react';
import { Col, Row } from 'antd';
import ProductComponent from '../../../../common/product';
import { StyleListProductComponent } from './styled';
import WebData from '../../../../../data/data';
import { useHistory } from 'react-router-dom';

const ListProductComponent = () => {

    const history = useHistory();

    const dataProducts = WebData.products;

    return (
        <StyleListProductComponent>
            <div className="breadcrumb">
                <span className="breadcrumb-item" onClick={() => { history.push("/") }}>Trang chủ </span>
                <span className="breadcrumb-item">/ Nam </span>
                <span className="breadcrumb-item">/ giày</span>
            </div>
            <div className="header-bar">Giày nam</div>
            <div className="list-product">
                <Row>
                    {dataProducts.map(dataProduct => (
                        <Col key={dataProduct.id} className="product-item" span={6} xs={12} sm={8} xl={6}> <ProductComponent dataProduct={dataProduct} /> </Col>
                    ))}
                </Row>
            </div>
        </StyleListProductComponent>
    );
};

export default ListProductComponent;