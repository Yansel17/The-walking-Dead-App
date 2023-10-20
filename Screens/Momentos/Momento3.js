import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import YouTubePlayer from 'react-native-youtube-iframe';

const Momento3 = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <YouTubePlayer
            height={200}
            play={false}
            videoId={'L08gFrMKU2Y'}
        />
        <Card.Title
          style={styles.title}
          title="Muerte de Glenn y Abraham"
          subtitle="Temporada 7, Episodio 1"
        />
        <Paragraph style={styles.paragraph}>
          Negan mata a Glenn y Abraham con su bate de béisbol cubierto de alambre de púas llamado Lucille.
        </Paragraph>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
    padding: 15,
  },
});

export default Momento3;
