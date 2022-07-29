import React from "react";
import {
  Container,
  Title,
  Grettings,
  Wrapper,
  Label,
  TextInput,
} from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Title>Olá, Bigger!</Title>
      <Grettings>Bem-vindo ao Bigbus</Grettings>

      <Wrapper>
        <Label>E-mail</Label>
        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor="#8F8F8F"
        />

        <Label>Senha</Label>
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#8F8F8F"
        />
        <Button
          disabled={true}
          type="disabled"
          title="Entrar"
        />
        <Button
          type="link"
          title="Entrar sem cadastro"
        />
      </Wrapper>

    </Container>
  );
}
