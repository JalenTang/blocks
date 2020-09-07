import React, { FC, useState } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';

import styled from 'styled-components';
import { Button } from 'antd';

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
};

const Dustbin: FC = () => {
    const [dropList, setDropList] = useState(() => {
        const initialState: DropItem[] = [];
        return initialState;
    });

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'button',
        hover: (item, monitor: DropTargetMonitor) => {
            // console.log('drog hover', { item, monitor });
        },
        drop: (item, monitor: DropTargetMonitor) => {
            console.log('drog end', { item, monitor });
            setDropList((prev) => {
                return [...prev, { type: 'button' }];
            });
            return { name: 'Dustbin' };
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
        });
    };

    return (
        <div ref={drop} style={{ width: '100%', height: '100%' }}>
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
