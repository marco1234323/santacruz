import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Linking } from 'react-native';


const url="https://google.com"


export default function App() {
  return (
    
    <View style={styles.container}>

<Image  style={{height: 100, width: 360}} source={require('../assets/nombrepan.png')} />
     
   <Text style={{fontWeight: "bold",color:'#000000'}}>
   Quienes somos </Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
Somos una empresa dedicada a la producción y distribución de productos de panadería de alta calidad y sabor, nuestros productos son vendidos a través de un punto de venta físico, ofrecemos una gran variedad, para satisfacer las necesidades de los consumidores. Fundada en 2018 en el estado de Tlaxcala.
</Text>
<Text style={{fontWeight: "bold",color:'#000000'}}>
Visión</Text>


<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
Ofrecer a nuestros clientes productos de alta calidad que satisfagan las necesidades de cada cliente, nos identificamos por ofrecer un excelente servicio y calidad de productos hechos a mano.
</Text>
      
<Text style={{fontWeight: "bold",color:'#000000'}}>
Misión</Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
Ser reconocidos a nivel local por nuestra gran variedad de productos de alta calidad y sabor, logrando posicionamiento en la mente del cliente marcando una gran diferencia.
</Text>
<Text style={{fontWeight: "bold",color:'#000000'}}>
Valores</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 1}}>
	Integridad personal</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 1}}>
Responsabilidad</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 1}}>
Respeto</Text>

<Image  style={{height: 150, width: 360}} source={require('../assets/nenes.png')} />



      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});