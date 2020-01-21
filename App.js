/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view'
import { useSafeArea, SafeAreaProvider } from 'react-native-safe-area-view';

function App() {
  const insets = useSafeArea();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{Platform.OS === 'ios' ? 'ios' : 'Android'}</Text>
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          {JSON.stringify(insets, null, 4)}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent:'center',
    alignItems: 'center'
  }
})
export default function AppContainer() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  )
}
