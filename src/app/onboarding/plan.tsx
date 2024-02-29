import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";

const Plan = () => {
	const { data, setPlan } = useOnboardingStore();
	const { plan } = data;

	const methods = ["Snowball Method", "Avalanche Method"];

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">Choose Your Plan</Text>

			<View className="flex-row justify-center items-center">
				{methods.map((method, i) => (
					<Pressable
						key={`method ${i}`}
						className={`w-40 h-40 m-2 justify-center items-center rounded-lg border-2 ${
							plan === method
								? "bg-blue-400 border-blue-400"
								: "bg-blue-200 border-transparent"
						}`}
						onPress={() => setPlan(method)}
					>
						<Text className="text-center px-2">{method}</Text>
					</Pressable>
				))}
			</View>

			<NextStepBtn />
		</View>
	);
};

export default Plan;
