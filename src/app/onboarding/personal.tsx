import { View, Text, TextInput } from "react-native";
import React from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import SingleInput from "@/components/inputs/SingleInput";
import useOnboardingStore from "@/store/onboardingStore";
import { en } from "@/constants";

const Personal = () => {
	const { data, setUsername, setAge } = useOnboardingStore();
	const { username, age } = data;
	const { title, inputs } = en.onboarding.personal;

	return (
		<View className={styles.container}>
			<Text className={styles.title}>{title}</Text>
			<SingleInput
				set={setUsername}
				value={username}
				label={inputs.username}
			/>
			<SingleInput set={setAge} value={age} label={inputs.age} />

			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-2xl font-bold mb-4`,
};

export default Personal;
