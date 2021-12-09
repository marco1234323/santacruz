import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Linking } from 'react-native';


const url="https://google.com"


export default function App() {
  return (
    
    <View style={styles.container}>

<Image  style={{height: 100, width: 360}} source={require('../assets/guerreros.png')} />
<Text style={{fontWeight: "bold",color:'#000000'}}>
📲 Requisitos técnicos 💻
</Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
📱 Sistema operativo Android superior a 5.0 Lollipop ✅

</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>

🍎 Sistema operativo iOS superior al 12.4.5 ✅

</Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>

🌐 Conexión a internet ✅
</Text>


<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>

</Text>
<Text style={{fontWeight: "bold",color:'#000000'}}>
📲 Créditos 💻
</Text>


<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
👨🏻‍💻 Marco Antonio Vazquez Bautista 🖥️

</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>

👩🏼‍💻 Marycruz Pérez Cuatianquiz 🖥️

</Text>
<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>

👩🏻‍💻 Johana Pérez Sánchez 🖥️
</Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>


</Text>

<Text style={{fontWeight: "bold",color:'#000000'}}>
📲 Agradecimientos 💻
</Text>

<Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 5}}>
👩‍🏫 📚 ¡Gracias a mis maestros por su dedicación, compromiso y por mostrarnos las capacidades que se escondían dentro de nosotros! 👨🏼‍🏫 🎇

</Text>




<Image  style={{height: 150, width: 360}} source={require('../assets/copi.png')} />



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