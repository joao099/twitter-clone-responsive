import React from 'react';

import { 
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Bottomside,
  Avatar,
  ProfileData,
  ExitIcon,
 } from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Bottomside>
        <Avatar />

        <ProfileData>
          <strong>João Vitor</strong>
          <span>@j4ocruz</span>
        </ProfileData>

        <ExitIcon />
      </Bottomside>
    </Container>
  );
}

export default MenuBar;