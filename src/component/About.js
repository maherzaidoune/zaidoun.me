import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Color from '../utils/Color';
import { Font } from '../Shared/Font';


const me = [
        "Bachelor degree from ESSTHS ",
        "Studying Software engineering at EPI",
        "Joined GitHub February 8, 2015 😄",
        "Active open source community contributor since 2017",
        "I use Libgdx to make TaniEscape, a game made just for fun  😎 😎 ",
        "RRDL 😍 ",
        "Football fan, Mkacha5  🇩🇪",
        "I don't like to read, but I do listen to a lot of audiobooks, a fan of kitab sawti app",
]
export default class About extends PureComponent {

    renderMe = ({item}) => {
        return(
<View style={{
            margin: 10,
            marginEnd: 20,
            marginStart: 20,
            padding: 30,
            height: 130,
            width: 240,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: Color.secondary,
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <Text style={{
                        color: Color.white,
                        fontFamily: Font.regular,
                        textAlign: 'start',
                    }}>{item}</Text>
        </View>
        )
        
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
               
            }}>
               <Text 
               style={styles.infotext} >
                    I do stuff on my computer that makes life better 😄
                    
                </Text>
                <FlatList
                showsHorizontalScrollIndicator={false}
                style={{
                    flex: 1,
                    maxWidth: 400
                }}
                    data={me}
                    heigth={200}
                    horizontal
                    renderItem={this.renderMe}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infotext: {
      color: Color.white,
      fontFamily: Font.regular,
      textAlign: 'start',
      fontSize: 18,
      padding: 20,
    },
    info: {
      flex: 1,
      justifyContent: 'center',
    }
  });