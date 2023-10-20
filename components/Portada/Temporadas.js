import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Slides from "./Slides";
import OnboardingItem from "./Onboardingltem";

const Temporadas = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FOFOFO",
  },
});

export default Temporadas;
