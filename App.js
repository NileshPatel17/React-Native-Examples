/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import Router from './src/components/router'

function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  )
}

export default App;
