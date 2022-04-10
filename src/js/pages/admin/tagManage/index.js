import React, { useState, useEffect } from "react";
import { Row, Col, Table, Form, Button, Input } from 'antd';
import tagService from "../../../services/admin/tag.service";
import UploadImageModal from "../../../components/admin/modal/upload-image-modal";

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
            name: value.name,
            descript: value.descript,
        }
        await tagService.addTag(tag, (res) => {
            console.log(res);
        })
    }


    const getAllTag = async () => {
        await tagService.getAll({}, (res) => {
            let data = res.map((item, index) => ({
                key: index + 1,
                ...item
            }))
            setDataSource(data)
        });
    }

    useEffect(() => {
        getAllTag();
    }, [])

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
                            onFinish={onFinish}
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
                            <Form.Item
                                label="DESCRIPTION"
                                name="descript"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item
                                label="IMAGE"
                            >
                                <UploadImageModal getImage={() => console.log("duong")} />
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