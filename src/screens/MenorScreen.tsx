import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { stylesGeneral } from '../theme/AppTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'

interface NumerosForm{
    num1:string,
    num2:string
  }

export const MenorScreen = () => {

    const [numeros, setNumeros] = useState<NumerosForm>({
        num1: '',
        num2: ''
    });
  
    const [resultado, setResultado] = useState('')
  
    const handlerChangeText = (name:string, value:string) =>{
      setNumeros((prevNumeros) => ({
        ...prevNumeros,
        [name]: value
      }));
    }
    
    const compararNumeros = () => {
      const numero1 = parseInt(numeros.num1);
      const numero2 = parseInt(numeros.num2);
  
    
      if (numero1 < numero2) {
        setResultado(`El número ${numero1} es menor que ${numero2}`);
      } else if(numero2 < numero1) {
        setResultado(`El número ${numero2} es menor que ${numero1}`);
      }else if(numero1==numero2 || numero2==numero1){
        setResultado(`Los números son iguales`);
      }else{
        setResultado("Campos Vacíos!!! Ingresa nuevamente")
      }
  
    };

  return (
    <View style={stylesGeneral.container}>
    
    <View style={styles.contentForm}>
        <Text style={stylesGeneral.titleForm}> Ingrese un número </Text>
        <InputComponent name='num1' 
                        onChangeText={handlerChangeText}/>
        <Text style={stylesGeneral.titleForm}> Ingrese otro número</Text>
        <InputComponent name='num2' 
                        onChangeText={handlerChangeText}/>
    </View>
    <View style={styles.contentBtn}>
        <ButtonComponent title='<=' onPress={compararNumeros}/>
    </View>
    <Text style={stylesGeneral.titleForm}>{resultado}</Text>
</View>
  )
}

const styles=StyleSheet.create({
    contentForm:{
      bottom:30
    },
  
    contentBtn:{
      height:75,
      width:150
    }
  })