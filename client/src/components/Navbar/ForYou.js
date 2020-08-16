import React from 'react';
import { Menu, Dropdown } from 'antd';
import {DownOutlined} from '@ant-design/icons';

const items = (
    <Menu>
        <Menu.Item>
            <a href="/">Find matching internships</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/">Hire right talent</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/">Work from home</a>
        </Menu.Item>
    </Menu>
)

const ForYou = () => {
    return (
        <div>
            <Dropdown overlay={items} placement="bottomCenter" arrow>
                <span>For you <DownOutlined/></span> 
            </Dropdown>  
        </div>
    )
}

export default ForYou;



