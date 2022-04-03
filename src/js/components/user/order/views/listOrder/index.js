import { Col } from 'antd';
import React from 'react';
import { StyleListOrderComponent } from './styled';
import OrderItemComponent from './views/order-item';

const ListOrderComponent = () => {
    return (
        <StyleListOrderComponent>
            <div className="order-item">
                <div className="order-header">
                    Đơn hàng của bạn
                </div>
                <div className="order-in-transport">
                    <div className="order-title">
                        Đơn hàng đang trong vẫn chuyển
                    </div>
                    <div className="order-body">
                        <OrderItemComponent />
                        <OrderItemComponent />
                        <OrderItemComponent />
                    </div>
                </div>
                <div className="order-completed">
                    <div className="order-title">
                        Đơn hàng đã hoàn thành
                    </div>
                    <div className="order-body">
                        <OrderItemComponent />
                        <OrderItemComponent />
                    </div>
                </div>
            </div>
        </StyleListOrderComponent>
    );
};

export default ListOrderComponent;