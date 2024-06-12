import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../config/styles";

export default function NewsScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      
      "https://newsapi.org/v2/everything?q=arts&from=2024-05-12&sortBy=publishedAt&apiKey=f545052b8c4b448d9078a9162eeb0100")
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            
            <Text style={styles.titulo}>{item.title}</Text> <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
