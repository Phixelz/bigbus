import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px 16px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.View`
  margin: 16px 16px 8px;
`;

export const SectionTitle = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary_dark};
`;

export const SectionList = styled.SectionList`
`;
