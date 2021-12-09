import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Linking } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold",color:'#000000'}}>
   MARCADOR DE REALIDAD AUMENTADA </Text>
       <Image  style={{height: 300, width: 380}} source={require('../assets/marcador.jpeg')} />
     
      <Text style={{color: 'blue'}}
       onPress={() => Linking.openURL('https://webxr.run/WrX6yGXEZw0b2')}>
  Pulsa aquí para visualizar la Realidad aumentada
</Text>
 
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