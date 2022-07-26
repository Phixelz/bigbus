import React from 'react';
import {
  Container,
  Title,
  Grettings,
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>Olá, Bigger!</Title>
      <Grettings>Bem-vindo ao Bigbus</Grettings>
    </Container>
  );
}