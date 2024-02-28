import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import SingleInput from "@/components/buttons/inputs/singleInput";

const Time = () => {
	const [workingHours, setWorkingHours] = useState("");
	const [freeHours, setFreeHours] = useState("");
	const [familyAndFriendsHours, setFamilyAndFriendsHours] = useState("");

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">Time Allocation</Text>

			<SingleInput
				set={setWorkingHours}
				value={workingHours}
				label="Hours Spent Working"
			/>

			<SingleInput
				set={setFreeHours}
				value={freeHours}
				label="Hours of Free Time"
			/>

			<SingleInput
				set={setFamilyAndFriendsHours}
				value={familyAndFriendsHours}
				label="Time with Friends & Family"
			/>

			<NextStepBtn />
		</View>
	);
};

export default Time;
