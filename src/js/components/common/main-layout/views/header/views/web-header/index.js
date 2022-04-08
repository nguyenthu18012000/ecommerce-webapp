import React from 'react';
import StyleWebHeaderComponent from './styled';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Col, Menu, Row, Dropdown, Button, Space, Input } from 'antd';

const { Search } = Input;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const WebHeaderComponent = () => {
    return (
        <StyleWebHeaderComponent>
            <div className="header">
                <Row className="top-header">
                    <Col span={10} className="top-label">Miễn phí giao hàng trên 1.300.000 VND</Col>
                    <Col span={4} className="top-label">Trả hàng dễ dàng</Col>
                    <Col span={10} className="top-label">Đã có thể thanh toán qua thẻ</Col>
                </Row>
                <div className="header-mid">
                    <div className="label">
                        <span className="mid-label">
                            <Link><span className="text-color">Trợ giúp</span></Link>
                        </span>
                        <span className="mid-label">
                            <Link><span className="text-color">Theo dõi đơn hàng</span></Link>
                        </span>
                        <span className="mid-label">
                            <Link><span className="text-color">Đăng kí bản tin</span></Link>
                        </span>
                        <span className="mid-label">
                            <Link to='/login'><span className="text-color">Đăng nhập</span></Link>
                        </span>
                    </div>
                </div>
                <div className="header-bot">
                    <Row>
                        <Col span={2}>
                            <span className="header-logo">
                                <Link >
                                    <img className="logo" src="/images/logo.png" alt="logo" />
                                </Link>
                            </span>
                        </Col>
                        <Col xs={1} xl={3}></Col>
                        <Col xs={16} xl={12}>
                            <span className="header-menu">
                                <Space wrap>
                                    <Dropdown overlay={menu}>
                                        <Button className="label-bot">Nam</Button>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <Button className="label-bot">Nữ</Button>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <Button className="label-bot">Trẻ em</Button>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <Button className="label-bot">Thể thao</Button>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <Button className="label-bot">Các nhãn hiệu</Button>
                                    </Dropdown>
                                    {/* <Dropdown overlay={menu}>
                                        <Button className="label-bot">Release Dates</Button>
                                    </Dropdown> */}
                                </Space>
                            </span>
                        </Col>
                        <Col xs={0} xl={2}></Col>
                        <Col span={3}>
                            <span >
                                <Search className="search" placeholder="Tìm kiếm..." />
                            </span>
                        </Col>
                        <Col span={1}>
                            <Link className="wish-list"><AiOutlineHeart /></Link>
                        </Col>
                        <Col span={1}>
                            <Link className="cart"><HiOutlineShoppingBag /></Link>
                        </Col>
                    </Row>

                </div>
            </div>
        </StyleWebHeaderComponent>
    );
};

export default WebHeaderComponent;