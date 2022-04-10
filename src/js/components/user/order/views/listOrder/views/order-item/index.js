import React from 'react';
import numberWithCommas from '../../../../../../../helpers/formatNumberWithCommas';
import { StyleOrderItemComponent } from './styled';

const OrderItemComponent = () => {
    return (
        <StyleOrderItemComponent>
            <div>
                <span>
                    2 sản phẩm:
                </span>
                <span>
                    {numberWithCommas(100000000000)}đ
                </span>
            </div>
            <div>
                Đang chuẩn bị hàng
            </div>
            <div>
                <span>
                    <button>Xác nhận</button>
                </span>
                <span>
                    <button>Trả hàng</button>
                </span>
            </div>
        </StyleOrderItemComponent>
    );
};

export default OrderItemComponent;