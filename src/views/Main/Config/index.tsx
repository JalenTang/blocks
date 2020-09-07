import React, { FC } from 'react';
import styled from 'styled-components';
// import Gen from '../../utils/index';

const Wrapper = styled.div`
    flex: 0 0 300px;
    border: 1px solid green;
`;

const Config: FC = (props) => {
    return (
        <Wrapper>
            <div>配置</div>
        </Wrapper>
    );
};

export default Config;
