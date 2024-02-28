import { Link, Redirect, Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
	return (
		<View className="flex gap-7 h-full w-full items-center justify-center">
			<Stack.Screen
				options={{
					headerRight: () => <Link href={"/login"}>Login</Link>,
				}}
			/>

			<Link href={"/onboarding"}>Create Account</Link>
		</View>
	);
}
