jest.mock('@react-three/fiber/native', () => {
  const react = require('react-native');

  const React = require('react');
  const Canvas = ({ children }) => <react.View>{children}</react.View>;
  return { Canvas };
});

jest.mock('@react-three/drei/native', () => {
  const react = require('react-native');

  const React = require('react');
  const OrbitControls = (props) => <react.View />;
  return { OrbitControls };
});
