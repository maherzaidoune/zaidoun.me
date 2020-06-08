import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native-web'
import Color from '../utils/Color';
import { Font } from '../Shared/Font';

export default class Me extends Component {
  render() {
    return (
      <View style={styles.info}>
        <Text style={styles.infotext} >
          My name is Maher Zaidoune.{"\n"}
          I'm a mobile application developer from <Text style={[styles.infotext, { color: Color.primary, fontSize: 20, padding: 5 }]} >Tunisia</Text>
          {"\n"} I live in <Text style={[styles.infotext, { color: Color.primary, fontSize: 20, padding: 5 }]} >Sousse</Text> and work at <Text style={[styles.infotext, { color: Color.primary, fontSize: 20, padding: 5 }]} >Satoripop</Text> .
          {"\n"} I am a fan of technology, design, and music.
          
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  infotext: {
    color: Color.white,
    fontFamily: Font.bold,
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  }
});
