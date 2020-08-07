import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { AppLoading } from 'expo';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import Landing from './src/pages/Landing';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <>
      <StatusBar style="light" />
      <Landing />
    </>
  );
};

export default App;
