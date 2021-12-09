import React, { useState, useEffect } from "react";
import { Button, StyleSheet,Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from "../database/firebase";
import { SocialIcon } from 'react-native-elements'
import { Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  
  return (
    
    <ScrollView>


      <Button   
      
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Registrar producto" type="home" color="#664043"
      />
      
      <Button
        onPress={() => props.navigation.navigate("UsersList")}
        title="Productos registrados" color="#F03687"
      />
      <Button
        onPress={() => props.navigation.navigate("realidadaumentada")}
        title="Realidad aumentada" color="#664043"
      />
      <Button
        onPress={() => Linking.openURL("https://maps.app.goo.gl/r8zvKUaJtWQdAFGQA")}
        title="Ver mi ubicación" color="#F03687"
      />
      <Button
        onPress={() => props.navigation.navigate("acercade")}
        title="Nosotros" color="#664043"
        
      />
     
  
     <SocialIcon
  button
  title='Redactar correo'
  
  onPress={() => Linking.openURL("https://www.gmail.com/mail/help/intl/es/about.html?iframe")}
  type='envelope'
/>

<SocialIcon
onPress={() => Linking.openURL("https://www.facebook.com/marco.bautista.93/")}
  title='Facebook'
  button
  type='facebook'
/>



<SocialIcon
  button
  title='Instagram'
  light
  onPress={() => Linking.openURL("https://www.instagram.com/mary_cuatianquiz/?hl=es-la")}
  type='instagram'
/>

<SocialIcon
  button
  title='You Tube'
  
  onPress={() => Linking.openURL("https://www.youtube.com/watch?v=6snDDoeV3W0&t=23s")}
  type='youtube'
/>




<SocialIcon

  button
  

  onPress={() => props.navigation.navigate("informacionsistema")}
  title="Información del sistema" color="#664043"
  
  type='soundcloud'
/>



    </ScrollView>

    
    
  );
};

export default UserScreen;
