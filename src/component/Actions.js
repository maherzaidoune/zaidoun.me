import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native-web'
import Color from '../utils/Color';

export default class Actions extends PureComponent {
    render() {
        return (
            <View style={[styles.header, {flexDirection: 'row' }]}>
                <Text style={styles.calltoaction} >About</Text>
                <Text style={styles.calltoaction} >Blog</Text>
                <Text style={styles.calltoaction} >Hire me</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 0,
        backgroundColor: Color.main,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    calltoaction: {
        color: Color.white,
        fontSize: 18,
        fontWeight: '500',
        padding: 12
    }
});