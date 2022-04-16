import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../helpers/formatNumberWithCommas';
import { StyleCartComponent } from './styled';
import CartItemComponent from './views/cart-item';
import cartService from '../../../services/user/cart.service';
import { cloneDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import orderService from '../../../services/user/order.service';
import toastCustom from '../../../helpers/toast-custom';

const CartComponent = () => {
    const [dataCartProduct, setDataCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [listIdProductSelected, setListIdProductSelected] = useState([]);
    const [listProductSelected, setListProductSelected] = useState([]);

    var productQuantity = dataCartProduct?.length;
    const history = useHistory();

    const updateQuantity = (id, quantity) => {
        cartService.updateQuantityProductToCart(
            {
                productOrder: {
                    quantity: quantity,
                    productId: id
                }
            },
            () => {
                let data = cloneDeep(dataCartProduct);
                for (let i = 0; i < productQuantity; i++) {
                    if (data[i].productId === id) {
                        data[i].quantity = quantity;
                    }
                }
                setDataCartProduct(data);
            },
            () => { }
        )
    }
    const getAllProductInCart = () => {
        cartService.getAllProductInCart(
            "",
            (data) => {
                setDataCartProduct(data);
            },
            () => { }
        );
    }
    const deleteProductFromCart = (productId) => {
        cartService.deleteProductFromCart(
            { productIdDelete: productId },
            () => {
                let cartProducts = cloneDeep(dataCartProduct);
                setDataCartProduct(cartProducts.filter(item => item.productId !== productId));
            },
            () => { }
        );
    }
    const selectProductOrder = (id, price) => {
        let listId = cloneDeep(listProductSelected);
        let idOrder = cloneDeep(listIdProductSelected);
        let addProduct = true;
        const findId = listId.find((element) => element.id === id);
        if (findId?.id === id) {
            setListProductSelected(listId.filter(item => item.id !== id));
            setListIdProductSelected(idOrder.filter(item => item !== id))
        } else {
            listId.push({ id, price });
            idOrder.push(id);
            setListProductSelected(listId);
            setListIdProductSelected(idOrder);
        }
        console.log(listProductSelected);
    }
    const createOrder = () => {
        orderService.createOrder(
            {
                product_order_id: listIdProductSelected,
                priceTotal: totalPrice,
            },
            () => {
                toastCustom({
                    mess: "Đặt hàng thành công.",
                    type: "success",
                });
                history.push("/order");
            },
            () => { }
        )
    };

    useEffect(() => {
        getAllProductInCart();
    }, []);
    useEffect(() => {
        let newTotalPrice = 0;
        listProductSelected.forEach(item => {
            const cartProduct = dataCartProduct.find(product => product.id === item.id);
            newTotalPrice += cartProduct.quantity * item.price;
        });
        setTotalPrice(newTotalPrice);
        console.log(listProductSelected);
    }, [dataCartProduct, listProductSelected]);
    return (
        <StyleCartComponent>
            <div className="cart-header">Giỏ hàng của bạn</div>
            <div className="cart-summary">
                <span>TỔNG CỘNG ( {listProductSelected.length} sản phẩm được chọn)</span>
                <span className="cart-sum"> {numberWithCommas(totalPrice)}đ</span>
            </div>
            <Row className="cart-infor">
                <Col xs={24} xl={16} className="cart-product">
                    {dataCartProduct.map(dataProduct => (
                        <CartItemComponent
                            key={dataProduct.id}
                            dataProduct={dataProduct}
                            updateQuantity={updateQuantity}
                            numberWithCommas={numberWithCommas}
                            selectProductOrder={selectProductOrder}
                            deleteProductFromCart={deleteProductFromCart}
                        />
                    ))}
                </Col>
                <Col xs={0} xl={1}></Col>
                <Col xs={24} xl={7} className="cart-detail">
                    <h1>Tóm tắt đơn hàng</h1>
                    <div>
                        <span>{listProductSelected.length} sản phẩm: </span>
                        <span>{numberWithCommas(10000000)}đ</span>
                    </div>
                    <div>
                        <span>Giao hàng: </span>
                        <span>Miễn phí</span>
                    </div>
                    <div>
                        <span>Tổng (Đã bao gồm thuế): </span>
                        <span>{numberWithCommas(10000000)}đ</span>
                    </div>
                </Col>
            </Row>

            <div className="cart-payment">
                <button onClick={() => createOrder()}>thanh toán</button>
            </div>
        </StyleCartComponent>
    );
};

export default CartComponent;