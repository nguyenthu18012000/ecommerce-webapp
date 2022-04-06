
import { Row, Col, Space, Divider, InputNumber } from 'antd';
import UploadImageModal from "../../../../components/admin/modal/upload-image-modal";

import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import productService from '../../../../services/admin/product.service';



const AddProduct = () => {
    const [form] = Form.useForm();
    const [formCategory] = Form.useForm();
    const listCategory = [
        { id: 1, name: "Shoe" },
        { id: 2, name: "Shirt" },
        { id: 3, name: "Hat" },
        { id: 0, name: "Unknown" }
    ]
    const [category, setCategory] = useState(0);
    const [mainImage, setMainImage] = useState([]);
    const [extendImage, setExtendImage] = useState([]);

    const getMainImage = (images) => {
        setMainImage(images)
    }

    const getExtendImage = (images) => {
        setExtendImage(images)
    }

    const FormCategoryProduct = () => {

        const onChange = (e) => {
            console.log('radio checked', e.target.value);
            setCategory(e.target.value);
        };

        return (
            <div>
                <Row
                    style={{
                        paddingBottom: 10
                    }}
                >
                    <label>CATEGORY</label>
                    <Divider style={{ margin: 3 }} />
                </Row>
                <Row>
                    <Col span={14}>
                        <Radio.Group onChange={onChange} value={category}>
                            <Space direction="vertical" defaultChecked={'0'}>
                                {
                                    listCategory.map(item =>
                                        <Radio key={item.id} value={item.id}>{item.name}</Radio>
                                    )
                                }
                            </Space>
                        </Radio.Group></Col>
                    <Col span={10}>
                        <Form
                            layout='vertical'
                            form={formCategory}
                            onFinish={(e) => { console.log(e) }}
                        >
                            <Form.Item
                                label="NAME TAG"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );

    }

    const FormInfoProduct = () => {
        const onFinish = async (value) => {
            const product = {
                name: value.name,
                descript: value.descript,
                price: value.price,
                total: value.total,
                imageBg: mainImage[0],
                images: extendImage,
                categoryId: category,
            };
            await productService.addProduct(product).then((res) => {
                console.log(res);
            })
            console.log(product);
        }
        const formItemLayout = {
            labelCol: {
                span: '100%',
            },
            wrapperCol: {
                span: '100%',
            },
        };
        return (
            <Form
                {...formItemLayout}
                layout='vertical'
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label="NAME PRODUCT"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="DESCRIPTION"
                    name="descript"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="PRICE (VNĐ)"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <InputNumber min={0} style={{ width: '50%' }} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="TOTAL"
                    name="total"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <InputNumber min={0} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        );
    };

    return (
        <div>
            <h2>New Product</h2>
            <Row>
                <Col span={14} style={{ paddingRight: 5 }}>
                    <div className='blue-border'>
                        {FormInfoProduct()}
                    </div>
                </Col>
                <Col span={10} style={{ paddingLeft: 5 }}>
                    <div className='blue-border' style={{ marginBottom: 10 }}>{FormCategoryProduct()}</div>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Row
                            style={{
                                paddingBottom: 10
                            }}
                        >
                            <label>MAIN IMAGE</label>
                            <Divider style={{ margin: 3 }} />
                        </Row>

                        <UploadImageModal getImage={getMainImage} />
                    </div>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Row
                            style={{
                                paddingBottom: 10
                            }}
                        >
                            <label>EXTEND IMAGE</label>
                            <Divider style={{ margin: 3 }} />
                        </Row>
                        <UploadImageModal getImage={getExtendImage} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddProduct;