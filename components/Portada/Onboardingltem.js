import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import { Card } from "react-native-paper";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Image
          source={item.imagen}
          style={[styles.imagen, { width: width - 40 }]} 
          resizeMode="contain"
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  card: {
    height: 500,
    margin: 20,
    marginTop: 20,
    alignItems: "center",
    elevation: 4,
    backgroundColor: "#fff",
    paddingBottom: 10,
    backgroundColor: "#e74c3c", 
  },
  imagen: {
    flex: 0.99,
    width: '10%',
  },
  titulo: {
    fontWeight: "800",
    marginBottom: 10,
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
  },
});

export default OnboardingItem;
