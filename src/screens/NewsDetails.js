import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function NewsDetails() {
  const route = useRoute();

  return (
    <View style={styles.root}>
      <StatusBar hidden={true} />
      <Image
        source={{ uri: route.params.data.urlToImage }}
        style={styles.image}
      />
      <Text style={styles.textStyle}>{route.params.data.title}</Text>
      <Text style={styles.textStyle2}>{route.params.data.description}</Text>
      <Text style={styles.textStyle2}>{route.params.data.publishedAt}</Text>
      <Text style={styles.textStyle2}>{route.params.data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    marginTop: 10,
    alignSelf: "center",
    width: "94%",
  },
  textStyle2: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
    alignSelf: "center",
    width: "94%",
  },
});
