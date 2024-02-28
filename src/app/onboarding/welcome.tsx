import NextStepBtn from "@/components/buttons/nextStepBtn";
import React from "react";
import { View, Text } from "react-native";

const Welcome = () => {
	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-4xl font-bold text-center mb-6">Welcome!</Text>
			<Text className="text-lg text-center mb-8">
				We're excited to have you onboard. You'll be guided through a few
				steps to complete your onboarding process.
			</Text>
			<NextStepBtn />
		</View>
	);
};

export default Welcome;
