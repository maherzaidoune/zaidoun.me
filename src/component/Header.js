import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native-web'
import Color from '../utils/Color';

export default class Header extends PureComponent {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title} >Zaidoun.me</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: Color.main,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 20,
    },
    title: {
      color: Color.main,
      padding: 20,
      backgroundColor: Color.primary,
      fontSize: 32,
      fontWeight: '700'
    }
  });