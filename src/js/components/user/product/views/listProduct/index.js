import React, { useEffect, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import ProductComponent from '../../../../common/product';
import { StyleListProductComponent } from './styled';
import { useHistory } from 'react-router-dom';
import productService from '../../../../../services/user/product.service';

const ListProductComponent = ({ match }) => {
    const history = useHistory();
    const [dataProducts, setDataProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paramsSearch, setParamsSearch] = useState("");

    const productPerPage = 10;
    const numberOfProducts = dataProducts.length;

    const params = new URL(window.location.href);
    const paramUrl = params.searchParams;

    const getListProducts = () => {
        productService.getListProducts(
            "",
            (data) => {
                setDataProducts(data);
            },
            () => { }
        );
    }
    const handleClickPage = (page) => {
        history.push(`${match?.url}?page=${page}`)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        getListProducts();
        const page = paramUrl.get("page") || 1;
        const search = paramUrl.get("search") || "";
        setCurrentPage(page);
        setParamsSearch(search);
    }, [params.href])
    var indexOfFirstProduct = (currentPage - 1) * productPerPage;
    var indexOfLastProduct = currentPage * productPerPage - 1;
    if (indexOfLastProduct > numberOfProducts) {
        indexOfLastProduct = numberOfProducts - 1;
    }

    const currenDataProduct = dataProducts.filter((item, index) => index >= indexOfFirstProduct && index <= indexOfLastProduct);

    return (
        <StyleListProductComponent>
            <div className="breadcrumb">
                <span className="breadcrumb-item" onClick={() => { history.push("/") }}>Trang chủ </span>
                <span className="breadcrumb-item">/ Sản phẩm</span>
            </div>
            {paramsSearch !== "" ?
                <div className="header-bar">Từ khóa: {paramsSearch}</div> :
                <div className="header-bar">Tất cả sản phẩm</div>
            }
            <div className="list-product">
                <Row>
                    {currenDataProduct.map(dataProduct => (
                        <Col key={dataProduct.id} className="product-item" span={6} xs={12} sm={8} xl={6}>
                            <ProductComponent dataProduct={dataProduct} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <div className="product-pagination">
                    <Pagination className="pagination"
                        current={+currentPage}
                        total={numberOfProducts}
                        onChange={handleClickPage}
                    />
                </div>
            </div>
        </StyleListProductComponent>
    );
};

export default ListProductComponent;