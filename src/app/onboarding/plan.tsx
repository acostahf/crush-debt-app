import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/SquareBtn";
import { en } from "@/constants";

const Plan = () => {
	const { data, setPlan } = useOnboardingStore();
	const { plan } = data;
	const { title, methods } = en.onboarding.plan;

	return (
		<View className={styles.container}>
			<Text className={styles.title}>{title}</Text>

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
