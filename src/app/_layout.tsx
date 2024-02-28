import { View } from "react-native";
import "../styles/global.css";
import { Stack } from "expo-router";

export default function Layout() {
	return <Stack screenOptions={{ headerTransparent: true, headerTitle: "" }} />;
}
