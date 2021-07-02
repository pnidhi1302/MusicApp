import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from './src';

const headerStyles = {
    title: 'Music App',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
    },
}

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerStyles}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={headerStyles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
