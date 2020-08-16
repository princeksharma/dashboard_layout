import React from 'react';
import { Menu } from 'antd';
import Login from '../Auth/Login';
import RegisterLayout from '../Auth/RegisterLayout';

const MenuItems = (props) => {
    return (
        <div>
            <Menu mode={props.mode}>
                    <Menu.Item>For you</Menu.Item>
                    <Menu.Item>Instant Apply</Menu.Item>
                    <Menu.Item>Pricing</Menu.Item>
                    <Menu.Item>About us</Menu.Item>
                    <Menu.Item key="register"><RegisterLayout/></Menu.Item>
                    <Menu.Item key="login"><Login/></Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuItems;
