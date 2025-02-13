import React from 'react';
import { Container } from './styles';
import { Poligon, Title } from '@/components';
import { poligons } from './constants';

export default function Home() {
  return (
    <Container>
      <Title>Poligonos</Title>
      {poligons.map((poligon) => (
        <Poligon key={poligon} type={poligon} color="#ff0000" rotation={0.2} />
      ))}
    </Container>
  );
}
