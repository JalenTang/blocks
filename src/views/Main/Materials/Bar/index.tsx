import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { PictureOutlined, PoweroffOutlined } from '@ant-design/icons';

import { Menu } from 'antd';

import { changeMenu, changeCardVisible } from '@/store/modules/app/actions';
import { RootState } from '@/store';

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
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    console.log('state', state);

    const handleMenuClick = ({ key }: { key: any }) => {
        console.log(key);
        dispatch(changeMenu({ key }));
        dispatch(changeCardVisible({ cardVisible: true }));
    };

    const menuList = [
        {
            key: 'button',
            icon: <PoweroffOutlined style={{ fontSize: '16px', color: '#240E49' }} />,
            text: '按钮组件',
        },
        {
            key: 'image',
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
            <Menu onClick={handleMenuClick} selectedKeys={state.app.selectedKeys} style={{ width: 150 }}>
                {menuList.map((item) => {
                    return (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.text}
                        </Menu.Item>
                    );
                })}
            </Menu>
        </StyledBar>
    );
};

export default Bar;
