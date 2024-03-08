import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import * as React from 'react';
import ProfileScreen from './src/components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from './src/components/RecipeScreen';
import WelcomeScreen from './src/components/Welcome';
import NotificationScreen from './src/components/Notifications';
import ContactUsScreen from './src/components/ContactUs';
import ProfileDetailScreen from './src/components/Profile';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
       <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' >
        <Stack.Screen name="Recipes" component={RecipesScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Contact" component={ContactUsScreen} />
        <Stack.Screen name="My Profile" component={ProfileDetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}



