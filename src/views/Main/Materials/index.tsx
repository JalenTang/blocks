import React, { FC } from 'react';
import styled from 'styled-components';

import MaterialsBar from './Bar';
import MaterialsEdit from './Edit';

const Wrapper = styled.div`
    width: 150px;
    height: 75%;
    padding: 10px 0;
    position: relative;
    flex: 0 0 150px;
`;

const Materials: FC = (props) => {
    return (
        <Wrapper>
            <MaterialsBar></MaterialsBar>
            <MaterialsEdit></MaterialsEdit>
        </Wrapper>
    );
};

export default Materials;
