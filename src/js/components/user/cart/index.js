import React from 'react';
import { StyleCartComponent } from './styled';
import CartItemComponent from './views/cart-item';

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

const CartComponent = () => {
    return (
        <StyleCartComponent>
            <div className="cart-header">Giỏ hàng của bạn</div>
            <div className="cart-summary">
                <span>TỔNG CỘNG ( 2 sản phẩm)</span>
                <span className="cart-sum"> {numberWithCommas(10000000)}đ</span>
            </div>
            <div className="cart-product">
                <CartItemComponent />
                <CartItemComponent />
                <CartItemComponent />
            </div>
            <div className="cart-payment">
                <button>thanh toán</button>
            </div>
        </StyleCartComponent>
    );
};

export default CartComponent;