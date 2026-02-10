import { View, Text, FlatList, Button } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <View style={{ padding: 15 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.title}</Text>
            <Text>
              ₹ {item.price} × {item.quantity}
            </Text>
            <Button
              title="Remove"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
      />

      {cart.length > 0 && (
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          Total: ₹ {total.toFixed(2)}
        </Text>
      )}
    </View>
  );
}
