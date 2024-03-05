import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import * as React from 'react';
import ProfileScreen from './src/components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from './src/components/RecipeScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
       <NavigationContainer>
      <Stack.Navigator initialRouteName='Recipes' >
        <Stack.Screen name="Recipes" component={RecipesScreen}
        
        
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}



