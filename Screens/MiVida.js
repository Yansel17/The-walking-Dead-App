import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title } from "react-native-paper";
import YouTubePlayer from "react-native-youtube-iframe";

const MiVida = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <YouTubePlayer
          style={styles.videoId}
          width={300}
          height={200}
          play={true}
          videoId="3tWWS2kxnwY"
        />
        <Title style={styles.title}>¿Por qué The Walking Dead?</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: "95%",

    height: 300,
    margin: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: "#000",
  },
  videoId: {
    width: 200,
    height: 200,
    margin: 10,
  },
});

export default MiVida;
