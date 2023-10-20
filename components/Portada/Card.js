import { Card, Title, Button } from "react-native-paper";
import React from "react";
import { StyleSheet, View } from "react-native";

const url =
  "https://e0.pxfuel.com/wallpapers/825/229/desktop-wallpaper-the-walking-dead-ideas-the-walking-dead-dead-walking-walking-dead-season-9.jpg";

const MyCart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: url }}
          style={styles.cardCover}
        />
        <Card.Content>
          <Title style={styles.title}>The Walking Dead</Title>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Temporadas")}
            mode="contained"
          >
            Ver Temporadas
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7", // Cambia a un gris más claro
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "95%",
    height: "85%",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  cardCover: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "80%",
  },
  title: {
    fontSize: 24, 
    marginTop: 10,
    fontWeight: "bold",
    color: "#e74c3c", // Cambia el color a un tono de rojo más oscuro
  },
  button: {
    marginTop: 20,
    borderRadius: 20, // Hace que los bordes del botón sean más redondeados
    backgroundColor: "#e74c3c", // Cambia el color del botón
    width: "100%",
  },
});

export default MyCart;
