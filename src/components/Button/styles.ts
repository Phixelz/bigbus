import styled, {css} from "styled-components/native";

interface ButtonProps {
  type: "default" | "primary" | "disabled" | "link";
}

export const CustomButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9,
})<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 4px;


  ${(props) => props.type === 'default' && css`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
 `}

 ${(props) => props.type === 'disabled' && css`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  opacity: 0.5;
  margin: 24px 0 0;
 `}

 ${(props) => props.type === 'link' && css`
  padding: 16px;
  margin: 12px;
 `}

 ${(props) => props.type === 'primary' && css`
 background-color: ${({ theme }) => theme.colors.success};
 padding: 14px;
 margin: 16px 0 24px;
 `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.white};

  ${(props) => props.type === 'link' && css`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
 `}
`;
