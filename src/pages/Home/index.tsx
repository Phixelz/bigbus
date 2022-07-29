import React from 'react';
import MapView from 'react-native-maps';
import {
  Container,
  Content,
  Bell,
  Title,
  Localization,
  Icon,
  Local,
  Header,
  TextInput,
} from './styles';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <Header>
        <Content>
          <Title>Olá, Bigger!</Title>
          <Bell name='bell' />
        </Content>

        <Localization>
          <Icon name='map-pin' />
          <Local>Av. Getúlio Vargas, 500</Local>
        </Localization>

        <TextInput
          placeholder='Para onde você quer ir?'
          placeholderTextColor='#BFB1DE'
        />
        <Button 
          type='primary' 
          title='Buscar Linhas' 
        />
      </Header>

      <MapView
        style={{ flex: 1 }}
          region={{
          latitude: -19.940998,
          longitude: -43.940933,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
}
