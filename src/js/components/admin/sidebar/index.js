/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Layout } from "antd";
import MenuSide from "./menu-side";
import BreadcrumbCustomer from "./breadcrumb";
import { useRouteMatch } from "react-router-dom";
import AddProduct from "../../../pages/admin/productManage/addProduct";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
    let { path, url } = useRouteMatch();
    console.log(path)

    const [data, setData] = useState({
        currentPath: window.location.pathname.split("/").at(2),
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
                            style={{ padding: 24, minHeight: "100vh" }}
                        >
                            <Switch>
                                <Route exact path={path}>
                                    <h3>Please select a topic.</h3>
                                </Route>
                                <Route path={`${path}/add-product`}>
                                    <h3>Please select a topic sadsad.</h3>
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
