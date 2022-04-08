import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from 'antd';
import productService from "../../../../services/admin/product.service";

const ListProduct = () => {
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
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'Total',
        },
        {
            title: 'Tags',
            key: 'categoryId',
            dataIndex: 'categoryId',
            render: tag => (
                <>
                    {tag == null && <Tag color="blue" key={tag}>
                        null
                    </Tag>}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]
    const [dataSource, setDataSource] = useState([
        { key: 1, id: 1, name: "nullam", price: 69535, total: 49, categoryId: null },
        { key: 2, id: 2, name: "sodales", price: 61383, total: 2, categoryId: null },
        { key: 3, id: 3, name: "turpis", price: 34897, total: 49, categoryId: null },
        { key: 4, id: 4, name: "ante", price: 74413, total: 62, categoryId: null },
        { key: 5, id: 5, name: "dapibus augue", price: 35097, total: 78, categoryId: null },
        { key: 6, id: 6, name: "ipsum", price: 56926, total: 60, categoryId: null },
        { key: 7, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null },
        { key: 8, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null },
        { key: 9, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null },
        { key: 10, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null },
        { key: 11, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null },
        { key: 12, id: 7, name: "vivamus vestibulum", price: 55874, total: 84, categoryId: null }
    ]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    useEffect(() => {
        getAllProduct();
    })

    const getAllProduct = async () => {
        await productService.getAll({ page: 0, perPage: 50 }, (res) => {
            console.log(res);
        })
    }

    const pagination = {
        current: 1,
        pageSize: 50,
    }

    return (
        <div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={dataSource}
                columns={columns}
                footer={(currentPage) => console.log(currentPage)}
                pagination={pagination}
            />;
        </div>
    )
}

export default ListProduct;