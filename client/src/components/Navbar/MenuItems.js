import React from 'react';
import { Menu } from 'antd';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const MenuItems = (props) => {
    return (
        <div>
            <Menu mode={props.mode}>
                    <Menu.Item>For you</Menu.Item>
                    <Menu.Item>Instant Apply</Menu.Item>
                    <Menu.Item>Pricing</Menu.Item>
                    <Menu.Item>About us</Menu.Item>
                    <Menu.Item key="register"><Register/></Menu.Item>
                    <Menu.Item key="login"><Login/></Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuItems;
