import { Tabs, Redirect } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function TabLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="explore"
        options={{ title: "Cart" }}
      />
    </Tabs>
  );
}
