import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 56px 16px 0;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.secondary_dark};
`;

export const Description = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary_dark};
  margin-bottom: 24px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Label = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary_dark};
  margin: 16px 0 0;
`;

export const TextInput = styled.TextInput`
  font-family: "Poppins_400Regular";
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  margin: 4px 0;
  border-radius: 4px;
`;
