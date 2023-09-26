import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuthState} from '../context/AuthContext';
import {Main} from '../screens/Main';
import {Login} from '../screens/public/Login';
import {Loader} from '../screens/Loader';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {state, isLoading} = useAuthState();

  console.debug(state, isLoading);

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Loader} />
      </Stack.Navigator>
    );
  }

  if (!state) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={Login} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};
