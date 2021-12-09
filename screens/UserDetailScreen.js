import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
  const initialState = {
    id: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("UsersList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Eliminar producto",
      "¿Estás seguro de eliminar este producto?",
      [
        { text: "Si", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateUser = async () => {
    const userRef = firebase.db.collection("users").doc(user.id);
    await userRef.set({
      nombre: user.nombre,
      categoria: user.categoria,
      descripcion: user.descripcion,
      precio: user.precio,

    });
    setUser(initialState);
    props.navigation.navigate("UsersList");
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        
        <TextInput
          placeholder="Nombre"
          
          style={styles.inputGroup}
          value={user.nombre}
          onChangeText={(value) => handleTextChange(value, "nombre")}
        />
      </View>
      <View>
        <TextInput
        
          placeholder="Categoria"
          style={styles.inputGroup}
          value={user.categoria}
          onChangeText={(value) => handleTextChange(value, "categoria")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Descripción"
          
          style={styles.inputGroup}
          value={user.descripcion}
          onChangeText={(value) => handleTextChange(value, "descripcion")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Precio"
          
          style={styles.inputGroup}
          value={user.precio}
          onChangeText={(value) => handleTextChange(value, "precio")}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Eliminar"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Actualizar" onPress={() => updateUser()} color="#efc4b1" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
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
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#efc4b1",
  },
  btn: {
    marginBottom: 7,
  },
});

export default UserDetailScreen;
