import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  }, 
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 3,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
 return( 
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
      <Icon id={icon} size={styles.iconSize}></Icon>
    </IconWrapper>
    <TextInput {...delegated}

    style={{
      '--border-thickness': styles.borderThickness + 'px',
      '--font-size': styles.fontSize + 'px',
      '--height': styles.height + 'px',
      '--width': width + 'px'
    }}


    />
  </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  line-height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;
  width: var(--width);
  font-size: var(--font-size);

  &::placeholder{
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
