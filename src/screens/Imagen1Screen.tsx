import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { stylesGeneral } from '../theme/AppTheme';

export const Imagen1Screen = () => {
  return (
    <View style={stylesGeneral.container}>
      <Text style={stylesGeneral.title}>Moto Pulsar</Text>
      <View>
        <Image style={styles.img} 
          source={require('../images/pulsar.png')}/>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  img:{
    width:400,
    height:300,
    borderRadius:15,
  }
})