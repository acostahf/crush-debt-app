import { View } from "react-native";
import "../styles/global.css";
import { Slot } from "expo-router";

export default function Layout() {
	return (
		<View className="flex justify-center align-middle w-full h-full">
			<Slot />
		</View>
	);
}
