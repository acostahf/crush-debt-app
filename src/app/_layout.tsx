import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";
import { Slot, Stack } from "expo-router";

export default function Layout() {
	return (
		<SafeAreaProvider>
			<Slot />
		</SafeAreaProvider>
	);
}
