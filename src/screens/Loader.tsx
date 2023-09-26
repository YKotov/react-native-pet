import {ActivityIndicator} from 'react-native';
import {Container} from '../templates/Container';

export const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
};
