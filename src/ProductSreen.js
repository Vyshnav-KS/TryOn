import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProductScreen = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <Text style={styles.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat diam vel urna feugiat sagittis. Nulla facilisi. Vivamus eget
          blandit nibh, at faucibus velit.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ProductScreen;
