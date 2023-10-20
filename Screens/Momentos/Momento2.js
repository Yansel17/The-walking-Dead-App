import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import YouTubePlayer from 'react-native-youtube-iframe';

const Momento2 = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <YouTubePlayer
            height={200}
            play={false}
            videoId={'BV9R_yZj8OM'}
        />
        <Card.Title
          style={styles.title}
          title="Carl pierde un ojo"
          subtitle="Temporada 6, Episodio 9"
        />
        <Paragraph style={styles.paragraph}>
            Carl es disparado accidentalmente en el ojo por Ron Anderson, quien intenta dispararle a Rick.
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

export default Momento2;
