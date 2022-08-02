import React from 'react';
import {
  Container,
  Header,
  Icon,
  Title,
  SectionList,
  Section,
  SectionTitle,
} from './styles';
import { Card } from '../../components/Card';

const FavoritePlaces = [
  {
    id: '1',
    type: 'default',
    icon: 'home',
    title: 'Minha Casa',
    subtitle: 'Clique para editar',
  },
  {
    id: '2',
    type: 'default',
    icon: 'briefcase',
    title: 'Trabalho',
    subtitle: 'Clique para editar',
  },
];

const FavoriteLines = [
  {
    id: '3',
    type: 'lines',
    icon: 'plus',
    title: 'Favoritar linha',
    subtitle: 'Clique para favoritar uma linha',
  },
];

const Others = [
  {
    id: '4',
    type: 'others',
    icon: 'plus',
    title: 'Adicionar Local',
    subtitle: 'Clique para adicionar um local',
  },
];

export function Favorites() {
  return (
    <Container>
      <Header>
        <Icon name='arrow-left' />
        <Title>Favoritos</Title>
        <Icon name='search' />
      </Header>

      <SectionList
        sections={[
          {
            sectiontitle: 'Locais Favoritos',
            data: FavoritePlaces,
          },
          {
            sectiontitle: 'Linhas favoritas',
            data: FavoriteLines,
          },
          {
            sectiontitle: 'Outros',
            data: Others,
          },
        ]}
        renderItem={({ item }) => (
          <Card
            icon={item.icon}
            type={item.type}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Section>
            <SectionTitle>{section.sectiontitle}</SectionTitle>
          </Section>
        )}
      />
    </Container>
  );
}
