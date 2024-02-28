import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import SingleInput from "@/components/buttons/inputs/singleInput";

const Personal = () => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

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
