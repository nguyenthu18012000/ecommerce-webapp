import React, { useEffect, useState } from 'react';
import orderService from '../../../../../services/user/order.service';
import { StyleListOrderComponent } from './styled';
import OrderItemComponent from './views/order-item';

const ListOrderComponent = () => {
    const [dataOrder, setDataOrder] = useState([]);

    const getAllOrder = () => {
        orderService.getAllOrder(
            "",
            (res) => {
                setDataOrder(res);
            },
            () => { }
        )
    }

    useEffect(() => {
        getAllOrder();
    }, [])

    return (
        <StyleListOrderComponent>
            <div className="order-item">
                <div className="order-header">
                    Đơn hàng của bạn
                </div>
                <div className="order-in-transport">
                    {/* <div className="order-title">
                        Đơn hàng đang trong vẫn chuyển
                    </div> */}
                    <div className="order-body">
                        {dataOrder.map(order => (
                            <div key={order?.id} className="order">
                                <OrderItemComponent order={order} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="order-completed">
                    <div className="order-title">
                        Đơn hàng đã hoàn thành
                    </div>
                    <div className="order-body">
                        <div className="order">
                            <OrderItemComponent />
                        </div>
                        <div className="order">
                            <OrderItemComponent />
                        </div>
                        <div className="order">
                            <OrderItemComponent />
                        </div>
                    </div>
                </div> */}
            </div>
        </StyleListOrderComponent>
    );
};

export default ListOrderComponent;