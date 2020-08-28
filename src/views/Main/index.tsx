import React, { FC } from 'react';

import Materials from '../Materials';
import Preview from './Preview';
import Config from './Config';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
`;

const Main: FC = () => {
    return (
        <Wrapper>
            <Materials></Materials>
            <Preview></Preview>
            <Config></Config>
        </Wrapper>
    );
};

export default Main;
