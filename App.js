import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";


// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import acercade from "./screens/acercade";
import Productos_registrados from "./screens/Productos_registrados";
import realidadaumentada from "./screens/realidadaumentada";
import ubicacion from "./screens/ubicacion";
import informacionsistema from "./screens/informacionsistema";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#c44812",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

<Stack.Screen

        name="Productos_registrados"
        component={Productos_registrados}
     
        options={{ title: "Panificadora Santa Cruz" }}
      />

      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Productos registrados" }}
      />
      
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Agregar nuevo producto" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Editar producto" }}
      />
       <Stack.Screen
        name="acercade"
        component={acercade}
        options={{ title: "Nosotros" }}
      />


<Stack.Screen
        name="realidadaumentada"
        component={realidadaumentada}
        options={{ title: "Realidad Aumentada" }}
      />
      <Stack.Screen
        name="ubicacion"
        component={ubicacion}
        options={{ title: "Ubicación" }}
      />


<Stack.Screen
        name="informacionsistema"
        component={informacionsistema}
        options={{ title: "Información del sistema" }}
      />


    </Stack.Navigator>

    
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
