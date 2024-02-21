import { Link, Redirect, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
	return (
		<View>
			<Link href={"/onboarding/welcome"}>Welocme</Link>
		</View>
	);
}
