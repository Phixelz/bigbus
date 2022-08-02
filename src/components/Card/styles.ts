import styled, {css} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface CardProps {
  type: 'default' | 'favorites' | 'lines' | 'others';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<CardProps>`
  align-items: center;
  padding: 16px;
  margin: 0 16px 12px;
  border-radius: 4px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary_light};

  ${(props) => props.type === 'default' && css`
  flex-direction: row;
 `}

 ${(props) => props.type === 'lines' && css`
 flex-direction: row-reverse;
 justify-content: space-between;
 `}

 ${(props) => props.type === 'others' && css`
  flex-direction: row-reverse;
  justify-content: space-between;
 `}
`;

export const IconView = styled.View<CardProps>`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 24px;
  align-items: center;
  justify-content: center;

  ${(props) => props.type === 'lines' && css`
  background-color: transparent;
  margin: 0;
 `}

 ${(props) => props.type === 'others' && css`
  background-color: transparent;
  margin: 0;
 `}
`;

export const Icon = styled(Feather)<CardProps>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'lines' && css`
  color: ${({ theme }) => theme.colors.gray};
 `}

 ${(props) => props.type === 'others' && css`
  color: ${({ theme }) => theme.colors.gray};
 `}
`;

export const Star = styled(Feather)<CardProps>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const Content = styled.View<CardProps>`

  ${(props) => props.type === 'lines' && css`
  margin: 0 48px;
 `}

 ${(props) => props.type === 'others' && css`
  margin: 0 48px;
 `}
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_500Medium';
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.subtitle};
`;
