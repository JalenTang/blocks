import React from 'react';
import styled from 'styled-components';

interface StyledSvgProps {
    size?: number;
    color?: string;
}

interface IconProps extends StyledSvgProps {
    icon: string;
    className?: string;
}

const StyledSvg = styled.svg<StyledSvgProps>`
    font-size: ${(props) => (props.size || 16) + 'px'};
    color: ${(props) => props.color || '#fff'};
`;

function Icon(props: IconProps) {
    const { icon, className, size, color } = props;
    return (
        <StyledSvg size={size} color={color} className={`icon${className ? ' ' + className : ''}`} aria-hidden="true">
            <use xlinkHref={'#icon-' + icon}></use>
        </StyledSvg>
    );
}

export default Icon;
