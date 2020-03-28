import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import { Container } from './NotFound.s';

export default () => (
  <Container>
    <div>
      <Heading textAlign='center'>Page introuvable</Heading>
    </div>
    <div>
      <Text textAlign='center'>La page n&apos;existe pas</Text>
    </div>
    <div>
      <Link to='/'>
        <Button>Retour sur la page d&apos;accueil</Button>
      </Link>
    </div>
  </Container>
);
