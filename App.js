/* import { StatusBar } from 'expo-status-bar'; */
import React , { useState } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import MealsNavigator from './navigation/MealsNavigation'
import Colors from './constants/Colors'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={ () => setFontLoaded(true) }
            onError={ (err) => console.log(err)}
          />
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor={Colors.darkerColor} />
    <MealsNavigator />
    </>
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
