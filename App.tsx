import {Navigation} from './src/navigations/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
