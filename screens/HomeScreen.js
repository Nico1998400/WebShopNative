import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ItemMenu from "../components/ItemMenu";

const  HomeScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);


  function loadProduct(){
    axios
    .get('http://10.0.2.2:8080/api/product').then((res) => {
    setProduct(res.data);
    console.log(res.data);
  })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      loadProduct();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (


    <View style={styles.container}>
    <SafeAreaView style={{height:'100%', marginTop: 30}}>
    <Header />
    <SearchBar />
    <MenuButtons navigation={navigation}/>
    <ItemMenu />
    </SafeAreaView>
   </View>




    // <View styles={styles.container}>
    //   <Pressable onPress={() => nav.navigate('addproduct')}>
    //     <Text>Add Product</Text>
    //     </Pressable>
    //     {product.map((item, index) => (
    //       <View key={index}>
    //         <Text>ProductID: {item.productID}</Text>
    //         <Text>ProductName: {item.productName}</Text>
    //         <Text>productTitle: {item.productTitle}</Text>
    //         <Text>ProductDesciption: {item.description}</Text>
    //         <Text>Price: {item.price}</Text>
    //         <Text>Photo: {item.photo}</Text>
    //       </View>
    //     ))}
    // </View>
  )
}

export default HomeScreen;



const styles = StyleSheet.create({
  container:{
      backgroundColor: "#1c1c1c",
      padding: 20
     

  }
})