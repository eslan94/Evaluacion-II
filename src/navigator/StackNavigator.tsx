import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Imagen1Screen } from '../screens/Imagen1Screen';
import { Imagen2Screen } from '../screens/Imagen2Screen';
import { MayorScreen } from '../screens/MayorScreen';
import { MenorScreen } from '../screens/MenorScreen';

export type RootStackParamList ={
    HomeScreen:undefined,
    Imagen1Screen:undefined,
    Imagen2Screen:undefined,
    MayorScreen:undefined,
    MenorScreen:undefined
}



const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{title:'Home'}} component={HomeScreen}/>
      <Stack.Screen name="Imagen1Screen" options={{title:'Imagen 1'}} component={Imagen1Screen}/>
      <Stack.Screen name="Imagen2Screen" options={{title:'Imagen 2'}} component={Imagen2Screen}/>
      <Stack.Screen name="MayorScreen" options={{title:'Mayor o Igual que'}} component={MayorScreen}/>
      <Stack.Screen name="MenorScreen" options={{title:'Menor o Igual que'}} component={MenorScreen}/>
    </Stack.Navigator>
  );
}