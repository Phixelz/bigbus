import React from 'react';
import {
  Container,
  Title,
  SubTitle,
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>Olá, Bigger!</Title>
      <SubTitle>Bem-vindo ao Bigbus</SubTitle>
    </Container>
  );
}