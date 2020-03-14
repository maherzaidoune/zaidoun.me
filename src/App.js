import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import Color from './utils/Color';
import Header from './component/Header';
import Actions from './component/Actions';
import Me from './component/Me';

function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Actions/>
      <Me/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.main,
    padding: 20,
    height:"100vh"
  },
  header: {
    flex: 0,
    backgroundColor: Color.main,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: Color.white,
    padding: 15,
    backgroundColor: Color.primary,
    fontSize: 26,
    fontWeight: '600'
  },
  calltoaction: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
    padding: 12
  },
  infotext: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  info: {
    flexGrow: 1,
    backgroundColor: Color.main,
    padding: 10
  }
});

export default App;
