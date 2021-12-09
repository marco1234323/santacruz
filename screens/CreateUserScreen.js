import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, nombre) => {
    setState({ ...state, [nombre]: value });
  };

  const saveNewUser = async () => {
    if (state.nombre === "") {
      alert("Por favor llena los campos");
      
      
    } else {

      try {
        await firebase.db.collection("users").add({
          nombre: state.nombre,
          categoria: state.categoria,
          descripcion: state.descripcion,
          precio: state.precio,

        });

        props.navigation.navigate("Productos_registrados");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>

      
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre del producto"
          onChangeText={(value) => handleChangeText(value, "nombre")}
          value={state.nombre}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Categoría"
        
          onChangeText={(value) => handleChangeText(value, "categoria")}
          value={state.categoria}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Descripción"
          onChangeText={(value) => handleChangeText(value, "descripcion")}
          value={state.descripcion}
        />
      </View>

      
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Precio"
          onChangeText={(value) => handleChangeText(value, "precio")}
          value={state.precio}
        />
      </View>

      <View>
        <Button title="Agregar producto" onPress={() => saveNewUser()} color="#F03687"/>
      </View>


      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#efc4b1",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
