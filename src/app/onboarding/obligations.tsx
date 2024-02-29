import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/squareBtn";

const Obligations = () => {
	const { data, setObligations } = useOnboardingStore();
	const { obligations } = data;

	const options = ["1", "2", "3", "4", ">=5"];

	return (
		<View className={styles.container}>
			<Text className={styles.title}>Household Obligations</Text>
			<Text className={styles.title}>
				How many dependents do you have?
			</Text>

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
