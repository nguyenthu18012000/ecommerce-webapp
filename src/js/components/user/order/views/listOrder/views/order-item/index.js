import { Modal } from 'antd';
import React, { useState } from 'react';
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderItemComponent } from './styled';
import OrderProductItemComponent from './views/order-product-item';

const OrderItemComponent = ({ order }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // const convertDateTime = (dateTime = "") => {
    //     let length = dateTime.length - 5;
    //     let dateTimeConverted = '';
    //     for (let i = 0; i <= length; i++) {
    //         if (dateTime[i] !== 'T') {
    //             dateTimeConverted[i] = dateTime[i];
    //         } else {
    //             dateTimeConverted[i] = " ";
    //         }
    //     }
    //     return dateTimeConverted;
    // }
    // console.log(convertDateTime("2022 - 04 - 15T08: 36: 48.000Z"));
    return (
        <StyleOrderItemComponent>
            <div>
                <span>
                    {order?.productOrder?.length} sản phẩm:
                </span>
                <span>
                    {numberWithCommas(order?.priceTotal)}đ
                </span>
            </div>
            <div>
                <span>
                    Ngày đặt hàng:
                </span>
                <span>
                    {order?.createdAt}
                </span>
            </div>
            <div>
                <span>
                    Trạng thái đơn hàng:
                </span>
                <span>
                    {order?.status}
                </span>
            </div>
            <div>
                {/* <span>
                    <button>Xác nhận</button>
                </span>
                <span>
                    <button>Trả hàng</button>
                </span> */}
                <span>
                    <button onClick={showModal}>Xem chi tiết</button>
                </span>
            </div>
            <Modal title="Chi tiết đơn hàng"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={500}
            >
                {order.productOrder.map(product => (
                    <OrderProductItemComponent key={product?.id} product={product} />
                ))}
            </Modal>
        </StyleOrderItemComponent>
    );
};

export default OrderItemComponent;