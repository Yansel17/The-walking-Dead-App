import React from "react";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import MyCart from "./components/Portada/Card";
import Temporadas from "./components/Portada/Temporadas";
import Personajes from "./Screens/Personajes";
//Personajes Screens
import Personaje1 from "./components/Personaje/Personaje1";
import Personaje2 from "./components/Personaje/Personaje2";
import Personaje3 from "./components/Personaje/Personaje3";
//Momentos Screens
import Momentos from "./Screens/Momentos";
import Momento1 from "./components/Momentos/Momento1";
import Momento2 from "./components/Momentos/Momento2";
import Momento3 from "./components/Momentos/Momento3";
//
import Acerca from "./Screens/Acerca";
import MiVida from "./Screens/MiVida";
import Contratame from "./Screens/Contratame";

const Stacks = createNativeStackNavigator();

function MyStackPersonajes() {
  return (
    <Stacks.Navigator initialRouteName="Personajes">
      <Stacks.Screen
        name="Personajes"
        component={Personajes}
        options={{
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />

      <Stacks.Screen
        name="Personaje1"
        component={Personaje1}
        options={{
          headerRight: () => (
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={require("./assets/Personajes/RickS.jpg")}
            />
          ),
          title: "Rick Grimes",
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />

      <Stacks.Screen
        name="Personaje2"
        component={Personaje2}
        options={{
          headerRight: () => (
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={require("./assets/Personajes/DarylS.jpg")}
            />
          ),
          title: "Daryl Dixon",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />

      <Stacks.Screen
        name="Personaje3"
        component={Personaje3}
        options={{
          headerRight: () => (
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={require("./assets/Personajes/CarolS.jpg")}
            />
          ),
          title: "Carol Peletier",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
    </Stacks.Navigator>
  );
}

function MyStackPortada() {
  return (
    <Stacks.Navigator initialRouteName="Portada">
      <Stacks.Screen
        name="Portada"
        component={MyCart}
        options={{
          headerShown: false,
        }}
      />
      <Stacks.Screen
        name="Temporadas"
        component={Temporadas}
        options={{
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />
    </Stacks.Navigator>
  );
}

function MyStackMomentos() {
  return (
    <Stacks.Navigator initialRouteName="Momentos">
      <Stacks.Screen
        name="Momentos"
        component={(props) => <Momentos navigator={props.navigation} />}
        options={{
          title: "MEJORES MOMENTOS",
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />

      <Stacks.Screen
        name="Momento1"
        component={Momento1}
        options={{
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />

      <Stacks.Screen
        name="Momento2"
        component={Momento2}
        options={{
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />

      <Stacks.Screen
        name="Momento3"
        component={Momento3}
        options={{
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
        }}
      />
    </Stacks.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Portada"
      screenOptions={{ tabBarActiveTintColor: "#e74c3c" }}
    >
      <Tab.Screen
        name="Portada"
        component={MyStackPortada}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Personajes"
        component={MyStackPersonajes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Acerca"
        component={Acerca}
        options={{
          title: "Acerca de la serie",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#e74c3c",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="info" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Momentos"
        component={MyStackMomentos}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="play" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Mi Vida"
        component={MiVida}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Contratame"
        component={Contratame}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="envelope" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Navigation;
