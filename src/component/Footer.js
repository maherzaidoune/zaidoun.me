import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Color from '../utils/Color';
import { TouchableOpacity, Linking } from 'react-native-web';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.seperator}></View>
                <View style={styles.footerInfo}>
                    <Text style={styles.footerDesc}>Buit with React Native Web</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/maher.zaidoune')}>
                            <Image
                                style={{ width: 30, height: 30, marginLeft: 5, marginRight: 5 }}
                                source={{ uri: 'https://img.icons8.com/doodle/192/000000/facebook-new.png' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/maherzaidoune')}>
                            <Image
                                style={{ width: 30, height: 30, marginLeft: 5, marginRight: 5 }}
                                source={{ uri: 'https://img.icons8.com/doodle/192/000000/github--v1.png' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/zaidounemaher')}>
                            <Image
                                style={{ width: 30, height: 30, marginLeft: 5, marginRight: 5 }}
                                source={{ uri: 'https://img.icons8.com/doodle/192/000000/linkedin.png' }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '40vw',
        alignItems: 'center',
    },
    seperator: {
        width: '40vw',
        height: 1,
        backgroundColor: Color.white,
        marginTop: 10,
    },
    footerInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    footerDesc: {
        color: Color.white,
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center'
    }
});