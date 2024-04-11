import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import * as React from 'react';
import ProfileScreen from './src/components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from './src/components/RecipeScreen';
import WelcomeScreen from './src/components/Welcome';
import LoginScreen from './src/components/LoginScreen';
import NotificationScreen from './src/components/Notifications';
import ContactUsScreen from './src/components/ContactUs';
import ProfileDetailScreen from './src/components/Profile';


function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    
       <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name="Recipes" component={RecipesScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Contact" component={ContactUsScreen} />
        <Stack.Screen name="My Profile" component={ProfileDetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );}

    function HomeTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Recipes" component={RecipesScreen} />
          <Tab.Screen name="Notifications" component={NotificationScreen} />
          <Tab.Screen name="Contact" component={ContactUsScreen} />
          <Tab.Screen name="Profile" component={ProfileDetailScreen} />
        </Tab.Navigator>
    
  );
}

export default App;

