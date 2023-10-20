import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const Personaje3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/Personajes/Carol.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Melissa McBride</Text>
      <Text style={styles.description}>
        A lo largo de la serie, Carol Peletier experimenta un notable desarrollo
        y evolución de personaje. Comienza como una mujer tímida y abusada que
        ha sufrido abusos en su matrimonio y lucha por encontrar su voz y
        confianza en un mundo postapocalíptico plagado de zombis. Con el tiempo,
        Carol se convierte en una de las supervivientes más formidables y
        adaptativas del grupo.
        {"\n"}
      </Text>
      <Text style={styles.description}>
        Carol es conocida por su habilidad para adaptarse a situaciones
        difíciles y su disposición para hacer lo que sea necesario para proteger
        a su familia y su comunidad. A lo largo de la serie, toma decisiones
        difíciles y a menudo moralmente ambiguas en nombre de la supervivencia.
        {"\n"}
      </Text>
      <Text style={styles.description}>
        El personaje de Carol Peletier es apreciado por su evolución, fortaleza
        y complejidad. Su historia es un ejemplo de cómo los personajes pueden
        cambiar drásticamente en un mundo postapocalíptico y cómo las
        circunstancias extremas pueden revelar aspectos ocultos de su
        personalidad.
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

export default Personaje3;
