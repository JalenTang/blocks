import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

import Materials from './Materials';
import Preview from './Preview';
import Config from './Config';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f0f2f5;
`;

const Main: FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Wrapper>
                <Materials></Materials>
                <Preview></Preview>
                <Config></Config>
            </Wrapper>
        </DndProvider>
    );
};

export default Main;
