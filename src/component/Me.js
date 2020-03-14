import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native-web'
import Color from '../utils/Color';

export default class Me extends Component {
  render() {
    return (
      <View style={styles.info}>
        <Text style={styles.infotext} >
          My name is Maher Zaidoune.{"\n"}
          I'm a mobile application developer from <Text style={[styles.infotext, { color: Color.primary, fontSize: 20, padding: 10 }]} >Tunisia</Text>
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  infotext: {
    color: Color.white,
    fontSize: 18,
    padding: 20,
    fontWeight: '400',
    textAlign: 'center'
  },
  info: {
    flexGrow: 1,
    backgroundColor: Color.main,
    padding: 10
  }
});
