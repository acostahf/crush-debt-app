import NextStepBtn from "@/components/buttons/nextStepBtn";
import React from "react";
import { View, Text } from "react-native";

const Welcome = () => {
	return (
		<View className={styles.container}>
			<Text className={styles.title}>Welcome!</Text>
			<Text className={styles.subtitle}>
				We're excited to have you onboard. You'll be guided through a few
				steps to complete your onboarding process.
			</Text>
			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-4xl font-bold text-center mb-6`,
	subtitle: `text-lg text-center mb-8`,
};

export default Welcome;
