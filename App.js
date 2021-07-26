import React from 'react';
import Principal from './src/pages/pricipal/Principal';
import Login from './src/pages/login/Login';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Principal" 
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Login" component={Login} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;