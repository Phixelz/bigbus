import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 56px 16px 0;
`;

export const Title = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const Grettings = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary_dark};
`;
