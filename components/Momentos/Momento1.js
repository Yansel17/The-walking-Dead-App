import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import YouTubePlayer from 'react-native-youtube-iframe';

const Momento1 = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <YouTubePlayer
            height={200}
            play={false}
            videoId={'zIsCh4H7auY'}
        />
        <Card.Title
          style={styles.title}
          title="La tregua que sale mal"
          subtitle="Temporada 6, Episodio 9"
        />
        <Paragraph style={styles.paragraph}>
            Rick y su grupo se encuentran con un grupo de sobrevivientes de la comunidad de Hilltop. 
            El grupo de Rick se entera de que los Salvadores, un grupo de bandidos, 
            han estado extorsionando a Hilltop durante la mitad de sus suministros en intercambio de "protección" contra los caminantes.
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

export default Momento1;
