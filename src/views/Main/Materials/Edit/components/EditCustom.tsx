import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import styled from 'styled-components';

import { RootState } from '@/store';
import { changeDragType } from '@/store/modules/drag-drop/actions';

export interface BottomBarBase {
    type: string;
    subType: string;
    options?: {
        [optionsKey: string]: any;
    };
}

const StyledNormalBottomBar = styled.div<BottomBarBase>`
    width: 375px;
    height: 60px;
    margin: 0 auto;
    background-color: red;
    transform-origin: 0 0;
    transform: scale(0.5);
`;

const CustomBottomBar: FC<BottomBarBase> = ({ type, subType, options }) => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const [, bottomBarDrager] = useDrag({
        item: { type, subType },
        begin: (monitor: DragSourceMonitor) => {
            console.log('drag begin', { type, monitor });
            dispatch(changeDragType({ type, subType }));
        },
        end: (item, monitor: DragSourceMonitor) => {
            console.log('drag end', { item, monitor });
        },
    });

    return (
        <div ref={bottomBarDrager} style={{}}>
            <StyledNormalBottomBar {...{ type, subType, options }} />
        </div>
    );
};

const EditCustom: FC = () => {
    return (
        <>
            <p>底部Bar：</p>
            <CustomBottomBar type="custom" subType="bottomBar" options={{ backgroundColor: 'red' }} />
        </>
    );
};

export default EditCustom;
