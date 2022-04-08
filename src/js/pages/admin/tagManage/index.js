import React, { useState, useEffect } from "react";
import { Row, Col, Table, Form, Button, Input } from 'antd';
import tagService from "../../../services/admin/tag.service";

const TagManager = () => {
    const [dataSource, setDataSource] = useState([]);
    const [formCategory] = Form.useForm();
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        }, ,
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
    ]

    const onFinish = async (value) => {
        const tag = {
            name: value.name
        }
        await tagService.addTag(tag, (res) => {
            console.log(res);
        })
    }

    const getAllTag = async () => {
        await tagService.getAll((res) => {
            console.log(res);
        })
    }

    return (
        <div>
            <Row>
                <Col span={15} style={{ paddingRight: 5 }}>
                    <h2>List Tag</h2>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Table dataSource={dataSource} columns={columns}></Table>
                    </div>
                </Col>
                <Col span={9} style={{ paddingLeft: 5 }}>
                    <h2>Add Tag</h2>
                    <div className='blue-border' style={{ marginBottom: 10 }}>

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

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default TagManager;