import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const Personaje2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/Personajes/Daryl.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Norman Reedus</Text>
      <Text style={styles.description}>
        Daryl Dixon es un hábil cazador y rastreador con un fuerte instinto de
        supervivencia. Aunque al principio de la serie es un hombre solitario y
        taciturno, con el tiempo se convierte en un valioso miembro del grupo de
        supervivientes liderado por Rick Grimes. Daryl es conocido por su
        destreza con el arco y las flechas, así como por su capacidad para
        enfrentarse a amenazas tanto vivas como muertas en el mundo
        postapocalíptico infestado de caminantes.
        {"\n"}
      </Text>
      <Text style={styles.description}>
        A lo largo de la serie, Daryl Dixon experimenta un significativo
        desarrollo de personaje, pasando de ser un individuo reservado a formar
        fuertes lazos con otros miembros del grupo y demostrando su lealtad y
        valentía en numerosas situaciones peligrosas. Su relación con su hermano
        mayor, Merle Dixon, también desempeña un papel importante en su
        desarrollo y en la trama general de la serie.
        {"\n"}
      </Text>
      <Text style={styles.description}>
        Daryl Dixon se ha convertido en un ícono de la cultura pop y es
        apreciado por los fanáticos de "The Walking Dead" por su carácter fuerte
        y su habilidad para sobrevivir en un mundo devastado por los no muertos.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Personaje2;
