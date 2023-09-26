import React = require('react');
import {Button, Text} from 'react-native';
import {useAuthState} from '../context/AuthContext';
import {Container} from '../templates/Container';
import ThreeDModelViewer from '../components/Models/Model';

export const Main = () => {
  const {setAuthState} = useAuthState();
  const updateAuthState = () => {
    setAuthState(false);
  };

  return (
    <Container>
      <Text>Hello</Text>

      <ThreeDModelViewer></ThreeDModelViewer>

      <Button
        onPress={updateAuthState}
        title="Log out"
        color="#841584"
        accessibilityLabel="Log out"
      />
    </Container>
  );
};
