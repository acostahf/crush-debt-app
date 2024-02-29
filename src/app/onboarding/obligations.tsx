import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";

const Obligations = () => {
	const { data, setObligations } = useOnboardingStore();
	const { obligations } = data;

	const options = ["1", "2", "3", "4", ">=5"];

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">
				Household Obligations
			</Text>
			<Text className="text-lg mb-6">
				How many dependents do you have?
			</Text>

			<View className="flex-row flex-wrap justify-center items-center">
				{options.map((option, index) => (
					<Pressable
						key={index}
						className={`w-1/3 h-20 m-2 bg-blue-200 justify-center items-center rounded-lg ${
							obligations === option ? "bg-blue-400" : ""
						}`}
						onPress={() => setObligations(option)}
					>
						<Text className="text-xl font-semibold">{option}</Text>
					</Pressable>
				))}
			</View>

			<NextStepBtn />
		</View>
	);
};

export default Obligations;
