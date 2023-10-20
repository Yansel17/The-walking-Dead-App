import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";

const Momentos = ({ navigator }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Cover style={styles.cover} 
        source={require("../../assets/Momentos/Latregua.jpg")}
        />
        <Card.Title
          style={styles.title}
          title="La tregua que sale mal"
        />
        <Button 
          style={styles.button}
          mode="contained"
          onPress={() => navigator.navigate("Momento1")}
        >
          Ver detalles
        </Button>

      </Card>

      <Card style={styles.card}>
        <Card.Cover style={styles.cover} 
        source={require("../../assets/Momentos/PierdeOjo.jpg")}
        />
        
        <Card.Title
          style={styles.title}
          title="Carl pierde un ojo"
        />
         <Button 
          style={styles.button}
          mode="contained"
          onPress={() => navigator.navigate("Momento2")}
        >
          Ver detalles
        </Button>
      </Card>

      <Card style={styles.card}>
        <Card.Cover style={styles.cover} 
        source={require("../../assets/Momentos/MuerteGlenn.jpg")}
        />
        <Card.Title
          style={styles.title}
          title="Muerte de Glenn y Abraham"
        />
         <Button 
          style={styles.button}
          mode="contained"
          onPress={() => navigator.navigate("Momento3")}
        >
          Ver detalles
        </Button>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    card: {
        width: "100%",
        marginBottom: 10,
    },
    cover: {
        height: 200,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        marginTop: 5,
        fontSize: 40,
        backgroundColor: "#e74c3c",
    },

});

export default Momentos;
