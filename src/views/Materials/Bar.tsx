import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { PictureOutlined } from '@ant-design/icons';

import { CHANGE_DRAW_VISIBLE, StoreContext } from './store';

import { Menu } from 'antd';

const StyledBar = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    background: #fff;
    border-radius: 0 10px 10px 0;
    box-shadow: 0 2px 4px 1px rgba(40, 120, 255, 0.08), 0 0 6px 1px rgba(0, 0, 0, 0.08);
`;

const Bar: FC = (props) => {
    const { state, dispatch } = useContext(StoreContext);

    console.log(state);

    const handleMenuClick = (params: Object) => {
        console.log(params);
        // const { item, key, keyPath, domEvent } = params
        // console.log({ item, key, keyPath, domEvent });
        dispatch && dispatch({ type: CHANGE_DRAW_VISIBLE });
    };

    const menuList = [
        {
            key: 'images',
            icon: <PictureOutlined style={{ fontSize: '16px', color: '#240E49' }} />,
            text: '图片组件',
        },
        {
            key: 'input',
            icon: <PictureOutlined style={{ fontSize: '16px', color: '#240E49' }} />,
            text: '文本组件',
        },
    ];

    return (
        <StyledBar>
            <Menu onClick={handleMenuClick} selectedKeys={state.selectedKeys} style={{ width: 150 }}>
                {menuList.map((item) => {
                    return (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.text}
                        </Menu.Item>
                    );
                })}
                {/* <Menu.Item key="images" icon={<PictureOutlined style={{ fontSize: '16px', color: '#240E49' }} />}>
                        图片
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Item
                        key="components"
                        icon={<PictureOutlined style={{ fontSize: '16px', color: '#240E49' }} />}
                    >
                        输入组件
                    </Menu.Item> */}
            </Menu>
        </StyledBar>
    );
};

export default Bar;
