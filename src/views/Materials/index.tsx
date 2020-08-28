import React, { FC, useState, useReducer } from 'react';
import styled from 'styled-components';

import MaterialsBar from './Bar';
import MaterialsEdit from './Edit';

import { ReducerType, initialState, reducer, StoreContext } from './store';

const Wrapper = styled.div`
    width: 150px;
    height: 75%;
    padding: 10px 0;
    position: fixed;
    left: 0;
    top: 10%;
`;

const Materials: FC = (props) => {
    const [state, dispatch] = useReducer<ReducerType>(reducer, initialState);

    return (
        <Wrapper>
            <StoreContext.Provider value={{ state, dispatch }}>
                <MaterialsBar></MaterialsBar>
                <MaterialsEdit></MaterialsEdit>
            </StoreContext.Provider>
        </Wrapper>
    );
};

export default Materials;
