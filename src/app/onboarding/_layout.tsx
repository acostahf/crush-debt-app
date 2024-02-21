import { Stack, Tabs } from "expo-router";

export default () => {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="welcome" />
			<Stack.Screen name="goals" />
			<Stack.Screen name="obligations" />
			<Stack.Screen name="personal" />
			<Stack.Screen name="plan" />
			<Stack.Screen name="time" />
		</Stack>
	);
};
