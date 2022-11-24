import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function ItemMenu() {
  const [product, setProduct] = useState([]);
  const nav = useNavigation();

  let image =
    "https://cdn.pocket-lint.com/r/s/970x/assets/images/157961-phones-review-hands-on-samsung-galaxy-z-fold-3-review-image1-coz70vermc-jpg.webp";

  function GetItems() {
    axios.get("http://10.0.2.2:8080/api/product").then((res) => {
      setProduct(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      GetItems();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.row}
        onPress={() => nav.navigate("ProductScreen", { product })}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          {product.map((item, index) => (
            <View key={index} style={styles.column}>
              <Text style={styles.text}>{item.productName}</Text>
              <Text style={styles.text}>{item.productTitle}</Text>
              <Text style={styles.text}>{item.description}</Text>
              <Text style={styles.text}>{item.price}</Text>
            </View>
          ))}
        </View>
      </Pressable>
    </View>
  );
}


export default ItemMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
});
