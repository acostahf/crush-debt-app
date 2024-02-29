import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/SquareBtn";

const Plan = () => {
	const { data, setPlan } = useOnboardingStore();
	const { plan } = data;

	const methods = ["Snowball Method", "Avalanche Method"];

	return (
		<View className={styles.container}>
			<Text className={styles.title}>Choose Your Plan</Text>

			<SquareBtn arr={methods} item={plan} setItem={setPlan} />
			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-2xl font-bold mb-6`,
};

export default Plan;
