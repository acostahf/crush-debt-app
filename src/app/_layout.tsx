import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";
import { Stack } from "expo-router";

export default function Layout() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerTransparent: true, headerTitle: "" }} />
		</SafeAreaProvider>
	);
}
