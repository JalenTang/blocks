import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import EditButton from './components/EditButton';
import EditImage from './components/EditImage';

import { changeCardVisible } from '@/store/modules/app/actions';
import { RootState } from '@/store';
import { MaterialsType } from '../type';

const StyledEdit = styled.div`
    width: 300px;
    height: 100%;
    position: absolute;
    left: 150px;
    top: 0;
`;

const setTitle = (key: string = 'default'): string => {
    const titleMap: any = {
        button: '按钮组件',
        image: '图片组件',
        input: '输入框组件',
        default: '按钮组件',
    };

    return titleMap[key];
};

const Edit: FC = (props) => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(changeCardVisible({ cardVisible: false }));
    };

    const selectedKey: string = state.app.selectedKeys[0];

    const editTitle = setTitle(selectedKey);

    let edit;
    if (selectedKey === MaterialsType.BUTTON) {
        edit = <EditButton />;
    } else if (selectedKey === MaterialsType.IMAGE) {
        edit = <EditImage />;
    }

    return state.app.cardVisible ? (
        <StyledEdit>
            <Card
                title={editTitle}
                extra={<CloseOutlined onClick={handleClose} style={{ fontSize: '16px' }} />}
                style={{ width: '100%', height: '100%' }}
            >
                {edit}
            </Card>
        </StyledEdit>
    ) : null;
};

export default Edit;
