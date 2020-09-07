import React, { FC } from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

import { Button } from 'antd';

export type DragOptions = {
    [optionsKey: string]: any;
};
export interface ButtonProps {
    type: string;
    options?: DragOptions;
    //     isDragging: boolean;
    //     connectDragSource: ConnectDragSource;
}

const DraggableButton: FC<ButtonProps> = ({ type, options }) => {
    const [, buttonDrager] = useDrag({
        item: { type, options },
        begin: (monitor: DragSourceMonitor) => {
            console.log('drag begin', { monitor });

            // return { type: 'button', };
        },
        end: (item, monitor: DragSourceMonitor) => {
            console.log('drag end', { item, monitor });
        },
    });
    return (
        <div ref={buttonDrager}>
            <Button type="primary" block={true} size="middle">
                常规按钮
            </Button>
        </div>
    );
};

const EditButton: FC = (props) => {
    const options = {
        width: '100px',
    };
    return <DraggableButton type="button" options={options} />;
};

export default EditButton;
