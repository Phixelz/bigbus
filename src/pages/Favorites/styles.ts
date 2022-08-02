import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 28px 16px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.View`
  margin: 32px 16px 8px;
`;

export const SectionTitle = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary_dark};
`;

export const SectionList = styled.SectionList`
`;
