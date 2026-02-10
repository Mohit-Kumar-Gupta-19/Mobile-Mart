import { useAuth } from "../context/AuthContext";
import { Redirect } from "expo-router";

import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "../context/CartContext";




export default function HomeScreen() {
  const { user } = useAuth();

  if (!user) return <Redirect href="/login" />;
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <View style={{ padding: 15 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAdd={() => addToCart(item)}
          />
        )}
      />
    </View>
  );
}
