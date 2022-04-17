import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Table, Form, Button, Input, Divider, Space, InputNumber, Popconfirm } from 'antd';
import tagService from "../../../services/admin/tag.service";
import UploadImageModal from "../../../components/admin/modal/upload-image-modal";
import { DeleteOutlined } from "@ant-design/icons";

const TagManager = () => {
    const [dataSource, setDataSource] = useState([]);
    const [imageTag, setImageTag] = useState([]);
    const [formCategory] = Form.useForm();
    const [formSearch] = Form.useForm();
    const perPage = 10;
    const [count, setCount] = useState(1);
    const childRef = useRef();
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button size="small">Edit</Button>
                    <Popconfirm
                        title="Are you sure？"
                        onConfirm={() => deleteCategory(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            className='customer-delete-btn'
                            size='small'
                            danger
                            type='primary'
                        >
                            <DeleteOutlined />
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ]

    const onFinish = async (value) => {
        const tag = {
            name: value.name,
            descript: value.descript,
            image: imageTag[0]
        }
        await tagService.addTag(tag, (res) => {
            clearForm();
            childRef.current.clearImage();
            getAllTag();
        })
    }

    const getAllTag = (page = 0) => {
        const search = {
            page: page,
            perPage: perPage,
            name: formSearch.getFieldValue('name'),
            minTotal: formSearch.getFieldValue('minTotal'),
            maxTotal: formSearch.getFieldValue('maxTotal'),
        }
        tagService.searchCategory(search, (res) => {
            const categorys = res.rows;
            setCount(res.count);
            let data = categorys.map((item, index) => ({
                key: index + 1,
                ...item
            }))
            setDataSource(data)
        });
    }

    const deleteCategory = (id) => {
        tagService.deleteTag({ id: id },
            (res) => {
                getAllTag(0);
            }
        )
    }

    const getImage = (image) => {
        setImageTag(image);
    }

    useEffect(() => {
        getAllTag();
    }, [])

    const clearForm = () => {
        formCategory.resetFields();
    }

    const pagination = {
        pageSize: perPage,
        total: count,
        onChange: async (page, pageSize) => {
            getAllTag(page - 1);
        }
    }

    const onSearch = () => {
        getAllTag();
    }

    return (
        <div>
            <Row>
                <Col span={15} style={{ paddingRight: 5 }}>
                    <h2>List Category</h2>
                    <Form
                        form={formSearch}
                        layout="horizontal"
                        onFinish={onSearch}
                    >
                        <Row>
                            <Col span={19}>
                                <Row>
                                    <Form.Item
                                        label="NAME"
                                        name="name"
                                        style={{ width: '100%' }}
                                    >
                                        <Input placeholder="input name category" />
                                    </Form.Item>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ paddingRight: '10px' }}>
                                        <Form.Item
                                            label="MIN TOTAL"
                                            name="minTotal"
                                        >
                                            <InputNumber style={{ width: '100%' }} placeholder="input min total" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="MAX TOTAL"
                                            name="maxTotal"
                                        >
                                            <InputNumber style={{ width: '100%' }} placeholder="input max total" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={5} >
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            onClick={() => formSearch.resetFields()}
                                        >
                                            Clear
                                        </Button>
                                    </Form.Item>
                                </div>
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">Search</Button>
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Table dataSource={dataSource} columns={columns} pagination={pagination}></Table>
                    </div>
                </Col>
                <Col span={9} style={{ paddingLeft: 5 }}>
                    <h2>Add Category</h2>
                    <div className='blue-border' style={{ marginBottom: 10 }}>

                        <Form
                            layout='vertical'
                            form={formCategory}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="NAME CATEGORY"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="input name category" />
                            </Form.Item>
                            <Form.Item
                                label="DESCRIPTION"
                                name="descript"
                            >
                                <Input placeholder="input description" />
                            </Form.Item>
                            <Form.Item>
                                <div className='blue-border' style={{ marginBottom: 10 }}>
                                    <Row
                                        style={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <label>IMAGE CATEGORY</label>
                                        <Divider style={{ margin: 3 }} />
                                    </Row>
                                    <UploadImageModal ref={childRef} getImage={getImage} />
                                </div>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'end' }}>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default TagManager;