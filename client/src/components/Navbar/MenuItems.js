import React from 'react';
import { Menu } from 'antd';
import Login from '../Auth/Login';
import RegisterLayout from '../Auth/RegisterLayout';
import ForYou from './ForYou';
const ZigLogo = require('../../images/ZigLogo.png');

const MenuItems = (props) => {
    return (
        <div>
            <Menu mode={props.mode}>
                    <Menu.Item><ForYou /></Menu.Item>
                    <Menu.Item><img src={ZigLogo} alt="ZigLogo" style={{width: "32px", height: "32px"}} />
                        Instant Apply
                    </Menu.Item>
                    <Menu.Item>Pricing</Menu.Item>
                    <Menu.Item>About us</Menu.Item>
                    <Menu.Item key="register"><RegisterLayout/></Menu.Item>
                    <Menu.Item key="login"><Login/></Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuItems;
