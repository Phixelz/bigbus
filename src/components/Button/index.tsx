import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CustomButton, ButtonText, } from '../Button/styles';

interface ButtonProps extends TouchableOpacityProps {
  type: 'default' | 'primary' | 'disabled' | 'simple';
  title: string;
}

export function Button({ type, title, ...rest }: ButtonProps) {
  return (
    <CustomButton type={type} {...rest}>
      <ButtonText type={type}>{title}</ButtonText>
    </CustomButton>
  );
}
