import React from 'react';
import { render } from '@testing-library/react-native';
import { Poligon } from '@/components';

describe('<Poligon />', () => {
  test('Renders cube', () => {
    const { getByTestId } = render(<Poligon type="cube" color="#FFF" rotation={0} />);

    const poligon = getByTestId('poligon');
    expect(poligon).toBeTruthy();
  });

  test('Renders dodecaedro', () => {
    const { getByTestId } = render(<Poligon type="dodecaedro" color="#FFF" rotation={0} />);

    const poligon = getByTestId('poligon');
    expect(poligon).toBeTruthy();
  });

  test('Renders cone', () => {
    const { getByTestId } = render(<Poligon type="cone" color="#FFF" rotation={0} />);

    const poligon = getByTestId('poligon');
    expect(poligon).toBeTruthy();
  });

  test('Change polygon color', () => {
    const { getByTestId, rerender } = render(<Poligon type="cube" color="#FFF" rotation={0} />);

    let poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.color).toBe('#FFF');

    rerender(<Poligon type="cube" color="#000" rotation={0} />);

    poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.color).toBe('#000');
  });

  test('Change polygon rotation', () => {
    const { getByTestId, rerender } = render(<Poligon type="cube" color="#FFF" rotation={50} />);

    let poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.rotation).toBe(50);

    rerender(<Poligon type="cube" color="#FFF" rotation={100} />);

    poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.rotation).toBe(100);
  });

  test('Change polygon type', () => {
    const { getByTestId, rerender } = render(<Poligon type="cube" color="#FFF" rotation={0} />);

    let poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.type).toBe('cube');

    rerender(<Poligon type="dodecaedro" color="#FFF" rotation={0} />);

    poligon = getByTestId('poligon');

    expect(poligon.props.children.props.children[2].props.type).toBe('dodecaedro');
  });
});
