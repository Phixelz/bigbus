import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Title,
  SubTitle,
  IconView,
  Icon,
  Content,
  Star,
} from '../Card/styles';

interface CardProps extends TouchableOpacityProps {
  type: 'default' | 'favorites' | 'lines' | 'others';
  title: string;
  subtitle: string;
  icon: string;
}

export function Card({ type, icon, title, subtitle, ...rest }: CardProps) {
  return (
    <Container type={type} {...rest}>
      <IconView type={type}>
        <Icon type={type} name={icon} />
      </IconView>

      <Content type={type}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
      <Star type={type} />
    </Container>
  );
}
