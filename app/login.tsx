import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "./context/AuthContext";


export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:"center", padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:15 }}>Login</Text>

      <TextInput
        placeholder="Enter username"
        value={name}
        onChangeText={setName}
        style={{ borderWidth:1, padding:10, marginBottom:10 }}
      />

      <Button
        title="Login"
        onPress={() => {
          login(name);
          router.replace("/(tabs)");
        }}
      />
    </View>
  );
}
