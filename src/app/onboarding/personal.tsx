import { View, Text, TextInput } from "react-native";
import React from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import SingleInput from "@/components/inputs/SingleInput";
import useOnboardingStore from "@/store/onboardingStore";

const Personal = () => {
	const { data, setUsername, setAge } = useOnboardingStore();
	const { username, age } = data;

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-4">Personal Information</Text>
			<SingleInput set={setUsername} value={username} label="Username" />
			<SingleInput set={setAge} value={age} label="Age" />

			<NextStepBtn />
		</View>
	);
};

export default Personal;
