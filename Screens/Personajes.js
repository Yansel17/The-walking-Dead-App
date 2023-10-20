import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import characters from "../components/Personaje/PersonajesData";

const Personajes = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {characters.map((character, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title
            title={character.name}
            titleStyle={styles.cardTitle}
            titleNumberOfLines={2}
          />
          {character.image && (
            <Card.Cover
              source={character.image}
              style={styles.cardCover}
              resizeMode="cover"
            />
          )}
          <Button
            style={styles.button}
            onPress={() => navigation.navigate(character.route)}
            mode="contained"
          >
            Ver más
          </Button>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#e74c3c",
    fontSize: 16,
    borderRadius: 10,
    margin: 15,
  },
  card: {
    width: 200,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardCover: {
    width: 150,
    height: 150,
    padding: 10,
    borderRadius: 100,
  },
  cardTitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
});

export default Personajes;
