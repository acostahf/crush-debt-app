import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import SingleInput from "@/components/inputs/singleInput";
import useOnboardingStore from "@/store/onboardingStore";

const Time = () => {
	const { data, setFreeHours, setWorkingHours, setFamilyAndFriendsHours } =
		useOnboardingStore();
	const { workingHours, freeHours, familyAndFriendsHours } = data;

	return (
		<View className={styles.container}>
			<Text className={styles.title}>Time Allocation</Text>

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

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-2xl font-bold mb-6`,
};

export default Time;
