import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';

import {
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    ConnectDragSource,
    ConnectDropTarget,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
} from 'react-dnd';
import { List, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export interface ImageProps {
    name: string;
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}

const ImageArea: FC<ImageProps> = ({ name, isDragging, connectDragSource }) => {
    const opacity = isDragging ? 0.4 : 1;

    const [fileList, setFileList] = useState([]);

    const handleBeforeUpload = (file: File) => {
        console.log(file);
        return false;
    };

    const handlePreview = () => {};

    const handleChange = ({ file, fileList, event }: any) => {
        // console.log(file);
        // setFileList(fileList);
    };

    const uploadButton = (
        <Button type="default" icon={<UploadOutlined />}>
            Upload
        </Button>
    );

    return (
        <div ref={connectDragSource} style={{ opacity }}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                fileList={fileList}
                beforeUpload={handleBeforeUpload}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 4 ? null : uploadButton}
            </Upload>
        </div>
    );
};

const DraggableImage = DragSource(
    'image',
    {
        beginDrag: (props: ImageProps) => ({ name: props.name }),
        endDrag(props: ImageProps, monitor: DragSourceMonitor) {
            const item = monitor.getItem();
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
    },
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(ImageArea);

const EditImage: FC = (props) => {
    return <DraggableImage name="image" />;
};

export default EditImage;
