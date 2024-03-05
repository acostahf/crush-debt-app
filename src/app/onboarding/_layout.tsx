import { Stack } from "expo-router";

export default () => {
	return (
		<Stack screenOptions={{ headerTransparent: true, headerTitle: "" }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="goals" />
			<Stack.Screen name="obligations" />
			<Stack.Screen name="personal" />
			<Stack.Screen name="plan" />
			<Stack.Screen name="time" />
			<Stack.Screen name="register" />
		</Stack>
	);
};
