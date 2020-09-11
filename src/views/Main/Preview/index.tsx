import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDrop, DropTargetMonitor } from 'react-dnd';

import styled from 'styled-components';
import { Button, message } from 'antd';

import { RootState } from '@/store';

const Wrapper = styled.div`
    flex: 1;
`;

const MainIn = styled.div`
    width: 375px;
    height: 667px;
    border: 1px solid red;
    margin: 0 auto;
`;

type DropItem = {
    type: string;
    subType?: string;
    options?: any;
};

const Dustbin: FC = () => {
    const state = useSelector((state: RootState) => state);
    console.log(state.dragDrop.type);

    const [dropList, setDropList] = useState(() => {
        const initialState: DropItem[] = [];
        return initialState;
    });

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ['button', 'custom'],
        hover: (item, monitor: DropTargetMonitor) => {
            // console.log('drog hover', { item, monitor });
        },
        drop: (item, monitor: DropTargetMonitor) => {
            console.log('drog end', { item, monitor });
            setDropList((prev) => {
                return [...prev, { ...state.dragDrop }];
            });
            return { name: 'Dustbin' };
        },
        canDrop: (item: any, monitor: DropTargetMonitor): boolean => {
            console.log(item);
            if (item.subType === 'bottomBar' && dropList.find((item) => item.subType === 'bottomBar')) {
                // message.info('底部栏最多显示一个');
                return false;
            }
            return true;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver;

    const DropComponents = (props: any) => {
        return props.list.map((item: any) => {
            if (item.type === 'button') {
                return (
                    <Button key={item.id} type="primary" block={true} size="middle">
                        常规按钮
                    </Button>
                );
            }
            if (item.type === 'custom' && item.subType === 'bottomBar') {
                return (
                    <div
                        style={{
                            position: 'absolute',
                            width: '375px',
                            height: '60px',
                            left: 0,
                            bottom: 0,
                            backgroundColor: 'red',
                        }}
                    >
                        自定义底部
                    </div>
                );
            }
        });
    };

    return (
        <div ref={drop} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <DropComponents list={dropList} />
        </div>
    );
};

const Preview: FC = (props) => {
    return (
        <Wrapper>
            <MainIn>
                <Dustbin />
            </MainIn>
        </Wrapper>
    );
};

export default Preview;
