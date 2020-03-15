import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native-web'
import Color from '../utils/Color';

export default class Actions extends PureComponent {
    render() {
        return (
            <View>
                <View style={[styles.header, { flexDirection: 'row' }]}>
                    <TouchableOpacity>
                        <Text style={styles.calltoaction} >About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.calltoaction} >Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.calltoaction} >Hire me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.seperator}></View>
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
    },
    seperator: {
        width: '40vw',
        height: 1,
        backgroundColor: Color.white,
        marginTop: 10,
        marginBottom: 10
    }
});