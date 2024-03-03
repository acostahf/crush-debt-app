import { signout } from "@/services/auth";
import useAppStore from "@/store/appStore";
import React from "react";
import { Button, Text, View } from "react-native";

const dashboard = () => {
	const { user } = useAppStore();

	const handleSignOut = async () => {
		try {
			await signout();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View>
			<Text>dashboard</Text>
			<Text>{user}</Text>
			<Button title="logout" onPress={handleSignOut} />
		</View>
	);
};

export default dashboard;
