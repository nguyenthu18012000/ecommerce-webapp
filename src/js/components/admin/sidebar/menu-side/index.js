import React from 'react';
import { Menu } from "antd";
import {
    UserOutlined,
    TagsOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;
const menu = [
    {
        key: "tag-manager",
        title: "Tag manager",
        icon: <TagsOutlined />,
        subMenu: [],
    },
    {
        key: "product-manager",
        title: "Product manager",
        icon: <ShoppingOutlined />,
        subMenu: [
            {
                key: "admin/add-product",
                title: "Add product",
            },
            {
                key: "/admin/list-product",
                title: "List product",
            }
        ],
    },
    {
        key: "users",
        title: "Users",
        icon: <UserOutlined />,
        subMenu: [
            {
                key: "userMs",
                title: "UsersM",
            },
        ],
    },
];

const MenuItem = (item) => {
    return (
        <Menu.Item
            key={item.key}
            icon={item.icon}    
        >
            <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
    )
}

const MenuSide = () => {
    const location = useLocation();
    return (
        <Menu theme="dark"  mode="inline" >
            {menu.map((item) =>
                item.subMenu && item.subMenu.length > 0 ? (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {item.subMenu.map((item) => MenuItem(item))}
                    </SubMenu>
                ) : (
                    MenuItem(item)
                )
            )}
        </Menu>
    );
};


export default MenuSide;