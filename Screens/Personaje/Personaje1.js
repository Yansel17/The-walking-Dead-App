import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const Personaje1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/Personajes/Rick.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Andrew Lincoln</Text>
      <Text style={styles.description}>
        En la historia, Rick Grimes es un exsheriff que se despierta en un
        hospital después de entrar en coma. Descubre rápidamente que el mundo ha
        sido devastado por un apocalipsis zombie. Con el tiempo, se convierte en
        el líder de un grupo de supervivientes que luchan por mantenerse con
        vida en un mundo plagado de muertos vivientes.{"\n"}
      </Text>
      <Text style={styles.description}>
        Rick es conocido por su fuerte sentido de la moral, su determinación y
        su capacidad para tomar decisiones difíciles para proteger a su grupo.
        Su personaje atraviesa un arco de desarrollo significativo a lo largo de
        la serie, pasando de ser un hombre en busca de su familia a convertirse
        en un líder carismático y comprometido con la supervivencia de su
        comunidad.{"\n"}
      </Text>
      <Text style={styles.description}>
        incluyendo conflictos con otros grupos de supervivientes, amenazas de
        zombis y dilemas morales. Su personaje es un ejemplo de cómo los
        individuos pueden evolucionar y adaptarse en situaciones extremas, y su
        A lo largo de la serie, Rick enfrenta numerosos desafíos, historia es un
        elemento central en el mundo postapocalíptico de "The Walking Dead".
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

export default Personaje1;
