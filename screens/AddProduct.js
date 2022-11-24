import React, { useState } from "react";
import { TextInput, View, Pressable, Text, Image } from 'react-native';


const AddProduct = () => {
    const [input, setInput] = useState({productName:"", productTitle:"", description:"", price:""})

    const handleChange = (name, text) => {
      console.log(name, text)
        setInput(prev => ({ ...prev, [name]: text}));
      };


        // const addProduct = async () => {
        //   await axios
        //     .post("http://10.0.2.2:8080/api/product/post", {
        //       body: JSON.stringify(input),
        //     })

        // };

    const addProduct = async () => {
        console.log("input:", input);
        await fetch("http://10.0.2.2:8080/api/product/post", {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        })
      };

  return (
    <View>
        <TextInput
        placeholder='Product Name'
        value={input.productName}
        onChangeText={(text) => handleChange("productName", text)}/>
        <TextInput
        placeholder='Product Title'
        value={input.productTitle}
        onChangeText={(text) => handleChange("productTitle", text)}/>
        <TextInput
        placeholder='Description'
        value={input.description}
        onChangeText={(text) => handleChange("description", text)}/>
        <TextInput
        placeholder='Price'
        value={input.price}
        onChangeText={(text) => handleChange("price", text, )}/>
        <Pressable
        onPress={addProduct}>
            <Text>Submit</Text>
        </Pressable>
    </View>
    
  )
}

export default AddProduct;
