import React, { PureComponent } from 'react'
import { View, StyleSheet, Image } from 'react-native-web'
import Color from '../utils/Color';

export default class Header extends PureComponent {
    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../img/zaid.jpeg')} style={{
                    height: 150,
                    width: 150,
                    borderRadius: 75
                }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: Color.main,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
      margin: 10,
    }
  });