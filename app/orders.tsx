import { View, Text, FlatList } from "react-native";

const ORDERS = [
  { id: "1", item: "iPhone 14", price: 799 },
  { id: "2", item: "OnePlus 12", price: 599 },
];

export default function Orders() {
  return (
    <View style={{ padding:20 }}>
      <Text style={{ fontSize:22, marginBottom:10 }}>
        Order History
      </Text>

      <FlatList
        data={ORDERS}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <Text style={{ marginBottom:8 }}>
            {item.item} — ₹ {item.price}
          </Text>
        )}
      />
    </View>
  );
}
