import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard({ product, onAdd }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.price}>₹ {product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={{ color: "#fff" }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "600",
    marginVertical: 5,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
