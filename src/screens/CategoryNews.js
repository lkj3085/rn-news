import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CategoryNews() {
  const route = useRoute();
  const navigation = useNavigation();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      "https://saurav.tech/NewsAPI/everything/bbc-news.json" +
        route.params.category +
        "/in.json"
    )
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
        setNews(output.articles);
      })
      .catch((err) => err);
  };

  return (
    <View style={styles.root}>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "800",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        헤드라인
      </Text>
      <View style={{ width: "100%", height: "100%" }}>
        <FlashList
          estimatedItemSize={200}
          data={news}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("NewsDetails", {
                    data: item,
                  })
                }
                style={styles.root2}
              >
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <View style={styles.root3}>
                  <Text style={styles.textStyle}>
                    {item.title ? item.title.substring(0, 30) + "..." : "..."}
                  </Text>
                  <Text style={styles.textStyle2}>
                    {item.description
                      ? item.description.substring(0, 35) + "..."
                      : "..."}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#000",
  },
  root2: {
    borderColor: "#fff",
    borderWidth: 1,
    width: "90%",
    height: 100,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  root3: {
    padding: 15,
  },
  image: {
    width: 100,
    height: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textStyle: {
    color: "#fff",
    width: "45%",
    fontSize: 16,
    fontWeight: "700",
  },
  textStyle2: {
    color: "#fff",
    width: "40%",
    fontSize: 12,
    marginTop: 10,
  },
});
