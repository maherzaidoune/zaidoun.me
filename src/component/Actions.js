import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native-web'
import Color from '../utils/Color';
import { Pages } from '../navigation/Pages';

export default class Actions extends PureComponent {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={[styles.header, { flexDirection: 'row' }]}>
                    <TouchableOpacity onPress={() => this.props.updateRoute(Pages.About)}>
                        <Text style={styles.calltoaction} >About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.updateRoute(Pages.Blog)}>
                        <Text style={styles.calltoaction} >Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.updateRoute(Pages.Career)}>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
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