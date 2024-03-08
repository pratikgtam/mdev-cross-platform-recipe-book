
// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from '../components/RecipeScreen';
import ProfileScreen from '../components/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
