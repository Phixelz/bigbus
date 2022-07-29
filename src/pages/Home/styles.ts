import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 64px 16px 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between ;
`;

export const Bell = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const Title = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 22px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const Icon = styled(Feather)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary_light};
  margin-right: 8px;
`;

export const Localization = styled.View`
    flex-direction: row;
    margin-bottom: 24px;
`;

export const Local = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const TextInput = styled.TextInput`
  font-size: 14px;
  font-family: "Poppins_400Regular";
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
`;




