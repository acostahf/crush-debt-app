import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/SquareBtn";
import { en } from "@/constants";

const Obligations = () => {
	const { data, setObligations } = useOnboardingStore();
	const { obligations } = data;
	const { title, subtitle, options } = en.onboarding.obligations;

	return (
		<View className={styles.container}>
			<Text className={styles.title}>{title}</Text>
			<Text className={styles.title}>{subtitle}</Text>

			<SquareBtn
				arr={options}
				item={obligations}
				setItem={setObligations}
			/>

			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-2xl font-bold mb-6`,
	selectors: `flex-row justify-center items-center`,
	squares: `w-40 h-40 m-2 justify-center items-center rounded-lg border-2`,
	active: `bg-blue-400 border-blue-400`,
	inactive: `bg-blue-200 border-transparent`,
	squareText: `text-center px-2`,
};

export default Obligations;
