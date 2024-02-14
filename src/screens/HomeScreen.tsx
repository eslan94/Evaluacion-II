import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { stylesGeneral } from '../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};


export const HomeScreen = ({navigation}:any) => {
  return (
    <View style={stylesGeneral.container}>
        <Text style={stylesGeneral.title}>Bienvenido</Text>
        <View style={styles.btnContainer}>
            <ButtonComponent onPress={()=>navigation.navigate('Imagen1Screen')} title='Imagen 1'/>
            <ButtonComponent onPress={()=>navigation.navigate('Imagen2Screen')} title='Imagen 2'/>
        </View>
        <View style={styles.btnContainer}>
            <ButtonComponent onPress={()=>navigation.navigate('MayorScreen')} title='>='/>
            <ButtonComponent onPress={()=>navigation.navigate('MenorScreen')} title='<='/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
    }
})