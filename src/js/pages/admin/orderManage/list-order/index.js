import { ReconciliationFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space, Table, Tag } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ModalCustomer from "../../../../components/admin/modal";
import orderService from "../../../../services/admin/order.service";
import OrderDetail from "../order-detail";

const ListOrder = () => {
    const perPage = 20;
    let priceTotalSort = false;
    const [form] = Form.useForm();
    const [orderIdSelect, setOrderIdSelect] = useState();
    const refOrderDetail = useRef();
    const optionStatus = new Map();
    optionStatus.set(0, 'Pending approval');
    optionStatus.set(1, 'Approved');
    optionStatus.set(2, 'Delivery in progress');
    optionStatus.set(3, 'Successful delivery');
    optionStatus.set(4, 'Refunded');
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <div>{text}</div>,
        }, ,
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Price total',
            key: 'priceTotal',
            dataIndex: 'priceTotal',
            sorter: (a, b) => {
                priceTotalSort = !priceTotalSort
            },
            render: text => <div>{text}</div>,
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: text => <Tag color="blue" key={optionStatus.get(text)}>{optionStatus.get(text)}</Tag>,
        },
        {
            title: 'Create date',
            key: 'createdAt',
            dataIndex: 'createdAt',
            render: text => {
                const m = new Date(text);
                return (<div>{
                    m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " +
                    m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds()}
                </div>)
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        size="small"
                        type='primary'
                        style={{ background: '#1890ff', border: 'none' }}
                        onClick={() => {
                            setOrderIdSelect(record.id);
                            refOrderDetail.current.showModal();
                        }}
                    >
                        <ReconciliationFilled />
                    </Button>
                </Space >
            ),
        },
    ]
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    const pagination = {
        pageSize: perPage,
        total: count,
        onChange: (page, pageSize) => {
            getListOrder(page - 1);
        }
    }

    useEffect(() => {
        getListOrder();
    }, [])

    const getListOrder = (page = 0) => {
        console.log({ priceTotalSort })
        const searchData = {
            status: null,
            minPrice: null,
            maxPrice: null,
            startDate: null,
            endDate: null,
            page: page,
            perPage: perPage,
            priceTotalSort: priceTotalSort,
        }
        orderService.searchAll(searchData,
            (res) => {
                console.log(res);
                const listOrder = res.rows;
                const count = res.count;
                const mapListOrder = listOrder.map(
                    (item, index) => (
                        {
                            ...item,
                            key: index,
                            stt: page * perPage + index + 1
                        }
                    )
                );
                console.log(mapListOrder)
                setDataSource(mapListOrder)
                setCount(count)
                setLoading(false)
            }
        )
    }

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        getListOrder();
    }

    return (
        <div>
            <h2>List Order</h2>
            <Form
                layout='horizontal'
                form={form}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input placeholder="input name" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '10px' }}>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="Min price "
                                    name="minPrice"
                                >
                                    <Input placeholder="input min price" />
                                </Form.Item>

                            </Col>
                            <Col span={12} style={{ paddingLeft: '10px' }}>
                                <Form.Item
                                    label="Max price"
                                    name="maxPrice"
                                >
                                    <Input placeholder="input max price" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="Start date"
                                    name="startDate"
                                >
                                    <Input placeholder="input start date" />
                                </Form.Item>

                            </Col>
                            <Col span={12} style={{ paddingLeft: '10px' }}>
                                <Form.Item
                                    label="End date"
                                    name="endDate"
                                >
                                    <Input placeholder="input end date" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '10px' }}>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                >
                                    <Select defaultValue="lucy" style={{ width: 120 }} >
                                        {/* <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option> */}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ textAlign: 'end' }}>
                                <Form.Item >
                                    <Button style={{ marginRight: '10px' }}
                                        type="primary"
                                    // onClick={clearSeach}
                                    >
                                        Clear
                                    </Button>
                                    <Button type="primary" htmlType="submit">Search</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </Form>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                loading={loading}
                onChange={onChange}
            />;
            <ModalCustomer
                ref={refOrderDetail}
                title={'ORDER DETAIL'}
                style={{}}
                width={'80%'}
                bodyStyle={{ height: '100%' }}
            >
                <OrderDetail orderId={orderIdSelect} />
            </ModalCustomer>
        </div>
    )
}

export default ListOrder;