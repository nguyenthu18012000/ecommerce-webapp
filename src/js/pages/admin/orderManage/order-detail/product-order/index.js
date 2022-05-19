import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import imageService from "../../../../../services/admin/image.service";
import productService from "../../../../../services/admin/product.service";


const ProductOrder = (props) => {
    const {
        productOrder = null,
    } = props;
    const [data, setData] = useState([]);
    const [imageBg, setImageBg] = useState(new Map());

    useEffect(() => {
        console.log(productOrder)
        let ids = [];
        if (productOrder && productOrder.length) {
            ids = productOrder.map(item => item?.productId);
        }
        if (ids.length) {
            getProducts(ids)
        }
    }, [productOrder]);

    const getProducts = (ids) => {
        productService.getProducts(ids,
            (res) => {
                setData(res);
                console.log(res);
                let images = [];
                console.log(res.imageBg)
                if (res && res.length) {
                    images = res.map(item => +item.imageBg[0]);
                    console.log(images)
                }
                if (images && images.length) {
                    getImageBg(images);
                }
            }
        );
    }

    const getImageBg = (images) => {
        imageService.getImageByIds(images,
            (res) => {
                console.log(res);
                const images = new Map();
                res.forEach(element => {
                    images.set(+element.id, element.src);
                });
                setImageBg(images);
            }
        );
    };

    return (
        <>
            {data && data.length && (
                data.map((item, index) =>
                    <div className="blue-border"
                        key={index}
                        style={{ width: '100%', marginBottom: '10px' }}>
                        <Col span={12}>
                            <Row >
                                <label style={{ width: '100%', textAlign: 'center' }}>{item.name}</label>
                                <Image
                                    height={200}
                                    src={imageBg.get(+item.imageBg[0])}
                                    style={{ objectFit: 'contain' }}
                                />
                            </Row>
                        </Col>
                        <Col span={12}>
                        </Col>
                    </div>
                )
            )}
        </>
    )
}

export default ProductOrder;