import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={onPress}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        backgroundColor:'#578cd3',
        padding:15,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:15
    },

    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:22,
        fontWeight:'bold'
    }
})