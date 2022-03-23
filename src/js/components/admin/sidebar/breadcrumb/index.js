import React, { useState } from "react";
import { Layout, Breadcrumb } from "antd";

const BreadcrumbCustomer = () => {
    return (
        <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbCustomer;