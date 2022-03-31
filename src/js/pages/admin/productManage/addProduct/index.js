
import { Row, Col, Space, Divider } from 'antd';
import UploadImageModal from "../../../../components/admin/modal/upload-image-modal";

import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';



const AddProduct = () => {
    const [form] = Form.useForm();
    const [formCategory] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const listCategory = [
        { id: 1, name: "Shoe" },
        { id: 2, name: "Shirt" },
        { id: 3, name: "Hat" },
        { id: 0, name: "Unknown" }
    ]
    const [category, setCategory] = useState(0);

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
        const onFinish = (value) => {
            console.log(value)
            console.log(category)
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
                    label="PRICE"
                    name="price"
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
                    label="TOTAL"
                    name="total"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="input placeholder" />
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

                        <UploadImageModal />
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
                        <UploadImageModal />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddProduct;