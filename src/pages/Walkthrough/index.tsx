import React from 'react';
import {
  Container,
  Title,
  Description,
  Wrapper,
  Label,
  TextInput,
} from './styles';
import { Button } from '../../components/Button';

export function Walkthrough() {
  return (
    <Container>
      <Title>Vamos começar!</Title>
      <Description>
        Favorite um endereço primário utilizado com frequência
      </Description>

      <Wrapper>
        <Label>Endereço 1</Label>
        <TextInput
          placeholder='Ex: Av. do Contorno'
          placeholderTextColor='#8F8F8F'
        />

        <Label>Escolha um nome</Label>
        <TextInput
          placeholder='Ex: Casa, trabalho'
          placeholderTextColor='#8F8F8F'
        />

        <Button 
          disabled={true} 
          type='disabled' 
          title='Avançar' 
        />
        
        <Button 
          type='link' 
          title='Pular' 
        />
      </Wrapper>
    </Container>
  );
}
