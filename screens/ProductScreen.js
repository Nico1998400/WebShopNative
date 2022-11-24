import React from 'react'
import { View} from 'react-native'

const ProductScreen = ( {route} ) => {

  console.log(route.params.product)
  const { productTitle } = route.params.product;

  const mapItems = (product) => {
    
  }


  return (
    <View>
      
    </View>
  )
}

export default ProductScreen;