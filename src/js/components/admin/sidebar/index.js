/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Layout } from "antd";
import MenuSide from "./menu-side";
import BreadcrumbCustomer from "./breadcrumb";
import AddProduct from "../../../pages/admin/productManage/addProduct";
import ListProduct from "../../../pages/admin/productManage/listProduct";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {

    const [data, setData] = useState({
        collapsed: false,
    });

    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setData({ collapsed });
    };

    return (
        <div>
            <Layout style={{ height: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={data.collapsed}
                    onCollapse={onCollapse}
                >
                    <div className="logo" />
                    <MenuSide />
                </Sider>
                <Layout className="site-layout" style={{ overflowY: "auto" }}>
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ margin: "0 16px" }}>
                        <BreadcrumbCustomer />
                        <div
                            className="site-layout-background"
                            style={{ padding: 14, minHeight: "100vh" }}
                        >
                            <Switch>
                                <Route path='/admin/add-product' >
                                    <AddProduct/>
                                </Route>
                                <Route path='/admin/list-product' >
                                    <ListProduct/>
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer> */}
                </Layout>
            </Layout>
        </div>

    );
};


export default SideBar;
