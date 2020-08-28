import React, { FC, useContext } from 'react';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { CHANGE_DRAW_VISIBLE, StoreContext } from './store';
import styled from 'styled-components';

const StyledEdit = styled.div`
    width: 300px;
    height: 100%;
    position: absolute;
    left: 150px;
    top: 0;
`;

const Edit: FC = (props) => {
    const { state, dispatch } = useContext(StoreContext);

    console.log(state.cardVisible);

    return state.cardVisible ? (
        <StyledEdit>
            <Card
                title="Default size card"
                extra={
                    <CloseOutlined
                        onClick={() => dispatch && dispatch({ type: CHANGE_DRAW_VISIBLE })}
                        style={{ fontSize: '16px' }}
                    />
                }
                style={{ width: '100%', height: '100%' }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </StyledEdit>
    ) : null;
};

export default Edit;
