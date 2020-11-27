import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  EditButton ,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>João Vitor</h1>
        <h2>@j4ocruz</h2>

        <p>
          Developer at <a href="https://stefanini.com/pt-br">@Stefanini</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junho de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>103 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;