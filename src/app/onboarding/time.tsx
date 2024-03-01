import { View, Text } from "react-native";
import React from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import SingleInput from "@/components/inputs/SingleInput";
import useOnboardingStore from "@/store/onboardingStore";
import { en } from "@/constants";

const Time = () => {
	const { data, setFreeHours, setWorkingHours, setFamilyAndFriendsHours } =
		useOnboardingStore();
	const { workingHours, freeHours, familyAndFriendsHours } = data;
	const { title, inputs } = en.onboarding.time;

	return (
		<View className={styles.container}>
			<Text className={styles.title}>{title}</Text>
			<SingleInput
				set={setWorkingHours}
				value={workingHours}
				label={inputs.working}
			/>
			<SingleInput
				set={setFreeHours}
				value={freeHours}
				label={inputs.free}
			/>
			<SingleInput
				set={setFamilyAndFriendsHours}
				value={familyAndFriendsHours}
				label={inputs.familyAndFriends}
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
