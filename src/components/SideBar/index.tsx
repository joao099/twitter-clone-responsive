import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
              name="Luiz Batanero"
              nickname="@luizbatanero"
            />,
            <FollowSuggestion 
              name="Luke Morales"
              nickname="@lukemorales"
            />,
            <FollowSuggestion 
              name="Camila Magalghães"
              nickname="@camilaamgl"
            />,
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;