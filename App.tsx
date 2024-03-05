import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import * as React from 'react';
import ProfileScreen from './src/components/ProfileScreen';


export default function App() {
  return (
    <View style={styles.container}>
        < ProfileScreen></ProfileScreen>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
