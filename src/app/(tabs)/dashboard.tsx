import useAppStore from "@/store/appStore";
import React from "react";
import { Text, View } from "react-native";

const dashboard = () => {
	const { user } = useAppStore();

	return (
		<View>
			<Text>dashboard</Text>
			<Text>{user}</Text>
		</View>
	);
};

export default dashboard;
