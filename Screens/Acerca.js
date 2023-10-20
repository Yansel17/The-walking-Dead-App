import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Acerca = () => {
  const serieInfo = {
    titulo: "The Walking Dead",
    temporadas: 11,
    creador: "Frank Darabont",
  };

  const url =
    "https://e0.pxfuel.com/wallpapers/955/850/desktop-wallpaper-walking-dead-dont-open-dead-inside-t-the-walking-dead.jpg";

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover
          resizeMode="contain"
          style={styles.cardCover}
          source={{ uri: url }}
        />
        <Text style={styles.titulo}>{serieInfo.titulo}</Text>
        <Text style={styles.texto}>Temporadas: {serieInfo.temporadas}</Text>
        <Text style={styles.texto}>Creador: {serieInfo.creador}</Text>
        <Text style={styles.subtitulo}>Sinopsis</Text>
        <Text style={styles.texto}>
          La trama se desarrolla en un mundo posapocalíptico que ha sido
          devastado por una epidemia de zombis. La serie sigue a un grupo
          diverso de sobrevivientes, liderados por varios personajes
          principales, mientras luchan por mantenerse con vida en un mundo lleno
          de muertos vivientes y amenazas humanas.
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  cardCover: {
    height: 200,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    width: 230,
    borderBottomWidth: 3,
    borderBottomColor: "#e74c3c",
  },
  texto: {
    fontSize: 16,
    marginBottom: 3,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    width: 95,
    borderBottomWidth: 3,
    borderBottomColor: "#e74c3c",
  },
});

export default Acerca;
